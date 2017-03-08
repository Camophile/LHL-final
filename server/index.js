import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import sass from 'node-sass';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';

import users from './routes/users';
import auth from './routes/auth';
import events from './routes/events';
import groceries from './routes/groceries';
import packages from './routes/packages';
import shelters from './routes/shelters';
import boxes from './routes/boxes';
import shelter_form from './routes/ShelterForm';
import notifications from './routes/notifications';

import { getScheduledPackages } from './models/package';
import { getAllGroceries } from './models/grocery';
import { getAllShelters } from './models/shelter' //// deleted `deliveryValidate`
import { getAllBoxes } from './models/box';
import { getAllGroceryAvailabilities } from './models/groceryAvailability';


let app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/events', events);
app.use('/api/groceries', groceries);
app.use('/api/package', packages);
app.use('/api/shelter-form', shelter_form);
app.use('/api/shelters', shelters);
app.use('/api/boxes', boxes);
app.use('/api/notifications', notifications);

const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}));
app.use(webpackHotMiddleware(compiler));

app.get('/default_state.js', (req, res) => {
  //TODO: Figure out the type of user and preload only necessary stuff
  Promise.all([
    getAllGroceries(),
    getAllShelters(),
    getAllBoxes(),
    getScheduledPackages()
  ]).then(([groceries, shelters, boxes, packages]) => {
    var state = {
      groceries,
      shelters,
      boxes,
      packages
    };
    res.set('Content-Type', 'application/javascript');
    res.send(`var __DEFAULT_STATE = ${JSON.stringify(state)};`);
  });
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(3000, () => console.log('Running on localhost:3000'));

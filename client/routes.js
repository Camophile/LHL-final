import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App';
import Landing from './components/Landing';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';
import PackagePage from './components/package/PackagePage';
import GroceriesPage from './components/groceries/GroceriesPage';
import SheltersPage from './components/shelters/SheltersPage';
import BoxesPage from './components/boxes/BoxesPage';
import DashboardPage from './components/dashboard/DashboardPage';
import ShelterPage from './components/shelterForm/ShelterPage';

import requireAuth from './utils/requireAuth';

export const routeTo = (route) => {
  return browserHistory.push(route);
}

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Landing} />
    <Route path="signup" component={SignupPage} />
    <Route path="login" component={LoginPage} />
    <Route path="package" component={PackagePage} />
    <Route path="groceries" component={GroceriesPage} />
    <Route path="shelters" component={SheltersPage} />
    <Route path="boxes" component={BoxesPage} />
    <Route path="dashboard" component={DashboardPage} />
    <Route path="shelter-confirm" component={ShelterPage} />
  </Route>
)

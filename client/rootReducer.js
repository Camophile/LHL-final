import { combineReducers } from 'redux';

import flashMessages from './reducers/flashMessages';
import auth from './reducers/auth';
import selectedGrocery from './reducers/selectedGrocery';
import selectedShelter from './reducers/selectedShelter';
import groceries from './reducers/groceries';
import shelters from './reducers/shelters';
import boxes from './reducers/boxes';
import currentDelivery from './reducers/currentDelivery';
import produceReducer from './reducers/produceReducer';
import dairyReducer from './reducers/dairyReducer';
import bakedGoodsReducer from './reducers/bakedGoodsReducer';
import redeemReducer from './reducers/redeemReducer';
import pointsReducer from './reducers/pointsReducer';
import userPointsReducer from './reducers/userPointsReducer';
import shelterConfirm from './reducers/shelterConfirmReducer';

export default combineReducers({
  flashMessages,
  auth,
  groceries,
  selectedGrocery,
  shelters,
  selectedShelter,
  boxes,
  currentDelivery,
  packages: shelterConfirm,
  produce: produceReducer,
  dairy: dairyReducer,
  bakedGoods: bakedGoodsReducer,
  redeem: redeemReducer,
  points: pointsReducer,
  userPoints: userPointsReducer
});
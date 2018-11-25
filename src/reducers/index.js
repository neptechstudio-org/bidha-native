import { combineReducers } from 'redux';
import drawerReducer from './drawerReducer';
import astrologrReducer from './astrologerReducer';
import messageReducer from './messageReducer';

export default combineReducers({
  drawer: drawerReducer,
  astrologers: astrologrReducer,
  message: messageReducer,
});

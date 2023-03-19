
import profileReducer from "./profile/reducer";
import { combineReducers } from 'redux';
import personalInfosReducer from "./user/reducer";

export default combineReducers({
  profile: profileReducer,
  user: personalInfosReducer
})
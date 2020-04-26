import {combineReducers} from "redux";
import {authReducer} from "../Auth/reducer";
import {registrationReducer} from "../Registration/reducer";

export default combineReducers({
	auth: authReducer,
	registration: registrationReducer
});

import { combineReducers } from "redux";
import listMovieReducer from "../containers/HomeTemplate/ListMoviePage/Modules/reducer";
import detailMovieReducer from "../containers/HomeTemplate/DetailMoviePage/Modules/reducer";
import authReducer from "../containers/AdminTemplate/AuthPage/modules/reducer";

const rootReducer = combineReducers({
    listMovieReducer,
    detailMovieReducer,
    authReducer,
});

export default rootReducer;
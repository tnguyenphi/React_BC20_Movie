import { combineReducers } from "redux";
import listMovieReducer from "containers/HomeTemplate/ListMoviePage/Modules/reducer";
import detailMovieReducer from "containers/HomeTemplate/DetailMoviePage/Modules/reducer";
import authReducer from "containers/AdminTemplate/AuthPage/modules/reducer";
import BaiTapGameBauCuaReducers from "../BaiTapTongHop/redux/reducers/BaiTapGameBauCuaReducers";
import addUserReducer from "containers/AdminTemplate/AddUserPage/modules/reducer";
const rootReducer = combineReducers({
  listMovieReducer,
  detailMovieReducer,
  authReducer,
  BaiTapGameBauCuaReducers,
  addUserReducer,
});

export default rootReducer;

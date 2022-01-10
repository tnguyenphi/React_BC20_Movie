import { combineReducers } from "redux";
import listMovieReducer from "../containers/HomeTemplate/ListMoviePage/Modules/reducer";
import detailMovieReducer from "../containers/HomeTemplate/DetailMoviePage/Modules/reducer";
import authReducer from "../containers/AdminTemplate/AuthPage/modules/reducer";
import BaiTapGameBauCuaReducers from "../BaiTapTongHop/redux/reducers/BaiTapGameBauCuaReducers";

const rootReducer = combineReducers({
  listMovieReducer,
  detailMovieReducer,
  authReducer,
  BaiTapGameBauCuaReducers,
});

export default rootReducer;

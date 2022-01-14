import * as AcionType from "./constants";
import axios from "axios";
import api from "../../../../utils/apiUtils";

export const actFetchDetailMovie = (id) => {
  return (dispatch) => {
    dispatch(actDetailMovieRequest());
    // axios({
    //   url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
    //   method: "GET",
    // })
    api
      .get(`QuanLyPhim/LayThongTinPhim?MaPhim=${id}`)
      .then((result) => {
        dispatch(actDetailMovieSuccess(result.data.content));
      })
      .catch((err) => {
        dispatch(actDetailMovieFailed(err));
      });
  };
};

const actDetailMovieRequest = () => {
  return {
    type: AcionType.DETAIL_MOVIE_REQUEST,
  };
};

const actDetailMovieSuccess = (data) => {
  return {
    type: AcionType.DETAIL_MOVIE_SUCCESS,
    payload: data,
  };
};

const actDetailMovieFailed = (err) => {
  return {
    type: AcionType.DETAIL_MOVIE_FAILED,
    payload: err,
  };
};

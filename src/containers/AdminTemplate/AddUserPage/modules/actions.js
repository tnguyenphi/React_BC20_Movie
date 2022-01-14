import * as ActionType from "./constants";
import axios from "axios";
import api from "../../../../utils/apiUtils";

export const actAddUser = (user) => {
  let accessToken = "";

  // if (localStorage.getItem("UserAdmin")) {
  //   accessToken = JSON.parse(localStorage.getItem("UserAdmin")).accessToken;
  // }

  return (dispatch) => {
    dispatch(actAddUserRequest());
    // axios({
    //   url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
    //   method: "POST",
    //   data: user,
    //   headers: {
    //     Authorization: `Bearer ${accessToken}`,
    //   },
    // })
    api
      .post("QuanLyNguoiDung/ThemNguoiDung", user)
      .then((result) => {
        dispatch(actAddUserSuccess(result.data.content));
      })
      .catch((error) => {
        dispatch(actAddUserFailed(error));
      });
  };
};

const actAddUserRequest = () => {
  return {
    type: ActionType.ADD_USER_FAILED,
  };
};
const actAddUserSuccess = (data) => {
  return {
    type: ActionType.ADD_USER_SUCCESS,
    payload: data,
  };
};
const actAddUserFailed = (error) => {
  return {
    type: ActionType.ADD_USER_FAILED,
    payload: error,
  };
};

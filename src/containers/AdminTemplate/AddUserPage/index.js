import React, { useState } from "react";
import { actAddUser } from "./modules/actions";
import { useDispatch } from "react-redux";

export default function AddUserPage() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    email: "",
    soDt: "",
    maNhom: "GP01",
    maLoaiNguoiDung: "KhachHang",
  });

  const handleOnchange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const addUser = (event) => {
    event.preventDefault();
    // console.log(state);
    dispatch(actAddUser(state));
  };
  return (
    <form className="container" onSubmit={addUser}>
      <h3>Them Nguoi DUng</h3>
      <div className="form-group">
        <span> Tai Khoan </span>
        <input
          className="form-control"
          name="taiKhoan"
          onChange={handleOnchange}
        />
      </div>
      <div className="form-group">
        <span>Mat Khau </span>
        <input
          className="form-control"
          name="matKhau"
          onChange={handleOnchange}
        />
      </div>
      <div className="form-group">
        <span>Ho Ten</span>
        <input
          className="form-control"
          name="hoTen"
          onChange={handleOnchange}
        />
      </div>
      <div className="form-group">
        <span>Email</span>
        <input
          className="form-control"
          name="email"
          onChange={handleOnchange}
        />
      </div>
      <div className="form-group">
        <span>So Dien Thoai</span>
        <input className="form-control" name="soDt" onChange={handleOnchange} />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-success">
          Them Nguoi Dung
        </button>
      </div>
    </form>
  );
}

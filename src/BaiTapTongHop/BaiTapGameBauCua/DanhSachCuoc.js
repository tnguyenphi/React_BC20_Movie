import React from "react";
import QuanCuoc from "./QuanCuoc";
import { useSelector } from "react-redux";

export default function DanhSachCuoc(props) {
  const DanhSachCuoc = useSelector(
    (state) => state.BaiTapGameBauCuaReducers.danhSachCuoc
  );
  // console.log(DanhSachCuoc);

  const renderDanhSachCuoc = () => {
    return DanhSachCuoc.map((item, index) => {
      return (
        <div className="col-4" key={index}>
          <QuanCuoc quanCuoc={item} />
        </div>
      );
    });
  };
  return <div className="row mt-5">{renderDanhSachCuoc()}</div>;
}

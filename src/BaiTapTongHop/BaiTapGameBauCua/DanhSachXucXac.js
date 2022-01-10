import React from "react";

export default function DanhSachXucXac() {
  return (
    <div className="mt-5 ml-5">
      <div
        className="bg-white"
        style={{ width: 300, height: 300, borderRadius: "150px" }}
      >
        <div className="row">
          <div className="col-12 text-center" style={{ marginTop: "75px" }}>
            <img
              style={{ width: 50 }}
              src="./img/BaiTapGameBauCua/bau.png"
              alt=""
            />
          </div>
          <div className="col-6 text-right mt-3">
            <img
              className="mr-3"
              style={{ width: 50 }}
              src="./img/BaiTapGameBauCua/bau.png"
              alt=""
            />
          </div>
          <div className="col-6 mt-3">
            <img
              className="ml-3"
              style={{ width: 50 }}
              src="./img/BaiTapGameBauCua/bau.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

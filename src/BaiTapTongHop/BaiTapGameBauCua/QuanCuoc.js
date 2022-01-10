import React from "react";

export default function QuanCuoc() {
  return (
    <div className="mt-3">
      <img src="./img/BaiTapGameBauCua/bau.png" style={{ width: 200 }} />
      <br />
      <br />
      <div
        className=" bg-success mt-2 pd-2 text-center"
        style={{ borderRadius: "10px", width: 200 }}
      >
        <button className="btn btn-danger mr-3">+</button>
        <span className="mt-2" style={{ color: "yellow", fontSize: "25px" }}>
          1000
        </span>
        <button className="btn btn-danger ml-3">-</button>
      </div>
    </div>
  );
}

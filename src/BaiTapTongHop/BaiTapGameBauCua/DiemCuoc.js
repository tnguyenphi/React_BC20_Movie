import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function DiemCuoc(props) {
  const dispatch = useDispatch();
  const tongDiem = useSelector(
    (state) => state.BaiTapGameBauCuaReducers.tongDiem
  );
  return (
    <div>
      <h3
        className="text-center display-4"
        style={{ color: "#58FA58", marginTop: 0 }}
      >
        GAME BẦU CUA CYBER LEARN
      </h3>
      <div className="text-center mt-5">
        <span
          style={{ fontSize: "20px", borderRadius: "5%" }}
          className="p-3 text-white bg-danger"
        >
          Tiền Thưởng:{" "}
          <span className="text-warning">{tongDiem.toLocaleString()}$</span>
        </span>
      </div>
      <div className="text-center mt-5">
        <button
          onClick={() => {
            dispatch({
              type: "CHOI_LAI",
            });
          }}
          style={{ fontSize: "15px", borderRadius: "5%", border: "none" }}
          className="p-2 text-white bg-success"
        >
          Chơi Lại
        </button>
      </div>
    </div>
  );
}

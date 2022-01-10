import React from "react";
import { useDispatch } from "react-redux";
import { useSpring, animated } from "react-spring";

export default function QuanCuoc(props) {
  const dispatch = useDispatch();

  const [propsUseSpring, set, stop] = useSpring(() => {
    return {
      to: { scale: 0.75 },
      from: { scale: 1 },
      reset: true,
    };
  });
  const [propsUseSpringDecrease, setDecrease, stopDecrease] = useSpring(() => {
    return {
      to: { scale: 0.75 },
      from: { scale: 1 },
      reset: true,
    };
  });

  const { quanCuoc } = props;

  return (
    <div className="mt-3">
      <img src={quanCuoc.hinhAnh} style={{ width: 200 }} />
      <br />
      <br />
      <div
        className=" bg-success mt-2 pd-2 text-center"
        style={{ borderRadius: "10px", width: 200 }}
      >
        <animated.button
          className="btn btn-danger mr-3"
          style={{
            transform: propsUseSpring.scale.interpolate(
              (scale) => `scale(${scale})`
            ),
          }}
          onClick={() => {
            set({ scale: 0.75 });
            set({ scale: 1 });
            dispatch({
              type: "DAT_CUOC_BAU_CUA",
              quanCuoc,
              tangGiam: true,
            });
          }}
        >
          +
        </animated.button>
        <span className="mt-2" style={{ color: "yellow", fontSize: "25px" }}>
          {quanCuoc.diemCuoc}
        </span>
        <animated.button
          style={{
            transform: propsUseSpringDecrease.scale.interpolate(
              (scale) => `scale(${scale})`
            ),
          }}
          onClick={() => {
            setDecrease({ scale: 0.75 });
            setDecrease({ scale: 1 });
            dispatch({
              type: "DAT_CUOC_BAU_CUA",
              quanCuoc,
              tangGiam: false,
            });
          }}
          className="btn btn-danger ml-3"
        >
          -
        </animated.button>
      </div>
    </div>
  );
}

import React, { Fragment } from "react";
import { useSpring, animated } from "react-spring";

export default function XucXac(props) {
  let { xucXacItem } = props;

  const [propsDice, set] = useSpring(() => ({
    to: {
      xyz: [360, 360, 360],
    },
    from: {
      xyz: [0, 0, 0],
    },
    config: {
      duration: 500,
    },
    reset: true,
  }));
  return (
    <Fragment>
      <animated.div
        style={{
          transform: propsDice.xyz.interpolate(
            (x, y, z) => `rotate(${x}deg rotate(${y}deg rotate(${z}deg)`
          ),
        }}
        className="scene"
      >
        <div className="cube">
          <img
            className="ml-3 cube__face front"
            style={{ width: 50 }}
            src={xucXacItem.hinhAnh}
            alt=""
          />
          <img
            className="ml-3 cube__face back"
            style={{ width: 50 }}
            src="./img/BaiTapGameBauCua/bau.png"
            alt=""
          />
          <img
            className="ml-3 cube__face left"
            style={{ width: 50 }}
            src="./img/BaiTapGameBauCua/ga.png"
            alt=""
          />
          <img
            className="ml-3 cube__face right"
            style={{ width: 50 }}
            src="./img/BaiTapGameBauCua/ca.png"
            alt=""
          />
          <img
            className="ml-3 cube__face top"
            style={{ width: 50 }}
            src="./img/BaiTapGameBauCua/tom.png"
            alt=""
          />
          <img
            className="ml-3 cube__face bottom"
            style={{ width: 50 }}
            src="./img/BaiTapGameBauCua/nai.png"
            alt=""
          />
        </div>
      </animated.div>
    </Fragment>
  );
}

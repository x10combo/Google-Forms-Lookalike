import React, { useState } from "react";
import Particles from "react-particles-js";

const particleParams = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    size: {
      value: 3,
    },
    move: {
      speed: 2,
    },
    line_linked: {
      enable: false,
    },
  },
};

const draggableSlider = () => {
  const [position, setPosition] = useState(0);
  const [like, setLike] = useState(false);

  const handleDrag = (e) => {
    setPosition(e.clientX);
  };

  const handleDragEnd = () => {
    if (position >= window.innerWidth - 100) {
      setLike(true);
    }
  };

  return (
    <div className="slider">
      <div
        className="slider-element"
        style={{ left: `${position}px` }}
        draggable="true"
        onDragStart={(e) => e.preventDefault()}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
      />
      {like && <div className="like-icon" />}
      {like && <Particles params={particleParams} />}
    </div>
  );
};

export default draggableSlider;

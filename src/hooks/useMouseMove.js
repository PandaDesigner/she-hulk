import { useState, useEffect } from "react";

const initialState = {
  x: 0,
  y: 0,
};

export const useMousePosition = () => {
  const [position, setPosition] = useState(initialState);
  useEffect(() => {
    const handleMouseMove = (e) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const x = 7 - e.pageX * (14 / h);
      const y = -8 + e.pageY * (16 / w);
      setPosition({ x, y });
    };
    const handleTouchMove = (e) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const x = 7 - e.touches[0].pageX * (14 / h);
      const y = -8 + e.touches[0].pageY * (20 / w);
      setPosition({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      setPosition(initialState);
      return;
    };
  }, []);

  //console.log({ ...position });

  return { position };
};

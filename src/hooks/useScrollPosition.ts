import { useEffect, useState } from "react";

export function useScrollPosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = () => {
      setPosition({
        x: window.scrollX,
        y: window.scrollY,
      });
    };

    updatePosition();
    window.addEventListener("scroll", updatePosition, { passive: true });

    return () => {
      window.removeEventListener("scroll", updatePosition);
    };
  }, []);

  return position;
}

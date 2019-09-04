import { useEffect, useState } from "react";

export const useScrollY = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const setFromEvent = () => {
      setPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", setFromEvent);

    return () => {
      window.removeEventListener("scroll", setFromEvent);
    };
  }, []);

  return position;
};

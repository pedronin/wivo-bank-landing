import { useState, useEffect } from "react";

export const useScrollY = () => {
  const [scrollY, setScrollY] = useState(window.scrollX || window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollX || window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollY;
}
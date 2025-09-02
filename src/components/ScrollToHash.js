import { useEffect } from "react";

export const ScrollToHash = () => {
  useEffect(() => {
    setTimeout(() => {
      const hash = window.location.hash;

      if (hash) {
        const el = document.querySelector(hash);

        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 0)
  }, []);

  return null;
};

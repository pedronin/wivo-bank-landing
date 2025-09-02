import { useState, useEffect } from 'react';

export const useWindowWidth = (handler, immediate = true) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (immediate) {
      handler?.(window.innerWidth)
    }

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      handler?.(window.innerWidth)
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [immediate, handler]);

  return windowWidth;
}
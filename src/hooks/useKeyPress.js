import { useEffect } from "react";

export const useKeyPress = (targetKey, handler) => {
  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.key === targetKey) {
        handler();
      };
    }

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    }
  }, [targetKey, handler]);
};
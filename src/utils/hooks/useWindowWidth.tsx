import { useState, useEffect } from 'react';

function getWindowWidth() {
  if(typeof window === 'undefined') {
    return -1;
  }

  const { innerWidth: width } = window;
  return width
}

export default function useWindowWidth() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowWidth());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowWidth());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
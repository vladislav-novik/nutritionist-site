import { useState, useEffect } from 'react';

function getViewportWidth() {
  if(typeof window === 'undefined') {
    return -1;
  }

  const { innerWidth: width } = window;
  return width
}

function getViewportByWidth(width: number) {
  if (width < 640) {
    return 'Mobile';
  } else if (width < 1024) {
    return 'Tablet';
  } else  {
    return 'Desktop';
  }
}

export type Viewport = 'Mobile' | 'Tablet' | 'Desktop';

export default function useViewportType() {
  const [viewportType, setViewportType] = useState<Viewport>(getViewportByWidth(getViewportWidth()));

  useEffect(() => {
    const handleResize = () => setViewportType(getViewportByWidth(getViewportWidth()));

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return viewportType;
}

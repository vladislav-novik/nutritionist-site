import useViewportType from './useViewportWidth'

export default function useResponsiveMargin() {
  const viewportType = useViewportType();

  let margin;
  switch (viewportType) {
    case 'Mobile':
      margin = '-20px';
      break;
    case 'Tablet':
      margin = '-80px';
      break;
    case 'Desktop':
      margin = '-100px';
      break;
    default:
      margin = '0px';
  }

  return margin;
}
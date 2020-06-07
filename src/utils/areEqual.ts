import shallowDiffers from './shallowDiffers';

interface GeneralObject {
  [key: string]: any;
}

// Custom comparison function for React.memo().
// It knows to compare individual style props and ignore the wrapper object.
// See https://reactjs.org/docs/react-api.html#reactmemo
export default function areEqual(prevProps: GeneralObject, nextProps: GeneralObject): boolean {
  const { style: prevStyle, ...prevRest } = prevProps;
  const { style: nextStyle, ...nextRest } = nextProps;

  return !shallowDiffers(prevStyle, nextStyle) && !shallowDiffers(prevRest, nextRest);
}

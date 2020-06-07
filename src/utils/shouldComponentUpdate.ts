import areEqual from './areEqual';
import shallowDiffers from './shallowDiffers';

interface GeneralObject {
  [key: string]: any;
}

// Custom shouldComponentUpdate for class components.
// It knows to compare individual style props and ignore the wrapper object.
// See https://reactjs.org/docs/react-component.html#shouldcomponentupdate
export default function shouldComponentUpdate(
  nextProps: GeneralObject,
  nextState: GeneralObject,
): boolean {
  return !areEqual(this.props, nextProps) || shallowDiffers(this.state, nextState);
}

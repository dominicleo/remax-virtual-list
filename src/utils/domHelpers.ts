let size = -1;

export function getScrollbarSize(recalculate = false): number {
  if (size === -1 || recalculate) {
    const div = document.createElement('div');
    const style = div.style;
    style.width = '50px';
    style.height = '50px';
    style.overflow = 'scroll';
    (document.body as HTMLBodyElement).appendChild(div);
    size = div.offsetWidth - div.clientWidth;
    (document.body as HTMLBodyElement).removeChild(div);
  }

  return size;
}

export type RTLOffsetType = 'negative' | 'positive-descending' | 'positive-ascending';

let cachedRTLResult: RTLOffsetType | null = null;

export function getRTLOffsetType(recalculate = false): RTLOffsetType {
  if (cachedRTLResult === null || recalculate) {
    const outerDiv = document.createElement('div');
    const outerStyle = outerDiv.style;
    outerStyle.width = '50px';
    outerStyle.height = '50px';
    outerStyle.overflow = 'scroll';
    outerStyle.direction = 'rtl';

    const innerDiv = document.createElement('div');
    const innerStyle = innerDiv.style;
    innerStyle.width = '100px';
    innerStyle.height = '100px';

    outerDiv.appendChild(innerDiv);

    (document.body as HTMLBodyElement).appendChild(outerDiv);

    if (outerDiv.scrollLeft > 0) {
      cachedRTLResult = 'positive-descending';
    } else {
      outerDiv.scrollLeft = 1;
      if (outerDiv.scrollLeft === 0) {
        cachedRTLResult = 'negative';
      } else {
        cachedRTLResult = 'positive-ascending';
      }
    }

    (document.body as HTMLBodyElement).removeChild(outerDiv);

    return cachedRTLResult;
  }

  return cachedRTLResult;
}

const hasNativePerformanceNow =
  typeof performance === 'object' && typeof performance.now === 'function';

const now = hasNativePerformanceNow ? () => performance.now() : () => Date.now();

export type TimeoutID = {
  id: number;
};

let lastTime = 0;

export const raf =
  typeof requestAnimationFrame !== 'undefined' && requestAnimationFrame !== null
    ? requestAnimationFrame
    : (callback: (time: number) => void) => {
        const NOW = now();
        const nextTime = Math.max(lastTime + 16, NOW);
        return setTimeout(() => {
          callback((lastTime = nextTime));
        }, nextTime - NOW);
      };

export const caf =
  typeof cancelAnimationFrame !== 'undefined' && cancelAnimationFrame !== null
    ? cancelAnimationFrame
    : clearTimeout;

export function cancelTimeout(timeoutID: TimeoutID) {
  caf(timeoutID.id);
}

export function requestTimeout(callback: () => any, delay: number): TimeoutID {
  const start = now();

  function tick() {
    if (now() - start >= delay) {
      callback.call(null);
    } else {
      timeoutID.id = raf(tick) as number;
    }
  }

  const timeoutID: TimeoutID = {
    id: raf(tick) as number,
  };

  return timeoutID;
}

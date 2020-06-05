import React from "react";
import { View } from "remax/one";

export const isNativePlatform = process.env.REMAX_PLATFORM !== "web";

export { View };

export const ScrollView: React.FC<any> = React.forwardRef((props, ref) => {
  const { isGrid, layout, style, onScroll, ...rest } = props;
  function handleScroll(event: any) {
    if (typeof onScroll === "function") {
      onScroll(
        isNativePlatform
          ? {
              ...event,
              currentTarget: {
                ...event.detail,
                clientWidth: style?.width,
                clientHeight: style?.height
              }
            }
          : event
      );
    }
  }

  let element: any = View;

  if (process.env.REMAX_PLATFORM === "ali") {
    element = require("remax/ali").ScrollView;
  } else if (process.env.REMAX_PLATFORM === "wechat") {
    element = require("remax/wechat").ScrollView;
  } else if (process.env.REMAX_PLATFORM === "toutiao") {
    element = require("remax/toutiao").ScrollView;
  }

  return React.createElement(element, {
    ref,
    style,
    onScroll: handleScroll,
    ...rest,
    ...(isNativePlatform
      ? {
          scrollY: isGrid || layout === "vertical",
          scrollX: isGrid || layout === "horizontal"
        }
      : {})
  });
});

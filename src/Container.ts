import React from "react";
import View from "remax/one";
import { ScrollView as AliScrollView } from "remax/ali";
import { ScrollView as WechatScrollView } from "remax/wechat";
import { ScrollView as ToutiaoScrollView } from "remax/toutiao";

const Container: React.FC<any> = React.forwardRef((props, ref) => {
  const { isGrid, style, layout, onScroll, ...rest } = props;

  let element: any = View;

  // @ts-ignore
  if (process.env.REMAX_PLATFORM === "ali") {
    element = AliScrollView;
  }

  // @ts-ignore
  if (process.env.REMAX_PLATFORM === "wechat") {
    element = WechatScrollView;
  }

  // @ts-ignore
  if (process.env.REMAX_PLATFORM === "toutiao") {
    element = ToutiaoScrollView;
  }

  const handleScroll = (event: any) => {
    console.log(event);
    onScroll({
      ...event,
      currentTarget: {
        ...event.detail,
        clientWidth: style.width,
        clientHeight: style.height,
      },
    });
  };

  return React.createElement(element, {
    ref,
    style,
    scrollY: isGrid || layout === "vertical",
    scrollX: isGrid || layout === "horizontal",
    onScroll: handleScroll,
    ...rest,
  });
});

export default Container;

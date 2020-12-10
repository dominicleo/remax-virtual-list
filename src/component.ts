import React from 'react';
import { ScrollViewProps as AliScrollViewProps } from 'remax/ali';
import { View } from 'remax/one';
import { ScrollViewProps as ToutiaoScrollViewProps } from 'remax/toutiao';
import { ScrollViewProps as WechatScrollViewProps } from 'remax/wechat';

export const isNativePlatform = ['ali', 'wechat', 'toutiao'].includes(
  process.env.REMAX_PLATFORM as string,
);

export type ScrollViewProps = AliScrollViewProps | WechatScrollViewProps | ToutiaoScrollViewProps;

export { View };

export const ScrollView: React.ForwardRefExoticComponent<any> = React.forwardRef((props, ref) => {
  const { isGrid, layout, style, onScroll, ...rest } = props;

  function handleScroll(event: any) {
    if (typeof onScroll === 'function') {
      const isHorizontal = layout === 'horizontal';

      onScroll(
        isNativePlatform
          ? {
              ...event,
              currentTarget: {
                ...event.detail,
                ...(isGrid
                  ? {
                      clientWidth: parseFloat(style?.width),
                      clientHeight: parseFloat(style?.height),
                    }
                  : {
                      clientWidth: isHorizontal ? parseFloat(style?.width) : style?.width,
                      clientHeight: !isHorizontal ? parseFloat(style?.height) : style?.height,
                    }),
              },
            }
          : event,
      );
    }
  }

  let element: any = View;

  if (process.env.REMAX_PLATFORM === 'ali') {
    element = require('remax/ali').ScrollView;
  } else if (process.env.REMAX_PLATFORM === 'wechat') {
    element = require('remax/wechat').ScrollView;
  } else if (process.env.REMAX_PLATFORM === 'toutiao') {
    element = require('remax/toutiao').ScrollView;
  }

  return React.createElement(element, {
    ref,
    style,
    onScroll: handleScroll,
    ...rest,
    ...(isNativePlatform
      ? {
          scrollY: isGrid || layout === 'vertical',
          scrollX: isGrid || layout === 'horizontal',
        }
      : {}),
  });
});

---
title: 无限加载列表
order: 5
---

## FixedSizeList

无限加载列表

```tsx
import * as React from 'react';
import { View } from 'remax/one';
import { FixedSizeList } from 'remax-virtual-list';
import InfiniteLoader from 'react-window-infinite-loader';
import './index.less';

const Page = () => {
  const [state, setState] = React.useState<{
    hasNextPage: boolean;
    isNextPageLoading: boolean;
    items: any[];
  }>({
    hasNextPage: true,
    isNextPageLoading: false,
    items: Array(10).fill(true),
  });

  const { hasNextPage, isNextPageLoading, items } = state;

  const loadNextPage = (...args: any) => {
    console.log('loadNextPage', ...args);
    setState({ ...state, isNextPageLoading: true });
    setTimeout(() => {
      setState({
        hasNextPage: state.items.length < 100,
        isNextPageLoading: false,
        items: [...state.items].concat(Array(10).fill(true)),
      });
    }, 2500);
  };

  const itemCount = hasNextPage ? items.length + 1 : items.length;

  const loadMoreItems = isNextPageLoading ? () => {} : loadNextPage;

  const isItemLoaded = (index: number) => !hasNextPage || index < items.length;

  const Item = ({ index, style }: any) => {
    return (
      <View className={index % 2 ? 'itemOdd' : 'itemEven'} style={style}>
        {!isItemLoaded(index) ? 'Loading' : <>Row {index}</>}
      </View>
    );
  };

  return (
    <InfiniteLoader
      isItemLoaded={isItemLoaded}
      itemCount={itemCount}
      loadMoreItems={loadMoreItems as any}
    >
      {({ onItemsRendered, ref }) => (
        <FixedSizeList
          className='list'
          height={150}
          itemSize={35}
          width={300}
          itemCount={itemCount}
          onItemsRendered={onItemsRendered}
          ref={ref}
        >
          {Item}
        </FixedSizeList>
      )}
    </InfiniteLoader>
  );
};

export default Page;

```

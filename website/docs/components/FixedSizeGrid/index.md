---
title: FixedSizeGrid
order: 3
---

## FixedSizeGrid

固定尺寸网格列表

```tsx
import React from 'react';
import { View } from 'remax/one';
import { FixedSizeGrid } from 'remax-virtual-list';
import './index.less';

const Cell = ({ columnIndex, rowIndex, style }) => (
  <View
    className={
      columnIndex % 2
        ? rowIndex % 2 === 0
          ? 'itemOdd'
          : 'itemEven'
        : rowIndex % 2
        ? 'itemOdd'
        : 'itemEven'
    }
    style={style}
  >
    Item {rowIndex},{columnIndex}
  </View>
);

export default () => (
  <FixedSizeGrid
    className="list"
    columnCount={1000}
    columnWidth={100}
    height={150}
    rowCount={1000}
    rowHeight={35}
    width={300}
  >
    {Cell}
  </FixedSizeGrid>
);
```

### API

| 参数        | 说明                                                                  |         类型         | 默认值 |
| ----------- | --------------------------------------------------------------------- | :------------------: | ------ |
| width       | 宽度<br>垂直列表必须为 `number`<br>水平列表可以是`string` 或 `number` | `number` \| `string` | -      |
| height      | 高度<br>水平列表必须为 `number`<br>垂直列表可以是`string` 或 `number` | `number` \| `string` | -      |
| className   | 列表样式                                                              |        string        | -      |
| columnCount | 网格中的列数                                                          |        number        | -      |
| columnWidth | 网格中单个列的宽度                                                    |        number        | -      |
| rowCount    | 网格中的行数                                                          |        number        | -      |
| rowHeight   | 网格中单个行的高度                                                    |        number        | -      |
| children  | 列表元素                                                              |        ({key, rowIndex, columnIndex, data, isScrolling, style}) =>  ReactNode         | -        |


[更多用法](https://react-window.now.sh/#/api/FixedSizeGrid)

---
title: VariableSizeGrid
order: 4
---

## VariableSizeGrid

垂直可变尺寸网格列表

```tsx
import React from 'react';
import { View } from 'remax/one';
import { VariableSizeGrid } from 'remax-virtual-list';
import './index.less';

const columnWidths = new Array(1000)
  .fill(true)
  .map(() => 150 + Math.round(Math.random() * 50));
const rowHeights = new Array(1000)
  .fill(true)
  .map(() => 50 + Math.round(Math.random() * 50));

const getItemSize = index => rowHeights[index];

const Row = ({ columnIndex, rowIndex, style }) => (
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
    r{rowIndex}, c{columnIndex}
  </View>
);

export default () => (
  <VariableSizeGrid
    className="list"
    columnCount={1000}
    columnWidth={index => columnWidths[index]}
    height={300}
    rowCount={1000}
    rowHeight={index => rowHeights[index]}
    width={600}
  >
    {Row}
  </VariableSizeGrid>
);
```

### API

| 参数        | 说明                                                                  |           类型            | 默认值 |
| ----------- | --------------------------------------------------------------------- | :-----------------------: | ------ |
| width       | 宽度<br>垂直列表必须为 `number`<br>水平列表可以是`string` 或 `number` |   `number` \| `string`    | -      |
| height      | 高度<br>水平列表必须为 `number`<br>垂直列表可以是`string` 或 `number` |   `number` \| `string`    | -      |
| className   | 列表样式                                                              |          string           | -      |
| columnCount | 网格中的列数                                                          |          number           | -      |
| columnWidth | 网格中单个列的宽度                                                    | (index: number) => number | -      |
| rowCount    | 网格中的行数                                                          |          number           | -      |
| rowHeight   | 网格中单个行的高度                                                    | (index: number) => number | -      |
| children    | 列表元素                                                              |        `ReactNode`        | -      |

[更多用法](https://react-window.now.sh/#/api/VariableSizeGrid)

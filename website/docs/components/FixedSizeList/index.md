---
title: FixedSizeList
order: 1
---

## FixedSizeList

垂直固定尺寸列表

```tsx
import React from 'react';
import { View } from 'remax/one';
import { FixedSizeList } from 'remax-virtual-list';
import './index.less';

const Row = ({ index, style }) => (
  <View className={index % 2 ? 'itemOdd' : 'itemEven'} style={style}>
    Row {index}
  </View>
);

export default () => (
  <FixedSizeList
    className="list"
    height={300}
    itemCount={1000}
    itemSize={70}
    width={600}
  >
    {Row}
  </FixedSizeList>
);
```

水平固定尺寸列表

```tsx
import React from 'react';
import { View } from 'remax/one';
import { FixedSizeList } from 'remax-virtual-list';
import './index.less';

const Column = ({ index, style }) => (
  <View className={index % 2 ? 'itemOdd' : 'itemEven'} style={style}>
    Column {index}
  </View>
);

export default () => (
  <FixedSizeList
    className="list"
    height={150}
    itemCount={1000}
    itemSize={200}
    layout="horizontal"
    width={600}
  >
    {Column}
  </FixedSizeList>
);
```

### API

| 参数      | 说明                                                                  |            类型            | 默认值   |
| --------- | --------------------------------------------------------------------- | :------------------------: | -------- |
| width     | 宽度<br>垂直列表必须为 `number`<br>水平列表可以是`string` 或 `number` |    `number` \| `string`    | -        |
| height    | 高度<br>水平列表必须为 `number`<br>垂直列表可以是`string` 或 `number` |    `number` \| `string`    | -        |
| className | 列表样式                                                              |           string           | -        |
| itemCount | 列表中的项目总数                                                      |           number           | -        |
| itemSize  | 列表元素的行高或列宽                                                  |           number           | -        |
| layout    | 布局/方向                                                             | `vertical` \| `horizontal` | vertical |
| children  | 列表元素                                                              |        `ReactNode`         | -        |

[更多用法](https://react-window.now.sh/#/api/FixedSizeList)

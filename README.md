# Remax VirtualList

Remax 组件用于高效地呈现大型列表和表格数据

Remax VirtualList 完全借鉴了 [React Window](https://github.com/bvaughn/react-window) 的实现，因此基本沿用了 React Window 的用法。

### 安装

```bash
$ npm install remax-virtual-list --save
# yarn
$ yarn add remax-virtual-list
```

### 使用

```typescript
import * as React from "react";
import { View } from "remax/one";
import { FixedSizeList } from "remax-virtual-list";

const Row = ({ index, style }) => <div style={style}>Row {index}</div>;

export default () => (
  <List height={150} itemCount={1000} itemSize={35} width={300}>
    {Row}
  </List>
);
```

---
title: 快速开始
---

# remax-virtual-list

用于高效地呈现大型列表和表格数据

remax-virtual-list 完全借鉴了 [React Window](https://github.com/bvaughn/react-window) 的实现，因此基本沿用了 React Window 的用法。

![npm dev dependency version](https://img.shields.io/npm/dependency-version/remax-virtual-list/dev/remax?style=for-the-badge)&nbsp;![NPM license](https://img.shields.io/badge/license-mit-red.svg?style=for-the-badge)&nbsp;![](https://img.shields.io/github/stars/dominicleo/remax-virtual-list?style=for-the-badge)

### 安装

```bash
$ npm install remax-virtual-list --save
# 或者用 yarn
$ yarn add remax-virtual-list
```

### 使用

```typescript
import * as React from 'react';
import { View } from 'remax/one';
import { FixedSizeList } from 'remax-virtual-list';

const Row = ({ index, style }) => <View style={style}>Row {index}</View>;

export default () => (
  <FixedSizeList height={150} itemCount={1000} itemSize={35} width={300}>
    {Row}
  </FixedSizeList>
);
```

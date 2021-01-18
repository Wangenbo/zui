# Cell 单元格

### 介绍

单元格为列表中的单个展示项。

### 引入

通过 easycom 方式引入
只要组件安装在项目的components目录下，可以不用引用、注册，直接在页面中使用

## 代码演示

### 基础用法

`z-cell` 可以单独使用，也可以与 `z-cell-group` 搭配使用，`z-cell-group` 可以为 `z-cell` 提供上下外边框。

```html
<z-cell-group>
  <z-cell title="单元格" value="内容" />
  <z-cell title="单元格" value="内容" label="描述信息" />
</z-cell-group>
```

### 展示图标

通过 `icon` 属性在标题左侧展示图标。

```html
<z-cell title="单元格" icon="location-o" />
```

### 只设置 value

只设置 `value` 时，内容会靠左对齐。

```html
<z-cell value="内容" />
```

### 展示箭头

设置 `is-link` 属性后会在单元格右侧显示箭头，并且可以通过 `arrow-direction` 属性控制箭头方向。

```html
<z-cell title="单元格" is-link />
<z-cell title="单元格" is-link value="内容" />
<z-cell title="单元格" is-link arrow-direction="down" value="内容" />
```

### 页面导航

可以通过 `url` 属性进行 URL 跳转，或通过 `to` 属性进行路由跳转。

```html
<z-cell title="to" is-link clickable to="/pages/index/index"></z-cell>
<z-cell title="replace" is-link clickable to="/pages/index/index" redirect></z-cell>
```

### 分组标题

通过 `CellGroup` 的 `title` 属性可以指定分组标题。

```html
<z-cell-group title="分组1">
  <z-cell title="单元格" value="内容" />
</z-cell-group>
<z-cell-group title="分组2">
  <z-cell title="单元格" value="内容" />
</z-cell-group>
```

### 使用插槽

如以上用法不能满足你的需求，可以使用插槽来自定义内容。

```html
<z-cell class="demo-cell" title="单元格" value="内容">
    <template slot="prefix">
        <z-icon name="chat-o" :size="18" color="#969799"></z-icon>
    </template>

    <template slot="suffix">
        <z-icon name="chat-o" :size="18" color="#969799"></z-icon>
    </template>
</z-cell>
```

## API

### CellGroup Props

| 参数   | 说明           | 类型      | 默认值 |
| ------ | -------------- | --------- | ------ |
| title  | 分组标题       | _string_  | `-`    |
| border | 是否显示外边框 | _boolean_ | `true` |

### Cell Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 左侧标题 | _number \| string_ | - |
| value | 右侧内容 | _number \| string_ | - |
| label | 标题下方的描述信息 | _string_ | - |
| icon | 左侧图标名称 | _string_ | - |
| to | 点击后跳转的目标路由地址 | _string \| object_ | - |
| border | 是否显示内边框 | _boolean_ | `true` |
| redirect | 是否在跳转时替换当前页面历史 | _boolean_ | `false` |
| switch | 是否跳转到tab 页面 | _boolean_ | `false` |
| clickable | 是否开启点击反馈 | _boolean_ | `false` |
| is-link | 是否展示右侧箭头并开启点击反馈 | _boolean_ | `false` |
| arrow-direction | 箭头方向，可选值为 `left` `up` `down` | _string_ | `right` |
| required | 是否显示表单必填星号 | _boolean_ | 暂不支持 |
| title-style | 左侧标题额外样式 | _any_ | 暂不支持 |
| title-class | 左侧标题额外类名 | _any_ | 暂不支持 |
| value-class | 右侧内容额外类名 | _any_ | 暂不支持 |
| label-class | 描述信息额外类名 | _any_ | 暂不支持 |

### Cell Events

| 事件名 | 说明             | 回调参数       |
| ------ | ---------------- | -------------- |
| onclick  | 点击单元格时触发 | _event: Event_ |

### Cell Slots

| 名称       | 说明                          |
| ---------- | ----------------------------- |
|   suffix  | 自定义右侧 value 的内容       |
|   prefix  | 自定义左侧 title 的内容       |

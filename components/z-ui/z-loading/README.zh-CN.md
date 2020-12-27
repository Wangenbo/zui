# Loading 加载

### 介绍

加载图标，用于表示加载中的过渡状态。

### 引入

通过 easycom 方式引入
只要组件安装在项目的components目录下，可以不用引用、注册，直接在页面中使用

## 代码演示

### 加载类型

通过 `type` 属性可以设置加载图标的类型，默认为 `spinner`，可选值为 `circular` `spinner` `specialdot` `specialine`。

```html
<z-loading />

<z-loading type="spinner" />
```

### 自定义颜色

通过 `color` 属性设置加载图标的颜色。

```html
<z-loading color="#1989fa" />

<z-loading type="spinner" color="#1989fa" />
```

### 自定义大小

通过 `size` 属性设置加载图标的大小，单位为 `px`。

```html
<z-loading :size="24" />
```

### 加载文案

通过 `text` 属性设置加载文案。

```html
<z-loading :size="24" text="加载中..."></z-loading>
```

### 垂直排列

设置 `vertical` 属性后，图标和文案会垂直排列。

```html
<z-loading :size="24" vertical text="加载中..."></z-loading>
```

## API

### Props

| 参数      | 说明                         | 类型               | 默认值     |
| --------- | ---------------------------- | ------------------ | ---------- |
| color     | 颜色                         | _string_           | `#c9c9c9`  |
| type      | 类型，可选值为 `circular` `spinner` `specialdot` `specialine`     | _string_           | `spinner` |
| size      | 加载图标大小，默认单位为`px` | _number  | `24`     |
| text-size | 文字大小，默认单位为`px`     | _number | `14`     |
| vertical  | 是否垂直排列图标和文字内容   | _boolean_          | `false`    |
| text  | Loading文案   | _string_          | 空字符串    |

<!-- ### Slots

| 名称    | 说明     |
| ------- | -------- |
| default | 加载文案 | -->

<!-- ### 样式变量 -->

<!-- 组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/theme)。

| 名称                                | 默认值          | 描述 |
| ----------------------------------- | --------------- | ---- |
| @loading-text-color                 | `@gray-6`       | -    |
| @loading-text-font-size             | `@font-size-md` | -    |
| @loading-spinner-color              | `@gray-5`       | -    |
| @loading-spinner-size               | `30px`          | -    |
| @loading-spinner-animation-duration | `0.8s`          | -    | -->

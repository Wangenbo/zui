# Icon 图标

### 介绍

基于字体的图标集

### 引入

通过 easycom 方式引入
只要组件安装在项目的components目录下，可以不用引用、注册，直接在页面中使用

## 代码演示

### 基础用法

`Icon` 的 `name` 属性传入图标名称

```html
<z-icon name="chat-o" />
```

### 图标颜色

`Icon` 的 `color` 属性用来设置图标的颜色。

```html
<z-icon name="cart-o" color="#1989fa" />
<z-icon name="fire-o" color="#ee0a24" />
```

### 图标大小

`Icon` 的 `size` 属性用来设置图标的尺寸大小，单位为 `px`。

```html
<z-icon name="chat-o" size="40" /> <z-icon name="chat-o" size="3rem" />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 图标名称或图片链接 | _string_ | - |
| color | 图标颜色 | _string_ | `inherit` |
| size | 图标大小，如 `20px` `2em`，默认单位为`px` | _number \| string_ | `inherit` |

### Events

| 事件名 | 说明           | 回调参数       |
| ------ | -------------- | -------------- |
| onclick  | 点击图标时触发 | _event: Event_ |

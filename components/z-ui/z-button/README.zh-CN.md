# Button 按钮

### 介绍

按钮用于触发一个操作，如提交表单、页面跳转等。

### 引入
通过 easycom 方式引入
只要组件安装在项目的components目录下，可以不用引用、注册，直接在页面中使用

## 代码演示

### 按钮类型

按钮支持 `default`、`primary`、`success`、`warning`、`danger` 五种类型，默认为 `default`。

```html
<zd-button type="primary">主要按钮</zd-button>
<zd-button type="success">成功按钮</zd-button>
<zd-button type="default">默认按钮</zd-button>
<zd-button type="warning">警告按钮</zd-button>
<zd-button type="danger">危险按钮</zd-button>
```

### 朴素按钮

通过 `plain` 属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。

```html
<zd-button plain type="primary">朴素按钮</zd-button>
<zd-button plain type="primary">朴素按钮</zd-button>
```

### 细边框

设置 `hairline` 属性可以展示 0.5px 的细边框。

```html
<zd-button plain hairline type="primary">细边框按钮</zd-button>
<zd-button plain hairline type="primary">细边框按钮</zd-button>
```

### 禁用状态

通过 `disabled` 属性来禁用按钮，禁用状态下按钮不可点击。

```html
<zd-button disabled type="primary">禁用状态</zd-button>
<zd-button disabled type="primary">禁用状态</zd-button>
```

### 加载状态

通过 `loading` 属性设置按钮为加载状态，加载状态下默认会隐藏按钮文字，可以通过 `loading-text` 设置加载状态下的文字。

```html
<zd-button loading type="primary" />
<zd-button loading type="primary" loading-type="spinner" />
<zd-button loading type="primary" loading-text="加载中..." />
```

### 按钮形状

通过 `square` 设置方形按钮，通过 `round` 设置圆形按钮。

```html
<zd-button square type="primary">方形按钮</zd-button>
<zd-button round type="primary">圆形按钮</zd-button>
```

### 图标按钮

通过 `icon` 属性设置按钮图标，支持 Icon 组件里的所有图标。

```html
<zd-button icon="plus" type="primary" />
<z-button type="primary" icon="plus"/>
<z-button text="按钮" type="primary" icon="plus"/>
<z-button text="按钮" type="info" plain icon="friends-o"/>
<z-button text="按钮" type="info" plain icon="friends-o"/>
```

### 按钮尺寸

支持 `Number`、`String`，默认为 `22`。

```html
<zd-button type="primary" size="22">大号按钮</zd-button>
<zd-button type="primary" size="30">普通按钮</zd-button>
```

### 块级元素

按钮在默认情况下为行内块级元素，通过 `block` 属性可以将按钮的元素类型设置为块级元素。
在 nvue中，Flexbox 是默认且唯一的布局模型，所以设置块级显示，需配合父元素进行设置。

```html
<zd-button type="primary" block>块级元素</zd-button>
```

### 页面导航

可以通过 `to` 属性进行路由跳转。

```html
<zd-button type="primary" to="index">路由跳转</zd-button>
```

可以通过 `redirect` 关闭当前页面，跳转到应用内的某个页面。需要配合 `to` 使用

```html
<zd-button type="primary" to="index" redirect>路由跳转</zd-button>
```

可以通过 `switch` 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。需要配合 `to` 使用

```html
<zd-button type="primary" to="index" switch>路由跳转</zd-button>
```

> 若 `switch` 和 `redirect` 同时存在，只会执行 `switch` 跳转。

### 自定义颜色

通过 `color` 属性可以自定义按钮的颜色。

```html
<zd-button color="#7232dd">单色按钮</zd-button>
<zd-button color="#7232dd" plain>单色按钮</zd-button>
<zd-button color="linear-gradient(to right, #ff6034, #ee0a24)">
  渐变色按钮
</zd-button>
```

 nuve 中 background-image 优先级高于 background-color，这意味着同时设置 background-image 和 background-color，background-color 被覆盖。 background 不支持简写。
 
 只支持两种颜色的渐变，渐变方向如下：
 
 | 渐变方向 | 描述 |
 | --- | --- |
 |to right|	从左向右渐变|
 |to left|	从右向左渐变|
 |to bottom|	从上到下渐变|
 |to top|	从下到上渐变|
 |to bottom right|	从左上角到右下角|
 |to top left|	从右下角到左上角|


## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 类型，可选值为 `primary` `success` `warning` `danger` | _string_ | `default` |
| size | 尺寸，可选值为 `large` `small` `mini` | _string_ | `normal` |
| text | 按钮文字 | _string_ | - |
| color | 按钮颜色，支持传入 `linear-gradient` 渐变色 | _string_ | - |
| icon | 左侧[图标名称](#/zh-CN/icon)或图片链接 | _string_ | - |
| icon-prefix `v2.6.0` | 图标类名前缀，同 Icon 组件的 [class-prefix 属性](#/zh-CN/icon#props) | _string_ | `van-icon` |
| icon-position `v2.10.7` | 图标展示位置，可选值为 `right` | _string_ | `left` |
| block | 是否为块级元素 | _boolean_ | `false` |
| plain | 是否为朴素按钮 | _boolean_ | `false` |
| square | 是否为方形按钮 | _boolean_ | `false` |
| round | 是否为圆形按钮 | _boolean_ | `false` |
| disabled | 是否禁用按钮 | _boolean_ | `false` |
| hairline | 是否使用 0.5px 边框 | _boolean_ | `false` |
| loading | 是否显示为加载状态 | _boolean_ | `false` |
| loading-text | 加载状态提示文字 | _string_ | - |
| loading-type | [加载图标类型](#/zh-CN/loading)，可选值为 `spinner` | _string_ | `circular` |
| loading-size | 加载图标大小 | _string_ | `20px` |
| to | 点击后跳转的目标路由对象 | _string \| object_ | - |
| redirect | 是否在跳转时替换当前页面历史 | _boolean_ | `false` |
| switch | 是否跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。 | _boolean_ | `false` |

### Events

| 事件名     | 说明                                     | 回调参数            |
| ---------- | ---------------------------------------- | ------------------- |
| onclick      | 点击按钮，且按钮状态不为加载或禁用时触发 | _event: Event_      |

### Slots

| 名称              | 说明           |
| ----------------- | -------------- |
| default           | 按钮内容       |
| loading `v2.10.1` | 自定义加载图标 |

### 样式变量

组件提供了下列 Less 变量，可用于自定义样式

| 名称                             | 默认值               | 描述 |
| -------------------------------- | -------------------- | ---- |
| @button-mini-height              | `24px`               | -    |
| @button-mini-font-size           | `@font-size-xs`      | -    |
| @button-small-height             | `32px`               | -    |
| @button-small-font-size          | `@font-size-sm`      | -    |
| @button-normal-font-size         | `@font-size-md`      | -    |
| @button-large-height             | `50px`               | -    |
| @button-default-height           | `44px`               | -    |
| @button-default-line-height      | `1.2`                | -    |
| @button-default-font-size        | `@font-size-lg`      | -    |
| @button-default-color            | `@text-color`        | -    |
| @button-default-background-color | `@white`             | -    |
| @button-default-border-color     | `@border-color`      | -    |
| @button-primary-color            | `@white`             | -    |
| @button-primary-background-color | `@blue`              | -    |
| @button-primary-border-color     | `@blue`              | -    |
| @button-success-color            | `@white`             | -    |
| @button-success-background-color | `@green`             | -    |
| @button-success-border-color     | `@green`             | -    |
| @button-danger-color             | `@white`             | -    |
| @button-danger-background-color  | `@red`               | -    |
| @button-danger-border-color      | `@red`               | -    |
| @button-warning-color            | `@white`             | -    |
| @button-warning-background-color | `@orange`            | -    |
| @button-warning-border-color     | `@orange`            | -    |
| @button-border-width             | `@border-width-base` | -    |
| @button-border-radius            | `@border-radius-sm`  | -    |
| @button-round-border-radius      | `@border-radius-max` | -    |
| @button-plain-background-color   | `@white`             | -    |
| @button-disabled-opacity         | `@disabled-opacity`  | -    |


# Divider 分割线

### 介绍

用于将内容分隔为多个区域。

### 引入
通过 easycom 方式引入
只要组件安装在项目的components目录下，可以不用引用、注册，直接在页面中使用

## 代码演示

### 一般用法

```html
<z-divider></z-divider>
```

### 展示文本

```html
<z-divider>掌上大学</z-divider>
```

### 单边线宽

```html
<z-divider :half-width="150">150</z-divider>
<z-divider :half-width="200">200</z-divider>
<z-divider :half-width="300">300</z-divider>
```

### 横条颜色

```html
 <z-divider type="primary">primary</z-divider>
 <z-divider type="info">info</z-divider>
 <z-divider type="success">success</z-divider>
 <z-divider type="warning">warning</z-divider>
 <z-divider type="error">error</z-divider>
```

### 基础样式

```html
<z-divider :fontSize="36">字体大小</z-divider>
<z-divider :color="'red'">字体颜色</z-divider>
<z-divider :bg-color="'#000'">背景</z-divider>
<z-divider :margin-top="30" :margin-bottom="30">上下边距30</z-divider>
<z-divider :height="100" :bg-color="'#000'">高度100</z-divider>
```


## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| half-width |文字左或右边线条宽度，数值或百分比，数值时单位为rpx | _string_ \| _number_ | - | - |
| border-color | 线条颜色，优先级高于type | _string_  | #dcdfe6 | - |
| color | 文字颜色 | _string_  | #909399 | - |
| fontSize | 字体大小，单位rpx | _string_ \| _number_ | 26 | - |
| bg-color | 整个divider的背景颜色 | _string_  | #ffffff | - |
| height | 整个divider的高度，单位rpx | _string_ \| _number_ | 40 | - |
| type | 将线条设置主题色 | _string_  | - | info \ success \ warning \ error |
| margin-top | 与前一个元素的距离，单位rpx | _string_ \| _number_ | 0 | - |
| margin-bottom | 与后一个元素的距离，单位rpx | _string_ \| _number_ | 0 | - |
| use-slot | 是否使用slot传入内容，如果不传入，中间不会有空隙 | _boolean_ | true | - |



### Events

| 事件名     | 说明                                     | 回调参数            |
| ---------- | ---------------------------------------- | ------------------- |
| click      | divider组件被点击时触发 | -      |


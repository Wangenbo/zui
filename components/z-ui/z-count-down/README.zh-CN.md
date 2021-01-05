
# CountDown 倒计时

### 介绍

该组件一般使用于某个活动的截止时间上，通过数字的变化，给用户明确的时间感受，提示用户进行某一个行为操作。

### 引入
通过 easycom 方式引入
只要组件安装在项目的components目录下，可以不用引用、注册，直接在页面中使用

## 代码演示

### 一般用法

```html
<z-count-down :timestamp="today" :show-days="true" :separator="'zh'"></z-count-down>
```

### 不显示天数

```html
<z-count-down :timestamp="tohous"></z-count-down>
```

### 修改颜色

```html
 <z-count-down :timestamp="today" :bg-color="'#4395ff'" :color="'#fff'" :separatorColor="'rgba(255, 127, 0, 1)'"></z-count-down>
```

### 修改大小

```html
<z-count-down :timestamp="today" :height="50" :font-size="30"></z-count-down>
```

### 停止事件回掉

```html
<z-count-down :timestamp="tenSeconds" @end="watchEnd"></z-count-down>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| timestamp | 倒计时，单位为秒 | _string_ \| _number_ | - |
| autoplay | 是否自动开始倒计时 | _boolean_ | `true` |
| separator | 分隔符，colon为英文冒号，zh为中文 | _string_ | `colon` |
| separator-size | 分隔符的字体大小，单位rpx | _string_ \| _number_ | `24` |
| show-border | 是否显示倒计时数字的边框 | _boolean_ | `false` |
| hide-zero-day | 当"天"的部分为0时，隐藏该字段 | _boolean_ | `true` |
| border-color | 数字边框的颜色 | _string_ | `#303133` |
| bg-color | 倒计时数字的背景颜色 | _string_ | `#ffffff` |
| color | 倒计时数字的颜色 | _string_ | `#303133` |
| height | 数字高度值(宽度等同此值)，设置边框时看情况是否需要设置此值，单位rpx | _string_ \| _number_ | `auto` |
| show-days | 是否显示倒计时的"天"部分 | _boolean_ | `true` |
| show-hours | 是否显示倒计时的"时"部分 | _boolean_ | `true` |
| show-minutes | 是否显示倒计时的"分"部分 | _boolean_ | `true` |
| show-seconds | 是否显示倒计时的"秒"部分 | _boolean_ | `true` |


### Events

| 事件名     | 说明                                     | 回调参数            |
| ---------- | ---------------------------------------- | ------------------- |
| end      | 倒计时结束 | -      |
| change      | 倒计过程中，每秒触发一次 | timestamp: 当前剩余的倒计秒数


### Methods

| 名称     | 说明                                     |
| ---------- | ---------------------------------------- |
| start      | 开始倒计时 |
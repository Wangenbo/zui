<template>
	<view class="z-divider" ref="_zdivider" :style="{
		height: height == 'auto' ? 'auto' : height + 'rpx',
		backgroundColor: bgColor,
		marginBottom: marginBottom + 'rpx',
		marginTop: marginTop + 'rpx'
	}" @tap="click">
		<text class="z-divider-line" :class="[type ? 'z-divider-line--bordercolor--' + type : '']" :style="[lineStyle]"></text>
		<text v-if="useSlot">
            <!-- #ifdef H5 -->
            <text class="z-divider-text" :style="{ color: color, fontSize: fontSize + 'rpx' }"><slot /></text>
            <!-- #endif -->
            <!-- #ifdef APP-PLUS -->
            <text ref="$zDivider" :style="{ width: '0rpx', height: '0rpx' }"><slot /></text>
            <text class="z-divider-text" :style="{ color: color, fontSize: fontSize + 'rpx' }" v-if="slotText">{{ slotText }}</text>
            <!-- #endif -->
         </text>
		<text class="z-divider-line" :class="[type ? 'z-divider-line--bordercolor--' + type : '']" :style="[lineStyle]"></text>
	</view>
</template>

<script>
/**
 * divider 分割线
 * @Author: along
 * @Date: 2020-01-12
 * @Last Modified by: along
 * @description 区隔内容的分割线，一般用于页面底部"没有更多"的提示。
 * @property {String Number} half-width 文字左或右边线条宽度，数值或百分比，数值时单位为rpx
 * @property {String} border-color 线条颜色，优先级高于type（默认#dcdfe6）
 * @property {String} color 文字颜色（默认#909399）
 * @property {String Number} fontSize 字体大小，单位rpx（默认24）
 * @property {String} bg-color 整个divider的背景颜色（默认rgb(248, 248, 248)）
 * @property {String Number} height 整个divider的高度，单位rpx
 * @property {String} type 将线条设置主题色（默认primary）
 * @property {Boolean} useSlot 是否使用slot传入内容，如果不传入，中间不会有空隙（默认true）
 * @property {String Number} margin-top 与前一个组件的距离，单位rpx（默认0）
 * @property {String Number} margin-bottom 与后一个组件的距离，单位rpx（0）
 * @event {Function} click divider组件被点击时触发
 * @example <z-divider color="#fa3534">掌上大学</z-divider>
 */
export default {
	name: 'z-divider',
	props: {
		// 单一边divider横线的宽度(数值)，单位rpx。或者百分比
		halfWidth: {
			type: [Number, String],
			default: 150
		},
		// divider横线的颜色，如设置，
		borderColor: {
			type: String,
			default: '#dcdfe6'
		},
		// 主题色，可以是primary|info|success|warning|error之一值
		type: {
			type: String,
			default: ''
		},
		// 文字颜色
		color: {
			type: String,
			default: '#909399'
		},
		// 文字大小，单位rpx
		fontSize: {
			type: [Number, String],
			default: 24
		},
		// 整个divider的背景颜色
		bgColor: {
			type: String,
			default: 'rgb(248, 248, 248)'
		},
		// 整个divider的高度单位rpx
		height: {
			type: [Number, String],
			default: 'auto'
		},
		// 上边距
		marginTop: {
			type: [String, Number],
			default: 0
		},
		// 下边距
		marginBottom: {
			type: [String, Number],
			default: 0
		},
		// 是否使用slot传入内容，如果不用slot传入内容，先的中间就不会有空隙
		useSlot: {
			type: Boolean,
			default: true
		}
	},
    data () {
        return {
            slotText: ''
        }
    },
	computed: {
		lineStyle() {
			let style = {};
			if(String(this.halfWidth).indexOf('%') != -1) style.width = this.halfWidth;
			else style.width = this.halfWidth + 'rpx';
			// borderColor优先级高于type值
			if(this.borderColor) style.borderColor = this.borderColor;
			return style;
		}
	},
    mounted() {
        // #ifdef APP-PLUS
        this.slotText = this.$refs.$zDivider.children[0].attr.value || '';
        // #endif
    },
	methods: {
		click() {
			this.$emit('click');
		}
	}
};
</script>

<style lang="less" scoped>
@import './z-divider.less';
</style>

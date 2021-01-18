<template>
	<view class="z-countdown">
		<view class="z-countdown-item" :style="[itemStyle]" v-if="showDays && (hideZeroDay || (!hideZeroDay && d != '00'))">
			<text class="z-countdown-time" :style="[letterStyle]">{{ d }}</text>
		</view>
		<text
			class="z-countdown-colon"
			:style="{fontSize: separatorSize + 'rpx', color: separatorColor, paddingBottom: separator == 'colon' ? '4rpx' : 0}"
			v-if="showDays && (hideZeroDay || (!hideZeroDay && d != '00'))"
		>{{ separator == 'colon' ? ':' : '天' }}</text>
		<view class="z-countdown-item" :style="[itemStyle]" v-if="showHours">
			<text class="z-countdown-time" :style="{ fontSize: fontSize + 'rpx', color: color}">{{ h }}</text>
		</view>
		<text
			class="z-countdown-colon"
			:style="{fontSize: separatorSize + 'rpx', color: separatorColor, paddingBottom: separator == 'colon' ? '4rpx' : 0}"
			v-if="showHours"
		>{{ separator == 'colon' ? ':' : '时' }}</text>
		<view class="z-countdown-item" :style="[itemStyle]" v-if="showMinutes">
			<text class="z-countdown-time" :style="{ fontSize: fontSize + 'rpx', color: color}">{{ i }}</text>
		</view>
		<text
			class="z-countdown-colon"
			:style="{fontSize: separatorSize + 'rpx', color: separatorColor, paddingBottom: separator == 'colon' ? '4rpx' : 0}"
			v-if="showMinutes"
		>{{ separator == 'colon' ? ':' : '分' }}</text>
		<view class="z-countdown-item" :style="[itemStyle]" v-if="showSeconds">
			<text class="z-countdown-time" :style="{ fontSize: fontSize + 'rpx', color: color}">{{ s }}</text>
		</view>
		<text
			class="z-countdown-colon"
			:style="{fontSize: separatorSize + 'rpx', color: separatorColor, paddingBottom: separator == 'colon' ? '4rpx' : 0}"
			v-if="showSeconds && separator == 'zh'"
		>秒</text>
	</view>
</template>

<script>
/**
 * countDown 倒计时
 * @Author: along
 * @Date: 2020-01-06
 * @Last Modified by: along
 * @description 该组件一般使用于某个活动的截止时间上，通过数字的变化，给用户明确的时间感受，提示用户进行某一个行为操作。
 * @property {String Number} timestamp 倒计时，单位为秒
 * @property {Boolean} autoplay 是否自动开始倒计时，如果为false，需手动调用开始方法。（默认true）
 * @property {String} separator 分隔符，colon为英文冒号，zh为中文（默认colon）
 * @property {String Number} separator-size 分隔符的字体大小，单位rpx（默认24）
 * @property {String} separator-color 分隔符的颜色（默认#303133）
 * @property {String Number} font-size 倒计时字体大小，单位rpx（默认24）
 * @property {Boolean} show-border 是否显示倒计时数字的边框（默认false）
 * @property {Boolean} hide-zero-day 当"天"的部分为0时，隐藏该字段 （默认true）
 * @property {String} border-color 数字边框的颜色（默认#303133）
 * @property {String} bg-color 倒计时数字的背景颜色（默认#ffffff）
 * @property {String} color 倒计时数字的颜色（默认#303133）
 * @property {String} height 数字高度值(宽度等同此值)，设置边框时看情况是否需要设置此值，单位rpx（默认auto）
 * @property {Boolean} show-days 是否显示倒计时的"天"部分（默认true）
 * @property {Boolean} show-hours 是否显示倒计时的"时"部分（默认true）
 * @property {Boolean} show-minutes 是否显示倒计时的"分"部分（默认true）
 * @property {Boolean} show-seconds 是否显示倒计时的"秒"部分（默认true）
 * @event {Function} end 倒计时结束
 * @event {Function} change 每秒触发一次，回调为当前剩余的倒计秒数
 * @example <z-count-down ref="uCountDown" :timestamp="86400" :autoplay="false"></z-count-down>
 */
export default {
	name: 'z-count-down',
	props: {
		// 倒计时的时间，秒为单位
		timestamp: {
			type: [Number, String],
			default: 0
		},
		// 是否自动开始倒计时
		autoplay: {
			type: Boolean,
			default: true
		},
		// 用英文冒号(colon)或者中文(zh)当做分隔符，false的时候为中文，如："11:22"或"11时22秒"
		separator: {
			type: String,
			default: 'colon'
		},
		// 分隔符的大小，单位rpx
		separatorSize: {
			type: [Number, String],
			default: 24
		},
		// 分隔符颜色
		separatorColor: {
			type: String,
			default: "#303133"
		},
		// 字体颜色
		color: {
			type: String,
			default: '#303133'
		},
		// 字体大小，单位rpx
		fontSize: {
			type: [Number, String],
			default: 24
		},
		// 背景颜色
		bgColor: {
			type: String,
			default: '#fff'
		},
		// 数字框高度，单位rpx
		height: {
			type: [Number, String],
			default: 40
		},
		// 是否显示数字框
		showBorder: {
			type: Boolean,
			default: false
		},
		// 边框颜色
		borderColor: {
			type: String,
			default: '#303133'
		},
        // 边框圆角
        borderRadius: {
            type: String,
            default: '4rpx'
        },
		// 是否显示秒
		showSeconds: {
			type: Boolean,
			default: true
		},
		// 是否显示分钟
		showMinutes: {
			type: Boolean,
			default: true
		},
		// 是否显示小时
		showHours: {
			type: Boolean,
			default: true
		},
		// 是否显示“天”
		showDays: {
			type: Boolean,
			default: true
		},
		// 当"天"的部分为0时，不显示
		hideZeroDay: {
			type: Boolean,
			default: false
		}
	},
	watch: {
		// 监听时间戳的变化
		timestamp(newVal, oldVal) {
			// 如果倒计时间发生变化，清除定时器，重新开始倒计时
			this.clearTimer();
			this.start();
		}
	},
	data() {
		return {
			d: '00', // 天的默认值
			h: '00', // 小时的默认值
			i: '00', // 分钟的默认值
			s: '00', // 秒的默认值
			timer: null ,// 定时器
			seconds: 0, // 记录不停倒计过程中变化的秒数
		};
	},
	computed: {
		// 倒计时item的样式，item为分别的时分秒部分的数字
		itemStyle() {
			let style = {};
			if(this.height) {
				style.height = this.height + 'rpx';
				style.width = this.height + 'rpx';
			}
			if(this.showBorder) {
				style.borderStyle = 'solid';
				style.borderColor = this.borderColor;
				style.borderWidth = '1px';
			}
			if(this.bgColor) {
				style.backgroundColor = this.bgColor;
			}
            if(this.borderRadius) {
                style.borderRadius = this.borderRadius;
            }
			return style;
		},
		// 倒计时数字的样式
		letterStyle() {
			let style = {};
			if(this.fontSize) style.fontSize = this.fontSize +  'rpx';
			if(this.color) style.color = this.color;
			return style;
		}
	},
	mounted() {
		// 如果自动倒计时
		this.autoplay && this.timestamp && this.start();
	},
	methods: {
		// 倒计时
		start() {
			// 避免可能出现的倒计时重叠情况
			this.clearTimer();
			if (this.timestamp <= 0) return;
			this.seconds = Number(this.timestamp);
			this.formatTime(this.seconds);
			this.timer = setInterval(() => {
				this.seconds--;
				// 发出change事件
				this.$emit('change', this.seconds);
				if (this.seconds < 0) {
					return this.end();
				}
				this.formatTime(this.seconds);
			}, 1000);
		},
		// 格式化时间
		formatTime(seconds) {
			// 小于等于0的话，结束倒计时
			seconds <= 0 && this.end();
			let [day, hour, minute, second] = [0, 0, 0, 0];
			day = Math.floor(seconds / (60 * 60 * 24));
			// 判断是否显示“天”参数，如果不显示，将天部分的值，加入到小时中
			// hour为给后面计算秒和分等用的(基于显示天的前提下计算)
			hour = Math.floor(seconds / (60 * 60)) - day * 24;
			// showHour为需要显示的小时
			let showHour = null;
			if(this.showDays) {
				showHour = hour;
			} else {
				// 如果不显示天数，将“天”部分的时间折算到小时中去
				showHour = Math.floor(seconds / (60 * 60));
			}
			minute = Math.floor(seconds / 60) - hour * 60 - day * 24 * 60;
			second = Math.floor(seconds) - day * 24 * 60 * 60 - hour * 60 * 60 - minute * 60;
			// 如果小于10，在前面补上一个"0"
			showHour = showHour < 10 ? '0' + showHour : showHour;
			minute = minute < 10 ? '0' + minute : minute;
			second = second < 10 ? '0' + second : second;
			day = day < 10 ? '0' + day : day;
			this.d = day;
			this.h = showHour;
			this.i = minute;
			this.s = second;
		},
		// 停止倒计时
		end() {
			this.clearTimer();
			this.$emit('end', {});
		},
		// 清除定时器
		clearTimer() {
			if(this.timer) {
				// 清除定时器
				clearInterval(this.timer);
				this.timer = null;
			}
		}
	},
	beforeDestroy() {
		clearInterval(this.timer);
		this.timer = null;
	}
};
</script>

<style scoped lang="less">
@import './z-count-down.less';
</style>

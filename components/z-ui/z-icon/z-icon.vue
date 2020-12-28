<template>
	<text :style="{ color: color, 'font-size': size + 'px', 'font-family': 'vicon' }" @tap="_onClick">{{icons[name]}}</text>
</template>

<script>
	import icons from '@/static/js/icon-config.js';

	/**
	 * Icons 图标
	 * @description 用于展示 icons 图标
	 * @property {Number} size 图标大小
	 * @property {String} type 图标图案，参考示例
	 * @property {String} color 图标颜色
	 * @event {Function} click 点击 Icon 触发事件
	 */
	export default {
		name: 'ZIcons',
		props: {
			name: {
				type: String,
				default: ''
			},
			color: {
				type: String,
				default: '#333333'
			},
			size: {
				type: [Number, String],
				default: 24
			}
		},
		data() {
			return {
				icons: icons
			}
		},
		methods: {
			_onClick() {
				this.$emit('onclick')
			}
		}
	}
</script>

<style lang="less" scoped>
</style>

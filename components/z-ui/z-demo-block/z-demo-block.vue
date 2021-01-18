<template>
    <view class="demo-block">
        <view class="demo-block-title">
            <text class="demo-block-title-text">{{title}}</text>
        </view>
        <view class="demo-block-content" :class="vertical ? 'demo-block-content-vertical' : 'demo-block-content-not-vertical'">
            <slot></slot>
        </view>
    </view>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: ''
            },
            vertical: {
                type: Boolean,
                default: false
            }

        },
    	data() {
    		return {

    		};
    	}
    }
</script>

<style lang="less" scoped>
    @import '../style/var';
    .demo-block {
        padding: @padding-md;
        margin-bottom: @margin-lg;
        &-title {
            margin-bottom: @margin-md;
            &-text {
                color: @gray-7;
                font-size: @font-size-lg;
            }
        }
        &-content{
            flex-wrap: wrap;
            &-vertical{
                flex-direction: column;
            }
            &-not-vertical {
                flex-direction: row;
            }
        }
    }
</style>

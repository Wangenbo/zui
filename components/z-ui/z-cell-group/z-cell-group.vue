<template>
    <view class="z-cell-group-container">
        <view v-if="title">
            <text class="z-cell-group-title-text">{{title}}</text>
        </view>
        <view class="z-cell-group" :class="border ? 'z-cell-group-border' : ''">
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
            border: {
                type: Boolean,
                default: true
            }
        }
    }
</script>

<style lang="less" scoped>
    .z-cell-group-container{
        flex: 1;
    }
    .z-cell-group {
        background-color: #ffffff;
        flex-direction: row;
    }
    .z-cell-group-title-text{
        padding: 8px 0;
        color: #969799;
        font-size: 14px;
    }
    .z-cell-group-border{
        border-top-width: 1rpx;
        border-bottom-width: 1rpx;
        border-style: solid;
        border-color: #ebedf0;
    }
</style>

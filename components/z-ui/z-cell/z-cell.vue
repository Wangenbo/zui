<template>
    <view class="z-cell" :class="clickable ? 'z-cell-clickable' : ''" @tap="_click">
        <view class="z-cell-content">
            <view class="z-cell-content-left"  v-if="title || icon">
                <z-icon :name="icon" v-if="icon" style="margin-right: 10rpx;" :size="18"/>
                <text class="z-cell-title">{{title}}</text>
                <slot name="prefix"></slot>
            </view>

            <view class="z-cell-content-right">
                <slot name="suffix"></slot>
                <text class="z-cell-value">{{value}}</text>
                <z-icon :name="arrowName" v-if="isLink" :size="18" color="#969799" style="margin-left: 10rpx"></z-icon>
            </view>
        </view>

        <view class="z-cell-label" v-if="label">
            <text class="z-cell-label-text">{{label}}</text>
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
            value: {
                type: String,
                default: ''
            },
            label: {
                type: String,
                default: ''
            },
            size: {
                type: String,
                default: ''
            },
            icon: {
                type: String,
                default: ''
            },
            isLink: {
                type: Boolean,
                default: false
            },
            arrowDirection: {
                type: String,
                default: ''
            },
            clickable: {
                type: Boolean,
                default: false
            },
            to: {
                type: String,
                default: ''
            },
            redirect: {
                type: Boolean,
                default: false
            },
            switch: {
                type: Boolean,
                default: false
            },
        },
        computed: {
            arrowName() {
                if(this.arrowDirection) {
                    return 'arrow-' + this.arrowDirection;
                }else{
                    return 'arrow'
                }
            }
        },
        methods: {
            _click() {
                if(this.to) {
                    if(this.switch) {
                        uni.switchTab({
                            url: this.to
                        });
                        return;
                    }else if(this.redirect) {
                        uni.redirectTo({
                            url: this.to
                        });
                        return;
                    }else{
                        uni.navigateTo({
                            url: this.to
                        });
                        return;
                    }
                }else{
                    this.$emit('onclick');
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .z-cell {

        padding: 0 32rpx;
        background-color: #FFFFFF;
        flex: 1;
        &-clickable {
            &:active{
                background-color: #f2f3f5;
            }
        }
        &-content{
            flex-direction: row;
            align-items: center;
            height: 88rpx;
            &-left{
                flex: 1;
                flex-direction: row;
                align-items: center;
            }
            &-right{
                flex-direction: row;
                align-items: center;
            }
        }
        &-title{
            color: #323233;
            font-size: 14px;
        }
        &-value{
            color: #969799;
            font-size: 14px;
        }
        &-label{
            padding-bottom: 20rpx;
            &-text{
                color: #969799;
                font-size: 12px;
            }
        }
    }
</style>

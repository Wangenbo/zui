<template>
    <view class="z-col border" :style="colStyle">
        <slot />
    </view>
</template>

<script>
    export default {
        props: {
            span: {
                type: [Number, String],
                default: '1'
            },
            offset: {
                type: [Number, String],
                default: '0'
            },
            style: {
                type: String,
                default: null
            }
        },
        computed: {
            colStyle() {

                return {
                    flex: Number(this.span),
                    // width: ((750 / 24) * Number(this.span)) + 'rpx',
                    marginLeft: ((750 / 24) * Number(this.offset)) + 'rpx',
                    ...this.style
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .z-col{

    }
</style>

<template>
    <view class="z-row border">
        <slot></slot>
    </view>
</template>


<script>
    export default {
        props: {
            style: {
                type: Object,
                default: null
            },
            justify: {
                type: String,
                default: 'flex-start'
            },
            align: {
                type: String,
                default: 'top'
            }
        }
    }
</script>

<style lang="less" scoped>
    .z-row{
        flex-direction: row;
        flex: 1;
    }
</style>

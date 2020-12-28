<template>
    <view :class="vertical ? 'loading-vertical' : 'loading-horizontal'">
        <text class="zicon circle" :style="iconStyle" ref="loading">{{ typeCode }}</text>
        <text class="loading-text" :class="vertical ? 'loading-vertical-text' : 'loading-horizontal-text'" :style="textStyle">{{ text }}</text>
    </view>
</template>

<script>
// #ifdef APP-NVUE
const Binding = uni.requireNativePlugin('bindingx');
// #endif
export default {
    props: {
        type: {
            type: String,
            default: 'spinner'
        },
        size: {
            type: Number,
            default: 24
        },
        color: {
            type: String,
            default: '#c9c9c9'
        },
        vertical: {
            type: Boolean,
            default: false
        },
        text: {
            type: String,
            default: ''
        },
        textSize: {
            type: Number,
            default: 14
        },
        textColor: {
            type: String,
            default: '#c9c9c9'
        }
    },
    computed: {
        typeCode() {
            let result = '\ue65b';

            if (this.type === 'spinner') {
                result = '\ue65b';
            } else if (this.type === 'circular') {
                result = '\ue663';
            } else if (this.type === 'specialdot') {
                result = '\ue61c';
            } else if (this.type === 'specialine') {
                result = '\ue65d';
            }

            return result;
        },
        iconStyle() {
            return {
                'font-family': 'zicon',
                'font-size': this.size + 'px',
                color: this.color
            };
        },
        textStyle() {
            return {
                'font-size': this.textSize + 'px',
                'color': this.textColor
            };
        }
    },
    data() {
        return {};
    },

    mounted() {
        // #ifdef APP-PLUS
        this._animationLoading();
        // #endif
    },

    methods: {
        _getEl: function(el) {
            if (typeof el === 'string' || typeof el === 'number') return el;
            if (WXEnvironment) {
                return el.ref;
            } else {
                return el instanceof HTMLElement ? el : el.$el;
            }
        },
        _animationLoading: function() {
            let loading = this._getEl(this.$refs.loading);

            let main_binding = Binding.bind(
                {
                    eventType: 'timing',
                    exitExpression: '',
                    props: [
                        {
                            element: loading,
                            property: 'transform.rotateZ',
                            expression: 't/3'
                        }
                    ]
                },
                function(res) {
                    if (res.state === 'exit') {
                        Binding.unbind({
                            token: main_binding.token,
                            eventType: 'timing'
                        });
                    }
                }
            );
        }
    }
};
</script>

<style lang="less">
.border {
    border-width: 1px;
    border-color: red;
    border-style: solid;
}
.loading-text {
    color: #969799;
    font-size: 14px;
}
.loading-horizontal {
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.loading-horizontal-text {
    padding-left: 4px;
}
.loading-vertical {
    flex-direction: column;
    align-items: center;
}
.loading-vertical-text {
}



/* #ifdef H5 */
.circle {
    animation: turn 1s linear infinite;
}
@keyframes turn {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
/* #endif */

</style>

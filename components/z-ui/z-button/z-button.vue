<template>

    <view class="z-button" :class="classBtn" :style="styleBtn" @tap="_click">
        <text :class="classBtnText" :style="styleBtnText">{{ text }}</text>
        <z-loading color="#fff" v-if="loading" :type="loadingType" :text="loadingText" text-color="#fff"/>
    </view>

</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'default'
        },
        plain: {
            type: Boolean,
            default: false
        },
        hairline: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        square: {
            type: Boolean,
            default: true
        },
        round: {
            type: Boolean,
            default: false
        },
        size: {
            type: String,
            default: 'normal'
        },
        block: {
            type: Boolean,
            default: false
        },
        color: {
            type: String,
            default: ''
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
        loading: {
            type: Boolean,
            default: false
        },
        loadingType: {
            type: String,
            default: 'spinner'
        },
        loadingText: {
            type: String,
            default: ''
        },
        customerClass: {
            type: String,
            default: ''
        }
    },
    computed: {
        classBtn() {
            let className = '';

            if(this.plain) {
                className = 'z-button-' + this.type + '-plain';
            }else{
                className = 'z-button-' + this.type;
            }


            className += this.hairline ? ' btn-hireline' : '';

            className += this.disabled ? ' btn-disabled' : '';

            className += this.square ? ' btn-square' : '';

            className += this.round ? ' btn-round' : '';

            className += ' z-button-' + this.size;

            className += this.block ? ' btn-block' : '';

            if(this.loading) {
                className += ' z-button-loading'
            }

            return className + ' ' + this.customerClass;
        },
        styleBtn() {
            let result = {};

            if(this.color) {
                if(this.plain) {
                    result = {
                        'backgroundColor': '#fff',
                        'borderColor': this.color
                    }
                }else{
                    if(this.color.indexOf('linear-gradient') > -1) {
                        result['backgroundImage'] = this.color;
                    }else{
                        result['backgroundColor'] = this.color;
                    }
                }
            }

            // console.log(result)
            return result;
        },
        classBtnText() {
            let btnTextClassName = '';

            if(this.plain) {
                btnTextClassName += 'z-button-'+ this.type +'-plain-text';
            }else{
                btnTextClassName += 'z-button-'+ this.type +'-text';
            }

            return btnTextClassName + ' z-button-' + this.size + '-text';
        },
        styleBtnText() {
            if(this.color && !this.plain) {
                return {
                    color: '#ffffff'
                }
            }else if(this.color && this.plain) {
                return {
                    'color': this.color
                }
            }
        }
    },

    methods: {
        _click() {
            if ( this.disabled || this.loading ) return;

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
};
</script>

<style lang="less">
@import './z-button.less';
</style>

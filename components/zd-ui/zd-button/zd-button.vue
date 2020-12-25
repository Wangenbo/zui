<template>
    <view class="zd-button" :class="classBtn" :style="styleBtn">
        <text :class="classBtnText" :style="styleBtnText">{{ text }}</text>
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
        }
    },
    computed: {
        classBtn() {
            let className = '';

            if(this.plain) {
                className = 'zd-button-' + this.type + '-plain';
            }else{
                className = 'zd-button-' + this.type;
            }


            className += this.hairline ? ' btn-hireline' : '';

            className += this.disabled ? ' btn-disabled' : '';

            className += this.square ? ' btn-square' : '';

            className += this.round ? ' btn-round' : '';

            className += ' zd-button-' + this.size;

            className += this.block ? ' btn-block' : '';
            return className;
        },
        styleBtn() {
            let result = '';

            if(this.color && !this.plain) {
                result = {
                    'backgroundColor': this.color,
                    'backgroundImage': this.color
                }
            }else if(this.color && this.plain) {
                result = {
                    'backgroundColor': '#fff',
                    'border-color': this.color
                }
            }

            console.log(result)
            return result;
        },
        classBtnText() {
            let btnTextClassName = '';

            if(this.plain) {
                btnTextClassName += 'zd-button-'+ this.type +'-plain-text';
            }else{
                btnTextClassName += 'zd-button-'+ this.type +'-text';
            }

            return btnTextClassName + ' zd-button-' + this.size + '-text';
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
    }
};
</script>

<style lang="less">
@import './zd-button.less';
</style>

<script>
    import { addFont } from '@/static/js/util.js';
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
        /*
         * @Desc: 加载字体
         */
        beforeCreate() {
            addFont();
        }
	}
</script>

<style lang="less">
    /* #ifdef H5 */
    @import "/static/css/loading.css";
    @import "/static/css/z-icon.css";
    /* #endif */
    .border {
        border-width: 1px;
        border-color: red;
        border-style: solid;
    }
</style>

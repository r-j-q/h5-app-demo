<script> 
	import {
		mapGetters
	} from "vuex"
	export default {
		data() {
			return {}
		},
		computed: {
			...mapGetters(['userInfo']),
		},
		onLaunch: function() {
			 
		},
		methods: {
			 
			getUrl(url) {
				if (url.indexOf('%') > -1) {
					url = url.replace(/%/g, '%25');
				}
				return url
			}

 

		}
	};
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
	@import url("@/static/css/index.css");
</style>

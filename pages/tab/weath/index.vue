<template>
	<view class="content">
		 
	</view>






</template>

<script>
	import {
		mapGetters
	} from "vuex";
	var app = getApp().globalData;
	var loginRes;
	import {
		userIndex,
		noauthIndex
	} from "@/api/index.js";
  
	export default {
		name: "index",
		components: {  
		},
		computed: {
			...mapGetters(["userInfo"]),
		},
		data() {
			return { 
				// bannerTwo: require("../../../static/images/other/bannerTwo.png"),
			};
		},
		watch: {},
		onShow() {
			let _this = this;
			_this.getStockList();
		},
		mounted() {},

		methods: {
			// 旋转事件
			changeHandle(index) {
				console.log(index, 'index')
			},
			// 点击事件
			gotoHandle(index) {
				console.log(index, 'index')
			},
			onHandleCheck(e) {
				console.log("handleCheck", e);
			},
			onHandleError(e) {
				console.log("handleError", e);
			},
			onHandleFinish(e) {
				console.log("handleFinish", e);
			},
			scrolltoupper() {},
			handleStockList(item, index) {
				var _this = this;
				_this.stockList[index].active = !_this.stockList[index].active;
			},
			nativeGetTo() {
				let _this = this
				uni.navigateTo({
					url: '/pages/userLoginRegister/login'
				})
				uni.showToast({
					icon: "none",
					title: "Please Sign In"
				})
			},
			jumpToDescribe(item) {
				if (this.userInfo == null) {
					this.nativeGetTo()
				} else {
					uni.navigateTo({
						url: getApp().getUrl("/pages/describe/index?item=" + encodeURIComponent(JSON.stringify(
							item)))
					})
				}
			
			
			},
			async getStockList() {
				var _this = this;
				var res = await _this.$request
					.get({
						url: _this.userInfo?.token ? userIndex : noauthIndex,
						loadingTip: "stock...",
					})
					.then(
						(res) => {
						 _this.vip_end_vip = res.vip_end
                            _this.stockListIndex = [{
									title: "Plouto",
									active: true,
									id: 3,
									vip: res.vip_end,
									childTrendList: [{
											title: "Swing Signals",
											child: res.short,
											id: 3


										},
										{
											title: "Trend Signals",
											child: res.long,
											id: 4
										}
									]
								}]
								console.log('----eeee----->',  _this.stockListIndex)
							_this.stockList = [{
									title: "Wealth Quarterly Guide",
									child: res.report,
									active: true,
									id: 1,
									vip: res.report_vip_end
								},
								{
									title: "Stock Vane",
									child: res.smartmoney,
									active: true,
									id: 2,
									vip: res.sm_vip_end
								},
								{
									title: "Plouto",
									active: true,
									id: 3,
									vip: res.vip_end,
									childTrendList: [{
											title: "Swing Signals",
											child: res.short,
											id: 3


										},
										{
											title: "Trend Signals",
											child: res.long,
											id: 4
										}
									]
								}
							];
							console.log("======>", _this.stockList);
						},
						(res) => {}
					);
			},

		},
	};
</script>
<style scoped> 

	 
</style>

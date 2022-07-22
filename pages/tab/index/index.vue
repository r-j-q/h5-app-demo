<template>
	<view class="content">
		<view class="content-fixed-style">
			<luyj-search-bar :placeholder="placeholder" :focus="true" v-model="value" @blur="blur" @input="input"
				@clear="clear" />
			<v-tabs v-model="current" :tabs="tabs" @change="changeTab" height="80rpx" activeColor="#3FB4C9"
				lineColor="#3FB4C9"></v-tabs>
		</view>
		<view style="margin-top: 252rpx;">
			<cameraContentList v-bind:items="item" v-bind:listIndex="listIndex"
				v-for="(item,listIndex) in categoryNameList" :key="listIndex" />
		</view>
		<u-loadmore :status="status" :loading-text="loadingText" :loadmore-text="loadmoreText"
			:nomore-text="nomoreText" />
	</view>
</template>

<script>
	import cameraContentList from "@/components/cameraContentList"
	import {
		mapGetters
	} from "vuex";
	var app = getApp().globalData;
	var loginRes;
	import {
		getSubjectListByName,
		getCategoryList
	} from "@/api/index.js";
	var _this;
	export default {
		name: "index",
		components: {
			cameraContentList,

		},
		computed: {
			...mapGetters(["userInfo"]),
		},
		data() {
			return {
				value: "",
				placeholder: "请输入搜索关键词",
				current: 0,
				tabs: ['全部测试', '心里综合', '人格气质及个性', '老年测评', '儿童及青少年测评'],
				loadingText: "加载中...",
				loadmoreText: "2222222",
				nomoreText: "----到底了----",
				categoryList: [],
				categoryNameList: [],
				status: "noMore",
				pageNum: 1,
				pageSize: 10,
				totleSize: 0,
				categoryEname: "ALL"

			};
		},
		watch: {},

		onShow() {
			_this = this;
			_this.getSubjectListByName()
			_this.getCategoryList()
		}, 
		onReachBottom() {
			// more/loading/noMore
			if (_this.categoryNameList.length >= _this.totleSize) return;
			_this.status = 'loading';
			_this.pageNum++;
			setTimeout(() => {
				_this.getSubjectListByName()
				if (_this.categoryNameList.length >= _this.totleSize) _this.status = 'nomore';
				else _this.status = 'loading';
			}, 1000)

			// 停止下拉刷新滚动
			uni.stopPullDownRefresh()
		},
		methods: {
			// 失去焦点调用
			blur(e) {
				_this.pageNum = 1;
				_this.categoryNameList = [];
				_this.getSubjectListByName()
			},
			input(e) {
				_this.pageNum = 1;
			},
			clear(e) {
				_this.pageNum = 1;
				_this.categoryNameList = [];
				this.value = ""
				_this.getSubjectListByName()
			},
			changeTab(index) {
				_this.categoryEname = _this.categoryList[index].ename;
				_this.categoryNameList = [];
				_this.pageNum = 1;
				_this.getSubjectListByName()
			},
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
			getSubjectListByName() {

				_this.$request
					.get({
						url: getSubjectListByName,
						loadingTip: "加载中...",
						data: {
							scaleName: _this.value,
							pageNum: _this.pageNum,
							pageSize: _this.pageSize,
							categoryEname: _this.categoryEname,
							institutionNo: _this.userInfo?.institutionNo,
							uId: _this.userInfo?.userId,
						},
					})
					.then(
						(res) => {
							if (res.code == 200) {
								let data = res.data.data; 
								data.forEach(e => {
									_this.categoryNameList.push(e)
								})
								_this.totleSize = res.data.allNum 
							} else if (res.code == 401) {


							} else {
								uni.showToast({
									title: "加载有误",
									icon: "none",
								})
							}
						})

			},

			async getCategoryList() {
				await _this.$request
					.get({
						url: `${getCategoryList}?institutionNo=${_this.userInfo?.institutionNo}&gId=${_this.userInfo?.gId}`,
						loadingTip: "加载中...",

					})
					.then(
						(res) => {

							console.log("resresresresresres", res.data)
							// let re =   _this.$CryptoJS.AesDecrypt(res.data)
							let categoryListx = [];
							let categoryName = [];
							if (res.code == 200) {
								for (var i = 0; i < res.data.length; i++) {
									categoryListx.push(res.data[i])
									categoryName.push(res.data[i].name)
								}

								_this.tabs = categoryName;
								_this.categoryList = categoryListx;

							}
						})

			},

		},
	};
</script>
<style scoped>
	::v-deep .uni-searchbar__box {
		height: 50px;
	}

	::v-deep .uni-searchbar__cancel {
		line-height: 50px;
	}

	.content_app_style_content {
		min-height: 100vh;
		overflow-y: scroll;
	}

	::v-deep .uni-swiper-dot.uni-swiper-dot-active {
		background-color: #fff;
		background: #fff;
	}

	.tab-list-style-view {
		color: #B2620A;
		width: 94%;
		margin: 0 auto;
		padding: 1upx;
	}

	.text-aligin-center {
		text-align: center;
	}


	.content-fixed-style {
		width: 750upx;
		height: 250rpx;
		position: fixed;
		top: 80rpx;
		/* #ifdef MP-WEIXIN */
		top: 0rpx;
		/* #endif */
		background-color: #fff;
		z-index: 99;

	}
</style>

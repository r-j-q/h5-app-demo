<template>
	<view class="content_app   minHeight100">
		<view class="disRowAroundStart p-l-t-b"> 
			<image class='avatarUrlImg' :src="avatarUrl" mode=""></image>
			<view class="mrl">
				{{getUserInfo.petName}}
			</view>
		</view>
		<uni-list>
			<uni-list-item link="navigateTo" :thumb="settingmine" showArrow title="测试记录" to="/pages/mine/index">
			</uni-list-item>
			<uni-list-item link="navigateTo" :thumb="loginOut" showArrow title="退出登录" @click="loginOuts">
			</uni-list-item>
		</uni-list>
	</view>

</template>

<script>
	import {
		userMeIndex
	} from "@/api/index.js"
	import {
		mapGetters
	} from "vuex"
	export default {
		name: 'index',

		components: {},
		computed: {
			...mapGetters({
				getUserInfo: "userInfo"
			})
		},
		data() {
			return {
              avatarUrl:"",
			   avatarUrlH5: "https://img01.yzcdn.cn/vant/cat.jpeg",
             settingmine:"",
             loginOut:"",
			}
		},
		onLoad() {
			 	 let that = this;
			 
			uni.getUserInfo({
									provider: 'weixin',
									success: function(infoRes) {
										that.avatarUrl = infoRes.userInfo.avatarUrl
										console.log(that.avatarUrl )
									}
								});
		},
		onShow() {
			console.log("------")
             
			  
		},
		methods: {
			loginOuts() {
				uni.showModal({
					content: "你确定要退出吗？",
					success: (res) => {
						if (res.confirm) {

							uni.removeStorageSync('cameraUserInfo');
							uni.navigateTo({
								url: '/pages/userLoginRegister/login'
							});
						}
					}
				})

			},


			jumpToDescribe(num, time) {
				if (this.getUserInfo == null) {
					console.log("KKKKKKKKKKKKKK")
					uni.navigateTo({
						url: '/pages/userLoginRegister/login'
					})
					return
				}
				let params = {
					id: num,
					title: ""
				}
				uni.navigateTo({
					url: "/pages/describe/index?item=" + encodeURIComponent(JSON.stringify(params))
				})
			},

		}
	}
</script>

<style scoped>
	.p-l-t-b{
		padding:60rpx 0 60rpx 40rpx;
	}
	.avatarUrlImg{
		width:120rpx;
		height:120rpx;
		border-radius:60rpx
		}
	::v-deep .uni-list-item {
		padding: 20rpx 0;
	}


	::v-deep .uni-list-item__content-title {
		color: #9E9E9E;
	}

	.ptb-80 {
		padding: 80rpx 20rpx;
	}

	.main-two {
		width: 45%;
		height: 200rpx
	}

	.main-two image {
		width: 100%;
		height: 100%;
	}
</style>

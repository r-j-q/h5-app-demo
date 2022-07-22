<template>
	<div class="login minHeight100 content_app bg_img paddingTop20" :style="'background-image: url('+logo_bg+');'">
		<view class="loginContent">
			<view class="loginTop">
				<image class="loginImg" :src="logo" mode=""></image>
			</view>
			<view class="margin_button_top_40">
				<comp-input :password='false' :firstName="user_name" @myblur="onhandleUsername" placer="请输入用户名">
				</comp-input>
				<comp-input :password='true' :firstName="possword" @myblur="onhandleRePassword" placer="请输入密码">
				</comp-input>

				<view class="loginButtom" @click.stop="handleOnLogin">
					<u-button type="success" :disabled="disabled" size="large"
						class="content_app11 textColorff weight fontSize30">登 录</u-button>
				</view>
			</view>
			<view class="loginAccount textColorff fontSize19">
				<text class="textColor marTop20 textLine" @click="registerTo">没有账号？去注册 </text>
			</view>

		</view>
	</div>

</template>

<script>
	import {
		firstName,
		firstName1
	} from "@/static/images/lxg/base64.js";

	import {
		login
	} from '@/api/index.js'

	import compInput from '@/components/compInput'
	import {
		mapActions
	} from "vuex"
	export default {
		components: {

			compInput,

		},
		data() {
			return {
				show: false,
				dataKeys: {
					userId: 'myUserId',
					msgId: 'myMsgId',
					name: 'myName',
					message: 'myMessageName',
					img: 'myImg',
					avator: 'myAvator'
				},
				firstName: firstName,
				firstName1: firstName1,
				username: "",
				password: "",
				rePassword: "",
				age: "",
				disabled: true,
				logo: require('../../static/images/camera/logo_01.png'),
				logo_bg: require('../../static/images/camera/login_bg.png'),
				user_name: require('../../static/images/camera/username.png'),
				possword: require('../../static/images/camera/password.png'),
			};
		},
		methods: {
			...mapActions({
				setUserInfo: "setUserInfo"
			}),
			open() {
				this.show = true
			},
			close() {
				this.show = false
			},
			onhandleUsername(messarr) {
				this.username = messarr[0]

			},
			onhandleRePassword(messarr) {
				this.password = messarr[0]

			},

			async handleOnLogin() {
				let _this = this


				let params = {
					phone: _this.username || "18364861538",
					password: _this.$md5.md5(_this.password),

				} 
				let par = _this.$CryptoJS.AesEncrypt(JSON.stringify(params))
				if (_this.username == "") {
					uni.showToast({
						icon: "none",
						title: "wrong user name"
					})
					return
				}
				if (_this.password == "") {
					uni.showToast({
						icon: "none",
						title: "wrong password"
					})
					return
				}
			await	_this.$request
					.post({
						url: login,
						data: {
							data: par
						}
					})
					.then(
						res => {
							 
							console.log("登录返回信息===2==>", res)
							_this.setUserInfo(res.data)
							uni.switchTab({
								url: '/pages/tab/index/index',
								animationType: "fade-in",
							})
						},
						res => {
							console.log("登录返回信2息222", res)
							// uni.showToast({
							// 	icon: "none",
							// 	title: res.data.msg
							// })
						}
					);


			},
			registerTo() {
				uni.navigateTo({
					url: "/pages/userLoginRegister/register"
				})
			}
		},
		onLoad(options) {
			// let pass=this.$md5()
		}
	};
</script>

<style scope>
	.bg_img {

		background-size: 100% 100%;
		background-position: 50% 50%;
		background-repeat: no-repeat;
	}

	.loginContent {
		padding: 20px;
	}

	.loginTop {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 40px;
		margin-bottom: 20px
	}

	.loginButtom {
		margin-top: 40px;
		font-size: 36upx
	}

	.loginButtom button {
		border-radius: 100upx;
	}

	.loginImg {
		width: 70%;
		height: 140rpx;
	}

	.loginContent0 {
		font-size: 38upx;
		color: #423831;
		font-weight: 700;
		margin-bottom: 20upx
	}

	.loginContent1 {
		font-size: 30upx;
		color: #a2a2a2;
	}

	::v-deep .u-button--disabled {
		opacity: 1 !important;
	}

	.loginAccount {
		margin-top: 10px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-end;
	}

	.margin_button_top_40 {
		margin: 80rpx 0;
	}

	.textLine {
		text-decoration: underline;
	}
</style>

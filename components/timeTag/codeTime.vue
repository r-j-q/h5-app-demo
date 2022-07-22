<template>
	<view>
		<view class="three-content-style">
			<view class="all-content-sttyle disRowAroundcenter">
				<image style="width: 20px;height: 20px;" :src="yzm_login" alt="">
					 
				<input @input="replaceInput"  maxlength="4" style="text-indent: 10px;" v-model="mydata.checkNum"
					placeholder="请输入验证码" />
			</view>
			<view v-if="!codeTime" class="get-content-style" @tap="getCheckNum()">
				<text> 验证码 </text>
			</view>
			<view v-else class="get-content-style"  >
				<text>{{ codeTime+'s'}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import { 
		authCode
	} from '@/api/index.js'
	import { mapActions } from "vuex"
	export default {
		props: ['phone','areacode'],
		data() {
			return {
				codeTime: 0,
				code: require("../../static/images/camera/code.png"),
				yzm_login: require('../../static/images/camera/yzm_login.png'),
				mydata: {
					checkNum: ""
				}
			}
		},
		methods: {
			...mapActions({
				setAuthCodeData: "setAuthCodeData"
			}),
			replaceInput() {
				this.$emit('myblur', [this.mydata.checkNum])
			},
			getcodes(){
				var that = this;
				that.$request.get({
				    url:  `${authCode}?phone=${that.phone}`, 
				    success: res => { 
				        console.log('success',res);
				        	that.setAuthCodeData(res.data)
				    },
				    fail: res => {
				        console.log('failure',res);
				        
				    },
				    complete: res=> { 
				        console.log('complete', res);
				    }
				});
			},
			getCheckNum() {
				 
				this.getcodes()
				// console.log("这是手机号", this.areacode);
				if (this.codeTime > 0) {
					uni.showToast({
						title: 'Getting',
						icon: "none"
					});
					return;
				} else {
					this.codeTime = 60
					let timer = setInterval(() => {
						this.codeTime--;
						if (this.codeTime < 1) {
							clearInterval(timer);
							this.codeTime = 0
						}
					}, 1000)
				}
			}
		}
	}
</script>

<style scope>
	.all-content-sttyle {

		display: flex;
		flex-wrap: nowrap;
	}

	.left-content-style {
		margin-right: 40px;
	}

	.three-content-style {
		background-color: white;
		border-radius: 10rpx;
		padding: 20rpx;
		margin-top: 40upx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		background-color: #fff;
	}

	.btn-content-style {
		background-color: #1989fa;
		font-size: 28rpx;
		width: 160rpx;

		color: white;
		font-weight: 600;
	}

	.get-content-style {
		background-color:#1989fa;
		height: 70rpx;
		line-height: 70rpx;
		color: white;
		border-radius: 10rpx;
		padding: 0 20rpx;
	}
</style>

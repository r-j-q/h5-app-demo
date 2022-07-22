<template>
	<view class="disRowAround margAll">
		<view class="content_list_style_index"> 
			 <image :src="require('../../static/images/camera/'+listIndex%5+'.png')" mode=""></image>
		</view>
		<view class="flex-1 mrl">
			<view class="overflow2 fontSize16 fontWeight marginBottom10">{{items.name}} </view>
			<view class="overflow1 fontSize14 marginBottom10">{{items.description}}</view>
			<view class="marginBottom10">
				<view class="tag-1 content_app11 textColorff fontSize15">
					免费
				</view>
			</view>
			<view class="rowBetween">
				<view class="fontSize14">{{ items.testNum }}人测试过 </view>
				<view class="b-1-style content_app_f8 textColor fontSize15">立即测试 </view>
			</view>
		</view>
	</view>
</template>

<script>
  
	export default {
		name: 'mine',
	   props:['listIndex','items'],
		components: { 
		},
		computed: {
			 
		},
		data() {
			return {
				 
	
			}
		},
		onLoad() {
	
		},
		onShow() {
	console.log("=======>",this.listIndex)
		},
		methods: {
		 
	
		}
	}
</script>

<style scoped>
	.content_list_style_index {
		width: 240rpx;
		height: 240rpx;
		overflow: hidden;
		border-radius: 16rpx;
	}

	.content_list_style_index image {
		width: 100%;
		height: 100%;
	}

	.flex-1 {
		flex: 1;

	}

	.tag-1 {
		width: 100rpx;
		height: 60rpx;
		line-height: 60rpx;
		text-align: center;
		border-radius: 10rpx;

	}

	.b-1-style {
		width: 180rpx;
		height: 60rpx;
		line-height: 60rpx;
		text-align: center;
		border: 1px solid #3FB4C9;
		border-radius: 30rpx;
	}
</style>

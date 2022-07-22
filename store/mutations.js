import * as type from "./mutations_types.js";
export default {
	[type.USER_INFO](state, userInfo) {
		state.userInfo = userInfo;
		console.log("==========>",userInfo)
		uni.setStorageSync('cameraUserInfo',userInfo);
	},
	[type.AUTH_CODE](state, authCodeData) {
		state.authCodeData = authCodeData; 
	},
 
};

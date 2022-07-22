export default {
	userInfo(states) {
		return   uni.getStorageSync("cameraUserInfo")||  states.userInfo;
	},
	authCodeData(states) {
	 	return  states.authCodeData;
	 },

};

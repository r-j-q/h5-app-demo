import Vue from 'vue'
import App from './App'   
import request from './common/request.js'
import store from "./store/index.js";  
const CryptoJS = require('./utils/aes_util.js');
const md5 = require('./utils/md5.js');

import uView from 'uview-ui'
Vue.use(uView)

// 如此配置即可
// uni.$u.config.unit = 'rpx' 

  
Vue.use(request);
Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$CryptoJS = CryptoJS
Vue.prototype.$md5 = md5
// request interception
request.interceptor.request = (config => {

	var token = store?.getters?.userInfo?.token
	if (token) {
		config.header.Authorization = `Bearer ${token}`
	}
	if (config.toastError === undefined) {
		config.toastError = true
	}
	return config;
})


request.interceptor.response = ((res, config) => {
	if (res.code === 0) {
		res.success = true;
		config.businessSuccess = true;
	}
	return res;
})

/**
 *    
 *  CODE_OK = 0
    CODE_NOTLOGIN = 1001
    CODE_NOTVIP = 2001
    CODE_ERROR = 1
    CODE_TOKENERROR = 2
 *   
 */
request.interceptor.fail = ((res, config) => {

	let ret = res;
	let msg = ''
	 	console.log("---ret-1--->公用方法放回数据",res)
	if (res?.code == 401) { 
		uni.clearStorageSync()
		uni.showToast({
			icon: "none",
			title: "please sign in"
		})
		msg = res.msg
		ret = res.data
		uni.navigateTo({
			url: '/pages/userLoginRegister/login'
		})
	} else {
		msg = res.msg
	}
	if (config.toastError) {
		uni.showToast({
			title: msg,
			duration: 2000,
			icon: 'none'
		})
	}
 
	return ret;
})

Vue.prototype.$request = request

 

const app = new Vue({
	store, 
	...App
})
app.$mount()
 

	 
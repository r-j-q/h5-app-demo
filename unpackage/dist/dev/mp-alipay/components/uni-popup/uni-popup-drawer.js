;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"] = my["webpackJsonp"] || []).push([["components/uni-popup/uni-popup-drawer"],{

/***/ 156:
/*!***********************************************************************!*\
  !*** G:/master/UNI-APP-CCC/components/uni-popup/uni-popup-drawer.vue ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uni_popup_drawer_vue_vue_type_template_id_54017d6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-popup-drawer.vue?vue&type=template&id=54017d6a& */ 157);
/* harmony import */ var _uni_popup_drawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-popup-drawer.vue?vue&type=script&lang=js& */ 159);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_popup_drawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_popup_drawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _uni_popup_drawer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uni-popup-drawer.vue?vue&type=style&index=0&lang=css& */ 161);
/* harmony import */ var _HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../HBuilder/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _uni_popup_drawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _uni_popup_drawer_vue_vue_type_template_id_54017d6a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _uni_popup_drawer_vue_vue_type_template_id_54017d6a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _uni_popup_drawer_vue_vue_type_template_id_54017d6a___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/uni-popup/uni-popup-drawer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 157:
/*!******************************************************************************************************!*\
  !*** G:/master/UNI-APP-CCC/components/uni-popup/uni-popup-drawer.vue?vue&type=template&id=54017d6a& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_popup_drawer_vue_vue_type_template_id_54017d6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilder/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilder/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../HBuilder/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../HBuilder/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../HBuilder/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilder/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./uni-popup-drawer.vue?vue&type=template&id=54017d6a& */ 158);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_popup_drawer_vue_vue_type_template_id_54017d6a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_popup_drawer_vue_vue_type_template_id_54017d6a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_popup_drawer_vue_vue_type_template_id_54017d6a___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_popup_drawer_vue_vue_type_template_id_54017d6a___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 158:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!G:/master/UNI-APP-CCC/components/uni-popup/uni-popup-drawer.vue?vue&type=template&id=54017d6a& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components = {
  uniPopup: function() {
    return Promise.all(/*! import() | components/uni-popup/uni-popup */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/uni-popup/uni-popup")]).then(__webpack_require__.bind(null, /*! @/components/uni-popup/uni-popup.vue */ 112))
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 159:
/*!************************************************************************************************!*\
  !*** G:/master/UNI-APP-CCC/components/uni-popup/uni-popup-drawer.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilder_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_popup_drawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilder/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBuilder/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../HBuilder/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../HBuilder/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilder/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./uni-popup-drawer.vue?vue&type=script&lang=js& */ 160);
/* harmony import */ var _HBuilder_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_popup_drawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilder_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_popup_drawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilder_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_popup_drawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilder_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_popup_drawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilder_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_popup_drawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 160:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!G:/master/UNI-APP-CCC/components/uni-popup/uni-popup-drawer.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var uniPopup = function uniPopup() {Promise.all(/*! require.ensure | components/uni-popup/uni-popup */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/uni-popup/uni-popup")]).then((function () {return resolve(__webpack_require__(/*! @/components/uni-popup/uni-popup.vue */ 112));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};






























































// import uniPopupMore from '@/components/uni-popup/uni-popup-more.vue'

// uni-popup-share.vue
var _default = {
  name: 'UniPopupDrawer',
  components: {
    uniPopup: uniPopup
    // uniPopupMore
  },


  props: {
    intro: Object },


  data: function data() {
    return {
      apiUrl: 'https://ccc.wangwanglive.com/index.php/api/',
      step: true };

  },

  // 直接把下面这一行代码，放到自己的组件内
  inject: ['arrobj', 'popup', 'popm'],
  // ...
  methods: {

    /**
              * 定义的选择事件，选择内容后触发
              */


    openFullScreen1: function openFullScreen1() {
      // this.centerDialogVisible = true;
      // console.log(this.status);
      // that.$refs.popup.close(

      // )
      // 2020.9.11 需求:点击后,隐藏；解决：这个框体隐藏


      this.$emit('fun', true);











      this.step = false;
      this.zfbConfirmorder();




      //console.log(this.intro)
    },

    zfbConfirmorder: function zfbConfirmorder() {var _this2 = this;
      var _this = this;

      uni.request({
        url:
        "" + _this.apiUrl + "/Alixcx/vcreate", //仅为示例，并非真实接口地址。
        method: 'GET',
        data: {
          user_id: uni.getStorageSync('userlist').user_id,
          itemid: _this.intro.itemid,
          phone: _this.intro.theNumber },

        // header: {
        //     'custom-header': 'hello' //自定义请求头信息
        // },
        success: function success(res) {
          console.log(res);
          if (res.data.type == 0 && res.data.code == 200) {
            // uni.setStorageSync( 'payid', res.data.id );
            var data = JSON.parse(res.data.data);
            console.log(data);
            if (data.code == 0 && data.desc == 'success') {

              var pay_param = data.data.content;
              //console.log(pay_param);
              _this.juanalipay(pay_param);
            } else {

              uni.showToast({
                title: '' + data.desc + '',
                icon: "none" });



            }
            return;

          }

          _this2.$emit('fun', false);
          uni.showToast({
            title: '' + res.data.msg + '',
            icon: "none" });

          return;



          // console.log(res);


        } });

    },


    wxConfirmorder: function wxConfirmorder() {var _this3 = this;
      var _this = this;

      uni.request({
        url:
        "" + _this.apiUrl + "Wxxcx/vcreate", //仅为示例，并非真实接口地址。
        method: 'GET',
        data: {
          openid: uni.getStorageSync('userlist').openid,
          //  payid:  uni.getStorageSync('payid'),
          itemid: _this.intro.itemid,
          phone: _this.intro.theNumber },

        // header: {
        //     'custom-header': 'hello' //自定义请求头信息
        // },
        success: function success(res) {
          console.log(res);
          if (res.data.type == 0 && res.data.code == 200) {
            // uni.setStorageSync( 'payid', res.data.id );
            var data = JSON.parse(res.data.data);
            if (data.code == 0 && data.desc == 'success') {

              var pay_param = JSON.parse(data.data.content);
              console.log(pay_param);
              _this.juancashpay(pay_param);
            } else {









            }
            return;

          }

          if (res.data.type == 1 && res.data.code == 200) {
            //	 uni.setStorageSync( 'payid', res.data.id );
            var paypament = JSON.parse(res.data.data);
            console.log(paypament);
            if (paypament.errno == 0 && paypament.results) {
              _this3.fxpay(paypament.results);
            }

            return;

          }
          _this3.$emit('fun', false);
          uni.showToast({
            title: '' + res.data.msg + '',
            icon: "none" });

          return;




          // console.log(res);


        } });



      // var  data={"code":0,"desc":"success","data":{"outTradeNo":"200826154814CFeqx3kZ","amount":50,"serviceFee":0.50,"transactionId":"200826568974163902","content":"{\"timeStamp\":\"1598428097\",\"package\":\"prepay_id=wx26154817842829c0f88764b2f035b00000\",\"appId\":\"wx697aacdfea834ee8\",\"sign\":\"5BC23309E3DE3A4D9FB4969AE225EB043888B64FD2B3BDF8948CD9EE61366887\",\"signType\":\"HMAC-SHA256\",\"nonceStr\":\"EawvCWPGMn1AVkkR\"}","timestamp":1598428097906,"sign":"ZAuJS7PcPJOb8z6pDHlwQ+JT8o4XS5SH+PLBYp9eJ6yiQftwAzFTNwA/3hPIVSAqCWiCie4IWgImPV+QQtm9XALa+uKMG28YaOx7dfh/1Fv1Emj8Ww/0aVb4lMQ3nnmSZAFxqLPnLG9mVQfcslukeF7wTxxodRtiK31g8bqipQ0="},"success":true};
      // if(data.code==0 && data.success ){
      //   let paypament = JSON.parse(data.data.content);
      //  	    console.log(paypament)
      // 		_this.juancashpay(paypament);
      // }
      // var data={"errno":0,"message":"Payment success","results":{"timeStamp":1598431399,"nonceStr":"V7J7p08CWcYJeya4","signType":"MD5","package":"prepay_id=wx26164321020030f54d208d5158af8f0000","paySign":"03D1A8A657BFAF0E75D434078190B6D1","out_trade_no":"200826164316PhCYt35e","total_fee":5000,"prepay_id":"wx26164321020030f54d208d5158af8f0000"}};
      //     if(data.errno==0 && data.results ){
      // 	    console.log(data.results);
      // 	this.fxpay(data.results);
      //           }

    },

    juanalipay: function juanalipay(orderInfo) {

      this.$emit('fun', false);

      uni.requestPayment({
        provider: 'alipay',
        orderStr: '' + orderInfo + '', // ==tradeNO 
        success: function success(res) {
          console.log('success:' + JSON.stringify(res));
          if (res.errMsg === 'requestPayment:ok') {

            // console.log(res.resultCode); 
            if (res.resultCode == 6001) {
              uni.showToast({
                title: '未支付',
                icon: "none" });

              return;
            }

            if (res.resultCode == 9000) {
              uni.showToast({
                title: '支付成功',
                icon: "none" });

            }
            //	 uni.removeStorageSync('payid')
            uni.redirectTo({
              url: '/pages/index/index' });



          }
        }, fail: function fail(err) {

          console.log('fail:' + JSON.stringify(err));
        } });



    },

    juancashpay: function juancashpay(item) {
      this.$emit('fun', false);
      uni.requestPayment({
        provider: 'wxpay',
        timeStamp: '' + item.timeStamp + '', //时间戳
        nonceStr: '' + item.nonceStr + '', //随机字符串
        package: '' + item.package + '', //统一下单接口返回的 prepay_id 参数值
        signType: '' + item.signType + '',
        paySign: '' + item.sign + '', //签名内容
        success: function success(res) {
          if (res.errMsg === 'requestPayment:ok') {
            //　Toast('微信支付成功')
            //that.$router.replace({name:'fullOrder',query:{id:'2'}})
            //uni.removeStorageSync('payid')
            uni.showToast({
              title: '支付成功',
              icon: "none" });

            uni.redirectTo({
              url: '/pages/index/index' });

            return;
          }
          console.log('success:' + JSON.stringify(res));
        },
        fail: function fail(err) {
          console.log('fail:' + JSON.stringify(err));
        } });


    },

    fxpay: function fxpay(item) {
      this.$emit('fun', false);
      uni.requestPayment({
        provider: 'wxpay',
        timeStamp: '' + item.timeStamp + '', //时间戳
        nonceStr: '' + item.nonceStr + '', //随机字符串
        package: '' + item.package + '', //统一下单接口返回的 prepay_id 参数值
        signType: '' + item.signType + '',
        paySign: '' + item.paySign + '', //签名内容
        success: function success(res) {
          // console.log(res)
          if (res.errMsg === 'requestPayment:ok') {
            //　Toast('微信支付成功')
            //that.$router.replace({name:'fullOrder',query:{id:'2'}})
            //uni.removeStorageSync('payid')
            uni.showToast({
              title: '支付成功',
              icon: "none" });

            uni.redirectTo({
              url: '/pages/index/index' });

            return;
          }
          console.log('success:' + JSON.stringify(res));
        },
        fail: function fail(err) {
          console.log('fail:' + JSON.stringify(err));
        } });


    },


    // pay() {
    // 	// 将事件发送到页面，在页面进行监听
    // 	this.$emit('fun', {
    // 		"aaaa": 123123123
    // 	})

    // 	// s-loadingmore

    // 	// this.$refs.popupmore.open(

    // 	// )
    // 	var _this = this;
    // 	// setTimeout(function() {

    // 	// 执行父组件的close事件，关闭弹出层
    // 	// 	_this.$refs.popupmore.close(

    // 	// 	)
    // 	// 	_this.popup.close()

    // 	// }, 1000)
    // 	//e-loadingmore
    // },
    /**
     * 关闭窗口
     */
    close: function close() {
      this.step = true;
      this.popup.close();
    },
    // 切换TABS前，进行判断，当前运营商（activename）与this.type.id是否一致？？？
    // XXXX需要的是在正确的条状一次后，禁止掉后续的跳转(不可行，因为在)
    checkTab: function checkTab(act, oact) {
      //在跳转之前进行判断，TABS不可以跳转
      // 当输入号码后进入这段判断
      //接房方法找到原有的，判断，或者INIT原有状态。
      if (act == oact || this.activeName == oact) {
        this.i++;
      }
      if (!this.tabValue) {

        // 问题出在这里，tabvalue 需要执行一次。
        //i<1时不执行，i>0时执行



        //新的问题：当前activename即输入号码段时，不用PROPS修改，但是用户又手残去点击了一次。
        // 如何解决？817号段，即号码输入号码就是第一个运营商的（方法错误。）即不需要发生修改运营商

        if (this.i < 1) {

          this.i++;
          return true;
        };
        console.log(this.i, !this.tabValue);
        // 弹出error框体

        if (this.i > 0) {
          this.$message({
            message: "号段与运营商需匹配",
            type: "warning" });



          return false;
        }



        // this.tabValue=true;

      }
      if (!this.tabValue && this.i > 0) {
        this.$message({
          message: "号段与运营商不匹配",
          type: "warning" });

        // 问题出在这里，tabvalue 需要执行一次。
        this.i++;

        // this.tabValue=true;
        return false;
      }


    }

    //wxpay 
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-alipay/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 161:
/*!********************************************************************************************************!*\
  !*** G:/master/UNI-APP-CCC/components/uni-popup/uni-popup-drawer.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilder_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilder_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilder_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_popup_drawer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilder/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../HBuilder/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../HBuilder/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../HBuilder/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../HBuilder/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../HBuilder/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilder/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./uni-popup-drawer.vue?vue&type=style&index=0&lang=css& */ 162);
/* harmony import */ var _HBuilder_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilder_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilder_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_popup_drawer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilder_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilder_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilder_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_popup_drawer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilder_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilder_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilder_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_popup_drawer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilder_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilder_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilder_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_popup_drawer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilder_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilder_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilder_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_popup_drawer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 162:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!G:/master/UNI-APP-CCC/components/uni-popup/uni-popup-drawer.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/uni-popup/uni-popup-drawer-create-component',
    {
        'components/uni-popup/uni-popup-drawer-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(156))
        })
    },
    [['components/uni-popup/uni-popup-drawer-create-component']]
]);

;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"] = my["webpackJsonp"] || []).push([["components/paymentlist/paymentlist"],{

/***/ 128:
/*!********************************************************************!*\
  !*** G:/master/UNI-APP-CCC/components/paymentlist/paymentlist.vue ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _paymentlist_vue_vue_type_template_id_4b72f7ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paymentlist.vue?vue&type=template&id=4b72f7ce&scoped=true& */ 129);
/* harmony import */ var _paymentlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paymentlist.vue?vue&type=script&lang=js& */ 131);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _paymentlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _paymentlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _paymentlist_vue_vue_type_style_index_0_id_4b72f7ce_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paymentlist.vue?vue&type=style&index=0&id=4b72f7ce&scoped=true&lang=css& */ 133);
/* harmony import */ var _HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../HBuilder/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _paymentlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _paymentlist_vue_vue_type_template_id_4b72f7ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _paymentlist_vue_vue_type_template_id_4b72f7ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4b72f7ce",
  null,
  false,
  _paymentlist_vue_vue_type_template_id_4b72f7ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/paymentlist/paymentlist.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 129:
/*!***************************************************************************************************************!*\
  !*** G:/master/UNI-APP-CCC/components/paymentlist/paymentlist.vue?vue&type=template&id=4b72f7ce&scoped=true& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_paymentlist_vue_vue_type_template_id_4b72f7ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilder/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilder/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../HBuilder/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../HBuilder/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../HBuilder/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilder/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./paymentlist.vue?vue&type=template&id=4b72f7ce&scoped=true& */ 130);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_paymentlist_vue_vue_type_template_id_4b72f7ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_paymentlist_vue_vue_type_template_id_4b72f7ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_paymentlist_vue_vue_type_template_id_4b72f7ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_paymentlist_vue_vue_type_template_id_4b72f7ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 130:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!G:/master/UNI-APP-CCC/components/paymentlist/paymentlist.vue?vue&type=template&id=4b72f7ce&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ 131:
/*!*********************************************************************************************!*\
  !*** G:/master/UNI-APP-CCC/components/paymentlist/paymentlist.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilder_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_paymentlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilder/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBuilder/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../HBuilder/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../HBuilder/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilder/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./paymentlist.vue?vue&type=script&lang=js& */ 132);
/* harmony import */ var _HBuilder_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_paymentlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilder_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_paymentlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilder_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_paymentlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilder_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_paymentlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilder_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_paymentlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 132:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!G:/master/UNI-APP-CCC/components/paymentlist/paymentlist.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var uniPopup = function uniPopup() {Promise.all(/*! require.ensure | components/uni-popup/uni-popup */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/uni-popup/uni-popup")]).then((function () {return resolve(__webpack_require__(/*! @/components/uni-popup/uni-popup.vue */ 112));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var uniPopupMore = function uniPopupMore() {__webpack_require__.e(/*! require.ensure | components/uni-popup/uni-popup-more */ "components/uni-popup/uni-popup-more").then((function () {return resolve(__webpack_require__(/*! @/components/uni-popup/uni-popup-more.vue */ 163));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =





































































































{
  name: "paymentlist",

  components: {
    uniPopup: uniPopup,
    uniPopupMore: uniPopupMore
    // uniPopupMore
  },


  data: function data() {
    // const currentDate = this.getDate({
    //         format: true
    //     })

    return {
      index: 0,
      key: 0,
      apiUrl: 'https://ccc.wangwanglive.com/index.php/api/V1/',


      array: ['请选择缴费类型', '水费', '电费', '网费'],
      // s-静态数据
      company: [{
        "name": "请选择缴费类型" }],



      info: {},


      //e-静态数据
      payment: "",
      acPlac: "Account No",
      idPlac: "Identifier",
      service_charge: "50",
      type_ac: false,
      itemid: "",
      ac: "",
      ident: "",
      money: "" };


  },
  props: [
  "sf",
  "df",
  "wf"],


  methods: {
    recordAc: function recordAc(e) {
      this.ac = e.detail.value;

    },
    recordId: function recordId(e) {
      this.ident = e.detail.value;

    },
    recordMoney: function recordMoney(e) {
      this.money = e.detail.value;
      if (this.money > 3000) {
        this.service_charge = Math.floor(this.money * 2 * 0.01);

      } else {

        this.service_charge = 50;
      }
      //conso
      console.log(this.ac, this.ident, this.money);
    },
    lifeorder: function lifeorder() {
      var _this = this;


      if (!_this.itemid) {
        uni.showToast({
          title: '请输入缴费单位',
          icon: "none" });

        return false;

      }


      if (!_this.ac || !_this.ident) {

        uni.showToast({
          title: '请填写正确的账单信息',
          icon: "none" });


        return false;

      }

      if (!_this.money) {
        uni.showToast({
          title: '请填写缴费金额',
          icon: "none" });


        return false;

      }






      _this.payment = 'alipay_mini_app';


      // uni.showToast({
      // 		title:'支付中...',
      // 		 icon:"none"  ,
      // 		 // mask:true,
      // 		duration:2000
      // 			 }) 

      this.$refs.popupmore.open();

      uni.request({
        url: "https://ccc.wangwanglive.com/index.php/index/lifepay/vlifecreate",
        data: {
          price: _this.money,
          itemid: _this.itemid,
          service_price: _this.service_charge,
          Identifier: _this.ident,
          AccountNo: _this.ac,
          user_id: uni.getStorageSync('userlist').user_id,
          payid: uni.getStorageSync('lpayid'),
          payment: _this.payment },

        // header:{
        // 	"Access-Control-Allow-Origin": "*"
        // },

        method: "POST",
        success: function success(res) {
          _this.$emit('fun', false);
          if (res.data.code == '200') {
            uni.setStorageSync('lpayid', res.data.id);
            var _data = JSON.parse(res.data.data);
            console.log(_data);
            if (_data.code == 0 && _data.desc == 'success') {

              var pay_param = JSON.parse(_data.data.content);
              console.log(pay_param);
              _this.juancashpay(pay_param);
            } else {

              uni.showToast({
                title: '' + _data.desc + '',
                icon: "none" });


            }



          } else {
            uni.showToast({
              title: '' + data.msg + '',
              icon: "none" });

          }




        },
        fail: function fail(error) {
          console.log(error);

        } });


      console.log(_this.money);
      console.log(_this.ac);
      console.log(_this.ident);



    },

    juanalipay: function juanalipay(orderInfo) {
      this.$refs.popupmore.close();
      console.log(orderInfo);
      uni.requestPayment({
        provider: 'alipay',
        orderStr: '' + orderInfo + '', // ==tradeNO 
        success: function success(res) {
          console.log('success:' + JSON.stringify(res));
          if (res.errMsg === 'requestPayment:ok') {
            uni.removeStorageSync('lpayid');
            uni.showToast({
              title: '支付成功',
              icon: "none" });

            uni.redirectTo({
              url: '/pages/lifepay/lifepay' });

          }
        }, fail: function fail(err) {
          console.log('fail:' + JSON.stringify(err));
        } });



    },


    juancashpay: function juancashpay(item) {
      this.$refs.popupmore.close();
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
            uni.removeStorageSync('lpayid');
            uni.showToast({
              title: '支付成功',
              icon: "none" });

            uni.redirectTo({
              url: '/pages/lifepay/lifepay' });

            return;
          }
          console.log('success:' + JSON.stringify(res));
        },
        fail: function fail(err) {
          console.log('fail:' + JSON.stringify(err));
        } });


    },

    fxpay: function fxpay(item) {
      this.$refs.popupmore.close();
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
            uni.removeStorageSync('payid');
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



    bindPickerChange: function bindPickerChange(e) {
      var _this = this;
      // 重置company
      _this.company = [{
        "name": "请选择缴费类型" }];

      console.log('picker发送选择改变，携带值为', e.target.value);
      // 每次选择,需要将下一级清零
      _this.index = e.target.value;
      _this.key = 0;

      console.log(_this.index);



















      switch (this.index) {
        case 1:
          _this.company = _this.company.concat(_this.sf);
          break;
        case 2:
          _this.company = _this.company.concat(_this.df);
          break;
        case 3:
          _this.company = _this.company.concat(_this.wf);
          break;}







      _this.type_ac = false;
    },
    bindPickerChange2: function bindPickerChange2(e) {

      //将数据统一在之前请求的数据中，将其全部包含在COMPANY中

      this.key = e.target.value;
      if (this.key == 0 || this.index == 0) {
        this.type_ac = false;
        return;
      }

      // 选取公司之后,将placeholder传入ACCOUNT&ID中

      var obj = JSON.parse(this.company[this.key].param);
      this.company[this.key].id;

      console.log(this.company[this.key]);


      this.itemid = this.company[this.key].fid;

      this.acPlac = obj[0].note;
      this.idPlac = obj[1].note;
      // this.idPlac = this.company[this.key].id



      // console.log(this.acPlac)

      this.type_ac = true;

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-alipay/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 133:
/*!*****************************************************************************************************************************!*\
  !*** G:/master/UNI-APP-CCC/components/paymentlist/paymentlist.vue?vue&type=style&index=0&id=4b72f7ce&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilder_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilder_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilder_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_paymentlist_vue_vue_type_style_index_0_id_4b72f7ce_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilder/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../HBuilder/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../HBuilder/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../HBuilder/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../HBuilder/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../HBuilder/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilder/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./paymentlist.vue?vue&type=style&index=0&id=4b72f7ce&scoped=true&lang=css& */ 134);
/* harmony import */ var _HBuilder_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilder_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilder_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_paymentlist_vue_vue_type_style_index_0_id_4b72f7ce_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilder_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilder_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilder_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_paymentlist_vue_vue_type_style_index_0_id_4b72f7ce_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilder_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilder_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilder_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_paymentlist_vue_vue_type_style_index_0_id_4b72f7ce_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilder_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilder_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilder_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_paymentlist_vue_vue_type_style_index_0_id_4b72f7ce_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilder_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilder_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilder_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_paymentlist_vue_vue_type_style_index_0_id_4b72f7ce_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 134:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!G:/master/UNI-APP-CCC/components/paymentlist/paymentlist.vue?vue&type=style&index=0&id=4b72f7ce&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/paymentlist/paymentlist-create-component',
    {
        'components/paymentlist/paymentlist-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(128))
        })
    },
    [['components/paymentlist/paymentlist-create-component']]
]);

(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/login/login"],{6276:function(e,n,t){"use strict";t.r(n);var o=t("eb6c"),a=t.n(o);for(var i in o)"default"!==i&&function(e){t.d(n,e,(function(){return o[e]}))}(i);n["default"]=a.a},"6d17":function(e,n,t){"use strict";(function(e){t("a2c3");o(t("66fd"));var n=o(t("ce48"));function o(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("c11b")["createPage"])},"944e":function(e,n,t){},c84f:function(e,n,t){"use strict";var o=t("944e"),a=t.n(o);a.a},ce48:function(e,n,t){"use strict";t.r(n);var o=t("d8be"),a=t("6276");for(var i in a)"default"!==i&&function(e){t.d(n,e,(function(){return a[e]}))}(i);t("c84f");var c,r=t("f0c5"),s=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],c);n["default"]=s.exports},d8be:function(e,n,t){"use strict";var o,a=function(){var e=this,n=e.$createElement;e._self._c},i=[];t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return o}))},eb6c:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={data:function(){return{appid:"wx697aacdfea834ee8",secret:"2e68fe5bf3f4869cf539c0f7a28586e2",code:"",sessionKey:"",openId:"",userInfo:{avatarUrl:"",city:"",country:"",gender:1,language:"",phone:"",nickName:""},user:[],pageOption:{}}},methods:{wxGetUserInfo:function(){var n=this;return console.log(111),e.getUserInfo({provider:"weixin",success:function(t){console.log(t),n.userInfo=t.userInfo,e.request({url:n.apiServer+"/index.php/api/Wxxcx/get_userinfo",data:{openid:n.openId,avatarUrl:n.userInfo.avatarUrl,city:n.userInfo.city,country:n.userInfo.country,gender:n.userInfo.gender,language:n.userInfo.language,nickName:n.userInfo.nickName},method:"POST",success:function(t){if(0!=t.data.code)return e.showToast({title:t.data.msg,icon:"none"}),!1;e.showToast({title:"登录成功"});var o={user_id:t.data.id,user_nm:t.data.wx_name,openid:t.data.openid,user_img:t.data.img_url,phone:t.data.phone};e.setStorageSync("userlist",o),console.log(n.pageOptio),n.pageOption.backtype,e.redirectTo({url:n.pageOption.backpage})},fail:function(){e.showToast({title:"用户信息操作失败",icon:"none"})}})},fail:function(){e.showToast({title:"获取用户信息失败",icon:"none"})}}),!1},login:function(){var n=this;return e.showLoading({title:"登录中..."}),e.login({provider:"weixin",success:function(t){console.log(t),n.code=t.code,e.request({url:"https://ccc.wangwanglive.com/index.php/api/Wxxcx/get_open?code="+n.code+"&grant_type=authorization_code",success:function(t){if(console.log(t),n.openId=t.data.openid,n.sessionKey=t.data.session_key,e.hideLoading(),1==t.data.code&&e.showToast({title:t.data.msg,icon:"none"}),0==t.data.code){e.showToast({title:"登录成功"});var o={user_id:t.data.memberid,user_nm:t.data.wx_name,openid:t.data.openid,user_img:t.data.img_url,phone:t.data.phone};e.setStorageSync("userlist",o),n.pageOption.backtype,e.redirectTo({url:n.pageOption.backpage})}},fail:function(){return e.showToast({title:"获取 SesssionKey OpenId 失败",icon:"none"}),!1}})},fail:function(){return e.showToast({title:"获取 code 失败",icon:"none"}),!1}}),!1}},onLoad:function(e){this.pageOption=e,this.login()}};n.default=t}).call(this,t("c11b")["default"])}},[["6d17","common/runtime","common/vendor"]]]);
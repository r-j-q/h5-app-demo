(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/message/messageindex"],{"0a2c":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;t("8a04");var a={props:["isActive","item","index"],data:function(){return{}},components:{},computed:{},methods:{togoMessageDetail:function(n,t){console.log("-------\x3e",n),2===n?e.navigateTo({url:"/pages/message/uploadAttachments?item="+encodeURIComponent(JSON.stringify(t))}):e.navigateTo({url:"/pages/message/messageDetail?item="+encodeURIComponent(JSON.stringify(t))})}},onReady:function(){}};n.default=a}).call(this,t("543d")["default"])},"0e62":function(e,n,t){"use strict";var a;t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return c})),t.d(n,"a",(function(){return a}));var o=function(){var e=this,n=e.$createElement;e._self._c},c=[]},"0f38":function(e,n,t){"use strict";t.r(n);var a=t("0e62"),o=t("b9fc");for(var c in o)"default"!==c&&function(e){t.d(n,e,(function(){return o[e]}))}(c);t("f732");var u,i=t("f0c5"),s=Object(i["a"])(o["default"],a["b"],a["c"],!1,null,"bf1e6302",null,!1,a["a"],u);n["default"]=s.exports},b9fc:function(e,n,t){"use strict";t.r(n);var a=t("0a2c"),o=t.n(a);for(var c in a)"default"!==c&&function(e){t.d(n,e,(function(){return a[e]}))}(c);n["default"]=o.a},c1d0:function(e,n,t){},f732:function(e,n,t){"use strict";var a=t("c1d0"),o=t.n(a);o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/message/messageindex-create-component',
    {
        'components/message/messageindex-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("0f38"))
        })
    },
    [['components/message/messageindex-create-component']]
]);

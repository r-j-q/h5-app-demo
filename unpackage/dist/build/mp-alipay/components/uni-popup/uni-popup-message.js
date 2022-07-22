;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/uni-popup/uni-popup-message"],{"1b8d":function(t,e,n){"use strict";var u=n("5610"),i=n.n(u);i.a},"28ac":function(t,e,n){"use strict";n.r(e);var u=n("6517"),i=n("3180");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("1b8d");var r,c=n("f0c5"),a=Object(c["a"])(i["default"],u["b"],u["c"],!1,null,"54b3772b",null,!1,u["a"],r);e["default"]=a.exports},3180:function(t,e,n){"use strict";n.r(e);var u=n("eddd"),i=n.n(u);for(var o in u)"default"!==o&&function(t){n.d(e,t,(function(){return u[t]}))}(o);e["default"]=i.a},5610:function(t,e,n){},6517:function(t,e,n){"use strict";var u,i=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return u}))},eddd:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={name:"UniPopupMessage",props:{type:{type:String,default:"success"},message:{type:String,default:""},duration:{type:Number,default:3e3}},inject:["popup"],data:function(){return{}},created:function(){this.popup.childrenMsg=this},methods:{open:function(){var t=this;0!==this.duration&&(clearTimeout(this.popuptimer),this.popuptimer=setTimeout((function(){t.popup.close()}),this.duration))},close:function(){clearTimeout(this.popuptimer)}}};e.default=u}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/uni-popup/uni-popup-message-create-component',
    {
        'components/uni-popup/uni-popup-message-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("28ac"))
        })
    },
    [['components/uni-popup/uni-popup-message-create-component']]
]);

(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-forum-add-or-update-forum-add-or-update"],{"073b":function(t,e,r){"use strict";r.r(e);var n=r("5c48"),i=r("96a8");for(var o in i)"default"!==o&&function(t){r.d(e,t,(function(){return i[t]}))}(o);r("e71c");var a,u=r("f0c5"),s=Object(u["a"])(i["default"],n["b"],n["c"],!1,null,"5c295780",null,!1,n["a"],a);e["default"]=s.exports},4280:function(t,e,r){"use strict";var n=r("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r("96cf");var i=n(r("3b8d")),o={data:function(){return{forum:{content:"",id:"",title:"",isdone:"开放",parentid:0},index:0,options:["开放","关闭"],username:"",user:{}}},onLoad:function(){var t=(0,i.default)(regeneratorRuntime.mark((function t(e){var r,n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=uni.getStorageSync("nowTable"),t.next=3,this.$api.session(r);case 3:if(n=t.sent,this.user=n.data,"yonghu"==r&&(this.username=this.user.zhanghao),!e.id){t.next=12;break}return this.id=e.id,t.next=10,this.$api.info("forum",this.id);case 10:i=t.sent,this.forum=i.data;case 12:this.styleChange();case 13:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},onSubmitTap:function(){var t=(0,i.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.forum.username=this.username,!this.id){t.next=6;break}return t.next=4,this.$api.update("forum",this.forum);case 4:t.next=8;break;case 6:return t.next=8,this.$api.save("forum",this.forum);case 8:this.$utils.msgBack("操作成功");case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),setIsDoneTap:function(t){this.index=t.target.value,this.forum.isdone=this.options[this.index]}}};e.default=o},"5c48":function(t,e,r){"use strict";var n,i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{staticClass:"container my-publish-pv"},[r("v-uni-form",[r("v-uni-view",{staticClass:"cu-form-group margin-top"},[r("v-uni-input",{style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"#333",textAlign:"left",borderWidth:"0",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{placeholder:"标题"},model:{value:t.forum.title,callback:function(e){t.$set(t.forum,"title",e)},expression:"forum.title"}})],1),r("v-uni-view",{staticClass:"cu-form-group margin-top"},[r("v-uni-picker",{attrs:{value:t.index,range:t.options},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.setIsDoneTap.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"uni-picker-type",style:{lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"left"}},[t._v(t._s(t.options[t.index]))])],1)],1),r("v-uni-view",{staticClass:"cu-form-group margin-top"},[r("v-uni-textarea",{staticStyle:{height:"500upx"},style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"#333",borderWidth:"0",fontSize:"28rpx",borderStyle:"solid",height:"300rpx"},attrs:{placeholder:"内容"},model:{value:t.forum.content,callback:function(e){t.$set(t.forum,"content",e)},expression:"forum.content"}})],1),r("v-uni-view",{staticClass:"cu-form-group margin-top",staticStyle:{"text-align":"center"}},[r("v-uni-button",{staticClass:"bg-red margin-tb-sm",style:{boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",backgroundColor:"#409EFF",borderColor:"#409EFF",borderRadius:"40rpx",color:"#fff",borderWidth:"1",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onSubmitTap.apply(void 0,arguments)}}},[t._v("确认提交")])],1)],1)],1)},o=[];r.d(e,"b",(function(){return i})),r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){return n}))},"835b":function(t,e,r){var n=r("a5a1");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=r("4f06").default;i("4d787819",n,!0,{sourceMap:!1,shadowMode:!1})},"96a8":function(t,e,r){"use strict";r.r(e);var n=r("4280"),i=r.n(n);for(var o in n)"default"!==o&&function(t){r.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},a5a1:function(t,e,r){var n=r("24fb");e=n(!1),e.push([t.i,'uni-page-body[data-v-5c295780]{background-color:#fff}.container[data-v-5c295780]{padding:%?20?% %?24?%}.container[data-v-5c295780]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}.cu-form-group[data-v-5c295780]{padding:0;background-color:initial;min-height:inherit}.cu-form-group+.cu-form-group[data-v-5c295780]{border:0}.cu-form-group uni-input[data-v-5c295780]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-5c295780]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-5c295780]::after{line-height:%?80?%}.bg-red[data-v-5c295780]{line-height:%?80?%}body.?%PAGE?%[data-v-5c295780]{background-color:#fff}',""]),t.exports=e},e71c:function(t,e,r){"use strict";var n=r("835b"),i=r.n(n);i.a}}]);
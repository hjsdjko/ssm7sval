(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shumujuankuan-add-or-update"],{"0228":function(e,r,t){"use strict";var n=t("4ea4");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,t("ac6a"),t("96cf");var a=n(t("3b8d")),i=n(t("e2b1")),o={data:function(){return{ruleForm:{juankuangonggaobiaoti:"",juankuanneirong:"",juankuanjiage:"",fengmiantu:"",zhanghao:"",nianjizhuanye:"",xingming:"",sfsh:"",shhf:"",ispay:""},user:{},ro:{juankuangonggaobiaoti:!1,juankuanneirong:!1,juankuanjiage:!1,fengmiantu:!1,zhanghao:!1,nianjizhuanye:!1,xingming:!1,sfsh:!1,shhf:!1,ispay:!1}}},components:{wPicker:i.default},computed:{},onLoad:function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(r){var t,n,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=uni.getStorageSync("nowTable"),e.next=3,this.$api.session(t);case 3:if(n=e.sent,this.user=n.data,this.ruleForm.userid=uni.getStorageSync("userid"),r.refid&&(this.ruleForm.refid=r.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!r.id){e.next=13;break}return this.ruleForm.id=r.id,e.next=11,this.$api.info("shumujuankuan",this.ruleForm.id);case 11:n=e.sent,this.ruleForm=n.data;case 13:if(!r.cross){e.next=48;break}a=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(a);case 16:if((e.t1=e.t0()).done){e.next=48;break}if(i=e.t1.value,"juankuangonggaobiaoti"!=i){e.next=22;break}return this.ruleForm.juankuangonggaobiaoti=a[i],this.ro.juankuangonggaobiaoti=!0,e.abrupt("continue",16);case 22:if("juankuanneirong"!=i){e.next=26;break}return this.ruleForm.juankuanneirong=a[i],this.ro.juankuanneirong=!0,e.abrupt("continue",16);case 26:if("juankuanjiage"!=i){e.next=30;break}return this.ruleForm.juankuanjiage=a[i],this.ro.juankuanjiage=!0,e.abrupt("continue",16);case 30:if("fengmiantu"!=i){e.next=34;break}return this.ruleForm.fengmiantu=a[i],this.ro.fengmiantu=!0,e.abrupt("continue",16);case 34:if("zhanghao"!=i){e.next=38;break}return this.ruleForm.zhanghao=a[i],this.ro.zhanghao=!0,e.abrupt("continue",16);case 38:if("nianjizhuanye"!=i){e.next=42;break}return this.ruleForm.nianjizhuanye=a[i],this.ro.nianjizhuanye=!0,e.abrupt("continue",16);case 42:if("xingming"!=i){e.next=46;break}return this.ruleForm.xingming=a[i],this.ro.xingming=!0,e.abrupt("continue",16);case 46:e.next=16;break;case 48:this.styleChange();case 49:case"end":return e.stop()}}),e,this)})));function r(r){return e.apply(this,arguments)}return r}(),methods:{styleChange:function(){this.$nextTick((function(){}))},fengmiantuTap:function(){var e=this;this.$api.upload((function(r){e.ruleForm.fengmiantu=e.$base.url+"upload/"+r.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.ruleForm.id){e.next=5;break}return e.next=3,this.$api.update("shumujuankuan",this.ruleForm);case 3:e.next=7;break;case 5:return e.next=7,this.$api.add("shumujuankuan",this.ruleForm);case 7:this.$utils.msgBack("提交成功");case 8:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var r=new Date,t=r.getFullYear(),n=r.getMonth()+1,a=r.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),n=n>9?n:"0"+n,a=a>9?a:"0"+a,"".concat(t,"-").concat(n,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};r.default=o},"85aa":function(e,r,t){"use strict";var n=t("b199"),a=t.n(n);a.a},9452:function(e,r,t){"use strict";t.r(r);var n=t("e3af"),a=t("d893");for(var i in a)"default"!==i&&function(e){t.d(r,e,(function(){return a[e]}))}(i);t("85aa");var o,u=t("f0c5"),l=Object(u["a"])(a["default"],n["b"],n["c"],!1,null,"f7cf26d8",null,!1,n["a"],o);r["default"]=l.exports},b199:function(e,r,t){var n=t("e4bd");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=t("4f06").default;a("1db3a3b1",n,!0,{sourceMap:!1,shadowMode:!1})},d893:function(e,r,t){"use strict";t.r(r);var n=t("0228"),a=t.n(n);for(var i in n)"default"!==i&&function(e){t.d(r,e,(function(){return n[e]}))}(i);r["default"]=a.a},e3af:function(e,r,t){"use strict";var n,a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("v-uni-view",{staticClass:"content"},[t("v-uni-form",{staticClass:"app-update-pv"},[t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(41, 40, 40, 1)",textAlign:"left"}},[e._v("捐款公告标题")]),t("v-uni-input",{style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(40, 38, 38, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.juankuangonggaobiaoti,placeholder:"捐款公告标题"},model:{value:e.ruleForm.juankuangonggaobiaoti,callback:function(r){e.$set(e.ruleForm,"juankuangonggaobiaoti",r)},expression:"ruleForm.juankuangonggaobiaoti"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(41, 40, 40, 1)",textAlign:"left"}},[e._v("捐款内容")]),t("v-uni-input",{style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(40, 38, 38, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.juankuanneirong,placeholder:"捐款内容"},model:{value:e.ruleForm.juankuanneirong,callback:function(r){e.$set(e.ruleForm,"juankuanneirong",r)},expression:"ruleForm.juankuanneirong"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(41, 40, 40, 1)",textAlign:"left"}},[e._v("捐款价格")]),t("v-uni-input",{style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(40, 38, 38, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.juankuanjiage,placeholder:"捐款价格"},model:{value:e.ruleForm.juankuanjiage,callback:function(r){e.$set(e.ruleForm,"juankuanjiage",r)},expression:"ruleForm.juankuanjiage"}})],1),t("v-uni-view",{staticClass:"cu-form-group",class:"left"==e.left?"":"active",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.fengmiantuTap.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(23, 22, 22, 1)",textAlign:"left"}},[e._v("封面图")]),t("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"},style:{textAlign:"left"}},[e.ruleForm.fengmiantu?t("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:e.ruleForm.fengmiantu,mode:"aspectFill"}}):t("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(41, 40, 40, 1)",textAlign:"left"}},[e._v("账号")]),t("v-uni-input",{style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(40, 38, 38, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.zhanghao,placeholder:"账号"},model:{value:e.ruleForm.zhanghao,callback:function(r){e.$set(e.ruleForm,"zhanghao",r)},expression:"ruleForm.zhanghao"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(41, 40, 40, 1)",textAlign:"left"}},[e._v("年级专业")]),t("v-uni-input",{style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(40, 38, 38, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.nianjizhuanye,placeholder:"年级专业"},model:{value:e.ruleForm.nianjizhuanye,callback:function(r){e.$set(e.ruleForm,"nianjizhuanye",r)},expression:"ruleForm.nianjizhuanye"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(41, 40, 40, 1)",textAlign:"left"}},[e._v("姓名")]),t("v-uni-input",{style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(40, 38, 38, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.xingming,placeholder:"姓名"},model:{value:e.ruleForm.xingming,callback:function(r){e.$set(e.ruleForm,"xingming",r)},expression:"ruleForm.xingming"}})],1),t("v-uni-view",{staticClass:"btn"},[t("v-uni-button",{staticClass:"bg-red",style:{boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",backgroundColor:"#409EFF",borderColor:"#409EFF",borderRadius:"40rpx",color:"#fff",borderWidth:"1",width:"80%",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1)],1)},i=[];t.d(r,"b",(function(){return a})),t.d(r,"c",(function(){return i})),t.d(r,"a",(function(){return n}))},e4bd:function(e,r,t){var n=t("24fb");r=n(!1),r.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-f7cf26d8]{padding:%?20?%}.content[data-v-f7cf26d8]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-f7cf26d8]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-f7cf26d8]{width:%?180?%}.avator[data-v-f7cf26d8]{width:%?150?%;height:%?60?%}.right-input[data-v-f7cf26d8]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-f7cf26d8]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-f7cf26d8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-f7cf26d8]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-f7cf26d8]{border:0}.cu-form-group uni-input[data-v-f7cf26d8]{padding:0 %?30?%}.uni-input[data-v-f7cf26d8]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-f7cf26d8]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-f7cf26d8]::after{line-height:%?88?%}.select .uni-input[data-v-f7cf26d8]{line-height:%?88?%}.input .right-input[data-v-f7cf26d8]{line-height:%?88?%}',""]),e.exports=r}}]);
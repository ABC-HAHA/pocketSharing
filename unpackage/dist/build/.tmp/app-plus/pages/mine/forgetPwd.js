(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/forgetPwd"],{"089b":function(t,e,n){},"11ab":function(t,e,n){"use strict";var i=n("089b"),s=n.n(i);s.a},"53f9":function(t,e,n){"use strict";n.r(e);var i=n("da1f"),s=n("f4f8");for(var o in s)"default"!==o&&function(t){n.d(e,t,function(){return s[t]})}(o);n("11ab");var a,u=n("f0c5"),c=Object(u["a"])(s["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],a);e["default"]=c.exports},"5b59":function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{phoneNum:"",smsCode:"",password:"",confirmPwd:"",phoneFalg:!1,codeFalg:!1,pwdFalg:!1,beginFalg:!1,isSame:!1,sendCodeText:"发送验证码",timeText:"",num:60,system:""}},onShow:function(){this.system=plus.os.name.toUpperCase()},methods:{sendCode:function(){var e=/^1[3-9]\d{9}$/;if(""==this.phoneNum||!e.test(this.phoneNum))return t.showToast({title:"请检查手机号",icon:"none",mask:!0}),setTimeout(function(){t.hideToast()},2e3),!1;this.codeTime=setInterval(this.countDown,1e3);var i=this.phoneNum;t.request({url:this.websiteUrl+"/api/user/code/sms",method:"POST",data:{mobile:i},success:function(t){n("log",t," at pages\\mine\\forgetPwd.vue:88")},fail:function(){},complete:function(){}})},countDown:function(){this.num--,this.beginFalg=!0,this.timeText=this.num+"s",this.num<=0&&(this.num=60,this.timeText="",this.beginFalg=!1,clearInterval(this.codeTime))},checkPhone:function(){var e=/^1[3-9]\d{9}$/;return""!=this.phoneNum&&e.test(this.phoneNum)?(this.phoneFalg=!0,!0):(this.phoneFalg=!1,t.showToast({title:"请检查手机号",icon:"none",mask:!0}),setTimeout(function(){t.hideToast()},2e3),!1)},checkCode:function(){return""!=this.smsCode?(this.codeFalg=!0,!0):(this.codeFalg=!1,t.showToast({title:"验证码不能为空",icon:"none",mask:!0}),setTimeout(function(){t.hideToast()},2e3),!1)},checkPwd:function(){var e=/^(?![a-zA-Z]+$)(?![0-9]+$)[A-Za-z0-9]{6,15}$/;return""!=this.password&&e.test(this.password)?(this.pwdFalg=!0,!0):(this.pwdFalg=!1,t.showToast({title:"请输入6-15位的字母数字组合",icon:"none",mask:!0}),setTimeout(function(){t.hideToast()},2e3),!1)},checkPwdSame:function(){return""!=this.confirmPwd&&this.password===this.confirmPwd?(this.isSame=!0,!0):(this.isSame=!1,t.showToast({title:"两次密码必须相同",icon:"none",mask:!0}),setTimeout(function(){t.hideToast()},2e3),!1)},confirm:function(){if(!(this.checkPhone()&&this.checkPwd()&&this.checkPwdSame()&&this.checkCode()))return!1;var e=this.password,n=this.phoneNum;t.request({url:this.websiteUrl+"/api/user/updateUserPw",method:"POST",data:{mobile:n,pw:e,smsCode:this.smsCode},success:function(e){e.data&&200===e.data.code?(t.showToast({title:"修改成功",mask:!0}),setTimeout(function(){t.hideToast(),t.navigateBack({delta:1,animationType:"slide-in-left"})},1600)):(t.showToast({title:e.data.message,icon:"none",mask:!0}),setTimeout(function(){t.hideToast()},2e3))},fail:function(t){},complete:function(){}})}}};e.default=i}).call(this,n("6e42")["default"],n("0de9")["default"])},da1f:function(t,e,n){"use strict";var i,s=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"b",function(){return s}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return i})},df4e:function(t,e,n){"use strict";(function(t){n("ed2b"),n("921b");i(n("66fd"));var e=i(n("53f9"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},f4f8:function(t,e,n){"use strict";n.r(e);var i=n("5b59"),s=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=s.a}},[["df4e","common/runtime","common/vendor"]]]);
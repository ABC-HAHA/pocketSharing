(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/lianjiePromoting/detail/detail"],{1716:function(t,e,a){"use strict";a.r(e);var i=a("f966"),n=a("7387");for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);a("7edf");var s,u=a("f0c5"),r=Object(u["a"])(n["default"],i["b"],i["c"],!1,null,"5d6e7816",null,!1,i["a"],s);e["default"]=r.exports},"3c60":function(t,e,a){"use strict";a.r(e);var i=a("987a"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);e["default"]=n.a},"5e21":function(t,e,a){"use strict";var i={"uni-popup":()=>a.e("components/uni-popup/uni-popup").then(a.bind(null,"b841"))},n=function(){var t=this,e=t.$createElement;t._self._c},o=[];a.d(e,"b",function(){return n}),a.d(e,"c",function(){return o}),a.d(e,"a",function(){return i})},7387:function(t,e,a){"use strict";a.r(e);var i=a("d597"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);e["default"]=n.a},7782:function(t,e,a){"use strict";var i=a("b9c0"),n=a.n(i);n.a},"7edf":function(t,e,a){"use strict";var i=a("d392"),n=a.n(i);n.a},"987a":function(t,e,a){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(a("1716"));function o(t){return t&&t.__esModule?t:{default:t}}var s,u,r,l,d,c=function(){return a.e("pages/lianjiePromoting/uni-popup/uni-popup").then(a.bind(null,"8054"))},f=function(){return a.e("pages/lianjiePromoting/share/share").then(a.bind(null,"83f1"))},p=[],h={data:function(){return{cancelShow:!1,btnArray:"",btnIndex:0,showUpload:!1,checkValue:!0,detailData:[],upperLimit:0,isLimit:!1,upPic:"",upPicList:"",type:""}},methods:{closeAlert:function(){this.cancelShow=!1},openBrowser:function(t){plus.runtime.openURL(t)},getTask:function(e){this.$store.state.isLogin?this.$store.state.userInfo.inviteGroupId>=this.detailData.taskLevel?(t("log",this.btnIndex," at pages\\lianjiePromoting\\detail\\detail.vue:92"),1==this.btnIndex?(t("log",this.btnIndex," at pages\\lianjiePromoting\\detail\\detail.vue:95"),t("log",u," at pages\\lianjiePromoting\\detail\\detail.vue:96"),t("log",this.$store.state.isLogin," at pages\\lianjiePromoting\\detail\\detail.vue:97"),s=this,i.request({url:this.websiteUrl+"/api/task/recieve",method:"GET",header:{Authorization:l},data:{esaid:u,userId:r},success:function(e){t("log",e,11111111111," at pages\\lianjiePromoting\\detail\\detail.vue:110"),601==e.data.code?(i.showToast({title:"请去审核账户！",mask:!0}),i.redirectTo({url:"/pages/mine/auditPage",animationType:"slide-in-right",animationDuration:300})):705==e.data.code?(plus.nativeUI.toast(e.data.msg),s.btnIndex=2):200==e.data.code&&(i.showToast({title:"领取成功",mask:!0}),s.btnArray="提交审核",s.btnIndex=2)}})):2==this.btnIndex&&(t("log","点击了提交审核"," at pages\\lianjiePromoting\\detail\\detail.vue:144"),this.submitAudit())):plus.nativeUI.toast("请领取匹配自己账户等级的任务!!!"):(this.cancelShow=!0,t("log","未登录"," at pages\\lianjiePromoting\\detail\\detail.vue:154"))},strFormat:function(t){return t.replace(/<br\s*\/?>/gi,"\r\n")},hidePopup:function(){this.type=""},share:function(){this.type="bottom_share"},successShare:function(){i.showToast({title:"分享成功！！！",mask:!0})},failShare:function(){i.showToast({title:"分享失败！！！",mask:!0})},copy:function(){var t=this.detailData.esaDescribe1;i.setClipboardData({data:this.strFormat(t),success:function(){i.showToast({title:"复制成功",mask:!0}),setTimeout(function(){i.hideToast()},2e3)}})},upload:function(){var t=this;i.chooseImage({success:function(e){var a=e.tempFilePaths;i.uploadFile({url:t.websiteUrl+"/api/file/uploadFile",filePath:a[0],name:"file",header:{Authorization:l},success:function(t){i.showToast({title:"上传成功",mask:!0}),s.upPic=JSON.parse(t.data).imgurl,p.push(s.upPic),s.checkValue=!1}})}})},submitAudit:function(){0==p.length?plus.nativeUI.toast("请上传需要审核的照片！！！"):i.request({url:this.websiteUrl+"/api/comnet/audit",method:"POST",header:{Authorization:l},data:{extendId:d,imgList:p},success:function(e){t("log",e.data," at pages\\lianjiePromoting\\detail\\detail.vue:266"),i.showToast({title:"提交审核成功",mask:!0}),s.showUpload=!0,s.checkValue=!1,1==e.data.status&&(s.btnArray=e.data.statusStr,s.btnIndex=3)}})}},components:{hFormAlert:n.default,uniPopup:c,sharePage:f},onLoad:function(e){r=this.$store.state.userInfo.userId,l=this.$store.state.userInfo.token,s=this,u=e.esaId,this.$store.state.isLogin?(t("log","已经登录"," at pages\\lianjiePromoting\\detail\\detail.vue:296"),i.request({url:this.websiteUrl+"/api/comnet/info/"+u,method:"GET",data:{userId:r},success:function(e){if(s.detailData=e.data.data,d=s.detailData.extendInfoId,t("log",s.detailData," at pages\\lianjiePromoting\\detail\\detail.vue:307"),-1==s.detailData.status){if(s.upperLimit=s.detailData.esaUsedCount,s.upperLimit>=s.detailData.esaTotalCount)return s.isLimit=!0,void(s.btnArray="任务已达上限");s.btnIndex=1,s.btnArray="领取任务"}0==s.detailData.status&&(s.btnIndex=2,s.btnArray=s.detailData.statusStr,s.showUpload=!0),1==s.detailData.status&&(s.btnIndex=3,s.btnArray=s.detailData.statusStr,s.showUpload=!0,s.checkValue=!1,s.upPicList=s.detailData.imgs[0].image),2==s.detailData.status&&(s.btnArray=s.detailData.statusStr,s.showUpload=!1,s.checkValue=!0,s.detailData.status,s.btnIndex=1,s.btnArray="领取任务"),3==s.detailData.status&&(s.btnArray=s.detailData.statusStr,s.showUpload=!0,s.checkValue=!1)}})):(t("log","未登录"," at pages\\lianjiePromoting\\detail\\detail.vue:375"),i.request({url:this.websiteUrl+"/api/comnet/info/"+u,method:"GET",success:function(e){if(s.detailData=e.data.data,t("log",s.detailData," at pages\\lianjiePromoting\\detail\\detail.vue:381"),-1==s.detailData.status){if(s.upperLimit=s.detailData.esaUsedCount,s.upperLimit>=s.detailData.esaTotalCount)return s.isLimit=!0,void(s.btnArray="任务已达上限");s.btnIndex=1,s.btnArray="领取任务"}}}))},onShow:function(){}};e.default=h}).call(this,a("0de9")["default"],a("6e42")["default"])},b9c0:function(t,e,a){},d392:function(t,e,a){},d597:function(t,e,a){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{title:{type:String,default:"网赚登录"}},data:function(){return{maskValue:!0,inviteCode:""}},onLoad:function(){var e=this;t.getStorage({key:"openinstallInfo",success:function(t){a("log","ok"," at components\\h-form-alert\\h-form-alert.vue:37"),e.inviteCode=JSON.parse(JSON.parse(t.data).bindData).inviteCode}})},methods:{closeMask:function(){this.$emit("closeEvent")},weixinlogin:function(){var e=this;t.login({provider:"weixin",success:function(a){t.getUserInfo({provider:"weixin",success:function(t){e.toWeixinLogin(a,t)}})}})},toWeixinLogin:function(e,a){var i=this,n={openid:e.authResult.openid,nickname:a.userInfo.nickName,headimgurl:a.userInfo.avatarUrl,accessToken:e.authResult.access_token,refreshToken:e.authResult.refresh_token,inviteCode:i.inviteCode};t.request({url:this.websiteUrl+"/api/user/weixin",method:"POST",data:n,success:function(e){200==e.data.code?(i.$store.commit("login",e.data.user),t.switchTab({url:"/pages/tarbar/mine/mine",animationType:"slide-in-right"})):plus.nativeUI.toast(e.data.msg)},fail:function(){},complete:function(){}})},iphonelogin:function(){t.navigateTo({url:"/pages/mine/login",animationType:"slide-in-right"})}}};e.default=i}).call(this,a("6e42")["default"],a("0de9")["default"])},e3e0:function(t,e,a){"use strict";(function(t){a("ed2b"),a("921b");i(a("66fd"));var e=i(a("e4ad"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},e4ad:function(t,e,a){"use strict";a.r(e);var i=a("5e21"),n=a("3c60");for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);a("7782");var s,u=a("f0c5"),r=Object(u["a"])(n["default"],i["b"],i["c"],!1,null,"7995eae8",null,!1,i["a"],s);e["default"]=r.exports},f966:function(t,e,a){"use strict";var i,n=function(){var t=this,e=t.$createElement;t._self._c},o=[];a.d(e,"b",function(){return n}),a.d(e,"c",function(){return o}),a.d(e,"a",function(){return i})}},[["e3e0","common/runtime","common/vendor"]]]);
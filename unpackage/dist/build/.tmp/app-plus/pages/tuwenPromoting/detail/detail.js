(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tuwenPromoting/detail/detail"],{1630:function(t,e,a){},1716:function(t,e,a){"use strict";a.r(e);var n=a("f966"),i=a("7387");for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);a("7edf");var u,s=a("f0c5"),r=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"5d6e7816",null,!1,n["a"],u);e["default"]=r.exports},3169:function(t,e,a){"use strict";var n,i=function(){var t=this,e=t.$createElement;t._self._c},o=[];a.d(e,"b",function(){return i}),a.d(e,"c",function(){return o}),a.d(e,"a",function(){return n})},3701:function(t,e,a){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=s(a("ab78")),o=s(a("f3b1")),u=s(a("1716"));function s(t){return t&&t.__esModule?t:{default:t}}var r,l,d,c,f,p=function(){return a.e("components/uni-popup/uni-popup").then(a.bind(null,"b841"))},h=function(){return a.e("components/share/share").then(a.bind(null,"660c"))},m=[],g={data:function(){return{cancelShow:!1,showSwiperValue:!1,showUpload:!1,btnArray:"",btnIndex:0,checkValue:!0,flag:!1,detailData:[],upperLimit:0,isLimit:!1,upPic:"",upPicList:"",type:""}},methods:{showSwiper:function(){this.showSwiperValue=!this.showSwiperValue,this.flag=!this.flag,t("log",this.showSwiperValue," at pages\\tuwenPromoting\\detail\\detail.vue:93")},closeSwiper:function(){this.showSwiperValue=!this.showSwiperValue,this.flag=!this.flag},closeAlert:function(){this.cancelShow=!1},getTask:function(e){t("log",this.$store.state.userInfo.status," at pages\\tuwenPromoting\\detail\\detail.vue:108"),this.$store.state.isLogin?this.$store.state.userInfo.inviteGroupId>=this.detailData.taskLevel?(t("log",this.btnIndex," at pages\\tuwenPromoting\\detail\\detail.vue:114"),1==this.btnIndex?(t("log",this.btnIndex," at pages\\tuwenPromoting\\detail\\detail.vue:117"),t("log",l," at pages\\tuwenPromoting\\detail\\detail.vue:118"),t("log",this.$store.state.isLogin," at pages\\tuwenPromoting\\detail\\detail.vue:119"),r=this,n.request({url:this.websiteUrl+"/api/task/recieve",method:"GET",header:{Authorization:c},data:{esaid:l,userId:d},success:function(e){t("log",e,11111111111," at pages\\tuwenPromoting\\detail\\detail.vue:132"),601==e.data.code?(n.showToast({title:"请去审核账户！",mask:!0}),n.redirectTo({url:"/pages/mine/auditPage",animationType:"slide-in-right",animationDuration:300})):705==e.data.code?(plus.nativeUI.toast(e.data.msg),r.btnIndex=2):200==e.data.code&&(r.showUpload=!0,n.showToast({title:"领取成功",mask:!0}),r.btnArray="提交审核",r.btnIndex=2)}})):2==this.btnIndex&&(t("log","点击了提交审核"," at pages\\tuwenPromoting\\detail\\detail.vue:167"),this.submitAudit())):plus.nativeUI.toast("请领取匹配自己账户等级的任务!!!"):(this.cancelShow=!0,t("log","未登录"," at pages\\tuwenPromoting\\detail\\detail.vue:177"))},copy:function(){var t=this.detailData.esaDescribe1;n.setClipboardData({data:this.strFormat(t),success:function(){n.showToast({title:"复制成功",mask:!0}),setTimeout(function(){n.hideToast()},2e3)}})},strFormat:function(t){return t.replace(/<br\s*\/?>/gi,"\r\n")},hidePopup:function(){this.type=""},share:function(){this.type="bottom_share"},successShare:function(){n.showToast({title:"分享成功！！！",mask:!0})},failShare:function(){n.showToast({title:"分享失败！！！",mask:!0})},savePic:function(){var e=[],a=!0,n=!1,o=void 0;try{for(var u,s=this.detailData["esaLinkInfoList"][Symbol.iterator]();!(a=(u=s.next()).done);a=!0){var r=u.value;e.push(r.linkComment)}}catch(l){n=!0,o=l}finally{try{a||null==s.return||s.return()}finally{if(n)throw o}}i.default.downloadSaveFiles({urls:e,success:function(t){},fail:function(e){t("info","下载失败"," at pages\\tuwenPromoting\\detail\\detail.vue:259")}})},upload:function(){var t=this;n.chooseImage({success:function(e){var a=e.tempFilePaths;n.uploadFile({url:t.websiteUrl+"/api/file/uploadFile",filePath:a[0],name:"file",header:{Authorization:c},success:function(t){n.showToast({title:"上传成功",mask:!0}),r.upPic=JSON.parse(t.data).imgurl,m.push(r.upPic),r.checkValue=!1}})}})},submitAudit:function(){0==m.length?plus.nativeUI.toast("请上传需要审核的照片！！！"):n.request({url:this.websiteUrl+"/api/comnet/audit",method:"POST",header:{Authorization:c},data:{extendId:f,imgList:m},success:function(e){t("log",e.data," at pages\\tuwenPromoting\\detail\\detail.vue:309"),n.showToast({title:"提交审核成功",mask:!0}),r.showUpload=!0,r.checkValue=!1,1==e.data.status&&(r.btnArray=e.data.statusStr,r.btnIndex=3)}})}},components:{UniSwiperDot:o.default,hFormAlert:u.default,uniPopup:p,sharePage:h},onLoad:function(e){d=this.$store.state.userInfo.userId,c=this.$store.state.userInfo.token,r=this,l=e.esaId,t("log",l," at pages\\tuwenPromoting\\detail\\detail.vue:339"),this.$store.state.isLogin?(t("log","已经登录"," at pages\\tuwenPromoting\\detail\\detail.vue:342"),n.request({url:this.websiteUrl+"/api/comnet/info/"+l,method:"GET",data:{userId:d},success:function(e){if(r.detailData=e.data.data,f=r.detailData.extendInfoId,t("log",r.detailData," at pages\\tuwenPromoting\\detail\\detail.vue:353"),-1==r.detailData.status){if(r.upperLimit=r.detailData.esaUsedCount,r.upperLimit>=r.detailData.esaTotalCount)return r.isLimit=!0,void(r.btnArray="任务已达上限");r.btnIndex=1,r.btnArray="领取任务"}0==r.detailData.status&&(r.btnIndex=2,r.btnArray=r.detailData.statusStr,r.showUpload=!0),1==r.detailData.status&&(r.btnIndex=3,r.btnArray=r.detailData.statusStr,r.showUpload=!0,r.checkValue=!1,r.upPicList=r.detailData.imgs[0].image),2==r.detailData.status&&(r.btnArray=r.detailData.statusStr,r.showUpload=!1,r.checkValue=!0,r.detailData.status,r.btnIndex=1,r.btnArray="领取任务"),3==r.detailData.status&&(r.btnArray=r.detailData.statusStr,r.showUpload=!0,r.checkValue=!1)}})):(t("log","未登录"," at pages\\tuwenPromoting\\detail\\detail.vue:421"),n.request({url:this.websiteUrl+"/api/comnet/info/"+l,method:"GET",success:function(t){if(r.detailData=t.data.data,-1==r.detailData.status){if(r.upperLimit=r.detailData.esaUsedCount,r.upperLimit>=r.detailData.esaTotalCount)return r.isLimit=!0,void(r.btnArray="任务已达上限");r.btnIndex=1,r.btnArray="领取任务"}}}))},onShow:function(){}};e.default=g}).call(this,a("0de9")["default"],a("6e42")["default"])},4793:function(t,e,a){},"4a9e":function(t,e,a){"use strict";a.r(e);var n=a("b1d7"),i=a("daf4");for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);a("be60");var u,s=a("f0c5"),r=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"e9d40acc",null,!1,n["a"],u);e["default"]=r.exports},6689:function(t,e,a){"use strict";(function(t){a("ed2b"),a("921b");n(a("66fd"));var e=n(a("4a9e"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},7387:function(t,e,a){"use strict";a.r(e);var n=a("d597"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);e["default"]=i.a},"7a41":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{current:0,swiperCurrent:0,currIndex:1}},methods:{changeSwiper:function(t){this.swiperCurrent=t.detail.current,this.currIndex=t.detail.current+1}},props:{swiperImg:{type:Array}},onLoad:function(){}};e.default=n},"7edf":function(t,e,a){"use strict";var n=a("d392"),i=a.n(n);i.a},b1d7:function(t,e,a){"use strict";var n={"uni-popup":()=>a.e("components/uni-popup/uni-popup").then(a.bind(null,"b841"))},i=function(){var t=this,e=t.$createElement;t._self._c},o=[];a.d(e,"b",function(){return i}),a.d(e,"c",function(){return o}),a.d(e,"a",function(){return n})},b4cd:function(t,e,a){"use strict";var n=a("1630"),i=a.n(n);i.a},b580:function(t,e,a){"use strict";a.r(e);var n=a("7a41"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);e["default"]=i.a},be60:function(t,e,a){"use strict";var n=a("4793"),i=a.n(n);i.a},d392:function(t,e,a){},d597:function(t,e,a){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{title:{type:String,default:"网赚登录"}},data:function(){return{maskValue:!0,inviteCode:""}},onLoad:function(){var e=this;t.getStorage({key:"openinstallInfo",success:function(t){a("log","ok"," at components\\h-form-alert\\h-form-alert.vue:37"),e.inviteCode=JSON.parse(JSON.parse(t.data).bindData).inviteCode}})},methods:{closeMask:function(){this.$emit("closeEvent")},weixinlogin:function(){var e=this;t.login({provider:"weixin",success:function(a){t.getUserInfo({provider:"weixin",success:function(t){e.toWeixinLogin(a,t)}})}})},toWeixinLogin:function(e,a){var n=this,i={openid:e.authResult.openid,nickname:a.userInfo.nickName,headimgurl:a.userInfo.avatarUrl,accessToken:e.authResult.access_token,refreshToken:e.authResult.refresh_token,inviteCode:n.inviteCode};t.request({url:this.websiteUrl+"/api/user/weixin",method:"POST",data:i,success:function(e){200==e.data.code?(n.$store.commit("login",e.data.user),t.switchTab({url:"/pages/tarbar/mine/mine",animationType:"slide-in-right"})):plus.nativeUI.toast(e.data.msg)},fail:function(){},complete:function(){}})},iphonelogin:function(){t.navigateTo({url:"/pages/mine/login",animationType:"slide-in-right"})}}};e.default=n}).call(this,a("6e42")["default"],a("0de9")["default"])},daf4:function(t,e,a){"use strict";a.r(e);var n=a("3701"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);e["default"]=i.a},f3b1:function(t,e,a){"use strict";a.r(e);var n=a("3169"),i=a("b580");for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);a("b4cd");var u,s=a("f0c5"),r=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],u);e["default"]=r.exports},f966:function(t,e,a){"use strict";var n,i=function(){var t=this,e=t.$createElement;t._self._c},o=[];a.d(e,"b",function(){return i}),a.d(e,"c",function(){return o}),a.d(e,"a",function(){return n})}},[["6689","common/runtime","common/vendor"]]]);
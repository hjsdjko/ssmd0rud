(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/storeup/detail"],{1287:function(t,e,n){"use strict";var a=n("db66"),r=n.n(a);r.a},"29d0":function(t,e,n){"use strict";n.r(e);var a=n("ff14"),r=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);e["default"]=r.a},5485:function(t,e,n){"use strict";(function(t){n("36e8");a(n("66fd"));var e=a(n("dbbb"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"5c06":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return a}));var a={mescrollUni:function(){return Promise.all([n.e("common/vendor"),n.e("components/mescroll-uni/mescroll-uni")]).then(n.bind(null,"e24d"))},uniPopup:function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"8e77"))}},r=function(){var t=this,e=t.$createElement;t._self._c},s=[]},db66:function(t,e,n){},dbbb:function(t,e,n){"use strict";n.r(e);var a=n("5c06"),r=n("29d0");for(var s in r)"default"!==s&&function(t){n.d(e,t,(function(){return r[t]}))}(s);n("1287");var u,i=n("f0c5"),o=Object(i["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);e["default"]=o.exports},ff14:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function s(t,e,n,a,r,s,u){try{var i=t[s](u),o=i.value}catch(c){return void n(c)}i.done?e(o):Promise.resolve(o).then(a,r)}function u(t){return function(){var e=this,n=arguments;return new Promise((function(a,r){var u=t.apply(e,n);function i(t){s(u,a,r,i,o,"next",t)}function o(t){s(u,a,r,i,o,"throw",t)}i(void 0)}))}}var i={data:function(){return{autoplaySwiper:!0,intervalSwiper:5e3,btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},sfshIndex:-1,sfshOptions:["通过","不通过"],count:0}},computed:{SecondToDate:function(){var t=this.count;return null!=t&&""!=t&&(t=t>60&&t<3600?parseInt(t/60)+"分钟"+parseInt(60*(parseFloat(t/60)-parseInt(t/60)))+"秒":t>=3600&&t<86400?parseInt(t/3600)+"小时"+parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(t/3600)-parseInt(t/3600)))-parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))))+"秒":t>=86400?parseInt(t/3600/24)+"天"+parseInt(24*(parseFloat(t/3600/24)-parseInt(t/3600/24)))+"小时"+parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(t/3600)-parseInt(t/3600)))-parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))))+"秒":parseInt(t)+"秒"),t}},onLoad:function(t){var e=this;return u(a.default.mark((function n(){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.id=t.id;case 1:case"end":return n.stop()}}),n)})))()},onShow:function(e){var n=this;return u(a.default.mark((function e(){var r,s;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n.init(),r=t.getStorageSync("nowTable"),e.next=4,n.$api.session(r);case 4:s=e.sent,n.user=s.data,n.btnColor=n.btnColor.sort((function(){return.5-Math.random()}));case 7:case"end":return e.stop()}}),e)})))()},destroyed:function(){window.clearInterval(this.inter)},methods:{onPayTap:function(){t.setStorageSync("paytable","storeup"),t.setStorageSync("payObject",this.detail),this.$utils.jump("../pay-confirm/pay-confirm?type=1")},onAcrossTap:function(e){t.setStorageSync("crossTable","storeup"),t.setStorageSync("crossObj",this.detail),this.$utils.jump("../".concat(e,"/add-or-update?cross=true"))},init:function(){var t=this;return u(a.default.mark((function e(){var n;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$api.info("storeup",t.id);case 2:n=e.sent,t.detail=n.data;case 4:case"end":return e.stop()}}),e)})))()},mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(t){var e=this;return u(a.default.mark((function n(){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.endSuccess(t.size,e.hasNext);case 1:case"end":return n.stop()}}),n)})))()},onChatTap:function(){this.$utils.jump("../chat/chat")},download:function(e){var n=this;t.downloadFile({url:e,success:function(t){200===t.statusCode&&(n.$utils.msg("下载成功"),window.open(e))}})},onCartTabTap:function(){this.$utils.tab("../shop-cart/shop-cart")},onCommentTap:function(){this.$utils.jump("../discussstoreup/add-or-update?refid=".concat(this.id))},zan:function(){var e=this;return u(a.default.mark((function n(){var r;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=e,t.showModal({title:"提示",content:"是否点赞",success:function(){var t=u(a.default.mark((function t(e){return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.confirm){t.next=5;break}return r.detail.thumbsupnum=parseInt(r.detail.thumbsupnum)+1,t.next=4,r.$api.update("storeup",r.detail);case 4:r.$utils.msg("点赞成功");case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()});case 2:case"end":return n.stop()}}),n)})))()},cai:function(){var e=this;return u(a.default.mark((function n(){var r;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=e,t.showModal({title:"提示",content:"是否点踩",success:function(){var t=u(a.default.mark((function t(e){return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.confirm){t.next=5;break}return r.detail.crazilynum=parseInt(r.detail.crazilynum)+1,t.next=4,r.$api.update("storeup",r.detail);case 4:r.$utils.msg("点踩成功");case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()});case 2:case"end":return n.stop()}}),n)})))()},onSHTap:function(){this.$refs.popup.open()},onFinishTap:function(){var t=this;return u(a.default.mark((function e(){return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.detail.sfsh){e.next=3;break}return t.$utils.msg("请选择审核状态"),e.abrupt("return");case 3:if(t.detail.shhf){e.next=6;break}return t.$utils.msg("请填写审核回复"),e.abrupt("return");case 6:return"通过"==t.detail.sfsh&&(t.detail.sfsh="是"),"不通过"==t.detail.sfsh&&(t.detail.sfsh="否"),e.next=10,t.$api.update("storeup",t.detail);case 10:t.$utils.msg("审核成功"),t.$refs.popup.close();case 12:case"end":return e.stop()}}),e)})))()},onCloseWinTap:function(){this.$refs.popup.close()},sfshChange:function(t){console.log(this.detail),this.sfshIndex=t.target.value,this.detail.sfsh=this.sfshOptions[this.sfshIndex]}}};e.default=i}).call(this,n("543d")["default"])}},[["5485","common/runtime","common/vendor"]]]);
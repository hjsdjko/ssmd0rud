(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/news-detail/news-detail"],{"12ab":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(e("a34a"));function a(n){return n&&n.__esModule?n:{default:n}}function u(n,t,e,r,a,u,i){try{var c=n[u](i),o=c.value}catch(f){return void e(f)}c.done?t(o):Promise.resolve(o).then(r,a)}function i(n){return function(){var t=this,e=arguments;return new Promise((function(r,a){var i=n.apply(t,e);function c(n){u(i,r,a,c,o,"next",n)}function o(n){u(i,r,a,c,o,"throw",n)}c(void 0)}))}}var c={data:function(){return{detail:{},id:""}},onLoad:function(n){var t=this;return i(r.default.mark((function e(){var a;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.id=n.id,e.next=3,t.$api.info("news",n.id);case 3:a=e.sent,t.detail=a.data;case 5:case"end":return e.stop()}}),e)})))()}};t.default=c},1788:function(n,t,e){"use strict";var r;e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return u})),e.d(t,"a",(function(){return r}));var a=function(){var n=this,t=n.$createElement;n._self._c},u=[]},"17e4":function(n,t,e){},"4c3d":function(n,t,e){"use strict";e.r(t);var r=e("1788"),a=e("d419");for(var u in a)"default"!==u&&function(n){e.d(t,n,(function(){return a[n]}))}(u);e("4c5f");var i,c=e("f0c5"),o=Object(c["a"])(a["default"],r["b"],r["c"],!1,null,"aa4daff0",null,!1,r["a"],i);t["default"]=o.exports},"4c5f":function(n,t,e){"use strict";var r=e("17e4"),a=e.n(r);a.a},d419:function(n,t,e){"use strict";e.r(t);var r=e("12ab"),a=e.n(r);for(var u in r)"default"!==u&&function(n){e.d(t,n,(function(){return r[n]}))}(u);t["default"]=a.a},fe6d:function(n,t,e){"use strict";(function(n){e("36e8");r(e("66fd"));var t=r(e("4c3d"));function r(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])}},[["fe6d","common/runtime","common/vendor"]]]);
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shop-cart/shop-cart"],{"10a9":function(t,e,a){"use strict";var r=a("86a3"),n=a.n(r);n.a},"10b7":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(a("a34a"));function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e,a,r,n,i,s){try{var c=t[i](s),u=c.value}catch(o){return void a(o)}c.done?e(u):Promise.resolve(u).then(r,n)}function s(t){return function(){var e=this,a=arguments;return new Promise((function(r,n){var s=t.apply(e,a);function c(t){i(s,r,n,c,u,"next",t)}function u(t){i(s,r,n,c,u,"throw",t)}c(void 0)}))}}var c={data:function(){return{isselectedall:!0,scrollposition:0,cart:[],totalamount:0,cntitems:0,shownullcart:!1,user:{}}},onShow:function(){this.init()},methods:{init:function(){var e=this;return s(r.default.mark((function a(){var n,i,s;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.totalamount=0,e.cntitems=0,n=t.getStorageSync("nowTable"),a.next=5,e.$api.session(n);case 5:return i=a.sent,e.user=i.data,a.next=9,e.$api.list("cart",{userid:e.user.id});case 9:for(i=a.sent,e.cart=i.data.list,s=0;s<e.cart.length;s++)e.totalamount=parseFloat(e.totalamount)+parseFloat(e.cart[s].price*e.cart[s].buynumber),e.cntitems=parseInt(e.cntitems)+parseInt(e.cart[s].buynumber);e.totalamount=e.fmamount(e.totalamount);case 13:case"end":return a.stop()}}),a)})))()},scrollhoming:function(){this.scrollposition=this.scrollposition-1},scrollhomed:function(){this.scrollposition=0},clickitemselectedall:function(){if(this.isselectedall=!this.isselectedall,this.isselectedall){if(this.cart)for(var t=0;t<this.cart.length;t++)this.cart[t].id<0&&(this.cart[t].id=-this.cart[t].id,this.cntitems=parseInt(this.cntitems)+parseInt(this.cart[t].buynumber),this.totalamount=parseFloat(this.totalamount)+parseFloat(this.cart[t].price*this.cart[t].buynumber),this.totalamount=this.fmamount(this.totalamount))}else if(this.cart)for(t=0;t<this.cart.length;t++)this.isselected(this.cart[t].id)&&(this.cart[t].id=-this.cart[t].id,this.cntitems=this.cntitems-this.cart[t].buynumber,this.totalamount=this.totalamount-this.cart[t].price*this.cart[t].buynumber,this.totalamount=this.fmamount(this.totalamount))},clickitemselected:function(t){if(this.cart)for(var e=0;e<this.cart.length;e++)if(this.cart[e].id==t)return this.cart[e].id=-this.cart[e].id,void(this.isselected(this.cart[e].id)?(this.cntitems=parseInt(this.cntitems)+parseInt(this.cart[e].buynumber),this.totalamount=parseFloat(this.totalamount)+parseFloat(this.cart[e].price*this.cart[e].buynumber),this.totalamount=this.fmamount(this.totalamount),this._isselectedall()&&(this.isselectedall=!0)):(this.cntitems=this.cntitems-this.cart[e].buynumber,this.totalamount=this.totalamount-this.cart[e].price*this.cart[e].buynumber,this.totalamount=this.fmamount(this.totalamount),this.isselectedall=!1))},minusitem:function(e){var a=this;return s(r.default.mark((function n(){var i;return r.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:i=0;case 1:if(!(i<a.cart.length)){r.next=20;break}if(!(a.cart[i].id==e&&a.cart[i].buynumber>0)){r.next=17;break}if(a.cart[i].buynumber=a.cart[i].buynumber-1,!a.isselected(a.cart[i].id)){r.next=9;break}return a.updatecntitems(-1),a.updatetotalamt(-a.cart[i].price),r.next=9,a.$api.update("cart",a.cart[i]);case 9:if(0!=a.cart[i].buynumber){r.next=16;break}return a.cart[i].id=a._unselected(a.cart[i].id),r.next=13,a.$api.del("cart",JSON.stringify([e]));case 13:console.log("cart".concat(a.cart[i].goodid)),t.removeStorageSync("cart".concat(a.cart[i].goodid)),a.init();case 16:return r.abrupt("return");case 17:i++,r.next=1;break;case 20:case"end":return r.stop()}}),n)})))()},plusitem:function(t){var e=this;return s(r.default.mark((function a(){var n;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:n=0;case 1:if(!(n<e.cart.length)){a.next=12;break}if(!(e.cart[n].id==t&&e.cart[n].buynumber<100)){a.next=9;break}return e.cart[n].buynumber=parseInt(e.cart[n].buynumber)+1,e.isselected(e.cart[n].id)?(e.updatecntitems(1),e.updatetotalamt(e.cart[n].price)):(e.cart[n].id=e._selected(e.cart[n].id),e.cntitems=parseInt(e.cntitems)+parseInt(e.cart[n].buynumber),e.totalamount=parseFloat(e.totalamount)+parseFloat(e.cart[n].price*e.cart[n].buynumber),e.totalamount=e.fmamount(e.totalamount)),a.next=7,e.$api.update("cart",e.cart[n]);case 7:return e._isselectedall()&&(e.isselectedall=!0),a.abrupt("return");case 9:n++,a.next=1;break;case 12:case"end":return a.stop()}}),a)})))()},updatetotalamt:function(t){this.totalamount=parseFloat(this.totalamount)+parseFloat(t),this.totalamount=this.fmamount(this.totalamount)},updatecntitems:function(t){this.cntitems=parseInt(this.cntitems)+parseInt(t)},fmamount:function(t){return Math.round(100*t)/100},_unselected:function(t){return-Math.abs(t)},_selected:function(t){return Math.abs(t)},isselected:function(t){return t>0},_isselectedall:function(){for(var t=0;t<this.cart.length;t++)if(this.cart[t].id<0)return!1;return!0},_isdeledall:function(){for(var t=0;t<this.cart.length;t++)if(this.cart[t].id>-99)return!1;return!0},createorder:function(){if(0==this.totalamount)t.showModal({content:"请选择下单的商品！"});else{for(var e=[],a=0;a<this.cart.length;a++)this.cart[a].id>0&&e.push(this.cart[a]);t.setStorageSync("orderGoods",e),this.$utils.jump("../shop-order-confirm/shop-order-confirm?type=1")}}}};e.default=c}).call(this,a("543d")["default"])},7864:function(t,e,a){"use strict";a.r(e);var r=a("c45e"),n=a("8269");for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);a("10a9");var s,c=a("f0c5"),u=Object(c["a"])(n["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],s);e["default"]=u.exports},8269:function(t,e,a){"use strict";a.r(e);var r=a("10b7"),n=a.n(r);for(var i in r)"default"!==i&&function(t){a.d(e,t,(function(){return r[t]}))}(i);e["default"]=n.a},"86a3":function(t,e,a){},c45e:function(t,e,a){"use strict";var r;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return r}));var n=function(){var t=this,e=t.$createElement;t._self._c},i=[]},f5c8:function(t,e,a){"use strict";(function(t){a("36e8");r(a("66fd"));var e=r(a("7864"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("543d")["createPage"])}},[["f5c8","common/runtime","common/vendor"]]]);
webpackJsonp([1],{"2Or7":function(t,e){},"2ruK":function(t,e,i){t.exports=i.p+"static/img/love_zly5.93d9d73.jpg"},DdDg:function(t,e){},F4ku:function(t,e){},FWY2:function(t,e,i){t.exports=i.p+"static/img/love_zly3.60a5461.jpg"},ME4h:function(t,e,i){t.exports=i.p+"static/img/love_zly1.723db84.jpg"},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),n={mounted:function(){this.play()},name:"App",methods:{play:function(){document.getElementById("music").play()},autoPlayAudio:function(){wx.config({debug:!1,appId:"",timestamp:1,nonceStr:"",signature:"",jsApiList:[]}),wx.ready(function(){document.getElementById("music").play()})}}},a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("audio",{attrs:{id:"music",src:"http://isure.stream.qqmusic.qq.com/C4000023ZrRN2ltlkl.m4a?vkey=556E2BC56122413FFC19CAAD1DA59F5FC1B96C4354664089B0F57F8F1C71E61A6E16E52604ACF89D691F96AA07AA140389836835D8D7AC38&guid=1767028562&uin=0&fromtag=66"}}),this._v(" "),e("keep-alive",[this.$route.meta.keepAlive?e("router-view"):this._e()],1),this._v(" "),this.$route.meta.keepAlive?this._e():e("router-view")],1)},staticRenderFns:[]};var r=i("VU/8")(n,a,!1,function(t){i("2Or7")},null,null).exports,o=i("/ocq"),c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("mt-header",{attrs:{fixed:"",title:"芸宝生日快乐"}}),t._v(" "),s("div",{staticClass:"swipe-box"},[s("mt-swipe",{attrs:{auto:2e3}},[s("mt-swipe-item",[s("img",{attrs:{src:i("ME4h"),alt:""}})]),t._v(" "),s("mt-swipe-item",[s("img",{attrs:{src:i("VzqP"),alt:""}})]),t._v(" "),s("mt-swipe-item",[s("img",{attrs:{src:i("FWY2"),alt:""}})]),t._v(" "),s("mt-swipe-item",[s("img",{attrs:{src:i("R0Lz"),alt:""}})]),t._v(" "),s("mt-swipe-item",[s("img",{attrs:{src:i("2ruK"),alt:""}})]),t._v(" "),s("mt-swipe-item",[s("img",{attrs:{src:i("nN2G"),alt:""}})])],1)],1),t._v(" "),s("div",{staticClass:"flex-center  fix-btn"},[s("mt-button",{attrs:{type:"danger"},nativeOn:{click:function(e){t.get_love()}}},[t._v("点击去有惊喜哦")])],1),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"heart-box"},[e("div",{staticClass:"heart"},[e("p",{staticClass:"message"},[this._v("\n      我爱你\n      "),e("br"),this._v("张丽芸\n  ")])])])}]};var l=i("VU/8")({data:function(){return{}},methods:{get_love:function(){this.$router.push({path:"/love"})}}},c,!1,function(t){i("t+cN")},"data-v-0c314a30",null).exports,u=i("4kSj"),v=i.n(u),d={mounted:function(){console.log(v()("#flame")),v()("#flame").on(this.show())},data:function(){return{flame:v()("#flame"),txt:v()("h1")}},methods:{show:function(){v()("#flame").removeClass("burn").addClass("puff"),v()(".smoke").each(function(){v()(this).addClass("puff-bubble")}),v()("#glow").remove(),v()("x-sign").hide().delay(750).fadeIn(300),v()("#candle").animate({opacity:"0.5"},1e3),v()("#glow").remove(),txt.hide().html("It <b>will</b> come true..").delay(750).fadeIn(300),v()("#content-p").hide().delay(800).fadeIn(400)},get_miss:function(){this.$router.push({path:"/miss"})}}},m={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("mt-header",{attrs:{fixed:"",title:"芸宝生日快乐"}},[i("router-link",{attrs:{slot:"left",to:"/"},slot:"left"},[i("mt-button",{attrs:{icon:"back"}},[t._v("返回")])],1)],1),t._v(" "),t._m(0),t._v(" "),i("div",{staticClass:"flex-center  fix-btn"},[i("mt-button",{attrs:{type:"danger"},nativeOn:{click:function(e){t.get_miss()}}},[t._v("next")])],1),t._v(" "),i("div",{staticClass:"glow-box"},[i("x-sign",[t._v("\n             真的有很多话想说..."),i("br"),t._v("异地恋虽难熬，熬过去就是一生了~~\n            ")]),t._v(" "),i("div",{staticClass:"glow",attrs:{id:"glow"}}),t._v(" "),t._m(1)],1)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content-p",attrs:{id:"content-p"}},[i("p",[t._v("最近我们经历一个砍...... "),i("br"),t._v(" \n            可是正是因为这个砍，让我知道以后该怎么去珍惜你 "),i("br"),t._v("\n             我知道未来还有一些挫折，只要我们同心，没有什么过不去的"),i("br"),t._v("\n             失去你我感觉我这辈子都遇不到这么好的女孩子了， "),i("br"),t._v("\n             你若不放弃，我坚决不会放弃 "),i("br"),t._v("\n             不到万不得已，我也坚决不会放弃你  "),i("br"),t._v("\n             无论外界怎么看待，只要我们自己活得开心 "),i("br"),t._v("\n               只要我们自己家人活得开心，别人的闲言闲语，我不在乎 "),i("br"),t._v("\n               未来请看我的表现，你的父母就是我的父母 "),i("br"),t._v("\n               我会真心把他们看待成最尊敬的人 "),i("br"),t._v(" "),i("br"),t._v(" "),i("br"),t._v(" "),i("span",{staticStyle:{"font-size":"25px"}},[t._v("我爱你")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"candle"}},[i("div",{staticClass:"stripe"}),t._v(" "),i("div",{staticClass:"stripe"}),t._v(" "),i("div",{staticClass:"stripe"}),t._v(" "),i("div",{staticClass:"stripe"}),t._v(" "),i("div",{staticClass:"stripe"}),t._v(" "),i("div",{attrs:{id:"top"}},[i("div",{staticClass:"smoke"}),t._v(" "),i("div",{staticClass:"smoke"}),t._v(" "),i("div",{staticClass:"smoke"}),t._v(" "),i("div",{attrs:{id:"knot"}}),t._v(" "),i("div",{staticClass:"burn",attrs:{id:"flame"}})])])}]};var p=i("VU/8")(d,m,!1,function(t){i("DdDg")},"data-v-4113c81e",null).exports,f={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("mt-header",{attrs:{fixed:"",title:"芸宝生日快乐"}},[i("router-link",{attrs:{slot:"left",to:"/love"},slot:"left"},[i("mt-button",{attrs:{icon:"back"}},[t._v("返回")])],1)],1),t._v(" "),i("iframe",{staticClass:"iframe1",attrs:{src:" https://liutao19910728.github.io/iframe1/",frameborder:"0"}}),t._v(" "),i("div",{staticClass:"flex-center  fix-btn",staticStyle:{position:"fixed"}},[i("mt-button",{attrs:{type:"danger"},nativeOn:{click:function(e){t.get_long()}}},[t._v("next")])],1)],1)},staticRenderFns:[]};var _=i("VU/8")({data:function(){},methods:{get_long:function(){this.$router.push({path:"/long"})}}},f,!1,function(t){i("pRZi")},"data-v-21421c33",null).exports,h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("mt-header",{attrs:{fixed:"",title:"芸宝生日快乐"}},[e("router-link",{attrs:{slot:"left",to:"/miss"},slot:"left"},[e("mt-button",{attrs:{icon:"back"}},[this._v("返回")])],1)],1)],1)},staticRenderFns:[]};var g=i("VU/8")({data:function(){}},h,!1,function(t){i("F4ku")},"data-v-0441ea1e",null).exports;s.default.use(o.a);var b=new o.a({routes:[{path:"/",name:"HelloWorld",component:l,meta:{keepAlive:!0}},{path:"/love",name:"Love",component:p},{path:"/miss",name:"Miss",component:_},{path:"/long",name:"Long",component:g}]}),x=(i("Qbok"),i("Au9i")),C=i.n(x);i("d8/S");s.default.config.productionTip=!1,s.default.use(C.a),new s.default({el:"#app",router:b,components:{App:r},template:"<App/>"})},Qbok:function(t,e){},R0Lz:function(t,e,i){t.exports=i.p+"static/img/love_zly4.0c06b49.jpg"},VzqP:function(t,e,i){t.exports=i.p+"static/img/love_zly2.a1c5535.jpg"},"d8/S":function(t,e){},nN2G:function(t,e,i){t.exports=i.p+"static/img/love_zly6.3b219ce.jpg"},pRZi:function(t,e){},"t+cN":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.2c3c2add5c6c89a54a97.js.map
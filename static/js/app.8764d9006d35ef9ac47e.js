webpackJsonp([1],{"2ruK":function(t,e,i){t.exports=i.p+"static/img/love_zly5.93d9d73.jpg"},"43tO":function(t,e){},"5g/5":function(t,e){},"D/ai":function(t,e){},FWY2:function(t,e,i){t.exports=i.p+"static/img/love_zly3.60a5461.jpg"},ME4h:function(t,e,i){t.exports=i.p+"static/img/love_zly1.723db84.jpg"},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),n=document.getElementById("music"),a={mounted:function(){this.play(),this.autoPlayAudio()},name:"App",data:function(){return{elemt:document.getElementById("music")}},methods:{play:function(){document.getElementById("music").setAttribute("src","/static/audios/hx_zcx.mp3"),document.removeEventListener("touchstart",this.remove_music,!1),document.getElementById("music").play(),document.addEventListener("WeixinJSBridgeReady",function(){this.remove_music()},!1),document.addEventListener("YixinJSBridgeReady",function(){this.remove_music()},!1),document.addEventListener("touchstart",this.remove_music,!1)},autoPlayAudio:function(){console.log(22),console.log(wx),console.log(this.elemt),console.log(n),wx.config({debug:!1,appId:"",timestamp:1,nonceStr:"",signature:"",jsApiList:[]}),wx.ready(function(){document.getElementById("music").setAttribute("src","/static/audios/hx_zcx.mp3"),document.getElementById("music").play()})},remove_music:function(){console.log(2131),document.getElementById("music").play(),document.removeEventListener("touchstart",this.remove_music,!1)}}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("audio",{attrs:{id:"music",src:"/static/audios/hx_zcx.mp3"}}),this._v(" "),e("keep-alive",[this.$route.meta.keepAlive?e("router-view"):this._e()],1),this._v(" "),this.$route.meta.keepAlive?this._e():e("router-view")],1)},staticRenderFns:[]};var r=i("VU/8")(a,o,!1,function(t){i("5g/5")},"data-v-322ca304",null).exports,c=i("/ocq"),l={mounted:function(){this.play()},data:function(){return{}},methods:{get_love:function(){this.$router.push({path:"/long"})},play:function(){document.getElementById("music").play()}}},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("mt-header",{attrs:{fixed:"",title:"芸宝生日快乐"}}),t._v(" "),s("div",{staticClass:"swipe-box"},[s("mt-swipe",{attrs:{auto:2e3}},[s("mt-swipe-item",[s("img",{attrs:{src:i("ME4h"),alt:""}})]),t._v(" "),s("mt-swipe-item",[s("img",{attrs:{src:i("VzqP"),alt:""}})]),t._v(" "),s("mt-swipe-item",[s("img",{attrs:{src:i("FWY2"),alt:""}})]),t._v(" "),s("mt-swipe-item",[s("img",{attrs:{src:i("R0Lz"),alt:""}})]),t._v(" "),s("mt-swipe-item",[s("img",{attrs:{src:i("2ruK"),alt:""}})]),t._v(" "),s("mt-swipe-item",[s("img",{attrs:{src:i("nN2G"),alt:""}})]),t._v(" "),s("mt-swipe-item",[s("img",{attrs:{src:i("ReDu"),alt:""}})])],1)],1),t._v(" "),s("div",{staticClass:"flex-center  fix-btn"},[s("mt-button",{attrs:{type:"danger"},nativeOn:{click:function(e){t.get_love()}}},[t._v("点击去有惊喜哦")])],1),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"heart-box"},[e("div",{staticClass:"heart"},[e("p",{staticClass:"message"},[this._v("\n      我爱你\n      "),e("br"),this._v("张丽芸\n  ")])])])}]};var d=i("VU/8")(l,u,!1,function(t){i("43tO")},"data-v-c78d7204",null).exports,v=i("4kSj"),m=i.n(v),_={mounted:function(){console.log(m()("#flame")),console.log(wx),m()("#flame").on(this.show())},data:function(){return{flame:m()("#flame"),txt:m()("h1")}},methods:{show:function(){m()("#flame").removeClass("burn").addClass("puff"),m()(".smoke").each(function(){m()(this).addClass("puff-bubble")}),m()("#glow").remove(),m()(".x-sign").hide().delay(750).fadeIn(300),m()("#candle").animate({opacity:"0.5"},1e3),m()("#glow").remove(),m()("#content-p").hide().delay(800).fadeIn(400)},get_miss:function(){this.$router.push({path:"/miss"})}}},f={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("mt-header",{attrs:{fixed:"",title:"芸宝生日快乐"}},[i("router-link",{attrs:{slot:"left",to:"/long"},slot:"left"},[i("mt-button",{attrs:{icon:"back"}},[t._v("返回")])],1)],1),t._v(" "),t._m(0),t._v(" "),i("div",{staticClass:"flex-center  fix-btn"},[i("mt-button",{attrs:{type:"danger"},nativeOn:{click:function(e){t.get_miss()}}},[t._v("next")])],1),t._v(" "),t._m(1)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content-p",attrs:{id:"content-p"}},[i("p",[t._v("最近我们经历一个砍...... "),i("br"),t._v(" \n            可是正是因为这个砍，让我知道以后该怎么去珍惜你 "),i("br"),t._v("\n             我知道未来还有一些挫折，只要我们同心，没有什么过不去的"),i("br"),t._v("\n             失去你我感觉我这辈子都遇不到这么好的女孩子了， "),i("br"),t._v("\n             你若不放弃，我坚决不会放弃 "),i("br"),t._v("\n             不到万不得已，我也坚决不会放弃你  "),i("br"),t._v("\n             无论外界怎么看待，只要我们自己活得开心 "),i("br"),t._v("\n               只要我们自己家人活得开心，别人的闲言闲语，我不在乎 "),i("br"),t._v("\n               未来请看我的表现，你的父母就是我的父母 "),i("br"),t._v("\n               我会真心把他们看待成最尊敬的人 "),i("br"),t._v(" "),i("br"),t._v(" "),i("br"),t._v(" "),i("span",{staticStyle:{"font-size":"25px"}},[t._v("我爱你")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"glow-box"},[i("div",{staticClass:"x-sign"},[t._v("\n             真的有很多话想说..."),i("br"),t._v("异地恋虽难熬，熬过去就是一生了~~\n            ")]),t._v(" "),i("div",{staticClass:"glow",attrs:{id:"glow"}}),t._v(" "),i("div",{attrs:{id:"candle"}},[i("div",{staticClass:"stripe"}),t._v(" "),i("div",{staticClass:"stripe"}),t._v(" "),i("div",{staticClass:"stripe"}),t._v(" "),i("div",{staticClass:"stripe"}),t._v(" "),i("div",{staticClass:"stripe"}),t._v(" "),i("div",{attrs:{id:"top"}},[i("div",{staticClass:"smoke"}),t._v(" "),i("div",{staticClass:"smoke"}),t._v(" "),i("div",{staticClass:"smoke"}),t._v(" "),i("div",{attrs:{id:"knot"}}),t._v(" "),i("div",{staticClass:"burn",attrs:{id:"flame"}})])])])}]};var p=i("VU/8")(_,f,!1,function(t){i("D/ai")},"data-v-fcef490c",null).exports,h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("mt-header",{attrs:{fixed:"",title:"芸宝生日快乐"}},[e("router-link",{attrs:{slot:"left",to:"/love"},slot:"left"},[e("mt-button",{attrs:{icon:"back"}},[this._v("返回")])],1)],1),this._v(" "),e("iframe",{staticClass:"iframe1",attrs:{src:" https://liutao19910728.github.io/iframe1/",frameborder:"0"}})],1)},staticRenderFns:[]};var g=i("VU/8")({data:function(){return{}},methods:{get_long:function(){this.$router.push({path:"/long"})}}},h,!1,function(t){i("Nbr0")},"data-v-38328e41",null).exports,b={mounted:function(){this.change_word()},data:function(){return{}},methods:{change_word:function(){setTimeout(function(){m()("#title-word").addClass("title-word")},1300)},get_love:function(){this.$router.push({path:"/love"})}}},x={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("mt-header",{attrs:{fixed:"",title:"芸宝生日快乐"}},[i("router-link",{attrs:{slot:"left",to:"/"},slot:"left"},[i("mt-button",{attrs:{icon:"back"}},[t._v("返回")])],1)],1),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),i("div",{staticClass:"long-btn"},[i("mt-button",{attrs:{type:"danger"},nativeOn:{click:function(e){t.get_love()}}},[t._v("next")])],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{width:"100%",overflow:"hidden"}},[e("div",{staticClass:"chest"},[e("div",{staticClass:"heart left side top"}),this._v(" "),e("div",{staticClass:"heart center"}),this._v(" "),e("div",{staticClass:"heart right side"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("p",{attrs:{id:"title-word"}},[this._v("我今年的生日愿望：能够明年的今天我们准备婚事~~你的愿望我相信也能实现，未来的每一天我们都要健健康康的，相爱每一天。")])])}]};var y=i("VU/8")(b,x,!1,function(t){i("gRsI")},"data-v-957be086",null).exports;s.default.use(c.a);var w=new c.a({routes:[{path:"/",name:"HelloWorld",component:d,meta:{keepAlive:!0}},{path:"/love",name:"Love",component:p},{path:"/miss",name:"Miss",component:g},{path:"/long",name:"Long",component:y}]}),C=(i("Qbok"),i("Au9i")),E=i.n(C);i("d8/S");s.default.config.productionTip=!1,s.default.use(E.a),new s.default({el:"#app",router:w,components:{App:r},template:"<App/>"})},Nbr0:function(t,e){},Qbok:function(t,e){},R0Lz:function(t,e,i){t.exports=i.p+"static/img/love_zly4.0c06b49.jpg"},ReDu:function(t,e,i){t.exports=i.p+"static/img/love_zly7.67524ed.jpg"},VzqP:function(t,e,i){t.exports=i.p+"static/img/love_zly2.a1c5535.jpg"},"d8/S":function(t,e){},gRsI:function(t,e){},nN2G:function(t,e,i){t.exports=i.p+"static/img/love_zly6.3b219ce.jpg"}},["NHnr"]);
//# sourceMappingURL=app.8764d9006d35ef9ac47e.js.map
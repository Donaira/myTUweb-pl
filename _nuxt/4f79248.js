(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{564:function(n,t,e){var content=e(592);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(44).default)("22b53096",content,!0,{sourceMap:!1})},590:function(n,t,e){var map={"./1-tiffani.svg":274,"./1.svg":275,"./2-tiffani.svg":276,"./2.svg":277,"./3-tiffani.svg":278,"./3.svg":279,"./4.svg":280};function r(n){var t=o(n);return e(t)}function o(n){if(!e.o(map,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return map[n]}r.keys=function(){return Object.keys(map)},r.resolve=o,n.exports=r,r.id=590},591:function(n,t,e){"use strict";e(564)},592:function(n,t,e){(t=e(33)(!1)).push([n.i,"/* purgecss start ignore */\n.page-in-transition{\n  overflow-x:hidden\n}\n.zoomIn-leave,.zoomIn-leave-active,.zoomIn-enter,.zoomIn-enter-active{\n  position:absolute;\n  left:0;\n  top:0;\n  width:100vw !important;\n  height:101vh !important;\n  max-width:none !important;\n  transition:all .3s ease\n}\n.zoomIn-leave-active{\n  -webkit-animation:bounce-out .3s ease;\n          animation:bounce-out .3s ease;\n  transform-origin:50% 50%\n}\n.zoomIn-enter-active{\n  -webkit-animation:bounce-in .3s ease-out;\n          animation:bounce-in .3s ease-out;\n  transform-origin:50% 50%\n}\n.fadeInUp-enter-active{\n  -webkit-animation:fadeInUp .5s;\n          animation:fadeInUp .5s\n}\n.fadeInUp-leave-active{\n  animation:fadeInUp .5s reverse\n}\n.fadeInLeft-enter-active{\n  -webkit-animation:fadeInLeft .3s;\n          animation:fadeInLeft .3s\n}\n.fadeInLeft-leave-active{\n  animation:fadeInLeft .3s reverse\n}\n.slideDown-enter-active{\n  -webkit-animation:slideDown .3s;\n          animation:slideDown .3s\n}\n.slideDown-leave-active{\n  animation:slideDown .3s reverse\n}\n@-webkit-keyframes swing{\n0%{\n    transform:rotate(0deg)\n}\n25%{\n    transform:rotate(-3deg)\n}\n75%{\n    transform:rotate(3deg)\n}\n100%{\n    transform:rotate(0deg)\n}\n}\n@keyframes swing{\n0%{\n    transform:rotate(0deg)\n}\n25%{\n    transform:rotate(-3deg)\n}\n75%{\n    transform:rotate(3deg)\n}\n100%{\n    transform:rotate(0deg)\n}\n}\n@-webkit-keyframes slideDown{\n0%{\n    height:0\n}\n100%{\n    height:100vh\n}\n}\n@keyframes slideDown{\n0%{\n    height:0\n}\n100%{\n    height:100vh\n}\n}\n@-webkit-keyframes fadeInLeft{\n0%{\n    transform:translateX(10px);\n    opacity:0\n}\n100%{\n    transform:translateX(0);\n    opacity:1\n}\n}\n@keyframes fadeInLeft{\n0%{\n    transform:translateX(10px);\n    opacity:0\n}\n100%{\n    transform:translateX(0);\n    opacity:1\n}\n}\n@-webkit-keyframes fadeInUp{\n0%{\n    transform:translateY(10px);\n    opacity:0\n}\n100%{\n    transform:translateY(0);\n    opacity:1\n}\n}\n@keyframes fadeInUp{\n0%{\n    transform:translateY(10px);\n    opacity:0\n}\n100%{\n    transform:translateY(0);\n    opacity:1\n}\n}\n@-webkit-keyframes bounce-in{\n0%{\n    opacity:0;\n    transform:scale(0.95)\n}\n100%{\n    opacity:1;\n    transform:scale(1)\n}\n}\n@keyframes bounce-in{\n0%{\n    opacity:0;\n    transform:scale(0.95)\n}\n100%{\n    opacity:1;\n    transform:scale(1)\n}\n}\n@-webkit-keyframes bounce-out{\n0%{\n    opacity:1;\n    transform:scale(1)\n}\n75%{\n    opacity:0\n}\n100%{\n    opacity:0;\n    transform:scale(1.2)\n}\n}\n@keyframes bounce-out{\n0%{\n    opacity:1;\n    transform:scale(1)\n}\n75%{\n    opacity:0\n}\n100%{\n    opacity:0;\n    transform:scale(1.2)\n}\n}\n@-webkit-keyframes bounce-circle{\n0%{\n    transform:scale(1)\n}\n20%{\n    transform:scale(0.8)\n}\n60%{\n    transform:scale(1.1)\n}\n100%{\n    transform:scale(1)\n}\n}\n@keyframes bounce-circle{\n0%{\n    transform:scale(1)\n}\n20%{\n    transform:scale(0.8)\n}\n60%{\n    transform:scale(1.1)\n}\n100%{\n    transform:scale(1)\n}\n}\n@-webkit-keyframes wiggle{\n0%{\n    transform:scale(0, 0) rotate(0);\n    opacity:0\n}\n70%{\n    transform:scale(1.3, 1.3) rotate(3deg);\n    opacity:1\n}\n100%{\n    transform:scale(1, 1) rotate(0);\n    opacity:1\n}\n}\n@keyframes wiggle{\n0%{\n    transform:scale(0, 0) rotate(0);\n    opacity:0\n}\n70%{\n    transform:scale(1.3, 1.3) rotate(3deg);\n    opacity:1\n}\n100%{\n    transform:scale(1, 1) rotate(0);\n    opacity:1\n}\n}\n.simple-steps__title{\n  text-align:center;\n  font-weight:300;\n  margin-bottom:80px\n}\n.simple-steps__step{\n  padding:32px;\n  font-weight:300\n}\n@media(min-width: 1024px){\n.simple-steps__step{\n    padding:64px\n}\n}\n\n/* purgecss end ignore */",""]),n.exports=t},600:function(n,t,e){"use strict";var r=e(13),o=e(20),c=e(21),l=e(9),f=e(4),m=e(2);function d(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,r=Object(l.a)(n);if(t){var o=Object(l.a)(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return Object(c.a)(this,e)}}var v=function(n){Object(o.a)(e,n);var t=d(e);function e(){return Object(r.a)(this,e),t.apply(this,arguments)}return e}(m.Vue);Object(f.a)([Object(m.Prop)({required:!0,default:""})],v.prototype,"content",void 0);var y=v=Object(f.a)([Object(m.Component)({components:{}})],v),h=(e(591),e(30)),component=Object(h.a)(y,(function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("div",{staticClass:"simple-steps"},[r("div",{staticClass:"simple-steps__title h1",domProps:{innerHTML:n._s(n.content.title)}}),n._v(" "),r("div",{class:["w-full grid gap-8 lg:grid-cols-2"]},n._l(n.content.steps,(function(t,o){return r("div",{key:"simple-step-"+o,class:[3===n.content.steps.length&&2===o?"col-span-2":"","simple-steps__step h4 flex flex-col sm:flex-row items-center space-y-10 sm:space-y-0 sm:space-x-10 lg:space-x-14 bg-gray-300"]},[r("img",{attrs:{src:e(590)("./"+(o+1)+".svg")}}),n._v(" "),r("div",{staticClass:"simple-steps__text",domProps:{innerHTML:n._s(t)}})])})),0)])}),[],!1,null,null,null);t.a=component.exports},999:function(n,t,e){"use strict";e.r(t);var r=e(13),o=e(14),c=e(20),l=e(21),f=e(9),m=e(4),d=e(2),v=e(170),y=e(543),h=e(642),w=e(576),k=e(600),x=e(544),_=e(601),O=e(575);function I(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,r=Object(f.a)(n);if(t){var o=Object(f.a)(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return Object(l.a)(this,e)}}var j=function(n){Object(c.a)(e,n);var t=I(e);function e(){return Object(r.a)(this,e),t.apply(this,arguments)}return Object(o.a)(e,[{key:"mounted",value:function(){console.log(this.$t("timePage.featuresSlider"))}}]),e}(d.Vue),C=j=Object(m.a)([Object(d.Component)({components:{PageHeader:v.a,HeroSlider:y.a,TwoBlocks:h.a,ImageTextBlock:w.a,SimpleSteps:k.a,FooterComponent:x.a,FeaturesList:_.a,FeaturesSlider:O.a}})],j),P=e(30),component=Object(P.a)(C,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("div",{staticClass:"container mx-auto"},[e("hero-slider",{staticClass:"mb-24 xl:mb-40",attrs:{"hero-slides":n.$t("timePage.heroSlides")}}),n._v(" "),e("features-slider",{staticClass:"mb-24 xl:mb-40",attrs:{content:n.$t("timePage.featuresSlider"),id:n.$t("timePage.featuresSlider.blockId")}}),n._v(" "),e("two-blocks",{staticClass:"mb-24 xl:mb-40",attrs:{content:n.$t("timePage.twoBlocks")}})],1),n._v(" "),e("div",{staticClass:"bg-gray-300 mb-24 xl:mb-40"},[e("div",{staticClass:"container mx-auto"},[e("image-text-block",{staticClass:"image-center",attrs:{content:n.$t("timePage.timeLoyaltyProgram")}})],1)]),n._v(" "),e("div",{staticClass:"container mx-auto"},[e("features-list",{staticClass:"mb-24 xl:mb-40",attrs:{features:n.$t("timePage.featuresList")}})],1),n._v(" "),e("div",{staticClass:"bg-gray-300 mb-24 xl:mb-40"},[e("div",{staticClass:"container mx-auto"},[e("image-text-block",{staticClass:"image-center mb-24 xl:mb-40",attrs:{content:n.$t("timePage.timeOffers")}})],1)]),n._v(" "),e("footer-component")],1)}),[],!1,null,"d3e79474",null);t.default=component.exports}}]);
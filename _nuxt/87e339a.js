(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1001:function(n,e,t){"use strict";t.r(e);var r=t(13),o=t(20),c=t(21),l=t(9),f=t(4),d=t(2),m=t(171),v=t(549),w=t(571),y=t(588),h=t(645),k=t(644),x=t(552),_=t(598);function I(n){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var t,r=Object(l.a)(n);if(e){var o=Object(l.a)(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return Object(c.a)(this,t)}}var C=function(n){Object(o.a)(t,n);var e=I(t);function t(){return Object(r.a)(this,t),e.apply(this,arguments)}return t}(d.Vue);Object(f.a)([Object(d.Prop)({required:!0,default:""})],C.prototype,"content",void 0);var j=C=Object(f.a)([Object(d.Component)({components:{}})],C),O=(t(984),t(30)),D=Object(O.a)(j,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"safety"},[t("div",{staticClass:"w-full grid gap-4 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:w-3/4 xl:w-full lg:mx-auto xl:grid-cols-4"},[t("div",{staticClass:"safety-block"},[t("div",{staticClass:"h3 w-full text-center",domProps:{innerHTML:n._s(n.content.title)}})]),n._v(" "),n._l(n.content.slides,(function(e,r){return t("div",{key:"safety-block-"+r,staticClass:"safety-block"},[t("div",{staticClass:"safety-block__text h3",domProps:{innerHTML:n._s(e)}})])}))],2)])}),[],!1,null,null,null).exports,L=t(100);function S(n){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var t,r=Object(l.a)(n);if(e){var o=Object(l.a)(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return Object(c.a)(this,t)}}var $=function(n){Object(o.a)(t,n);var e=S(t);function t(){var n;return Object(r.a)(this,t),(n=e.apply(this,arguments)).popupOpen=!1,n.hovered=!1,n}return t}(d.Vue),R=$=Object(f.a)([Object(d.Component)({components:{TuButton:L.a}})],$),z=(t(986),Object(O.a)(R,(function(){var n=this,e=n.$createElement,r=n._self._c||e;return r("div",{staticClass:"video-popup-link"},[r("div",{staticClass:"w-full flex flex-wrap items-center"},[r("div",{staticClass:"w-full lg:w-1/2"},[r("img",{class:["video-popup-link__icon w-32",n.hovered?"rotated":""],attrs:{src:t(297)}}),n._v(" "),n._m(0)]),n._v(" "),n._m(1)]),n._v(" "),r("t-modal",{attrs:{variant:"video"},model:{value:n.popupOpen,callback:function(e){n.popupOpen=e},expression:"popupOpen"}},[r("iframe",{staticClass:"video xl:p-8",staticStyle:{"margin-top":"3%","max-height":"625px",height:"57vw"},attrs:{allowfullscreen:"",frameborder:"0",src:"https://www.youtube.com/embed/IvT0xy11lIs",width:"100%"}})])],1)}),[function(){var n=this.$createElement,e=this._self._c||n;return e("div",{staticClass:"h2 font-light text-default lg:mr-10"},[e("b",[this._v("Kaip pasilengvinti šeimos kasdienybę")]),this._v(" su myTU mobiliaja bankininkyste?")])},function(){var n=this.$createElement,e=this._self._c||n;return e("div",{staticClass:"w-full lg:w-1/2"},[e("iframe",{staticClass:"video h-60 md:h-96",staticStyle:{"margin-top":"3%","max-height":"100vw"},attrs:{allowfullscreen:"",frameborder:"0",src:"https://www.youtube.com/embed/IvT0xy11lIs",width:"100%"}})])}],!1,null,"b0b255de",null).exports);function U(n){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var t,r=Object(l.a)(n);if(e){var o=Object(l.a)(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return Object(c.a)(this,t)}}var T=function(n){Object(o.a)(t,n);var e=U(t);function t(){return Object(r.a)(this,t),e.apply(this,arguments)}return t}(d.Vue),P=T=Object(f.a)([Object(d.Component)({components:{PageHeader:m.a,HeroSlider:v.a,TwoBlocks:h.a,FeaturesSlider:w.a,ClientReviews:k.a,FeaturesList:y.a,FooterComponent:x.a,ImageTextBlock:_.a,Safety:D,VideoPopupLink:z}})],T),X=Object(O.a)(P,(function(){var n=this,e=n.$createElement,r=n._self._c||e;return r("div",[r("div",{staticClass:"container mx-auto"},[r("hero-slider",{staticClass:"mb-24 xl:mb-40",attrs:{"hero-slides":n.$t("homepage.heroSlides")}}),n._v(" "),r("two-blocks",{staticClass:"mb-24 xl:mb-40",attrs:{content:n.$t("homepage.twoBlocks")}}),n._v(" "),r("features-slider",{staticClass:"mb-24 xl:mb-40",attrs:{content:n.$t("homepage.featuresSlider"),id:n.$t("homepage.featuresSlider.blockId")}})],1),n._v(" "),r("client-reviews",{staticClass:"mb-24 xl:mb-48"}),n._v(" "),r("div",{staticClass:"container mx-auto"},[r("features-list",{staticClass:"mb-24 xl:mb-40",attrs:{features:n.$t("homepage.featuresList"),id:"index-features-list"}})],1),n._v(" "),"lt"===n.$i18n.locale?r("div",{staticClass:"bg-gray-300 mb-24 xl:mb-40 bg-cover bg-center"},[r("div",{staticClass:"container mx-auto"},[r("video-popup-link",{staticClass:"mb-24 xl:mb-48"})],1)]):n._e(),n._v(" "),r("div",{staticClass:"container mx-auto"},[r("safety",{staticClass:"mb-24 xl:mb-40",attrs:{content:n.$t("safety")}})],1),n._v(" "),r("div",{staticClass:"bg-gray-300 mb-24 xl:mb-40 bg-cover bg-center",style:{"background-image":"url("+t(304)}},[r("div",{staticClass:"container mx-auto"},[r("image-text-block",{staticClass:"xl:flex-row-reverse",attrs:{content:n.$t("homepage.forBusiness")}})],1)]),n._v(" "),r("footer-component")],1)}),[],!1,null,"6d184b17",null);e.default=X.exports},602:function(n,e,t){var content=t(622);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(44).default)("2d706b55",content,!0,{sourceMap:!1})},621:function(n,e,t){"use strict";t(602)},622:function(n,e,t){(e=t(33)(!1)).push([n.i,'/* purgecss start ignore */\n.page-in-transition{\n  overflow-x:hidden\n}\n.zoomIn-leave,.zoomIn-leave-active,.zoomIn-enter,.zoomIn-enter-active{\n  position:absolute;\n  left:0;\n  top:0;\n  width:100vw !important;\n  height:101vh !important;\n  max-width:none !important;\n  transition:all .3s ease\n}\n.zoomIn-leave-active{\n  -webkit-animation:bounce-out .3s ease;\n          animation:bounce-out .3s ease;\n  transform-origin:50% 50%\n}\n.zoomIn-enter-active{\n  -webkit-animation:bounce-in .3s ease-out;\n          animation:bounce-in .3s ease-out;\n  transform-origin:50% 50%\n}\n.fadeInUp-enter-active{\n  -webkit-animation:fadeInUp .5s;\n          animation:fadeInUp .5s\n}\n.fadeInUp-leave-active{\n  animation:fadeInUp .5s reverse\n}\n.fadeInLeft-enter-active{\n  -webkit-animation:fadeInLeft .3s;\n          animation:fadeInLeft .3s\n}\n.fadeInLeft-leave-active{\n  animation:fadeInLeft .3s reverse\n}\n.fadeIn-enter-active{\n  -webkit-animation:fadeIn .14s ease-in;\n          animation:fadeIn .14s ease-in\n}\n.fadeIn-leave-active{\n  animation:fadeIn .14s ease-out reverse\n}\n.slideDown-enter-active{\n  -webkit-animation:slideDown .3s;\n          animation:slideDown .3s\n}\n.slideDown-leave-active{\n  animation:slideDown .3s reverse\n}\n@-webkit-keyframes swing{\n0%{\n    transform:rotate(0deg)\n}\n25%{\n    transform:rotate(-3deg)\n}\n75%{\n    transform:rotate(3deg)\n}\n100%{\n    transform:rotate(0deg)\n}\n}\n@keyframes swing{\n0%{\n    transform:rotate(0deg)\n}\n25%{\n    transform:rotate(-3deg)\n}\n75%{\n    transform:rotate(3deg)\n}\n100%{\n    transform:rotate(0deg)\n}\n}\n@-webkit-keyframes slideDown{\n0%{\n    height:0\n}\n100%{\n    height:100vh\n}\n}\n@keyframes slideDown{\n0%{\n    height:0\n}\n100%{\n    height:100vh\n}\n}\n@-webkit-keyframes fadeIn{\n0%{\n    opacity:0\n}\n100%{\n    opacity:1\n}\n}\n@keyframes fadeIn{\n0%{\n    opacity:0\n}\n100%{\n    opacity:1\n}\n}\n@-webkit-keyframes fadeInLeft{\n0%{\n    transform:translateX(10px);\n    opacity:0\n}\n100%{\n    transform:translateX(0);\n    opacity:1\n}\n}\n@keyframes fadeInLeft{\n0%{\n    transform:translateX(10px);\n    opacity:0\n}\n100%{\n    transform:translateX(0);\n    opacity:1\n}\n}\n@-webkit-keyframes fadeInUp{\n0%{\n    transform:translateY(10px);\n    opacity:0\n}\n100%{\n    transform:translateY(0);\n    opacity:1\n}\n}\n@keyframes fadeInUp{\n0%{\n    transform:translateY(10px);\n    opacity:0\n}\n100%{\n    transform:translateY(0);\n    opacity:1\n}\n}\n@-webkit-keyframes bounce-in{\n0%{\n    opacity:0;\n    transform:scale(0.95)\n}\n100%{\n    opacity:1;\n    transform:scale(1)\n}\n}\n@keyframes bounce-in{\n0%{\n    opacity:0;\n    transform:scale(0.95)\n}\n100%{\n    opacity:1;\n    transform:scale(1)\n}\n}\n@-webkit-keyframes bounce-out{\n0%{\n    opacity:1;\n    transform:scale(1)\n}\n75%{\n    opacity:0\n}\n100%{\n    opacity:0;\n    transform:scale(1.2)\n}\n}\n@keyframes bounce-out{\n0%{\n    opacity:1;\n    transform:scale(1)\n}\n75%{\n    opacity:0\n}\n100%{\n    opacity:0;\n    transform:scale(1.2)\n}\n}\n@-webkit-keyframes bounce-circle{\n0%{\n    transform:scale(1)\n}\n20%{\n    transform:scale(0.8)\n}\n60%{\n    transform:scale(1.1)\n}\n100%{\n    transform:scale(1)\n}\n}\n@keyframes bounce-circle{\n0%{\n    transform:scale(1)\n}\n20%{\n    transform:scale(0.8)\n}\n60%{\n    transform:scale(1.1)\n}\n100%{\n    transform:scale(1)\n}\n}\n@-webkit-keyframes wiggle{\n0%{\n    transform:scale(0, 0) rotate(0);\n    opacity:0\n}\n70%{\n    transform:scale(1.3, 1.3) rotate(3deg);\n    opacity:1\n}\n100%{\n    transform:scale(1, 1) rotate(0);\n    opacity:1\n}\n}\n@keyframes wiggle{\n0%{\n    transform:scale(0, 0) rotate(0);\n    opacity:0\n}\n70%{\n    transform:scale(1.3, 1.3) rotate(3deg);\n    opacity:1\n}\n100%{\n    transform:scale(1, 1) rotate(0);\n    opacity:1\n}\n}\n.client-reviews{\n  background-color:#fbfbfb;\n  padding-top:40px;\n  padding-bottom:40px\n}\n@media(min-width: 1024px){\n.client-reviews{\n    padding-top:80px;\n    padding-bottom:80px\n}\n}\n.client-reviews__title{\n  font-weight:300;\n  margin-bottom:40px\n}\n.client-reviews__logos{\n  display:flex;\n  height:120px\n}\n.client-reviews__logos>div img:first-child{\n  transition:all .3s ease\n}\n.client-reviews__logos>div:hover img:first-child{\n  -webkit-animation:swing linear 1s infinite;\n          animation:swing linear 1s infinite\n}\n.client-reviews__store-logo{\n  width:70px;\n  margin:0 auto\n}\n.client-reviews__stars{\n  width:180px\n}\n.client-reviews .review img{\n  width:100px;\n  height:100px;\n  border-radius:100%;\n  box-shadow:1px 1px 2px #364653\n}\n@media(min-width: 1024px){\n.client-reviews .review img{\n    margin-right:30px\n}\n}\n.client-reviews .review__name{\n  margin-top:16px;\n  text-align:center;\n  margin-bottom:40px;\n  padding:0 20px\n}\n@media(min-width: 1024px){\n.client-reviews .review__name{\n    text-align:left;\n    margin-bottom:0\n}\n}\n.client-reviews .review__text{\n  position:relative;\n  text-indent:36px;\n  line-height:24px;\n  font-weight:300;\n  color:#233746;\n  text-align:center;\n  padding:0 20px\n}\n@media(min-width: 1024px){\n.client-reviews .review__text{\n    text-align:left\n}\n}\n.client-reviews .review__text q{\n  position:relative\n}\n.client-reviews .review__text q:after{\n  content:"”";\n  font-size:96px;\n  position:absolute;\n  bottom:-35px;\n  right:-35px\n}\n.client-reviews .review__text q:before{\n  content:"“";\n  font-size:96px;\n  position:absolute;\n  top:30px;\n  left:-78px\n}\n.client-reviews .quote{\n  font-size:74px;\n  font-weight:700;\n  position:absolute;\n  line-height:62px\n}\n.client-reviews .slick-custom-controls{\n  width:calc(100% - 130px);\n  margin:0\n}\n@media(min-width: 1024px){\n.client-reviews .slick-custom-controls{\n    justify-content:flex-start;\n    margin:0 0 32px -12px\n}\n}\n.client-reviews .slick-slide>div{\n  width:100%;\n  margin-left:0;\n  margin-right:0\n}\n.client-reviews .slick-custom-controls .dot{\n  box-shadow:inset .5px .5px 1px rgba(0,0,0,.5)\n}\n.client-reviews .slick-custom-controls .dot.active{\n  background-color:#2ad2c9\n}\n\n/* purgecss end ignore */',""]),n.exports=e},644:function(n,e,t){"use strict";var r=[function(){var n=this.$createElement,e=this._self._c||n;return e("div",{staticClass:"client-reviews__logos space-x-10"},[e("div",{staticClass:"flex flex-col justify-between"},[e("img",{staticClass:"client-reviews__store-logo",attrs:{src:t(287)}}),this._v(" "),e("img",{staticClass:"client-reviews__stars",attrs:{src:t(290)}})]),this._v(" "),e("div",{staticClass:"flex flex-col justify-between"},[e("img",{staticClass:"client-reviews__store-logo",attrs:{src:t(288)}}),this._v(" "),e("img",{staticClass:"client-reviews__stars",attrs:{src:t(289)}})])])}],o=t(13),c=t(14),l=t(20),f=t(21),d=t(9),m=t(4),v=t(2),w=t(556);t(557);function y(n){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var t,r=Object(d.a)(n);if(e){var o=Object(d.a)(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return Object(f.a)(this,t)}}var h=function(n){Object(l.a)(t,n);var e=y(t);function t(){var n;return Object(o.a)(this,t),(n=e.apply(this,arguments)).activeSlide=0,n}return Object(c.a)(t,[{key:"nextSlide",value:function(){this.$refs.slick.next(),this.activeSlide=this.$refs.slick.currentSlide()}},{key:"prevSlide",value:function(){this.$refs.slick.prev(),this.activeSlide=this.$refs.slick.currentSlide()}},{key:"goToSlide",value:function(n){this.$refs.slick.goTo(n),this.activeSlide=this.$refs.slick.currentSlide()}},{key:"handleAfterChange",value:function(n,e,t){this.activeSlide=t}},{key:"slickOptions",get:function(){return{slidesToShow:1,dots:!1,arrows:!1,autoplay:!0,autoplaySpeed:1e4}}}]),t}(v.Vue),k=h=Object(m.a)([Object(v.Component)({components:{Slick:w.a}})],h),x=(t(621),t(30)),component=Object(x.a)(k,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"client-reviews"},[t("div",{staticClass:"container mx-auto"},[t("div",{staticClass:"w-full flex flex-wrap justify-between"},[t("div",{staticClass:"w-full lg:w-1/2 2xl:w-1/3"},[t("div",{staticClass:"client-reviews__title h1",domProps:{innerHTML:n._s(n.$t("homepage.clientReviews.title"))}}),n._v(" "),n._m(0)]),n._v(" "),t("div",{staticClass:"w-full lg:w-1/2 2xl:w-5/12 flex flex-col-reverse items-center justify-center lg:flex-col lg:items-end mt-20 lg:mt-0"},[t("div",{staticClass:"slick-custom-controls"},n._l(n.$t("homepage.clientReviews.reviews"),(function(e,r){return t("div",{key:"review-slides-dot-"+r,class:["dot",n.activeSlide===r?"active":""],on:{click:function(e){return n.goToSlide(r)}}})})),0),n._v(" "),t("div",{staticClass:"w-full"},[t("slick",{ref:"slick",staticClass:"slick-features-slider",attrs:{options:n.slickOptions},on:{afterChange:n.handleAfterChange}},n._l(n.$t("homepage.clientReviews.reviews"),(function(e,r){return t("div",{key:"review-"+r,staticClass:"review"},[t("div",{staticClass:"w-full flex items-center flex-col lg:flex-row"},[t("img",{staticClass:"mb-5 lg:mb-0",attrs:{src:n.$options.filters.localisedAsset(e.img)}}),n._v(" "),t("div",[t("div",{staticClass:"review__text h4"},[t("q",{domProps:{innerHTML:n._s(e.text)}})]),n._v(" "),t("div",{staticClass:"review__name h5 font-semibold",domProps:{innerHTML:n._s(e.name)}})])])])})),0)],1)])])])])}),r,!1,null,null,null);e.a=component.exports},734:function(n,e,t){var content=t(985);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(44).default)("5cdbfb4e",content,!0,{sourceMap:!1})},735:function(n,e,t){var content=t(987);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(44).default)("633ede5b",content,!0,{sourceMap:!1})},984:function(n,e,t){"use strict";t(734)},985:function(n,e,t){var r=t(33),o=t(278),c=t(303),l=t(302);e=r(!1);var f=o(c),d=o(l);e.push([n.i,"/* purgecss start ignore */\n.page-in-transition{\n  overflow-x:hidden\n}\n.zoomIn-leave,.zoomIn-leave-active,.zoomIn-enter,.zoomIn-enter-active{\n  position:absolute;\n  left:0;\n  top:0;\n  width:100vw !important;\n  height:101vh !important;\n  max-width:none !important;\n  transition:all .3s ease\n}\n.zoomIn-leave-active{\n  -webkit-animation:bounce-out .3s ease;\n          animation:bounce-out .3s ease;\n  transform-origin:50% 50%\n}\n.zoomIn-enter-active{\n  -webkit-animation:bounce-in .3s ease-out;\n          animation:bounce-in .3s ease-out;\n  transform-origin:50% 50%\n}\n.fadeInUp-enter-active{\n  -webkit-animation:fadeInUp .5s;\n          animation:fadeInUp .5s\n}\n.fadeInUp-leave-active{\n  animation:fadeInUp .5s reverse\n}\n.fadeInLeft-enter-active{\n  -webkit-animation:fadeInLeft .3s;\n          animation:fadeInLeft .3s\n}\n.fadeInLeft-leave-active{\n  animation:fadeInLeft .3s reverse\n}\n.fadeIn-enter-active{\n  -webkit-animation:fadeIn .14s ease-in;\n          animation:fadeIn .14s ease-in\n}\n.fadeIn-leave-active{\n  animation:fadeIn .14s ease-out reverse\n}\n.slideDown-enter-active{\n  -webkit-animation:slideDown .3s;\n          animation:slideDown .3s\n}\n.slideDown-leave-active{\n  animation:slideDown .3s reverse\n}\n@-webkit-keyframes swing{\n0%{\n    transform:rotate(0deg)\n}\n25%{\n    transform:rotate(-3deg)\n}\n75%{\n    transform:rotate(3deg)\n}\n100%{\n    transform:rotate(0deg)\n}\n}\n@keyframes swing{\n0%{\n    transform:rotate(0deg)\n}\n25%{\n    transform:rotate(-3deg)\n}\n75%{\n    transform:rotate(3deg)\n}\n100%{\n    transform:rotate(0deg)\n}\n}\n@-webkit-keyframes slideDown{\n0%{\n    height:0\n}\n100%{\n    height:100vh\n}\n}\n@keyframes slideDown{\n0%{\n    height:0\n}\n100%{\n    height:100vh\n}\n}\n@-webkit-keyframes fadeIn{\n0%{\n    opacity:0\n}\n100%{\n    opacity:1\n}\n}\n@keyframes fadeIn{\n0%{\n    opacity:0\n}\n100%{\n    opacity:1\n}\n}\n@-webkit-keyframes fadeInLeft{\n0%{\n    transform:translateX(10px);\n    opacity:0\n}\n100%{\n    transform:translateX(0);\n    opacity:1\n}\n}\n@keyframes fadeInLeft{\n0%{\n    transform:translateX(10px);\n    opacity:0\n}\n100%{\n    transform:translateX(0);\n    opacity:1\n}\n}\n@-webkit-keyframes fadeInUp{\n0%{\n    transform:translateY(10px);\n    opacity:0\n}\n100%{\n    transform:translateY(0);\n    opacity:1\n}\n}\n@keyframes fadeInUp{\n0%{\n    transform:translateY(10px);\n    opacity:0\n}\n100%{\n    transform:translateY(0);\n    opacity:1\n}\n}\n@-webkit-keyframes bounce-in{\n0%{\n    opacity:0;\n    transform:scale(0.95)\n}\n100%{\n    opacity:1;\n    transform:scale(1)\n}\n}\n@keyframes bounce-in{\n0%{\n    opacity:0;\n    transform:scale(0.95)\n}\n100%{\n    opacity:1;\n    transform:scale(1)\n}\n}\n@-webkit-keyframes bounce-out{\n0%{\n    opacity:1;\n    transform:scale(1)\n}\n75%{\n    opacity:0\n}\n100%{\n    opacity:0;\n    transform:scale(1.2)\n}\n}\n@keyframes bounce-out{\n0%{\n    opacity:1;\n    transform:scale(1)\n}\n75%{\n    opacity:0\n}\n100%{\n    opacity:0;\n    transform:scale(1.2)\n}\n}\n@-webkit-keyframes bounce-circle{\n0%{\n    transform:scale(1)\n}\n20%{\n    transform:scale(0.8)\n}\n60%{\n    transform:scale(1.1)\n}\n100%{\n    transform:scale(1)\n}\n}\n@keyframes bounce-circle{\n0%{\n    transform:scale(1)\n}\n20%{\n    transform:scale(0.8)\n}\n60%{\n    transform:scale(1.1)\n}\n100%{\n    transform:scale(1)\n}\n}\n@-webkit-keyframes wiggle{\n0%{\n    transform:scale(0, 0) rotate(0);\n    opacity:0\n}\n70%{\n    transform:scale(1.3, 1.3) rotate(3deg);\n    opacity:1\n}\n100%{\n    transform:scale(1, 1) rotate(0);\n    opacity:1\n}\n}\n@keyframes wiggle{\n0%{\n    transform:scale(0, 0) rotate(0);\n    opacity:0\n}\n70%{\n    transform:scale(1.3, 1.3) rotate(3deg);\n    opacity:1\n}\n100%{\n    transform:scale(1, 1) rotate(0);\n    opacity:1\n}\n}\n.safety-block{\n  background-color:#354552;\n  background-size:cover;\n  color:#fff;\n  border-radius:10px;\n  text-align:center;\n  line-height:1.2;\n  display:flex;\n  align-items:center;\n  font-weight:700;\n  padding:20px;\n  height:260px;\n  background-image:url("+f+")\n}\n.safety-block:nth-child(3){\n  background-position:right 50% top 0\n}\n.safety-block:nth-child(4){\n  background-position:right 0% top 0\n}\n@media(max-width: 640px){\n.safety-block{\n    width:260px;\n    margin:auto\n}\n}\n@media(min-width: 1024px){\n.safety-block{\n    width:325px;\n    margin:auto\n}\n}\n@media(min-width: 1280px){\n.safety-block{\n    height:325px;\n    width:auto\n}\n}\n@media(min-width: 1400px){\n.safety-block{\n    height:350px;\n    width:auto\n}\n}\n.safety-block:first-child{\n  background-image:url("+d+");\n  background-size:cover;\n  align-items:flex-start;\n  text-align:left;\n  height:260px;\n  background-position:center\n}\n@media(min-width: 1280px){\n.safety-block:first-child{\n    height:325px\n}\n}\n@media(min-width: 1400px){\n.safety-block:first-child{\n    height:350px\n}\n}\n\n/* purgecss end ignore */",""]),n.exports=e},986:function(n,e,t){"use strict";t(735)},987:function(n,e,t){(e=t(33)(!1)).push([n.i,"/* purgecss start ignore */\n.page-in-transition[data-v-b0b255de]{\n  overflow-x:hidden\n}\n.zoomIn-leave[data-v-b0b255de],.zoomIn-leave-active[data-v-b0b255de],.zoomIn-enter[data-v-b0b255de],.zoomIn-enter-active[data-v-b0b255de]{\n  position:absolute;\n  left:0;\n  top:0;\n  width:100vw !important;\n  height:101vh !important;\n  max-width:none !important;\n  transition:all .3s ease\n}\n.zoomIn-leave-active[data-v-b0b255de]{\n  -webkit-animation:bounce-out-data-v-b0b255de .3s ease;\n          animation:bounce-out-data-v-b0b255de .3s ease;\n  transform-origin:50% 50%\n}\n.zoomIn-enter-active[data-v-b0b255de]{\n  -webkit-animation:bounce-in-data-v-b0b255de .3s ease-out;\n          animation:bounce-in-data-v-b0b255de .3s ease-out;\n  transform-origin:50% 50%\n}\n.fadeInUp-enter-active[data-v-b0b255de]{\n  -webkit-animation:fadeInUp-data-v-b0b255de .5s;\n          animation:fadeInUp-data-v-b0b255de .5s\n}\n.fadeInUp-leave-active[data-v-b0b255de]{\n  animation:fadeInUp-data-v-b0b255de .5s reverse\n}\n.fadeInLeft-enter-active[data-v-b0b255de]{\n  -webkit-animation:fadeInLeft-data-v-b0b255de .3s;\n          animation:fadeInLeft-data-v-b0b255de .3s\n}\n.fadeInLeft-leave-active[data-v-b0b255de]{\n  animation:fadeInLeft-data-v-b0b255de .3s reverse\n}\n.fadeIn-enter-active[data-v-b0b255de]{\n  -webkit-animation:fadeIn-data-v-b0b255de .14s ease-in;\n          animation:fadeIn-data-v-b0b255de .14s ease-in\n}\n.fadeIn-leave-active[data-v-b0b255de]{\n  animation:fadeIn-data-v-b0b255de .14s ease-out reverse\n}\n.slideDown-enter-active[data-v-b0b255de]{\n  -webkit-animation:slideDown-data-v-b0b255de .3s;\n          animation:slideDown-data-v-b0b255de .3s\n}\n.slideDown-leave-active[data-v-b0b255de]{\n  animation:slideDown-data-v-b0b255de .3s reverse\n}\n@-webkit-keyframes swing-data-v-b0b255de{\n0%{\n    transform:rotate(0deg)\n}\n25%{\n    transform:rotate(-3deg)\n}\n75%{\n    transform:rotate(3deg)\n}\n100%{\n    transform:rotate(0deg)\n}\n}\n@keyframes swing-data-v-b0b255de{\n0%{\n    transform:rotate(0deg)\n}\n25%{\n    transform:rotate(-3deg)\n}\n75%{\n    transform:rotate(3deg)\n}\n100%{\n    transform:rotate(0deg)\n}\n}\n@-webkit-keyframes slideDown-data-v-b0b255de{\n0%{\n    height:0\n}\n100%{\n    height:100vh\n}\n}\n@keyframes slideDown-data-v-b0b255de{\n0%{\n    height:0\n}\n100%{\n    height:100vh\n}\n}\n@-webkit-keyframes fadeIn-data-v-b0b255de{\n0%{\n    opacity:0\n}\n100%{\n    opacity:1\n}\n}\n@keyframes fadeIn-data-v-b0b255de{\n0%{\n    opacity:0\n}\n100%{\n    opacity:1\n}\n}\n@-webkit-keyframes fadeInLeft-data-v-b0b255de{\n0%{\n    transform:translateX(10px);\n    opacity:0\n}\n100%{\n    transform:translateX(0);\n    opacity:1\n}\n}\n@keyframes fadeInLeft-data-v-b0b255de{\n0%{\n    transform:translateX(10px);\n    opacity:0\n}\n100%{\n    transform:translateX(0);\n    opacity:1\n}\n}\n@-webkit-keyframes fadeInUp-data-v-b0b255de{\n0%{\n    transform:translateY(10px);\n    opacity:0\n}\n100%{\n    transform:translateY(0);\n    opacity:1\n}\n}\n@keyframes fadeInUp-data-v-b0b255de{\n0%{\n    transform:translateY(10px);\n    opacity:0\n}\n100%{\n    transform:translateY(0);\n    opacity:1\n}\n}\n@-webkit-keyframes bounce-in-data-v-b0b255de{\n0%{\n    opacity:0;\n    transform:scale(0.95)\n}\n100%{\n    opacity:1;\n    transform:scale(1)\n}\n}\n@keyframes bounce-in-data-v-b0b255de{\n0%{\n    opacity:0;\n    transform:scale(0.95)\n}\n100%{\n    opacity:1;\n    transform:scale(1)\n}\n}\n@-webkit-keyframes bounce-out-data-v-b0b255de{\n0%{\n    opacity:1;\n    transform:scale(1)\n}\n75%{\n    opacity:0\n}\n100%{\n    opacity:0;\n    transform:scale(1.2)\n}\n}\n@keyframes bounce-out-data-v-b0b255de{\n0%{\n    opacity:1;\n    transform:scale(1)\n}\n75%{\n    opacity:0\n}\n100%{\n    opacity:0;\n    transform:scale(1.2)\n}\n}\n@-webkit-keyframes bounce-circle-data-v-b0b255de{\n0%{\n    transform:scale(1)\n}\n20%{\n    transform:scale(0.8)\n}\n60%{\n    transform:scale(1.1)\n}\n100%{\n    transform:scale(1)\n}\n}\n@keyframes bounce-circle-data-v-b0b255de{\n0%{\n    transform:scale(1)\n}\n20%{\n    transform:scale(0.8)\n}\n60%{\n    transform:scale(1.1)\n}\n100%{\n    transform:scale(1)\n}\n}\n@-webkit-keyframes wiggle-data-v-b0b255de{\n0%{\n    transform:scale(0, 0) rotate(0);\n    opacity:0\n}\n70%{\n    transform:scale(1.3, 1.3) rotate(3deg);\n    opacity:1\n}\n100%{\n    transform:scale(1, 1) rotate(0);\n    opacity:1\n}\n}\n@keyframes wiggle-data-v-b0b255de{\n0%{\n    transform:scale(0, 0) rotate(0);\n    opacity:0\n}\n70%{\n    transform:scale(1.3, 1.3) rotate(3deg);\n    opacity:1\n}\n100%{\n    transform:scale(1, 1) rotate(0);\n    opacity:1\n}\n}\n.video-popup-link[data-v-b0b255de]{\n  background-color:#fbfbfb;\n  border-radius:10px;\n  color:#233746;\n  padding-top:40px;\n  padding-bottom:40px\n}\n@media(min-width: 1024px){\n.video-popup-link[data-v-b0b255de]{\n    padding-top:80px;\n    padding-bottom:80px\n}\n}\n.video-popup-link .video-popup-link__icon.rotated[data-v-b0b255de]{\n  transform:rotate(10deg) scale(1.1)\n}\n.video-popup-link__icon[data-v-b0b255de]{\n  transition:all .3s ease;\n  margin-bottom:20px\n}\n.video-popup-link button[data-v-b0b255de]{\n  margin-top:20px\n}\n\n/* purgecss end ignore */",""]),n.exports=e}}]);
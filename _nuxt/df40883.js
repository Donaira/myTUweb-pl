(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1212:function(n,t,e){"use strict";e.r(t);var r=e(7),o=e(9),c=e(10),f=e(5),d=e(3),l=e(1),m=e(101),v=e(616),y=e(714),h=e(601);function k(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,r=Object(f.a)(n);if(t){var o=Object(f.a)(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return Object(c.a)(this,e)}}var w=function(n){Object(o.a)(e,n);var t=k(e);function e(){return Object(r.a)(this,e),t.apply(this,arguments)}return e}(l.Vue),_=w=Object(d.a)([Object(l.Component)({components:{PageHeader:m.a,HeroSlider:v.a,FooterComponent:h.a,PricesTable:y.a}})],w),x=e(14),component=Object(x.a)(_,(function(){var n=this.$createElement,t=this._self._c||n;return t("div",[t("div",{staticClass:"container mx-auto"},[t("hero-slider",{staticClass:"mb-24 xl:mb-40",attrs:{"hero-slides":this.$t("pricesPage.heroSlides")}}),this._v(" "),t("prices-table",{staticClass:"mb-24 xl:mb-40",attrs:{content:this.$t("pricesPage.prices")}})],1),this._v(" "),t("footer-component",{attrs:{extraStyles:"no-mt"}})],1)}),[],!1,null,"4c8c64f1",null);t.default=component.exports},599:function(n,t,e){var content=e(603);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(24).default)("320129ce",content,!1,{sourceMap:!1})},601:function(n,t,e){"use strict";var r=e(7),o=e(8),c=e(9),f=e(10),d=e(5),l=e(3),m=e(1),v=e(70);function y(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,r=Object(d.a)(n);if(t){var o=Object(d.a)(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return Object(f.a)(this,e)}}var h=function(n){Object(c.a)(e,n);var t=y(e);function e(){return Object(r.a)(this,e),t.apply(this,arguments)}return Object(o.a)(e,[{key:"handleClick",value:function(link){Object(v.a)(link,this)}},{key:"companyData",get:function(){return this.$t("contacts")}},{key:"footerMenu",get:function(){return this.$t("footer")}},{key:"socialLinks",get:function(){return this.$te("footer.socialLinks."+this.$i18n.locale)?this.$t("footer.socialLinks."+this.$i18n.locale):this.$t("footer.socialLinks.default")}},{key:"footerMenuItems",get:function(){return this.$t("footerMenuItems")}}]),e}(m.Vue);Object(l.a)([Object(m.Prop)({required:!1,default:""})],h.prototype,"type",void 0),Object(l.a)([Object(m.Prop)({required:!1,default:""})],h.prototype,"extraStyles",void 0);var k=h=Object(l.a)([Object(m.Component)({components:{}})],h),w=(e(602),e(14)),component=Object(w.a)(k,(function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("div",[r("div",{class:["footer",n.extraStyles]},[r("div",{staticClass:"container mx-auto"},[r("div",{staticClass:"w-full flex flex-wrap lg:flex-row"},[r("div",{staticClass:"w-full mb-10 lg:w-2/5"},[r("img",{staticClass:"opacity-80",attrs:{src:e(279)}}),n._v(" "),r("div",{staticClass:"w-full social-icons text-2xl mt-5 space-x-5"},[r("a",{attrs:{href:n.socialLinks.facebook,target:"_blank"}},[r("font-awesome-icon",{attrs:{icon:["fab","facebook"]}})],1),n._v(" "),r("a",{attrs:{href:n.socialLinks.instagram,target:"_blank"}},[r("font-awesome-icon",{attrs:{icon:["fab","instagram"]}})],1),n._v(" "),r("a",{attrs:{href:n.socialLinks.linkedin,target:"_blank"}},[r("font-awesome-icon",{attrs:{icon:["fab","linkedin-in"]}})],1)])]),n._v(" "),r("div",{staticClass:"flex w-full mb-10 lg:w-3/5 space-x-4"},n._l(n.footerMenuItems,(function(t,e){return r("div",{key:"footer-item-"+e,staticClass:"w-1/3"},[r("ul",[t.link?r("li",{staticClass:"link"},[r("a",{attrs:{href:t.link,target:"_blank"},domProps:{innerHTML:n._s(t.title)}})]):r("li",{domProps:{innerHTML:n._s(t.title)}}),n._v(" "),n._l(t.items,(function(t,i){return r("li",{key:"footer-subitem-"+i},[t.link&&!t.link.includes("https")?r("a",{on:{click:function(e){return n.handleClick(t.link)}}},[r("span",{domProps:{innerHTML:n._s(t.title)}})]):r("a",{attrs:{href:t.link,target:"_blank"},domProps:{innerHTML:n._s(t.title)}})])}))],2)])})),0),n._v(" "),r("div",{staticClass:"w-full lg:flex"},[r("div",{staticClass:"w-full lg:w-1/2"},[r("div",{staticClass:"mt-4 w-5/6 opacity-50"},[n._v("© 2023 UAB Travel Union")]),n._v(" "),r("div",{staticClass:"mt-1 w-5/6 opacity-50",domProps:{innerHTML:n._s(n.footerMenu.legalText)}})]),n._v(" "),r("div",{staticClass:"w-full lg:w-1/2 lg:text-right"},[r("div",{staticClass:"mt-4 opacity-50"},[n._v("UAB Travel Union, "),r("span",{domProps:{innerHTML:n._s(n.companyData.address)}})]),n._v(" "),r("div",{staticClass:"mt-1 opacity-50"},[r("font-awesome-icon",{staticClass:"text-primary",attrs:{icon:["fas","phone"]}}),n._v(" "),r("span",{staticClass:"mr-2",domProps:{innerHTML:n._s(n.companyData.phone)}}),n._v(" "),r("font-awesome-icon",{staticClass:"text-primary",attrs:{icon:["fas","at"]}}),n._v(" "),r("span",{domProps:{innerHTML:n._s(n.companyData.email)}})],1),n._v(" "),r("div",{staticClass:"mt-1 opacity-50",domProps:{innerHTML:n._s(n.companyData.companyCode)}}),n._v(" "),r("div",{staticClass:"mt-1 opacity-50",domProps:{innerHTML:n._s(n.companyData.vatCode)}})])])])])])])}),[],!1,null,"7875dab2",null);t.a=component.exports},602:function(n,t,e){"use strict";e(599)},603:function(n,t,e){(t=e(18)(!1)).push([n.i,".page-in-transition[data-v-7875dab2]{\n  overflow-x:hidden\n}\n.zoomIn-leave[data-v-7875dab2],.zoomIn-leave-active[data-v-7875dab2],.zoomIn-enter[data-v-7875dab2],.zoomIn-enter-active[data-v-7875dab2]{\n  position:absolute;\n  left:0;\n  top:0;\n  width:100vw !important;\n  height:101vh !important;\n  max-width:none !important;\n  transition:all .3s ease\n}\n.zoomIn-leave-active[data-v-7875dab2]{\n  -webkit-animation:bounce-out-data-v-7875dab2 .3s ease;\n          animation:bounce-out-data-v-7875dab2 .3s ease;\n  transform-origin:50% 50%\n}\n.zoomIn-enter-active[data-v-7875dab2]{\n  -webkit-animation:bounce-in-data-v-7875dab2 .3s ease-out;\n          animation:bounce-in-data-v-7875dab2 .3s ease-out;\n  transform-origin:50% 50%\n}\n.fadeInUp-enter-active[data-v-7875dab2]{\n  -webkit-animation:fadeInUp-data-v-7875dab2 .5s;\n          animation:fadeInUp-data-v-7875dab2 .5s\n}\n.fadeInUp-leave-active[data-v-7875dab2]{\n  animation:fadeInUp-data-v-7875dab2 .5s reverse\n}\n.fadeInLeft-enter-active[data-v-7875dab2]{\n  -webkit-animation:fadeInLeft-data-v-7875dab2 .3s;\n          animation:fadeInLeft-data-v-7875dab2 .3s\n}\n.fadeInLeft-leave-active[data-v-7875dab2]{\n  animation:fadeInLeft-data-v-7875dab2 .3s reverse\n}\n.fadeIn-enter-active[data-v-7875dab2]{\n  -webkit-animation:fadeIn-data-v-7875dab2 .14s ease-in;\n          animation:fadeIn-data-v-7875dab2 .14s ease-in\n}\n.fadeIn-leave-active[data-v-7875dab2]{\n  animation:fadeIn-data-v-7875dab2 .14s ease-out reverse\n}\n.slideDown-enter-active[data-v-7875dab2]{\n  -webkit-animation:slideDown-data-v-7875dab2 .3s;\n          animation:slideDown-data-v-7875dab2 .3s\n}\n.slideDown-leave-active[data-v-7875dab2]{\n  animation:slideDown-data-v-7875dab2 .3s reverse\n}\n@-webkit-keyframes swing-data-v-7875dab2{\n0%{\n    transform:rotate(0deg)\n}\n25%{\n    transform:rotate(-3deg)\n}\n75%{\n    transform:rotate(3deg)\n}\n100%{\n    transform:rotate(0deg)\n}\n}\n@keyframes swing-data-v-7875dab2{\n0%{\n    transform:rotate(0deg)\n}\n25%{\n    transform:rotate(-3deg)\n}\n75%{\n    transform:rotate(3deg)\n}\n100%{\n    transform:rotate(0deg)\n}\n}\n@-webkit-keyframes slideDown-data-v-7875dab2{\n0%{\n    height:0\n}\n100%{\n    height:100vh\n}\n}\n@keyframes slideDown-data-v-7875dab2{\n0%{\n    height:0\n}\n100%{\n    height:100vh\n}\n}\n@-webkit-keyframes fadeIn-data-v-7875dab2{\n0%{\n    opacity:0\n}\n100%{\n    opacity:1\n}\n}\n@keyframes fadeIn-data-v-7875dab2{\n0%{\n    opacity:0\n}\n100%{\n    opacity:1\n}\n}\n@-webkit-keyframes fadeInLeft-data-v-7875dab2{\n0%{\n    transform:translateX(10px);\n    opacity:0\n}\n100%{\n    transform:translateX(0);\n    opacity:1\n}\n}\n@keyframes fadeInLeft-data-v-7875dab2{\n0%{\n    transform:translateX(10px);\n    opacity:0\n}\n100%{\n    transform:translateX(0);\n    opacity:1\n}\n}\n@-webkit-keyframes fadeInUp-data-v-7875dab2{\n0%{\n    transform:translateY(10px);\n    opacity:0\n}\n100%{\n    transform:translateY(0);\n    opacity:1\n}\n}\n@keyframes fadeInUp-data-v-7875dab2{\n0%{\n    transform:translateY(10px);\n    opacity:0\n}\n100%{\n    transform:translateY(0);\n    opacity:1\n}\n}\n@-webkit-keyframes bounce-in-data-v-7875dab2{\n0%{\n    opacity:0;\n    transform:scale(0.95)\n}\n100%{\n    opacity:1;\n    transform:scale(1)\n}\n}\n@keyframes bounce-in-data-v-7875dab2{\n0%{\n    opacity:0;\n    transform:scale(0.95)\n}\n100%{\n    opacity:1;\n    transform:scale(1)\n}\n}\n@-webkit-keyframes bounce-out-data-v-7875dab2{\n0%{\n    opacity:1;\n    transform:scale(1)\n}\n75%{\n    opacity:0\n}\n100%{\n    opacity:0;\n    transform:scale(1.2)\n}\n}\n@keyframes bounce-out-data-v-7875dab2{\n0%{\n    opacity:1;\n    transform:scale(1)\n}\n75%{\n    opacity:0\n}\n100%{\n    opacity:0;\n    transform:scale(1.2)\n}\n}\n@-webkit-keyframes bounce-circle-data-v-7875dab2{\n0%{\n    transform:scale(1)\n}\n20%{\n    transform:scale(0.8)\n}\n60%{\n    transform:scale(1.1)\n}\n100%{\n    transform:scale(1)\n}\n}\n@keyframes bounce-circle-data-v-7875dab2{\n0%{\n    transform:scale(1)\n}\n20%{\n    transform:scale(0.8)\n}\n60%{\n    transform:scale(1.1)\n}\n100%{\n    transform:scale(1)\n}\n}\n@-webkit-keyframes wiggle-data-v-7875dab2{\n0%{\n    transform:scale(0, 0) rotate(0);\n    opacity:0\n}\n70%{\n    transform:scale(1.3, 1.3) rotate(3deg);\n    opacity:1\n}\n100%{\n    transform:scale(1, 1) rotate(0);\n    opacity:1\n}\n}\n@keyframes wiggle-data-v-7875dab2{\n0%{\n    transform:scale(0, 0) rotate(0);\n    opacity:0\n}\n70%{\n    transform:scale(1.3, 1.3) rotate(3deg);\n    opacity:1\n}\n100%{\n    transform:scale(1, 1) rotate(0);\n    opacity:1\n}\n}\n.legal[data-v-7875dab2]{\n  margin:5rem 0 0 0;\n  font-style:italic\n}\n.legal a[data-v-7875dab2]{\n  color:#2ad2c9\n}\n@media(min-width: 1024px){\n.legal[data-v-7875dab2]{\n    margin:10rem 0 0 0\n}\n}\n.footer[data-v-7875dab2]{\n  margin-top:5rem;\n  background-color:#fbfbfb;\n  padding:40px 0;\n  font-size:12px\n}\n@media(min-width: 1024px){\n.footer[data-v-7875dab2]{\n    margin-top:10rem\n}\n}\n.footer.no-mt[data-v-7875dab2]{\n  margin-top:0\n}\n@media(min-width: 1024px){\n.footer.no-mt[data-v-7875dab2]{\n    margin-top:0rem\n}\n}\n.footer a[data-v-7875dab2]{\n  cursor:pointer\n}\n.footer .social-icons a[data-v-7875dab2]{\n  opacity:.2;\n  transition:all .3s ease\n}\n.footer .social-icons a[data-v-7875dab2]:hover{\n  opacity:.8;\n  color:#2ad2c9\n}\n.footer ul li[data-v-7875dab2]{\n  margin-bottom:8px\n}\n.footer ul li a[data-v-7875dab2]{\n  opacity:.5;\n  transition:all .2s ease\n}\n.footer ul li:hover a[data-v-7875dab2]{\n  color:#2ad2c9;\n  opacity:.8\n}\n.footer ul li.link[data-v-7875dab2]:first-child{\n  opacity:1\n}\n.footer ul li[data-v-7875dab2]:first-child{\n  font-weight:700;\n  opacity:.5\n}",""]),n.exports=t},609:function(n,t,e){var content=e(621);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(24).default)("c2d539ce",content,!1,{sourceMap:!1})},616:function(n,t,e){"use strict";e(169);var r=e(7),o=e(8),c=e(9),f=e(10),d=e(5),l=e(3),m=e(1),v=e(71),y=e(617),h=(e(605),e(70));function k(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,r=Object(d.a)(n);if(t){var o=Object(d.a)(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return Object(f.a)(this,e)}}var w=function(n){Object(c.a)(e,n);var t=k(e);function e(){var n;return Object(r.a)(this,e),(n=t.apply(this,arguments)).activeSlide=0,n}return Object(o.a)(e,[{key:"redirectToPlayStore",value:function(n){"ios"===n?window.open("https://apps.apple.com/us/app/id1484316366","_blank"):"android"===n&&window.open("https://play.google.com/store/apps/details?id=com.travelunion","_blank")}},{key:"heroLink",value:function(link){this.$router.push(this.localePath({name:link}))}},{key:"handleClick",value:function(n){n&&(console.log(n.hash,n.link),Object(h.a)(n.hash?n.link+"#"+n.hash:n.link,this))}},{key:"handleAfterChange",value:function(n,t,e){this.activeSlide=e}},{key:"nextSlide",value:function(){this.$refs.slick.next(),this.activeSlide=this.$refs.slick.currentSlide()}},{key:"prevSlide",value:function(){this.$refs.slick.prev(),this.activeSlide=this.$refs.slick.currentSlide()}},{key:"goToSlide",value:function(n){this.$refs.slick.goTo(n),this.activeSlide=this.$refs.slick.currentSlide()}},{key:"slickOptions",get:function(){return{slidesToShow:1,dots:!1,arrows:!1,autoplay:!0,autoplaySpeed:3e3}}}]),e}(m.Vue);Object(l.a)([Object(m.Prop)({required:!0})],w.prototype,"heroSlides",void 0);var _=w=Object(l.a)([Object(m.Component)({components:{TuButton:v.a,Slick:y.a}})],w),x=(e(620),e(14)),component=Object(x.a)(_,(function(){var n=this,t=n.$createElement,r=n._self._c||t;return n.heroSlides.length>0?r("div",{staticClass:"full-width"},[r("slick",{ref:"slick",attrs:{options:n.slickOptions},on:{afterChange:n.handleAfterChange}},n._l(n.heroSlides,(function(t,o){return r("div",{key:"hero-slide-"+o,class:["hero-slide",t.link?"link":""],style:{"background-image":"url("+n.$options.filters.localisedAsset(t.bg)+")"},on:{click:function(e){return e.target!==e.currentTarget?null:n.handleClick(t.ctaPrimary)}}},[r("div",{staticClass:"hero-slide-inner"},[r("div",{staticClass:"w-full lg:w-1/2 xl:w-1/2 hero-slide__left"},[r("div",{staticClass:"h1 hero-slide__title leading-tight pt-8 lg:pt-0",domProps:{innerHTML:n._s(t.title)}}),n._v(" "),t.text?r("div",{domProps:{innerHTML:n._s(t.text)}}):n._e(),n._v(" "),t.ctaPrimary||t.ctaSecondary?r("div",{staticClass:"hero-slide__buttons flex flex-wrap"},[t.ctaPrimary?r("tu-button",{staticClass:"mb-2 lg:mb-0",attrs:{type:"primary",title:t.ctaPrimary.title},nativeOn:{click:function(e){return n.handleClick(t.ctaPrimary)}}}):n._e(),n._v(" "),t.ctaSecondary?r("tu-button",{staticClass:"ml-1 mb-2 lg:mb-0 lg:ml-8 text-center",attrs:{type:"primary inverse",title:t.ctaSecondary.title},nativeOn:{click:function(e){return n.handleClick(t.ctaSecondary)}}}):n._e()],1):n._e(),n._v(" "),t.ctaDownload?r("div",{staticClass:"hero-slide__buttons flex items-center space-x-6"},[r("img",{staticClass:"hero-slide__cta-download cursor-pointer",attrs:{src:e(281)},on:{click:function(t){return n.redirectToPlayStore("android")}}}),n._v(" "),r("img",{staticClass:"hero-slide__cta-download cursor-pointer",attrs:{src:e(280)},on:{click:function(t){return n.redirectToPlayStore("ios")}}})]):n._e()]),n._v(" "),r("div",{staticClass:"w-full lg:w-1/2 hero-slide__right"},[r("img",{attrs:{src:n.$options.filters.localisedAsset(t.img)}})])])])})),0),n._v(" "),n.heroSlides&&n.heroSlides.length>1?r("div",{staticClass:"slick-custom-controls"},n._l(n.heroSlides,(function(t,e){return r("div",{key:"hero-slides-dot-"+e,class:["dot",n.activeSlide===e?"active":""],on:{click:function(t){return n.goToSlide(e)}}})})),0):n._e()],1):n._e()}),[],!1,null,"f8bf51e4",null);t.a=component.exports},620:function(n,t,e){"use strict";e(609)},621:function(n,t,e){(t=e(18)(!1)).push([n.i,".page-in-transition[data-v-f8bf51e4]{\n  overflow-x:hidden\n}\n.zoomIn-leave[data-v-f8bf51e4],.zoomIn-leave-active[data-v-f8bf51e4],.zoomIn-enter[data-v-f8bf51e4],.zoomIn-enter-active[data-v-f8bf51e4]{\n  position:absolute;\n  left:0;\n  top:0;\n  width:100vw !important;\n  height:101vh !important;\n  max-width:none !important;\n  transition:all .3s ease\n}\n.zoomIn-leave-active[data-v-f8bf51e4]{\n  -webkit-animation:bounce-out-data-v-f8bf51e4 .3s ease;\n          animation:bounce-out-data-v-f8bf51e4 .3s ease;\n  transform-origin:50% 50%\n}\n.zoomIn-enter-active[data-v-f8bf51e4]{\n  -webkit-animation:bounce-in-data-v-f8bf51e4 .3s ease-out;\n          animation:bounce-in-data-v-f8bf51e4 .3s ease-out;\n  transform-origin:50% 50%\n}\n.fadeInUp-enter-active[data-v-f8bf51e4]{\n  -webkit-animation:fadeInUp-data-v-f8bf51e4 .5s;\n          animation:fadeInUp-data-v-f8bf51e4 .5s\n}\n.fadeInUp-leave-active[data-v-f8bf51e4]{\n  animation:fadeInUp-data-v-f8bf51e4 .5s reverse\n}\n.fadeInLeft-enter-active[data-v-f8bf51e4]{\n  -webkit-animation:fadeInLeft-data-v-f8bf51e4 .3s;\n          animation:fadeInLeft-data-v-f8bf51e4 .3s\n}\n.fadeInLeft-leave-active[data-v-f8bf51e4]{\n  animation:fadeInLeft-data-v-f8bf51e4 .3s reverse\n}\n.fadeIn-enter-active[data-v-f8bf51e4]{\n  -webkit-animation:fadeIn-data-v-f8bf51e4 .14s ease-in;\n          animation:fadeIn-data-v-f8bf51e4 .14s ease-in\n}\n.fadeIn-leave-active[data-v-f8bf51e4]{\n  animation:fadeIn-data-v-f8bf51e4 .14s ease-out reverse\n}\n.slideDown-enter-active[data-v-f8bf51e4]{\n  -webkit-animation:slideDown-data-v-f8bf51e4 .3s;\n          animation:slideDown-data-v-f8bf51e4 .3s\n}\n.slideDown-leave-active[data-v-f8bf51e4]{\n  animation:slideDown-data-v-f8bf51e4 .3s reverse\n}\n@-webkit-keyframes swing-data-v-f8bf51e4{\n0%{\n    transform:rotate(0deg)\n}\n25%{\n    transform:rotate(-3deg)\n}\n75%{\n    transform:rotate(3deg)\n}\n100%{\n    transform:rotate(0deg)\n}\n}\n@keyframes swing-data-v-f8bf51e4{\n0%{\n    transform:rotate(0deg)\n}\n25%{\n    transform:rotate(-3deg)\n}\n75%{\n    transform:rotate(3deg)\n}\n100%{\n    transform:rotate(0deg)\n}\n}\n@-webkit-keyframes slideDown-data-v-f8bf51e4{\n0%{\n    height:0\n}\n100%{\n    height:100vh\n}\n}\n@keyframes slideDown-data-v-f8bf51e4{\n0%{\n    height:0\n}\n100%{\n    height:100vh\n}\n}\n@-webkit-keyframes fadeIn-data-v-f8bf51e4{\n0%{\n    opacity:0\n}\n100%{\n    opacity:1\n}\n}\n@keyframes fadeIn-data-v-f8bf51e4{\n0%{\n    opacity:0\n}\n100%{\n    opacity:1\n}\n}\n@-webkit-keyframes fadeInLeft-data-v-f8bf51e4{\n0%{\n    transform:translateX(10px);\n    opacity:0\n}\n100%{\n    transform:translateX(0);\n    opacity:1\n}\n}\n@keyframes fadeInLeft-data-v-f8bf51e4{\n0%{\n    transform:translateX(10px);\n    opacity:0\n}\n100%{\n    transform:translateX(0);\n    opacity:1\n}\n}\n@-webkit-keyframes fadeInUp-data-v-f8bf51e4{\n0%{\n    transform:translateY(10px);\n    opacity:0\n}\n100%{\n    transform:translateY(0);\n    opacity:1\n}\n}\n@keyframes fadeInUp-data-v-f8bf51e4{\n0%{\n    transform:translateY(10px);\n    opacity:0\n}\n100%{\n    transform:translateY(0);\n    opacity:1\n}\n}\n@-webkit-keyframes bounce-in-data-v-f8bf51e4{\n0%{\n    opacity:0;\n    transform:scale(0.95)\n}\n100%{\n    opacity:1;\n    transform:scale(1)\n}\n}\n@keyframes bounce-in-data-v-f8bf51e4{\n0%{\n    opacity:0;\n    transform:scale(0.95)\n}\n100%{\n    opacity:1;\n    transform:scale(1)\n}\n}\n@-webkit-keyframes bounce-out-data-v-f8bf51e4{\n0%{\n    opacity:1;\n    transform:scale(1)\n}\n75%{\n    opacity:0\n}\n100%{\n    opacity:0;\n    transform:scale(1.2)\n}\n}\n@keyframes bounce-out-data-v-f8bf51e4{\n0%{\n    opacity:1;\n    transform:scale(1)\n}\n75%{\n    opacity:0\n}\n100%{\n    opacity:0;\n    transform:scale(1.2)\n}\n}\n@-webkit-keyframes bounce-circle-data-v-f8bf51e4{\n0%{\n    transform:scale(1)\n}\n20%{\n    transform:scale(0.8)\n}\n60%{\n    transform:scale(1.1)\n}\n100%{\n    transform:scale(1)\n}\n}\n@keyframes bounce-circle-data-v-f8bf51e4{\n0%{\n    transform:scale(1)\n}\n20%{\n    transform:scale(0.8)\n}\n60%{\n    transform:scale(1.1)\n}\n100%{\n    transform:scale(1)\n}\n}\n@-webkit-keyframes wiggle-data-v-f8bf51e4{\n0%{\n    transform:scale(0, 0) rotate(0);\n    opacity:0\n}\n70%{\n    transform:scale(1.3, 1.3) rotate(3deg);\n    opacity:1\n}\n100%{\n    transform:scale(1, 1) rotate(0);\n    opacity:1\n}\n}\n@keyframes wiggle-data-v-f8bf51e4{\n0%{\n    transform:scale(0, 0) rotate(0);\n    opacity:0\n}\n70%{\n    transform:scale(1.3, 1.3) rotate(3deg);\n    opacity:1\n}\n100%{\n    transform:scale(1, 1) rotate(0);\n    opacity:1\n}\n}\n.full-width[data-v-f8bf51e4]{\n  margin-left:-16px;\n  margin-right:-16px;\n  width:calc(100% + 32px)\n}\n@media(min-width: 1024px){\n.full-width[data-v-f8bf51e4]{\n    margin-left:0;\n    margin-right:0;\n    width:100%\n}\n}\n.hero-slide[data-v-f8bf51e4]{\n  height:560px;\n  background-size:cover;\n  background-position:center;\n  border-radius:10px;\n  background-color:#fbfbfb\n}\n.hero-slide.link[data-v-f8bf51e4]{\n  cursor:pointer\n}\n@media(min-width: 1024px){\n.hero-slide[data-v-f8bf51e4]{\n    height:440px\n}\n}\n.hero-slide__cta-download[data-v-f8bf51e4]{\n  width:150px;\n  max-width:50%\n}\n@media(min-width: 1024px){\n.hero-slide__cta-download[data-v-f8bf51e4]{\n    width:200px\n}\n}\n.hero-slide-inner[data-v-f8bf51e4]{\n  height:560px;\n  display:flex;\n  flex-wrap:wrap;\n  padding:0 16px\n}\n@media(min-width: 1024px){\n.hero-slide-inner[data-v-f8bf51e4]{\n    padding:0;\n    height:440px\n}\n}\n.hero-slide__left[data-v-f8bf51e4]{\n  display:flex;\n  flex-direction:column;\n  justify-content:center;\n  align-items:flex-start\n}\n@media(min-width: 1024px){\n.hero-slide__left[data-v-f8bf51e4]{\n    padding-left:48px\n}\n}\n.hero-slide__right[data-v-f8bf51e4]{\n  display:flex;\n  align-items:flex-end;\n  justify-content:center;\n  max-height:100%;\n  margin-top:20px\n}\n@media(min-width: 1024px){\n.hero-slide__right[data-v-f8bf51e4]{\n    margin-top:0\n}\n}\n.hero-slide__right img[data-v-f8bf51e4]{\n  max-height:100%\n}\n.hero-slide__title[data-v-f8bf51e4]{\n  font-weight:300\n}\n@media(min-width: 640px){\n.hero-slide__title[data-v-f8bf51e4]{\n    margin-top:40px\n}\n}\n@media(min-width: 1024px){\n.hero-slide__title[data-v-f8bf51e4]{\n    margin-top:0\n}\n}\n.hero-slide__buttons[data-v-f8bf51e4]{\n  display:flex;\n  align-items:center;\n  width:100%;\n  margin-top:40px\n}\n.hero-slide__buttons button[data-v-f8bf51e4],.hero-slide__buttons a[data-v-f8bf51e4]{\n  flex-grow:1;\n  flex-basis:0;\n  justify-content:center\n}\n@media(min-width: 768px){\n.hero-slide__buttons button[data-v-f8bf51e4],.hero-slide__buttons a[data-v-f8bf51e4]{\n    flex-grow:unset;\n    flex-basis:unset\n}\n}\n.hero-slide__buttons a[data-v-f8bf51e4]{\n  font-weight:700;\n  transition:all .2s ease;\n  margin-left:30px;\n  word-break:break-word;\n  cursor:pointer\n}\n.hero-slide__buttons a[data-v-f8bf51e4]:hover{\n  color:#2ad2c9\n}",""]),n.exports=t},653:function(n,t,e){var content=e(694);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(24).default)("2f29dab6",content,!1,{sourceMap:!1})},693:function(n,t,e){"use strict";e(653)},694:function(n,t,e){(t=e(18)(!1)).push([n.i,".page-in-transition[data-v-f0c6cf1a]{\n  overflow-x:hidden\n}\n.zoomIn-leave[data-v-f0c6cf1a],.zoomIn-leave-active[data-v-f0c6cf1a],.zoomIn-enter[data-v-f0c6cf1a],.zoomIn-enter-active[data-v-f0c6cf1a]{\n  position:absolute;\n  left:0;\n  top:0;\n  width:100vw !important;\n  height:101vh !important;\n  max-width:none !important;\n  transition:all .3s ease\n}\n.zoomIn-leave-active[data-v-f0c6cf1a]{\n  -webkit-animation:bounce-out-data-v-f0c6cf1a .3s ease;\n          animation:bounce-out-data-v-f0c6cf1a .3s ease;\n  transform-origin:50% 50%\n}\n.zoomIn-enter-active[data-v-f0c6cf1a]{\n  -webkit-animation:bounce-in-data-v-f0c6cf1a .3s ease-out;\n          animation:bounce-in-data-v-f0c6cf1a .3s ease-out;\n  transform-origin:50% 50%\n}\n.fadeInUp-enter-active[data-v-f0c6cf1a]{\n  -webkit-animation:fadeInUp-data-v-f0c6cf1a .5s;\n          animation:fadeInUp-data-v-f0c6cf1a .5s\n}\n.fadeInUp-leave-active[data-v-f0c6cf1a]{\n  animation:fadeInUp-data-v-f0c6cf1a .5s reverse\n}\n.fadeInLeft-enter-active[data-v-f0c6cf1a]{\n  -webkit-animation:fadeInLeft-data-v-f0c6cf1a .3s;\n          animation:fadeInLeft-data-v-f0c6cf1a .3s\n}\n.fadeInLeft-leave-active[data-v-f0c6cf1a]{\n  animation:fadeInLeft-data-v-f0c6cf1a .3s reverse\n}\n.fadeIn-enter-active[data-v-f0c6cf1a]{\n  -webkit-animation:fadeIn-data-v-f0c6cf1a .14s ease-in;\n          animation:fadeIn-data-v-f0c6cf1a .14s ease-in\n}\n.fadeIn-leave-active[data-v-f0c6cf1a]{\n  animation:fadeIn-data-v-f0c6cf1a .14s ease-out reverse\n}\n.slideDown-enter-active[data-v-f0c6cf1a]{\n  -webkit-animation:slideDown-data-v-f0c6cf1a .3s;\n          animation:slideDown-data-v-f0c6cf1a .3s\n}\n.slideDown-leave-active[data-v-f0c6cf1a]{\n  animation:slideDown-data-v-f0c6cf1a .3s reverse\n}\n@-webkit-keyframes swing-data-v-f0c6cf1a{\n0%{\n    transform:rotate(0deg)\n}\n25%{\n    transform:rotate(-3deg)\n}\n75%{\n    transform:rotate(3deg)\n}\n100%{\n    transform:rotate(0deg)\n}\n}\n@keyframes swing-data-v-f0c6cf1a{\n0%{\n    transform:rotate(0deg)\n}\n25%{\n    transform:rotate(-3deg)\n}\n75%{\n    transform:rotate(3deg)\n}\n100%{\n    transform:rotate(0deg)\n}\n}\n@-webkit-keyframes slideDown-data-v-f0c6cf1a{\n0%{\n    height:0\n}\n100%{\n    height:100vh\n}\n}\n@keyframes slideDown-data-v-f0c6cf1a{\n0%{\n    height:0\n}\n100%{\n    height:100vh\n}\n}\n@-webkit-keyframes fadeIn-data-v-f0c6cf1a{\n0%{\n    opacity:0\n}\n100%{\n    opacity:1\n}\n}\n@keyframes fadeIn-data-v-f0c6cf1a{\n0%{\n    opacity:0\n}\n100%{\n    opacity:1\n}\n}\n@-webkit-keyframes fadeInLeft-data-v-f0c6cf1a{\n0%{\n    transform:translateX(10px);\n    opacity:0\n}\n100%{\n    transform:translateX(0);\n    opacity:1\n}\n}\n@keyframes fadeInLeft-data-v-f0c6cf1a{\n0%{\n    transform:translateX(10px);\n    opacity:0\n}\n100%{\n    transform:translateX(0);\n    opacity:1\n}\n}\n@-webkit-keyframes fadeInUp-data-v-f0c6cf1a{\n0%{\n    transform:translateY(10px);\n    opacity:0\n}\n100%{\n    transform:translateY(0);\n    opacity:1\n}\n}\n@keyframes fadeInUp-data-v-f0c6cf1a{\n0%{\n    transform:translateY(10px);\n    opacity:0\n}\n100%{\n    transform:translateY(0);\n    opacity:1\n}\n}\n@-webkit-keyframes bounce-in-data-v-f0c6cf1a{\n0%{\n    opacity:0;\n    transform:scale(0.95)\n}\n100%{\n    opacity:1;\n    transform:scale(1)\n}\n}\n@keyframes bounce-in-data-v-f0c6cf1a{\n0%{\n    opacity:0;\n    transform:scale(0.95)\n}\n100%{\n    opacity:1;\n    transform:scale(1)\n}\n}\n@-webkit-keyframes bounce-out-data-v-f0c6cf1a{\n0%{\n    opacity:1;\n    transform:scale(1)\n}\n75%{\n    opacity:0\n}\n100%{\n    opacity:0;\n    transform:scale(1.2)\n}\n}\n@keyframes bounce-out-data-v-f0c6cf1a{\n0%{\n    opacity:1;\n    transform:scale(1)\n}\n75%{\n    opacity:0\n}\n100%{\n    opacity:0;\n    transform:scale(1.2)\n}\n}\n@-webkit-keyframes bounce-circle-data-v-f0c6cf1a{\n0%{\n    transform:scale(1)\n}\n20%{\n    transform:scale(0.8)\n}\n60%{\n    transform:scale(1.1)\n}\n100%{\n    transform:scale(1)\n}\n}\n@keyframes bounce-circle-data-v-f0c6cf1a{\n0%{\n    transform:scale(1)\n}\n20%{\n    transform:scale(0.8)\n}\n60%{\n    transform:scale(1.1)\n}\n100%{\n    transform:scale(1)\n}\n}\n@-webkit-keyframes wiggle-data-v-f0c6cf1a{\n0%{\n    transform:scale(0, 0) rotate(0);\n    opacity:0\n}\n70%{\n    transform:scale(1.3, 1.3) rotate(3deg);\n    opacity:1\n}\n100%{\n    transform:scale(1, 1) rotate(0);\n    opacity:1\n}\n}\n@keyframes wiggle-data-v-f0c6cf1a{\n0%{\n    transform:scale(0, 0) rotate(0);\n    opacity:0\n}\n70%{\n    transform:scale(1.3, 1.3) rotate(3deg);\n    opacity:1\n}\n100%{\n    transform:scale(1, 1) rotate(0);\n    opacity:1\n}\n}\na[data-v-f0c6cf1a]{\n  color:#2ad2c9\n}\na[data-v-f0c6cf1a]:hover{\n  text-decoration:underline\n}\n.prices__line[data-v-f0c6cf1a]{\n  width:100%;\n  display:flex;\n  justify-content:space-between;\n  padding:20px 20px;\n  background-color:#fbfbfb;\n  border-radius:10px;\n  margin-bottom:20px;\n  font-weight:300;\n  line-height:1.2\n}\n.prices__line-title[data-v-f0c6cf1a]{\n  margin-right:40px\n}",""]),n.exports=t},714:function(n,t,e){"use strict";var r=e(7),o=e(9),c=e(10),f=e(5),d=e(3),l=e(1);function m(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,r=Object(f.a)(n);if(t){var o=Object(f.a)(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return Object(c.a)(this,e)}}var v=function(n){Object(o.a)(e,n);var t=m(e);function e(){return Object(r.a)(this,e),t.apply(this,arguments)}return e}(l.Vue);Object(d.a)([Object(l.Prop)({required:!0,default:""})],v.prototype,"content",void 0);var y=v=Object(d.a)([Object(l.Component)({components:{}})],v),h=(e(693),e(14)),component=Object(h.a)(y,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"prices-table w-full xl:w-3/4 mx-auto"},[e("div",{staticClass:"simple-steps__title h1",domProps:{innerHTML:n._s(n.content.title)}}),n._v(" "),n._l(n.content.prices,(function(t,r){return e("div",{key:"price-line-"+r,staticClass:"prices__line h4"},[e("div",{staticClass:"prices__line-title"},[e("div",{domProps:{innerHTML:n._s(t.title)}}),n._v(" "),e("div",{staticClass:"italic text-sm",domProps:{innerHTML:n._s(t.subtitle)}})]),n._v(" "),e("div",{class:["prices__line-price",t.bold?"text-primary font-bold":""],domProps:{innerHTML:n._s(t.price)}})])})),n._v(" "),e("div",{staticClass:"text-center h4 mt-10 lg:mt-20"},[e("span",{domProps:{innerHTML:n._s(n.content.tcText)}}),n._v(" "),e("nuxt-link",{attrs:{to:n.localePath("legal")+"?document=TC"}},[n._v(n._s(n.content.tcLinkTitle))])],1)],2)}),[],!1,null,"f0c6cf1a",null);t.a=component.exports}}]);
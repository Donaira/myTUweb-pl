(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{720:function(n,e,t){var content=t(724);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(37).default)("95607172",content,!0,{sourceMap:!1})},721:function(n,e,t){"use strict";t(30),t(32),t(133),t(8),t(45);var o=t(10),r=t(11),c=t(14),l=t(6),d=t(15),f=t(3),v=t(1),m=t(92);function h(n,e,t){return e=Object(l.a)(e),Object(c.a)(n,y()?Reflect.construct(e,t||[],Object(l.a)(n).constructor):e.apply(n,t))}function y(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(n){}return(y=function(){return!!n})()}var w=function(n){function e(){return Object(o.a)(this,e),h(this,e,arguments)}return Object(d.a)(e,n),Object(r.a)(e,[{key:"companyData",get:function(){return this.$t("contacts")}},{key:"footerMenu",get:function(){return this.$t("footer")}},{key:"socialLinks",get:function(){return this.$te("footer.socialLinks."+this.$i18n.locale)?this.$t("footer.socialLinks."+this.$i18n.locale):this.$t("footer.socialLinks.default")}},{key:"footerMenuItems",get:function(){return this.$t("footerMenuItems")}},{key:"handleClick",value:function(link){Object(m.a)(link,this)}}]),e}(v.Vue);Object(f.a)([Object(v.Prop)({required:!1,default:""})],w.prototype,"type",void 0),Object(f.a)([Object(v.Prop)({required:!1,default:""})],w.prototype,"extraStyles",void 0);var x=w=Object(f.a)([Object(v.Component)({components:{}})],w),_=(t(723),t(21)),component=Object(_.a)(x,(function(){var n=this,e=n._self._c;n._self._setupProxy;return e("div",[e("div",{class:["footer",n.extraStyles]},[e("div",{staticClass:"container mx-auto"},[e("div",{staticClass:"w-full flex flex-wrap lg:flex-row"},[e("div",{staticClass:"w-full mb-10 lg:w-2/5"},[e("img",{staticClass:"opacity-80",attrs:{src:t(336)}}),n._v(" "),e("div",{staticClass:"w-full social-icons text-2xl mt-5 space-x-5"},[e("a",{attrs:{href:n.socialLinks.facebook,target:"_blank"}},[e("font-awesome-icon",{attrs:{icon:["fab","facebook"]}})],1),n._v(" "),e("a",{attrs:{href:n.socialLinks.instagram,target:"_blank"}},[e("font-awesome-icon",{attrs:{icon:["fab","instagram"]}})],1),n._v(" "),e("a",{attrs:{href:n.socialLinks.linkedin,target:"_blank"}},[e("font-awesome-icon",{attrs:{icon:["fab","linkedin-in"]}})],1)])]),n._v(" "),e("div",{staticClass:"flex w-full mb-10 lg:w-3/5 space-x-4"},n._l(n.footerMenuItems,(function(t,o){return e("div",{key:"footer-item-"+o,staticClass:"w-1/3"},[e("ul",[t.link?e("li",{staticClass:"link"},[e("a",{attrs:{href:t.link,target:"_blank"},domProps:{innerHTML:n._s(t.title)}})]):e("li",{domProps:{innerHTML:n._s(t.title)}}),n._v(" "),n._l(t.items,(function(t,i){return e("li",{key:"footer-subitem-"+i},[t.link&&!t.link.includes("https")?e("a",{on:{click:function(e){return n.handleClick(t.link)}}},[e("span",{domProps:{innerHTML:n._s(t.title)}})]):e("a",{attrs:{href:t.link,target:"_blank"},domProps:{innerHTML:n._s(t.title)}})])}))],2)])})),0),n._v(" "),e("div",{staticClass:"w-full lg:flex"},[e("div",{staticClass:"w-full lg:w-1/2"},[e("div",{staticClass:"mt-4 w-5/6 opacity-50"},[n._v("© 2024 UAB Travel Union")]),n._v(" "),e("div",{staticClass:"mt-1 w-5/6 opacity-50",domProps:{innerHTML:n._s(n.footerMenu.legalText)}})]),n._v(" "),e("div",{staticClass:"w-full lg:w-1/2 lg:text-right"},[e("div",{staticClass:"mt-4 opacity-50"},[n._v("UAB Travel Union, "),e("span",{domProps:{innerHTML:n._s(n.companyData.address)}})]),n._v(" "),e("div",{staticClass:"mt-1 opacity-50"},[e("font-awesome-icon",{staticClass:"text-primary",attrs:{icon:["fas","phone"]}}),n._v(" "),e("span",{staticClass:"mr-2",domProps:{innerHTML:n._s(n.companyData.phone)}}),n._v(" "),e("font-awesome-icon",{staticClass:"text-primary",attrs:{icon:["fas","at"]}}),n._v(" "),e("span",{domProps:{innerHTML:n._s(n.companyData.email)}})],1),n._v(" "),e("div",{staticClass:"mt-1 opacity-50",domProps:{innerHTML:n._s(n.companyData.companyCode)}}),n._v(" "),e("div",{staticClass:"mt-1 opacity-50",domProps:{innerHTML:n._s(n.companyData.vatCode)}})])])])])])])}),[],!1,null,"5009769e",null);e.a=component.exports},723:function(n,e,t){"use strict";t(720)},724:function(n,e,t){var o=t(29)((function(i){return i[1]}));o.push([n.i,"/* purgecss start ignore */\n.page-in-transition[data-v-5009769e]{\n  overflow-x:hidden\n}\n.zoomIn-leave[data-v-5009769e],.zoomIn-leave-active[data-v-5009769e],.zoomIn-enter[data-v-5009769e],.zoomIn-enter-active[data-v-5009769e]{\n  position:absolute;\n  left:0;\n  top:0;\n  width:100vw !important;\n  height:101vh !important;\n  max-width:none !important;\n  transition:all .3s ease\n}\n.zoomIn-leave-active[data-v-5009769e]{\n  animation:bounce-out-5009769e .3s ease;\n  transform-origin:50% 50%\n}\n.zoomIn-enter-active[data-v-5009769e]{\n  animation:bounce-in-5009769e .3s ease-out;\n  transform-origin:50% 50%\n}\n.fadeInUp-enter-active[data-v-5009769e]{\n  animation:fadeInUp-5009769e .5s\n}\n.fadeInUp-leave-active[data-v-5009769e]{\n  animation:fadeInUp-5009769e .5s reverse\n}\n.fadeInLeft-enter-active[data-v-5009769e]{\n  animation:fadeInLeft-5009769e .3s\n}\n.fadeInLeft-leave-active[data-v-5009769e]{\n  animation:fadeInLeft-5009769e .3s reverse\n}\n.fadeIn-enter-active[data-v-5009769e]{\n  animation:fadeIn-5009769e .14s ease-in\n}\n.fadeIn-leave-active[data-v-5009769e]{\n  animation:fadeIn-5009769e .14s ease-out reverse\n}\n.slideDown-enter-active[data-v-5009769e]{\n  animation:slideDown-5009769e .3s\n}\n.slideDown-leave-active[data-v-5009769e]{\n  animation:slideDown-5009769e .3s reverse\n}\n@keyframes swing-5009769e{\n0%{\n    transform:rotate(0deg)\n}\n25%{\n    transform:rotate(-3deg)\n}\n75%{\n    transform:rotate(3deg)\n}\n100%{\n    transform:rotate(0deg)\n}\n}\n@keyframes slideDown-5009769e{\n0%{\n    height:0\n}\n100%{\n    height:100vh\n}\n}\n@keyframes fadeIn-5009769e{\n0%{\n    opacity:0\n}\n100%{\n    opacity:1\n}\n}\n@keyframes fadeInLeft-5009769e{\n0%{\n    transform:translateX(10px);\n    opacity:0\n}\n100%{\n    transform:translateX(0);\n    opacity:1\n}\n}\n@keyframes fadeInUp-5009769e{\n0%{\n    transform:translateY(10px);\n    opacity:0\n}\n100%{\n    transform:translateY(0);\n    opacity:1\n}\n}\n@keyframes bounce-in-5009769e{\n0%{\n    opacity:0;\n    transform:scale(0.95)\n}\n100%{\n    opacity:1;\n    transform:scale(1)\n}\n}\n@keyframes bounce-out-5009769e{\n0%{\n    opacity:1;\n    transform:scale(1)\n}\n75%{\n    opacity:0\n}\n100%{\n    opacity:0;\n    transform:scale(1.2)\n}\n}\n@keyframes bounce-circle-5009769e{\n0%{\n    transform:scale(1)\n}\n20%{\n    transform:scale(0.8)\n}\n60%{\n    transform:scale(1.1)\n}\n100%{\n    transform:scale(1)\n}\n}\n@keyframes wiggle-5009769e{\n0%{\n    transform:scale(0, 0) rotate(0);\n    opacity:0\n}\n70%{\n    transform:scale(1.3, 1.3) rotate(3deg);\n    opacity:1\n}\n100%{\n    transform:scale(1, 1) rotate(0);\n    opacity:1\n}\n}\n.legal[data-v-5009769e]{\n  margin:5rem 0 0 0;\n  font-style:italic\n}\n.legal a[data-v-5009769e]{\n  color:#2ad2c9\n}\n@media(min-width: 1024px){\n.legal[data-v-5009769e]{\n    margin:10rem 0 0 0\n}\n}\n.footer[data-v-5009769e]{\n  margin-top:5rem;\n  background-color:#fbfbfb;\n  padding:40px 0;\n  font-size:12px\n}\n@media(min-width: 1024px){\n.footer[data-v-5009769e]{\n    margin-top:10rem\n}\n}\n.footer.no-mt[data-v-5009769e]{\n  margin-top:0\n}\n@media(min-width: 1024px){\n.footer.no-mt[data-v-5009769e]{\n    margin-top:0rem\n}\n}\n.footer a[data-v-5009769e]{\n  cursor:pointer\n}\n.footer .social-icons a[data-v-5009769e]{\n  opacity:.2;\n  transition:all .3s ease\n}\n.footer .social-icons a[data-v-5009769e]:hover{\n  opacity:.8;\n  color:#2ad2c9\n}\n.footer ul li[data-v-5009769e]{\n  margin-bottom:8px\n}\n.footer ul li a[data-v-5009769e]{\n  opacity:.5;\n  transition:all .2s ease\n}\n.footer ul li:hover a[data-v-5009769e]{\n  color:#2ad2c9;\n  opacity:.8\n}\n.footer ul li.link[data-v-5009769e]:first-child{\n  opacity:1\n}\n.footer ul li[data-v-5009769e]:first-child{\n  font-weight:700;\n  opacity:.5\n}\n\n/* purgecss end ignore */",""]),o.locals={},n.exports=o},730:function(n,e,t){"use strict";t(8),t(45);var o=t(10),r=t(11),c=t(14),l=t(6),d=t(15),f=t(3),v=t(1);function m(n,e,t){return e=Object(l.a)(e),Object(c.a)(n,h()?Reflect.construct(e,t||[],Object(l.a)(n).constructor):e.apply(n,t))}function h(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(n){}return(h=function(){return!!n})()}var y=function(n){function e(){return Object(o.a)(this,e),m(this,e,arguments)}return Object(d.a)(e,n),Object(r.a)(e,[{key:"bookDemo",value:function(n,e){if(n){var script=document.createElement("script");script.setAttribute("id","hubspotScript"),script.src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js",document.head.appendChild(script)}}},{key:"cancelBookDemo",value:function(){this.$emit("is-popup-open",!1);var n=document.getElementById("hubspotScript");n&&n.parentElement&&n.parentElement.removeChild(n)}}]),e}(v.Vue);Object(f.a)([Object(v.Prop)({required:!0,default:!1})],y.prototype,"isBookingActive",void 0),Object(f.a)([Object(v.Watch)("isBookingActive")],y.prototype,"bookDemo",null);var w=y=Object(f.a)([Object(v.Component)({components:{}})],y),x=t(21),component=Object(x.a)(w,(function(){var n=this,e=n._self._c;n._self._setupProxy;return e("t-modal",{staticClass:"meetings-iframe-container",attrs:{value:n.isBookingActive,variant:"booking","data-src":"https://meetings-eu1.hubspot.com/mytu-justinas/demo-call-mytu-website?embed=true"},on:{closed:function(e){return n.cancelBookDemo()}}})}),[],!1,null,"4cd36873",null);e.a=component.exports},731:function(n,e,t){var content=t(745);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(37).default)("f4c8684c",content,!0,{sourceMap:!1})},735:function(n,e,t){"use strict";t(133),t(8),t(45);var o=t(10),r=t(11),c=t(14),l=t(6),d=t(15),f=t(3),v=t(1),m=t(93),h=t(92),y=t(730);function w(n,e,t){return e=Object(l.a)(e),Object(c.a)(n,x()?Reflect.construct(e,t||[],Object(l.a)(n).constructor):e.apply(n,t))}function x(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(n){}return(x=function(){return!!n})()}var _=function(n){function e(){var n;return Object(o.a)(this,e),(n=w(this,e,arguments)).bookACall=!1,n}return Object(d.a)(e,n),Object(r.a)(e,[{key:"handleClick",value:function(link){"action-book-demo-call"===link?this.bookACall=!0:Object(h.a)(link,this)}},{key:"cancelBookDemo",value:function(n){this.bookACall=n}}]),e}(v.Vue);Object(f.a)([Object(v.Prop)({required:!1})],_.prototype,"content",void 0);var k=_=Object(f.a)([Object(v.Component)({components:{DemoCallPopup:y.a,TuButton:m.a}})],_),I=(t(744),t(21)),component=Object(I.a)(k,(function(){var n=this,e=n._self._c;n._self._setupProxy;return e("div",{staticClass:"w-10/12 mx-auto flex lg:flex-wrap flex-col-reverse lg:flex-row text-image justify-between"},[e("div",{staticClass:"lg:w-1/2 flex flex-col justify-center"},[n.content.title?e("div",{staticClass:"h2 text-image__title",domProps:{innerHTML:n._s(n.content.title)}}):n._e(),n._v(" "),n.content.subtitle?e("div",{staticClass:"text-gray-500 text-sm",domProps:{innerHTML:n._s(n.content.subtitle)}}):n._e(),n._v(" "),e("div",{staticClass:"h4 text-image__text",domProps:{innerHTML:n._s(n.content.text)}}),n._v(" "),n.content.list?e("div",{staticClass:"space-y-3 font-light mt-3"},n._l(n.content.list,(function(t){return e("div",{key:t,staticClass:"flex items-center space-x-3"},[e("div",[e("font-awesome-icon",{staticClass:"text-primary text-2xl",attrs:{icon:["fas","check-circle"]}})],1),n._v(" "),e("div",[n._v(n._s(t))])])})),0):n._e(),n._v(" "),e("div",{staticClass:"mt-8 justify-center flex mx-auto lg:ml-0 lg:justify-start space-y-4 lg:space-y-0 lg:space-x-4"},[n.content.cta?e("tu-button",{attrs:{type:"primary",title:n.content.cta.title},nativeOn:{click:function(e){return n.handleClick(n.content.cta.link)}}}):n._e(),n._v(" "),n.content.ctaSecondary?e("tu-button",{attrs:{type:n.content.ctaSecondary.style?n.content.ctaSecondary.style:"secondary",title:n.content.ctaSecondary.title},nativeOn:{click:function(e){return n.handleClick(n.content.ctaSecondary.link)}}}):n._e()],1)]),n._v(" "),e("div",{staticClass:"lg:w-2/5"},[e("div",{staticClass:"w-full mx-auto text-image__image-wrapper relative"},[e("div",{staticClass:"text-image__image-backdrop absolute w-full h-full bg-primary rounded-3xl"}),n._v(" "),e("img",{staticClass:"w-full text-image__image relative",attrs:{src:n.$options.filters.localisedAsset(n.content.img),loading:"lazy"}})])]),n._v(" "),e("demo-call-popup",{attrs:{"is-booking-active":n.bookACall},on:{"is-popup-open":n.cancelBookDemo}})],1)}),[],!1,null,"25800069",null);e.a=component.exports},741:function(n,e,t){"use strict";t(31),t(8),t(45);var o=t(10),r=t(11),c=t(14),l=t(6),d=t(15),f=t(3),v=t(1),m=t(729),h=(t(722),t(766));function y(n,e,t){return e=Object(l.a)(e),Object(c.a)(n,w()?Reflect.construct(e,t||[],Object(l.a)(n).constructor):e.apply(n,t))}function w(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(n){}return(w=function(){return!!n})()}var x=function(n){function e(){var n;return Object(o.a)(this,e),(n=y(this,e,arguments)).activeSlide=0,n}return Object(d.a)(e,n),Object(r.a)(e,[{key:"slickOptions",get:function(){return{slidesToShow:3,dots:!1,arrows:!1,autoplay:!0,autoplaySpeed:1e4,responsive:[{breakpoint:640,settings:{slidesToShow:1}}]}}},{key:"nextSlide",value:function(){this.$refs.slick.next(),this.activeSlide=this.$refs.slick.currentSlide()}},{key:"prevSlide",value:function(){this.$refs.slick.prev(),this.activeSlide=this.$refs.slick.currentSlide()}},{key:"goToSlide",value:function(n){this.$refs.slick.goTo(n),this.activeSlide=this.$refs.slick.currentSlide()}},{key:"handleAfterChange",value:function(n,e,t){this.activeSlide=t}},{key:"content",get:function(){return h.a.reviews[this.$i18n.locale]||h.a.reviews.en}}]),e}(v.Vue);Object(f.a)([Object(v.Prop)({required:!1})],x.prototype,"passedReviews",void 0);var _=x=Object(f.a)([Object(v.Component)({components:{Slick:m.a}})],x),k=(t(767),t(769),t(21)),component=Object(k.a)(_,(function(){var n=this,e=n._self._c;n._self._setupProxy;return e("div",{staticClass:"reviews"},[e("div",{staticClass:"container mx-auto"},[e("div",{staticClass:"h2 text-center mb-8 lg:mb-14 font-bold",domProps:{innerHTML:n._s(n.content.title)}}),n._v(" "),e("div",{staticClass:"mx-auto xl:w-full flex flex-col items-center justify-center lg:flex-col"},[e("div",{staticClass:"w-full relative"},[e("div",{staticClass:"hidden lg:block"},[e("div",{staticClass:"slick-custom-controls"},[e("div",{staticClass:"prev",on:{click:function(e){return n.prevSlide()}}},[e("font-awesome-icon",{attrs:{icon:["fas","chevron-left"]}})],1)])]),n._v(" "),e("slick",{ref:"slick",staticClass:"slick-reviews-slider",attrs:{options:n.slickOptions},on:{afterChange:n.handleAfterChange}},n._l(n.content.list,(function(t,o){return e("div",{key:"review-"+o,staticClass:"review"},[e("div",{staticClass:"review__inner-wrapper"},[e("div",{staticClass:"review__stars mb-2"},[e("font-awesome-icon",{attrs:{icon:["fas","star"]}}),n._v(" "),e("font-awesome-icon",{attrs:{icon:["fas","star"]}}),n._v(" "),e("font-awesome-icon",{attrs:{icon:["fas","star"]}}),n._v(" "),e("font-awesome-icon",{attrs:{icon:["fas","star"]}}),n._v(" "),e("font-awesome-icon",{attrs:{icon:["fas","star"]}})],1),n._v(" "),e("div",[e("div",{staticClass:"h4 mb-2 review__title",domProps:{innerHTML:n._s(t.title)}}),n._v(" "),e("div",{staticClass:"review__text",domProps:{innerHTML:n._s(t.text)}}),n._v(" "),e("div",{staticClass:"review__name h5",domProps:{innerHTML:n._s(t.name)}})])])])})),0),n._v(" "),e("div",{staticClass:"hidden lg:block"},[e("div",{staticClass:"slick-custom-controls"},[e("div",{staticClass:"next",on:{click:function(e){return n.nextSlide()}}},[e("font-awesome-icon",{attrs:{icon:["fas","chevron-right"]}})],1)])])],1),n._v(" "),e("div",{staticClass:"slick-custom-controls hidden lg:flex"},n._l(n.$t("homepage.clientReviews.reviews"),(function(t,o){return e("div",{key:"review-slides-dot-"+o,class:["dot",n.activeSlide===o?"active":""],on:{click:function(e){return n.goToSlide(o)}}})})),0)])])])}),[],!1,null,"701cfd56",null);e.a=component.exports},744:function(n,e,t){"use strict";t(731)},745:function(n,e,t){var o=t(29)((function(i){return i[1]}));o.push([n.i,"/* purgecss start ignore */\n.page-in-transition[data-v-25800069]{\n  overflow-x:hidden\n}\n.zoomIn-leave[data-v-25800069],.zoomIn-leave-active[data-v-25800069],.zoomIn-enter[data-v-25800069],.zoomIn-enter-active[data-v-25800069]{\n  position:absolute;\n  left:0;\n  top:0;\n  width:100vw !important;\n  height:101vh !important;\n  max-width:none !important;\n  transition:all .3s ease\n}\n.zoomIn-leave-active[data-v-25800069]{\n  animation:bounce-out-25800069 .3s ease;\n  transform-origin:50% 50%\n}\n.zoomIn-enter-active[data-v-25800069]{\n  animation:bounce-in-25800069 .3s ease-out;\n  transform-origin:50% 50%\n}\n.fadeInUp-enter-active[data-v-25800069]{\n  animation:fadeInUp-25800069 .5s\n}\n.fadeInUp-leave-active[data-v-25800069]{\n  animation:fadeInUp-25800069 .5s reverse\n}\n.fadeInLeft-enter-active[data-v-25800069]{\n  animation:fadeInLeft-25800069 .3s\n}\n.fadeInLeft-leave-active[data-v-25800069]{\n  animation:fadeInLeft-25800069 .3s reverse\n}\n.fadeIn-enter-active[data-v-25800069]{\n  animation:fadeIn-25800069 .14s ease-in\n}\n.fadeIn-leave-active[data-v-25800069]{\n  animation:fadeIn-25800069 .14s ease-out reverse\n}\n.slideDown-enter-active[data-v-25800069]{\n  animation:slideDown-25800069 .3s\n}\n.slideDown-leave-active[data-v-25800069]{\n  animation:slideDown-25800069 .3s reverse\n}\n@keyframes swing-25800069{\n0%{\n    transform:rotate(0deg)\n}\n25%{\n    transform:rotate(-3deg)\n}\n75%{\n    transform:rotate(3deg)\n}\n100%{\n    transform:rotate(0deg)\n}\n}\n@keyframes slideDown-25800069{\n0%{\n    height:0\n}\n100%{\n    height:100vh\n}\n}\n@keyframes fadeIn-25800069{\n0%{\n    opacity:0\n}\n100%{\n    opacity:1\n}\n}\n@keyframes fadeInLeft-25800069{\n0%{\n    transform:translateX(10px);\n    opacity:0\n}\n100%{\n    transform:translateX(0);\n    opacity:1\n}\n}\n@keyframes fadeInUp-25800069{\n0%{\n    transform:translateY(10px);\n    opacity:0\n}\n100%{\n    transform:translateY(0);\n    opacity:1\n}\n}\n@keyframes bounce-in-25800069{\n0%{\n    opacity:0;\n    transform:scale(0.95)\n}\n100%{\n    opacity:1;\n    transform:scale(1)\n}\n}\n@keyframes bounce-out-25800069{\n0%{\n    opacity:1;\n    transform:scale(1)\n}\n75%{\n    opacity:0\n}\n100%{\n    opacity:0;\n    transform:scale(1.2)\n}\n}\n@keyframes bounce-circle-25800069{\n0%{\n    transform:scale(1)\n}\n20%{\n    transform:scale(0.8)\n}\n60%{\n    transform:scale(1.1)\n}\n100%{\n    transform:scale(1)\n}\n}\n@keyframes wiggle-25800069{\n0%{\n    transform:scale(0, 0) rotate(0);\n    opacity:0\n}\n70%{\n    transform:scale(1.3, 1.3) rotate(3deg);\n    opacity:1\n}\n100%{\n    transform:scale(1, 1) rotate(0);\n    opacity:1\n}\n}\n.no-backdrop .text-image__image-backdrop[data-v-25800069]{\n  background-color:rgba(0,0,0,0)\n}\n@media(min-width: 1024px){\n.text-image[data-v-25800069]{\n    min-height:400px;\n    align-items:center\n}\n}\n.text-image__image[data-v-25800069]{\n  border-radius:40px\n}\n.text-image__title[data-v-25800069]{\n  margin-top:20px\n}\n@media(min-width: 1024px){\n.text-image__title[data-v-25800069]{\n    margin-top:0\n}\n}\n.text-image__text[data-v-25800069]{\n  font-weight:300;\n  margin-top:20px\n}\n\n/* purgecss end ignore */",""]),o.locals={},n.exports=o},753:function(n,e,t){var content=t(768);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(37).default)("d6398b8a",content,!0,{sourceMap:!1})},754:function(n,e,t){var content=t(770);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(37).default)("05155687",content,!0,{sourceMap:!1})},767:function(n,e,t){"use strict";t(753)},768:function(n,e,t){var o=t(29)((function(i){return i[1]}));o.push([n.i,"/* purgecss start ignore */\n.page-in-transition{\n  overflow-x:hidden\n}\n.zoomIn-leave,.zoomIn-leave-active,.zoomIn-enter,.zoomIn-enter-active{\n  position:absolute;\n  left:0;\n  top:0;\n  width:100vw !important;\n  height:101vh !important;\n  max-width:none !important;\n  transition:all .3s ease\n}\n.zoomIn-leave-active{\n  animation:bounce-out .3s ease;\n  transform-origin:50% 50%\n}\n.zoomIn-enter-active{\n  animation:bounce-in .3s ease-out;\n  transform-origin:50% 50%\n}\n.fadeInUp-enter-active{\n  animation:fadeInUp .5s\n}\n.fadeInUp-leave-active{\n  animation:fadeInUp .5s reverse\n}\n.fadeInLeft-enter-active{\n  animation:fadeInLeft .3s\n}\n.fadeInLeft-leave-active{\n  animation:fadeInLeft .3s reverse\n}\n.fadeIn-enter-active{\n  animation:fadeIn .14s ease-in\n}\n.fadeIn-leave-active{\n  animation:fadeIn .14s ease-out reverse\n}\n.slideDown-enter-active{\n  animation:slideDown .3s\n}\n.slideDown-leave-active{\n  animation:slideDown .3s reverse\n}\n@keyframes swing{\n0%{\n    transform:rotate(0deg)\n}\n25%{\n    transform:rotate(-3deg)\n}\n75%{\n    transform:rotate(3deg)\n}\n100%{\n    transform:rotate(0deg)\n}\n}\n@keyframes slideDown{\n0%{\n    height:0\n}\n100%{\n    height:100vh\n}\n}\n@keyframes fadeIn{\n0%{\n    opacity:0\n}\n100%{\n    opacity:1\n}\n}\n@keyframes fadeInLeft{\n0%{\n    transform:translateX(10px);\n    opacity:0\n}\n100%{\n    transform:translateX(0);\n    opacity:1\n}\n}\n@keyframes fadeInUp{\n0%{\n    transform:translateY(10px);\n    opacity:0\n}\n100%{\n    transform:translateY(0);\n    opacity:1\n}\n}\n@keyframes bounce-in{\n0%{\n    opacity:0;\n    transform:scale(0.95)\n}\n100%{\n    opacity:1;\n    transform:scale(1)\n}\n}\n@keyframes bounce-out{\n0%{\n    opacity:1;\n    transform:scale(1)\n}\n75%{\n    opacity:0\n}\n100%{\n    opacity:0;\n    transform:scale(1.2)\n}\n}\n@keyframes bounce-circle{\n0%{\n    transform:scale(1)\n}\n20%{\n    transform:scale(0.8)\n}\n60%{\n    transform:scale(1.1)\n}\n100%{\n    transform:scale(1)\n}\n}\n@keyframes wiggle{\n0%{\n    transform:scale(0, 0) rotate(0);\n    opacity:0\n}\n70%{\n    transform:scale(1.3, 1.3) rotate(3deg);\n    opacity:1\n}\n100%{\n    transform:scale(1, 1) rotate(0);\n    opacity:1\n}\n}\n@media(min-width: 1024px){\n.slick-reviews-slider .slick-slide>div{\n    margin-left:15px;\n    margin-right:15px\n}\n}\n\n/* purgecss end ignore */",""]),o.locals={},n.exports=o},769:function(n,e,t){"use strict";t(754)},770:function(n,e,t){var o=t(29)((function(i){return i[1]}));o.push([n.i,"/* purgecss start ignore */\n.page-in-transition[data-v-701cfd56]{\n  overflow-x:hidden\n}\n.zoomIn-leave[data-v-701cfd56],.zoomIn-leave-active[data-v-701cfd56],.zoomIn-enter[data-v-701cfd56],.zoomIn-enter-active[data-v-701cfd56]{\n  position:absolute;\n  left:0;\n  top:0;\n  width:100vw !important;\n  height:101vh !important;\n  max-width:none !important;\n  transition:all .3s ease\n}\n.zoomIn-leave-active[data-v-701cfd56]{\n  animation:bounce-out-701cfd56 .3s ease;\n  transform-origin:50% 50%\n}\n.zoomIn-enter-active[data-v-701cfd56]{\n  animation:bounce-in-701cfd56 .3s ease-out;\n  transform-origin:50% 50%\n}\n.fadeInUp-enter-active[data-v-701cfd56]{\n  animation:fadeInUp-701cfd56 .5s\n}\n.fadeInUp-leave-active[data-v-701cfd56]{\n  animation:fadeInUp-701cfd56 .5s reverse\n}\n.fadeInLeft-enter-active[data-v-701cfd56]{\n  animation:fadeInLeft-701cfd56 .3s\n}\n.fadeInLeft-leave-active[data-v-701cfd56]{\n  animation:fadeInLeft-701cfd56 .3s reverse\n}\n.fadeIn-enter-active[data-v-701cfd56]{\n  animation:fadeIn-701cfd56 .14s ease-in\n}\n.fadeIn-leave-active[data-v-701cfd56]{\n  animation:fadeIn-701cfd56 .14s ease-out reverse\n}\n.slideDown-enter-active[data-v-701cfd56]{\n  animation:slideDown-701cfd56 .3s\n}\n.slideDown-leave-active[data-v-701cfd56]{\n  animation:slideDown-701cfd56 .3s reverse\n}\n@keyframes swing-701cfd56{\n0%{\n    transform:rotate(0deg)\n}\n25%{\n    transform:rotate(-3deg)\n}\n75%{\n    transform:rotate(3deg)\n}\n100%{\n    transform:rotate(0deg)\n}\n}\n@keyframes slideDown-701cfd56{\n0%{\n    height:0\n}\n100%{\n    height:100vh\n}\n}\n@keyframes fadeIn-701cfd56{\n0%{\n    opacity:0\n}\n100%{\n    opacity:1\n}\n}\n@keyframes fadeInLeft-701cfd56{\n0%{\n    transform:translateX(10px);\n    opacity:0\n}\n100%{\n    transform:translateX(0);\n    opacity:1\n}\n}\n@keyframes fadeInUp-701cfd56{\n0%{\n    transform:translateY(10px);\n    opacity:0\n}\n100%{\n    transform:translateY(0);\n    opacity:1\n}\n}\n@keyframes bounce-in-701cfd56{\n0%{\n    opacity:0;\n    transform:scale(0.95)\n}\n100%{\n    opacity:1;\n    transform:scale(1)\n}\n}\n@keyframes bounce-out-701cfd56{\n0%{\n    opacity:1;\n    transform:scale(1)\n}\n75%{\n    opacity:0\n}\n100%{\n    opacity:0;\n    transform:scale(1.2)\n}\n}\n@keyframes bounce-circle-701cfd56{\n0%{\n    transform:scale(1)\n}\n20%{\n    transform:scale(0.8)\n}\n60%{\n    transform:scale(1.1)\n}\n100%{\n    transform:scale(1)\n}\n}\n@keyframes wiggle-701cfd56{\n0%{\n    transform:scale(0, 0) rotate(0);\n    opacity:0\n}\n70%{\n    transform:scale(1.3, 1.3) rotate(3deg);\n    opacity:1\n}\n100%{\n    transform:scale(1, 1) rotate(0);\n    opacity:1\n}\n}\n.reviews[data-v-701cfd56]{\n  position:relative\n}\n.reviews__title[data-v-701cfd56]{\n  font-weight:300;\n  margin-bottom:40px\n}\n.reviews__logos[data-v-701cfd56]{\n  display:flex\n}\n.reviews__logos>div img[data-v-701cfd56]:first-child{\n  transition:all .3s ease\n}\n.reviews__logos>div:hover img[data-v-701cfd56]:first-child{\n  animation:swing-701cfd56 linear 1s infinite\n}\n.reviews__store-logo[data-v-701cfd56]{\n  width:70px;\n  margin:0 auto\n}\n.reviews__stars[data-v-701cfd56]{\n  width:180px\n}\n.reviews .review[data-v-701cfd56]{\n  background-color:#f8f8f8;\n  border-radius:8px;\n  padding:12px 10px;\n  margin-bottom:20px\n}\n@media(min-width: 1024px){\n.reviews .review[data-v-701cfd56]{\n    padding:16px 20px;\n    margin-bottom:40px;\n    box-shadow:8px 8px 0px #2ad2c9\n}\n}\n.reviews .review__inner-wrapper[data-v-701cfd56]{\n  min-height:300px;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  flex-direction:column\n}\n@media(min-width: 1024px){\n.reviews .review__inner-wrapper[data-v-701cfd56]{\n    min-height:240px\n}\n}\n.reviews .review__stars[data-v-701cfd56]{\n  font-size:24px;\n  color:#2ad2c9\n}\n.reviews .review__title[data-v-701cfd56]{\n  text-align:center\n}\n.reviews .review img[data-v-701cfd56]{\n  width:100px;\n  height:100px;\n  border-radius:100%;\n  box-shadow:1px 1px 2px #364653\n}\n@media(min-width: 1024px){\n.reviews .review img[data-v-701cfd56]{\n    margin-right:30px\n}\n}\n.reviews .review__name[data-v-701cfd56]{\n  margin-top:16px;\n  text-align:center\n}\n@media(min-width: 1024px){\n.reviews .review__name[data-v-701cfd56]{\n    margin-bottom:0\n}\n}\n.reviews .review__text[data-v-701cfd56]{\n  position:relative;\n  line-height:24px;\n  font-weight:300;\n  color:#233746;\n  text-align:center;\n  width:95%;\n  margin-left:auto;\n  margin-right:auto\n}\n@media(min-width: 1024px){\n.reviews .review__text[data-v-701cfd56]{\n    width:90%\n}\n}\n.reviews .review__text q[data-v-701cfd56]{\n  position:relative\n}\n.reviews .quote[data-v-701cfd56]{\n  font-size:74px;\n  font-weight:700;\n  position:absolute;\n  line-height:62px\n}\n.reviews .slick-custom-controls[data-v-701cfd56]{\n  margin:0\n}\n.reviews .slick-slide>div[data-v-701cfd56]{\n  width:100%;\n  margin-left:0;\n  margin-right:0\n}\n.reviews .slick-custom-controls .prev[data-v-701cfd56]{\n  position:absolute;\n  left:-15px;\n  top:40%;\n  transform:translateY(-50%);\n  z-index:10;\n  cursor:pointer\n}\n@media(min-width: 1024px){\n.reviews .slick-custom-controls .prev[data-v-701cfd56]{\n    left:-60px\n}\n}\n.reviews .slick-custom-controls .next[data-v-701cfd56]{\n  position:absolute;\n  right:-15px;\n  top:40%;\n  transform:translateY(-50%);\n  z-index:10;\n  cursor:pointer\n}\n@media(min-width: 1024px){\n.reviews .slick-custom-controls .next[data-v-701cfd56]{\n    right:-60px\n}\n}\n.reviews .slick-custom-controls .dot[data-v-701cfd56]{\n  box-shadow:inset .5px .5px 1px rgba(0,0,0,.5)\n}\n.reviews .slick-custom-controls .dot.active[data-v-701cfd56]{\n  background-color:#2ad2c9\n}\n\n/* purgecss end ignore */",""]),o.locals={},n.exports=o},882:function(n,e,t){var content=t(990);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(37).default)("038e589c",content,!0,{sourceMap:!1})},929:function(n,e,t){"use strict";t(133),t(8),t(45);var o=t(10),r=t(11),c=t(14),l=t(6),d=t(15),f=t(3),v=t(1),m=t(93),h=t(729),y=(t(722),t(92));function w(n,e,t){return e=Object(l.a)(e),Object(c.a)(n,x()?Reflect.construct(e,t||[],Object(l.a)(n).constructor):e.apply(n,t))}function x(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(n){}return(x=function(){return!!n})()}var _=function(n){function e(){var n;return Object(o.a)(this,e),(n=w(this,e,arguments)).activeSlide=0,n}return Object(d.a)(e,n),Object(r.a)(e,[{key:"slickOptions",get:function(){return{slidesToShow:1,dots:!1,arrows:!1,autoplay:!0,autoplaySpeed:3e3}}},{key:"redirectToPlayStore",value:function(n){"ios"===n?window.open("https://apps.apple.com/us/app/id1484316366","_blank"):"android"===n&&window.open("https://play.google.com/store/apps/details?id=com.travelunion","_blank")}},{key:"heroLink",value:function(link){this.$router.push(this.localePath({name:link}))}},{key:"handleClick",value:function(n){n&&(console.log(n.hash,n.link),Object(y.a)(n.hash?n.link+"#"+n.hash:n.link,this))}},{key:"handleAfterChange",value:function(n,e,t){this.activeSlide=t}},{key:"nextSlide",value:function(){this.$refs.slick.next(),this.activeSlide=this.$refs.slick.currentSlide()}},{key:"prevSlide",value:function(){this.$refs.slick.prev(),this.activeSlide=this.$refs.slick.currentSlide()}},{key:"goToSlide",value:function(n){this.$refs.slick.goTo(n),this.activeSlide=this.$refs.slick.currentSlide()}}]),e}(v.Vue);Object(f.a)([Object(v.Prop)({required:!0})],_.prototype,"heroSlides",void 0);var k=_=Object(f.a)([Object(v.Component)({components:{TuButton:m.a,Slick:h.a}})],_),I=(t(989),t(21)),component=Object(I.a)(k,(function(){var n=this,e=n._self._c;n._self._setupProxy;return n.heroSlides.length>0?e("div",{staticClass:"hero-photo-slider"},[e("slick",{ref:"slick",attrs:{options:n.slickOptions},on:{afterChange:n.handleAfterChange}},n._l(n.heroSlides,(function(o,r){return e("div",{key:"hero-photo-slide-"+r,class:["hero-photo-slide",o.link?"link":""],style:{"background-image":"url("+n.$options.filters.localisedAsset(o.bg)+")"},on:{click:function(e){return e.target!==e.currentTarget?null:n.handleClick(o.ctaPrimary)}}},[e("div",{staticClass:"hero-photo-slide-inner container mx-auto"},[e("div",{staticClass:"w-full lg:w-1/2 xl:w-1/2 hero-photo-slide__left"},[e("div",{staticClass:"h1 hero-photo-slide__title leading-tight pt-8 lg:pt-0",domProps:{innerHTML:n._s(o.title)}}),n._v(" "),o.text?e("div",{domProps:{innerHTML:n._s(o.text)}}):n._e(),n._v(" "),o.ctaPrimary||o.ctaSecondary?e("div",{staticClass:"hero-photo-slide__buttons lg:flex flex-wrap"},[o.ctaPrimary?e("tu-button",{staticClass:"mb-2 lg:mb-0",attrs:{type:"primary",title:o.ctaPrimary.title},nativeOn:{click:function(e){return n.handleClick(o.ctaPrimary)}}}):n._e(),n._v(" "),o.ctaSecondary?e("tu-button",{staticClass:"ml-1 mb-2 lg:mb-0 lg:ml-8 text-center",attrs:{type:["secondary",o.ctaSecondary.type],title:o.ctaSecondary.title},nativeOn:{click:function(e){return n.handleClick(o.ctaSecondary)}}}):n._e()],1):n._e(),n._v(" "),o.ctaDownload?e("div",{staticClass:"hero-photo-slide__buttons lg:flex items-center space-x-6"},[e("img",{staticClass:"hero-photo-slide__cta-download cursor-pointer",attrs:{src:t(338)},on:{click:function(e){return n.redirectToPlayStore("android")}}}),n._v(" "),e("img",{staticClass:"hero-photo-slide__cta-download cursor-pointer",attrs:{src:t(337)},on:{click:function(e){return n.redirectToPlayStore("ios")}}})]):n._e()])])])})),0),n._v(" "),n.heroSlides&&n.heroSlides.length>1?e("div",{staticClass:"slick-custom-controls"},n._l(n.heroSlides,(function(t,o){return e("div",{key:"hero-photo-slides-dot-"+o,class:["dot",n.activeSlide===o?"active":""],on:{click:function(e){return n.goToSlide(o)}}})})),0):n._e()],1):n._e()}),[],!1,null,"9473a72e",null);e.a=component.exports},989:function(n,e,t){"use strict";t(882)},990:function(n,e,t){var o=t(29)((function(i){return i[1]}));o.push([n.i,"/* purgecss start ignore */\n.page-in-transition[data-v-9473a72e]{\n  overflow-x:hidden\n}\n.zoomIn-leave[data-v-9473a72e],.zoomIn-leave-active[data-v-9473a72e],.zoomIn-enter[data-v-9473a72e],.zoomIn-enter-active[data-v-9473a72e]{\n  position:absolute;\n  left:0;\n  top:0;\n  width:100vw !important;\n  height:101vh !important;\n  max-width:none !important;\n  transition:all .3s ease\n}\n.zoomIn-leave-active[data-v-9473a72e]{\n  animation:bounce-out-9473a72e .3s ease;\n  transform-origin:50% 50%\n}\n.zoomIn-enter-active[data-v-9473a72e]{\n  animation:bounce-in-9473a72e .3s ease-out;\n  transform-origin:50% 50%\n}\n.fadeInUp-enter-active[data-v-9473a72e]{\n  animation:fadeInUp-9473a72e .5s\n}\n.fadeInUp-leave-active[data-v-9473a72e]{\n  animation:fadeInUp-9473a72e .5s reverse\n}\n.fadeInLeft-enter-active[data-v-9473a72e]{\n  animation:fadeInLeft-9473a72e .3s\n}\n.fadeInLeft-leave-active[data-v-9473a72e]{\n  animation:fadeInLeft-9473a72e .3s reverse\n}\n.fadeIn-enter-active[data-v-9473a72e]{\n  animation:fadeIn-9473a72e .14s ease-in\n}\n.fadeIn-leave-active[data-v-9473a72e]{\n  animation:fadeIn-9473a72e .14s ease-out reverse\n}\n.slideDown-enter-active[data-v-9473a72e]{\n  animation:slideDown-9473a72e .3s\n}\n.slideDown-leave-active[data-v-9473a72e]{\n  animation:slideDown-9473a72e .3s reverse\n}\n@keyframes swing-9473a72e{\n0%{\n    transform:rotate(0deg)\n}\n25%{\n    transform:rotate(-3deg)\n}\n75%{\n    transform:rotate(3deg)\n}\n100%{\n    transform:rotate(0deg)\n}\n}\n@keyframes slideDown-9473a72e{\n0%{\n    height:0\n}\n100%{\n    height:100vh\n}\n}\n@keyframes fadeIn-9473a72e{\n0%{\n    opacity:0\n}\n100%{\n    opacity:1\n}\n}\n@keyframes fadeInLeft-9473a72e{\n0%{\n    transform:translateX(10px);\n    opacity:0\n}\n100%{\n    transform:translateX(0);\n    opacity:1\n}\n}\n@keyframes fadeInUp-9473a72e{\n0%{\n    transform:translateY(10px);\n    opacity:0\n}\n100%{\n    transform:translateY(0);\n    opacity:1\n}\n}\n@keyframes bounce-in-9473a72e{\n0%{\n    opacity:0;\n    transform:scale(0.95)\n}\n100%{\n    opacity:1;\n    transform:scale(1)\n}\n}\n@keyframes bounce-out-9473a72e{\n0%{\n    opacity:1;\n    transform:scale(1)\n}\n75%{\n    opacity:0\n}\n100%{\n    opacity:0;\n    transform:scale(1.2)\n}\n}\n@keyframes bounce-circle-9473a72e{\n0%{\n    transform:scale(1)\n}\n20%{\n    transform:scale(0.8)\n}\n60%{\n    transform:scale(1.1)\n}\n100%{\n    transform:scale(1)\n}\n}\n@keyframes wiggle-9473a72e{\n0%{\n    transform:scale(0, 0) rotate(0);\n    opacity:0\n}\n70%{\n    transform:scale(1.3, 1.3) rotate(3deg);\n    opacity:1\n}\n100%{\n    transform:scale(1, 1) rotate(0);\n    opacity:1\n}\n}\n.full-width[data-v-9473a72e]{\n  margin-left:-16px;\n  margin-right:-16px;\n  width:calc(100% + 32px)\n}\n@media(min-width: 1024px){\n.full-width[data-v-9473a72e]{\n    margin-left:0;\n    margin-right:0;\n    width:100%\n}\n}\n.hero-photo-slide-inner[data-v-9473a72e]{\n  padding-top:100px\n}\n.hero-photo-slide[data-v-9473a72e]{\n  color:#fff;\n  height:450px;\n  background-size:cover;\n  background-position:center;\n  background-color:#fbfbfb\n}\n.hero-photo-slide.link[data-v-9473a72e]{\n  cursor:pointer\n}\n@media(min-width: 1024px){\n.hero-photo-slide[data-v-9473a72e]{\n    height:600px\n}\n}\n.hero-photo-slide__cta-download[data-v-9473a72e]{\n  width:150px;\n  max-width:50%\n}\n@media(min-width: 1024px){\n.hero-photo-slide__cta-download[data-v-9473a72e]{\n    width:200px\n}\n}\n.hero-photo-slide-inner[data-v-9473a72e]{\n  height:450px;\n  display:flex;\n  flex-wrap:wrap;\n  padding:0 16px\n}\n@media(min-width: 1024px){\n.hero-photo-slide-inner[data-v-9473a72e]{\n    padding:0;\n    height:600px\n}\n}\n.hero-photo-slide__left[data-v-9473a72e]{\n  display:flex;\n  flex-direction:column;\n  justify-content:center;\n  align-items:flex-start\n}\n.hero-photo-slide__right[data-v-9473a72e]{\n  display:flex;\n  align-items:flex-end;\n  justify-content:center;\n  max-height:100%;\n  margin-top:20px\n}\n@media(min-width: 1024px){\n.hero-photo-slide__right[data-v-9473a72e]{\n    margin-top:0\n}\n}\n.hero-photo-slide__right img[data-v-9473a72e]{\n  max-height:100%\n}\n.hero-photo-slide__title[data-v-9473a72e]{\n  font-weight:900\n}\n@media(min-width: 640px){\n.hero-photo-slide__title[data-v-9473a72e]{\n    margin-top:40px\n}\n}\n@media(min-width: 1024px){\n.hero-photo-slide__title[data-v-9473a72e]{\n    margin-top:0\n}\n}\n.hero-photo-slide__buttons[data-v-9473a72e]{\n  align-items:center;\n  width:100%;\n  margin-top:40px\n}\n.hero-photo-slide__buttons button[data-v-9473a72e],.hero-photo-slide__buttons a[data-v-9473a72e]{\n  flex-grow:1;\n  flex-basis:0;\n  justify-content:center\n}\n@media(min-width: 768px){\n.hero-photo-slide__buttons button[data-v-9473a72e],.hero-photo-slide__buttons a[data-v-9473a72e]{\n    flex-grow:unset;\n    flex-basis:unset\n}\n}\n.hero-photo-slide__buttons a[data-v-9473a72e]{\n  font-weight:700;\n  transition:all .2s ease;\n  margin-left:30px;\n  word-break:break-word;\n  cursor:pointer\n}\n.hero-photo-slide__buttons a[data-v-9473a72e]:hover{\n  color:#2ad2c9\n}\n\n/* purgecss end ignore */",""]),o.locals={},n.exports=o}}]);
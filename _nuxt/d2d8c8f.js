(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{734:function(n,e,t){var content=t(751);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(37).default)("84e9b498",content,!0,{sourceMap:!1})},743:function(n,e,t){"use strict";t(133),t(8),t(45);var o=t(10),r=t(11),c=t(14),l=t(6),d=t(15),m=t(3),f=t(1),v=t(93),x=t(92);function _(n,e,t){return e=Object(l.a)(e),Object(c.a)(n,h()?Reflect.construct(e,t||[],Object(l.a)(n).constructor):e.apply(n,t))}function h(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(n){}return(h=function(){return!!n})()}var y=function(n){function e(){return Object(o.a)(this,e),_(this,e,arguments)}return Object(d.a)(e,n),Object(r.a)(e,[{key:"handleClick",value:function(link){Object(x.a)(link,this)}}]),e}(f.Vue);Object(m.a)([Object(f.Prop)({required:!1})],y.prototype,"content",void 0);var w=y=Object(m.a)([Object(f.Component)({components:{TuButton:v.a}})],y),k=(t(750),t(21)),component=Object(k.a)(w,(function(){var n=this,e=n._self._c;n._self._setupProxy;return e("div",{staticClass:"w-full flex flex-wrap flex-col-reverse xl:flex-row image-text-block"},[e("div",{staticClass:"xl:w-1/2 flex image-text-block__image-wrapper image-col"},[e("img",{staticClass:"w-full sm:w-1/2 xl:w-full mx-auto",attrs:{src:n.$options.filters.localisedAsset(n.content.img)}})]),n._v(" "),e("div",{staticClass:"xl:w-1/2 flex items-center"},[e("div",{staticClass:"image-text-block__content"},[e("div",{staticClass:"h1 image-text-block__title",domProps:{innerHTML:n._s(n.content.title)}}),n._v(" "),n.content.subtitle?e("div",{staticClass:"h2 image-text-block__subtitle",domProps:{innerHTML:n._s(n.content.subtitle)}}):n._e(),n._v(" "),e("div",{staticClass:"h4 image-text-block__text",domProps:{innerHTML:n._s(n.content.text)}}),n._v(" "),e("div",{staticClass:"mt-10 justify-center flex-wrap flex mx-auto lg:ml-0 xl:justify-start"},[n.content.cta?e("tu-button",{staticClass:"m-2",attrs:{type:"primary",title:n.content.cta.title},nativeOn:{click:function(e){return n.handleClick(n.content.cta.link)}}}):n._e(),n._v(" "),n.content.ctaSecondary?e("tu-button",{staticClass:"m-2",attrs:{type:"primary inverse",title:n.content.ctaSecondary.title},nativeOn:{click:function(e){return n.handleClick(n.content.ctaSecondary.link)}}}):n._e()],1)])])])}),[],!1,null,"2ab8532e",null);e.a=component.exports},750:function(n,e,t){"use strict";t(734)},751:function(n,e,t){var o=t(29)((function(i){return i[1]}));o.push([n.i,"/* purgecss start ignore */\n.page-in-transition[data-v-2ab8532e]{\n  overflow-x:hidden\n}\n.zoomIn-leave[data-v-2ab8532e],.zoomIn-leave-active[data-v-2ab8532e],.zoomIn-enter[data-v-2ab8532e],.zoomIn-enter-active[data-v-2ab8532e]{\n  position:absolute;\n  left:0;\n  top:0;\n  width:100vw !important;\n  height:101vh !important;\n  max-width:none !important;\n  transition:all .3s ease\n}\n.zoomIn-leave-active[data-v-2ab8532e]{\n  animation:bounce-out-2ab8532e .3s ease;\n  transform-origin:50% 50%\n}\n.zoomIn-enter-active[data-v-2ab8532e]{\n  animation:bounce-in-2ab8532e .3s ease-out;\n  transform-origin:50% 50%\n}\n.fadeInUp-enter-active[data-v-2ab8532e]{\n  animation:fadeInUp-2ab8532e .5s\n}\n.fadeInUp-leave-active[data-v-2ab8532e]{\n  animation:fadeInUp-2ab8532e .5s reverse\n}\n.fadeInLeft-enter-active[data-v-2ab8532e]{\n  animation:fadeInLeft-2ab8532e .3s\n}\n.fadeInLeft-leave-active[data-v-2ab8532e]{\n  animation:fadeInLeft-2ab8532e .3s reverse\n}\n.fadeIn-enter-active[data-v-2ab8532e]{\n  animation:fadeIn-2ab8532e .14s ease-in\n}\n.fadeIn-leave-active[data-v-2ab8532e]{\n  animation:fadeIn-2ab8532e .14s ease-out reverse\n}\n.slideDown-enter-active[data-v-2ab8532e]{\n  animation:slideDown-2ab8532e .3s\n}\n.slideDown-leave-active[data-v-2ab8532e]{\n  animation:slideDown-2ab8532e .3s reverse\n}\n@keyframes swing-2ab8532e{\n0%{\n    transform:rotate(0deg)\n}\n25%{\n    transform:rotate(-3deg)\n}\n75%{\n    transform:rotate(3deg)\n}\n100%{\n    transform:rotate(0deg)\n}\n}\n@keyframes slideDown-2ab8532e{\n0%{\n    height:0\n}\n100%{\n    height:100vh\n}\n}\n@keyframes fadeIn-2ab8532e{\n0%{\n    opacity:0\n}\n100%{\n    opacity:1\n}\n}\n@keyframes fadeInLeft-2ab8532e{\n0%{\n    transform:translateX(10px);\n    opacity:0\n}\n100%{\n    transform:translateX(0);\n    opacity:1\n}\n}\n@keyframes fadeInUp-2ab8532e{\n0%{\n    transform:translateY(10px);\n    opacity:0\n}\n100%{\n    transform:translateY(0);\n    opacity:1\n}\n}\n@keyframes bounce-in-2ab8532e{\n0%{\n    opacity:0;\n    transform:scale(0.95)\n}\n100%{\n    opacity:1;\n    transform:scale(1)\n}\n}\n@keyframes bounce-out-2ab8532e{\n0%{\n    opacity:1;\n    transform:scale(1)\n}\n75%{\n    opacity:0\n}\n100%{\n    opacity:0;\n    transform:scale(1.2)\n}\n}\n@keyframes bounce-circle-2ab8532e{\n0%{\n    transform:scale(1)\n}\n20%{\n    transform:scale(0.8)\n}\n60%{\n    transform:scale(1.1)\n}\n100%{\n    transform:scale(1)\n}\n}\n@keyframes wiggle-2ab8532e{\n0%{\n    transform:scale(0, 0) rotate(0);\n    opacity:0\n}\n70%{\n    transform:scale(1.3, 1.3) rotate(3deg);\n    opacity:1\n}\n100%{\n    transform:scale(1, 1) rotate(0);\n    opacity:1\n}\n}\n.image-text-block .image-col[data-v-2ab8532e]{\n  align-items:center\n}\n.image-text-block.image-align-bottom .image-col[data-v-2ab8532e]{\n  align-items:flex-end\n}\n.image-text-block.image-center .image-text-block__image-wrapper[data-v-2ab8532e]{\n  align-items:center;\n  justify-content:center;\n  padding-bottom:40px\n}\n@media(min-width: 1280px){\n.image-text-block.image-center .image-text-block__image-wrapper[data-v-2ab8532e]{\n    padding-bottom:80px\n}\n}\n@media(min-width: 1536px){\n.image-text-block.image-center .image-text-block__image-wrapper[data-v-2ab8532e]{\n    padding-bottom:0\n}\n}\n.image-text-block__title[data-v-2ab8532e]{\n  font-weight:300\n}\n.image-text-block__subtitle[data-v-2ab8532e]{\n  font-weight:300;\n  line-height:1.25\n}\n.image-text-block__text[data-v-2ab8532e]{\n  margin-top:20px;\n  font-weight:300\n}\n@media(min-width: 1280px){\n.image-text-block__text[data-v-2ab8532e]{\n    margin-top:32px\n}\n}\n@media(min-width: 1280px){\n.image-text-block.xl\\:flex-row-reverse .image-text-block__content[data-v-2ab8532e]{\n    margin-bottom:0;\n    padding:80px 80px 80px 0px\n}\n}\n.image-text-block__content[data-v-2ab8532e]{\n  margin-bottom:40px;\n  padding-top:40px\n}\n@media(min-width: 1280px){\n.image-text-block__content[data-v-2ab8532e]{\n    margin-bottom:0;\n    padding:80px 0 80px 80px\n}\n}\n@media(min-width: 1280px){\n.image-text-block.less-padding .image-text-block__content[data-v-2ab8532e]{\n    margin-bottom:0;\n    padding:20px 0px 20px 0px\n}\n}\n\n/* purgecss end ignore */",""]),o.locals={},n.exports=o},761:function(n,e,t){var content=t(788);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(37).default)("5299024e",content,!0,{sourceMap:!1})},784:function(n,e,t){"use strict";t(8),t(45);var o=t(10),r=t(11),c=t(14),l=t(6),d=t(15),m=t(3),f=t(1);function v(n,e,t){return e=Object(l.a)(e),Object(c.a)(n,x()?Reflect.construct(e,t||[],Object(l.a)(n).constructor):e.apply(n,t))}function x(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(n){}return(x=function(){return!!n})()}var _=function(n){function e(){var n;return Object(o.a)(this,e),(n=v(this,e,arguments)).currentFaq=-10,n}return Object(d.a)(e,n),Object(r.a)(e,[{key:"faqTrigger",value:function(n){n===this.currentFaq?this.currentFaq=-10:this.currentFaq=n}},{key:"beforeEnterFaq",value:function(n){n.style.display="block",n.style.maxHeight=null,n.myHeight=n.offsetHeight,n.style.maxHeight=0,n.style.display=null}},{key:"enterFaq",value:function(n){n.style.maxHeight=n.myHeight+"px"}}]),e}(f.Vue);Object(m.a)([Object(f.Prop)({required:!1,default:""})],_.prototype,"title",void 0),Object(m.a)([Object(f.Prop)({required:!1,default:""})],_.prototype,"items",void 0);var h=_=Object(m.a)([Object(f.Component)({})],_),y=(t(787),t(21)),component=Object(y.a)(h,(function(){var n=this,e=n._self._c;n._self._setupProxy;return e("div",{staticClass:"content lg:w-3/4 lg:mx-auto"},[e("div",{staticClass:"h2 text-center mb-8 lg:mb-14 lg:w-3/4 mx-auto",domProps:{innerHTML:n._s(n.title)}}),n._v(" "),e("div",{staticClass:"lb_accordeon",attrs:{id:"lb_accordeon"}},[e("ul",{staticClass:"lb_accordeon__item"},n._l(n.items,(function(t,o){return e("li",{key:o,staticClass:"lb_item",class:{"lb_ext-active":n.currentFaq===o},on:{click:function(e){return n.faqTrigger(o)}}},[e("div",{staticClass:"lb_item__hl"},[e("span",{domProps:{innerHTML:n._s(t.question)}})]),n._v(" "),e("transition",{attrs:{mode:"out-in",name:"faq-fade"},on:{"before-enter":n.beforeEnterFaq,enter:n.enterFaq}},[e("div",{directives:[{name:"show",rawName:"v-show",value:n.currentFaq===o,expression:"currentFaq === index"}],staticClass:"lb_item__copy"},[e("div",{staticClass:"lb_item-copy-ct",domProps:{innerHTML:n._s(t.answer)}})])])],1)})),0)])])}),[],!1,null,null,null);e.a=component.exports},787:function(n,e,t){"use strict";t(761)},788:function(n,e,t){var o=t(29)((function(i){return i[1]}));o.push([n.i,"/* purgecss start ignore */\n.page-in-transition{\n  overflow-x:hidden\n}\n.zoomIn-leave,.zoomIn-leave-active,.zoomIn-enter,.zoomIn-enter-active{\n  position:absolute;\n  left:0;\n  top:0;\n  width:100vw !important;\n  height:101vh !important;\n  max-width:none !important;\n  transition:all .3s ease\n}\n.zoomIn-leave-active{\n  animation:bounce-out .3s ease;\n  transform-origin:50% 50%\n}\n.zoomIn-enter-active{\n  animation:bounce-in .3s ease-out;\n  transform-origin:50% 50%\n}\n.fadeInUp-enter-active{\n  animation:fadeInUp .5s\n}\n.fadeInUp-leave-active{\n  animation:fadeInUp .5s reverse\n}\n.fadeInLeft-enter-active{\n  animation:fadeInLeft .3s\n}\n.fadeInLeft-leave-active{\n  animation:fadeInLeft .3s reverse\n}\n.fadeIn-enter-active{\n  animation:fadeIn .14s ease-in\n}\n.fadeIn-leave-active{\n  animation:fadeIn .14s ease-out reverse\n}\n.slideDown-enter-active{\n  animation:slideDown .3s\n}\n.slideDown-leave-active{\n  animation:slideDown .3s reverse\n}\n@keyframes swing{\n0%{\n    transform:rotate(0deg)\n}\n25%{\n    transform:rotate(-3deg)\n}\n75%{\n    transform:rotate(3deg)\n}\n100%{\n    transform:rotate(0deg)\n}\n}\n@keyframes slideDown{\n0%{\n    height:0\n}\n100%{\n    height:100vh\n}\n}\n@keyframes fadeIn{\n0%{\n    opacity:0\n}\n100%{\n    opacity:1\n}\n}\n@keyframes fadeInLeft{\n0%{\n    transform:translateX(10px);\n    opacity:0\n}\n100%{\n    transform:translateX(0);\n    opacity:1\n}\n}\n@keyframes fadeInUp{\n0%{\n    transform:translateY(10px);\n    opacity:0\n}\n100%{\n    transform:translateY(0);\n    opacity:1\n}\n}\n@keyframes bounce-in{\n0%{\n    opacity:0;\n    transform:scale(0.95)\n}\n100%{\n    opacity:1;\n    transform:scale(1)\n}\n}\n@keyframes bounce-out{\n0%{\n    opacity:1;\n    transform:scale(1)\n}\n75%{\n    opacity:0\n}\n100%{\n    opacity:0;\n    transform:scale(1.2)\n}\n}\n@keyframes bounce-circle{\n0%{\n    transform:scale(1)\n}\n20%{\n    transform:scale(0.8)\n}\n60%{\n    transform:scale(1.1)\n}\n100%{\n    transform:scale(1)\n}\n}\n@keyframes wiggle{\n0%{\n    transform:scale(0, 0) rotate(0);\n    opacity:0\n}\n70%{\n    transform:scale(1.3, 1.3) rotate(3deg);\n    opacity:1\n}\n100%{\n    transform:scale(1, 1) rotate(0);\n    opacity:1\n}\n}\n@keyframes accordeonAni{\n0%{\n    max-height:0\n}\n}\n.lb_accordeon a{\n  color:#2ad2c9\n}\n.lb_accordeon a:hover{\n  text-decoration:underline\n}\n.lb_accordeon ul{\n  margin-left:0\n}\n.lb_accordeon .lb_item{\n  display:block;\n  margin-bottom:0;\n  margin-bottom:8px\n}\n.lb_accordeon .lb_item__hl{\n  position:relative;\n  padding:15px;\n  cursor:pointer;\n  transition:color 200ms;\n  background:#f2f2f2;\n  border-radius:12px 12px 0 0\n}\n.lb_accordeon .lb_item__hl:hover{\n  color:#2ad2c9\n}\n.lb_accordeon .lb_item__copy{\n  background:#fbfbfb;\n  margin:0;\n  padding:0\n}\n.lb_accordeon .lb_item .lb_item-copy-ct{\n  padding:20px\n}\n.faq-fade-enter{\n  max-height:0;\n  display:block\n}\n.faq-fade-enter-active{\n  animation:accordeonAni 400ms ease-out;\n  overflow:hidden\n}\n.faq-fade-leave{\n  display:block\n}\n.faq-fade-leave-to{\n  display:block\n}\n.faq-fade-leave-active{\n  animation:accordeonAni 400ms ease-out;\n  animation-direction:reverse;\n  overflow:hidden\n}\n\n/* purgecss end ignore */",""]),o.locals={},n.exports=o},881:function(n,e,t){var content=t(988);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(37).default)("47459ff5",content,!0,{sourceMap:!1})},928:function(n,e,t){"use strict";t(31);var o=[function(){var n=this,e=n._self._c;n._self._setupProxy;return e("div",{staticClass:"client-reviews-grid__logos space-x-10 justify-center"},[e("div",{staticClass:"flex flex-col justify-end"},[e("img",{staticClass:"client-reviews-grid__store-logo",attrs:{src:t(348)}}),n._v(" "),e("img",{staticClass:"client-reviews-grid__stars mt-2",attrs:{src:t(340)}})]),n._v(" "),e("div",{staticClass:"flex flex-col"},[e("img",{staticClass:"client-reviews-grid__store-logo",attrs:{src:t(349)}}),n._v(" "),e("img",{staticClass:"client-reviews-grid__stars mt-2",attrs:{src:t(340)}})])])}],r=(t(8),t(45),t(10)),c=t(11),l=t(14),d=t(6),m=t(15),f=t(3),v=t(1),x=t(729);t(722);function _(n,e,t){return e=Object(d.a)(e),Object(l.a)(n,h()?Reflect.construct(e,t||[],Object(d.a)(n).constructor):e.apply(n,t))}function h(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(n){}return(h=function(){return!!n})()}var y=function(n){function e(){var n;return Object(r.a)(this,e),(n=_(this,e,arguments)).activeSlide=0,n}return Object(m.a)(e,n),Object(c.a)(e,[{key:"slickOptions",get:function(){return{slidesToShow:3,dots:!1,arrows:!1,autoplay:!0,autoplaySpeed:1e4,cssEase:"ease-in-out",responsive:[{breakpoint:640,settings:{slidesToShow:1}},{breakpoint:1024,settings:{slidesToShow:2}},{breakpoint:1600,settings:{slidesToShow:3}}]}}},{key:"nextSlide",value:function(){this.$refs.slick.next(),this.activeSlide=this.$refs.slick.currentSlide()}},{key:"prevSlide",value:function(){this.$refs.slick.prev(),this.activeSlide=this.$refs.slick.currentSlide()}},{key:"goToSlide",value:function(n){this.$refs.slick.goTo(n),this.activeSlide=this.$refs.slick.currentSlide()}},{key:"handleAfterChange",value:function(n,e,t){this.activeSlide=t}}]),e}(v.Vue);Object(f.a)([Object(v.Prop)({required:!0})],y.prototype,"reviews",void 0);var w=y=Object(f.a)([Object(v.Component)({components:{Slick:x.a}})],y),k=(t(987),t(21)),component=Object(k.a)(w,(function(){var n=this,e=n._self._c;n._self._setupProxy;return e("div",{staticClass:"client-reviews-grid"},[e("div",{staticClass:"container mx-auto"},[e("div",{staticClass:"mb-10 lg:mb-20 text-center justify-center"},[e("div",{staticClass:"client-reviews-grid__title h1 mb-12",domProps:{innerHTML:n._s(n.reviews.title)}}),n._v(" "),n._m(0)]),n._v(" "),e("div",{staticClass:"w-3/4 mx-auto h-px bg-gray-400"}),n._v(" "),e("div",{staticClass:"w-3/4 mx-auto h-0.5 bg-white"}),n._v(" "),e("div",{staticClass:"mt-10 lg:mt-20"},[e("div",{staticClass:"block lg:hidden"},[e("div",{staticClass:"slick-custom-controls block lg:hidden mb-10"},n._l(n.reviews.list,(function(t,o){return e("div",{key:"review-slides-dot-"+o,class:["dot",n.activeSlide===o?"active":""],on:{click:function(e){return n.goToSlide(o)}}})})),0)]),n._v(" "),e("div",{staticClass:"w-full"},[e("slick",{ref:"slick",staticClass:"slick-reviews-slider",attrs:{options:n.slickOptions},on:{afterChange:n.handleAfterChange}},n._l(n.reviews.list,(function(t,o){return e("div",{key:"review-"+o,staticClass:"review"},[e("img",{staticClass:"mb-5 mx-auto",attrs:{src:n.$options.filters.localisedAsset(t.img)}}),n._v(" "),e("div",[e("div",{staticClass:"review__text text-sm lg:text-base text-center",domProps:{innerHTML:n._s(t.text)}}),n._v(" "),e("div",{staticClass:"review__name h5 font-semibold",domProps:{innerHTML:n._s(t.name)}})])])})),0)],1),n._v(" "),e("div",{staticClass:"hidden lg:block mt-10"},[e("div",{staticClass:"slick-custom-controls"},n._l(n.reviews.list,(function(t,o){return e("div",{key:"review-slides-dot-"+o,class:["dot",n.activeSlide===o?"active":""],on:{click:function(e){return n.goToSlide(o)}}})})),0)])])])])}),o,!1,null,null,null);e.a=component.exports},987:function(n,e,t){"use strict";t(881)},988:function(n,e,t){var o=t(29)((function(i){return i[1]}));o.push([n.i,"/* purgecss start ignore */\n.page-in-transition{\n  overflow-x:hidden\n}\n.zoomIn-leave,.zoomIn-leave-active,.zoomIn-enter,.zoomIn-enter-active{\n  position:absolute;\n  left:0;\n  top:0;\n  width:100vw !important;\n  height:101vh !important;\n  max-width:none !important;\n  transition:all .3s ease\n}\n.zoomIn-leave-active{\n  animation:bounce-out .3s ease;\n  transform-origin:50% 50%\n}\n.zoomIn-enter-active{\n  animation:bounce-in .3s ease-out;\n  transform-origin:50% 50%\n}\n.fadeInUp-enter-active{\n  animation:fadeInUp .5s\n}\n.fadeInUp-leave-active{\n  animation:fadeInUp .5s reverse\n}\n.fadeInLeft-enter-active{\n  animation:fadeInLeft .3s\n}\n.fadeInLeft-leave-active{\n  animation:fadeInLeft .3s reverse\n}\n.fadeIn-enter-active{\n  animation:fadeIn .14s ease-in\n}\n.fadeIn-leave-active{\n  animation:fadeIn .14s ease-out reverse\n}\n.slideDown-enter-active{\n  animation:slideDown .3s\n}\n.slideDown-leave-active{\n  animation:slideDown .3s reverse\n}\n@keyframes swing{\n0%{\n    transform:rotate(0deg)\n}\n25%{\n    transform:rotate(-3deg)\n}\n75%{\n    transform:rotate(3deg)\n}\n100%{\n    transform:rotate(0deg)\n}\n}\n@keyframes slideDown{\n0%{\n    height:0\n}\n100%{\n    height:100vh\n}\n}\n@keyframes fadeIn{\n0%{\n    opacity:0\n}\n100%{\n    opacity:1\n}\n}\n@keyframes fadeInLeft{\n0%{\n    transform:translateX(10px);\n    opacity:0\n}\n100%{\n    transform:translateX(0);\n    opacity:1\n}\n}\n@keyframes fadeInUp{\n0%{\n    transform:translateY(10px);\n    opacity:0\n}\n100%{\n    transform:translateY(0);\n    opacity:1\n}\n}\n@keyframes bounce-in{\n0%{\n    opacity:0;\n    transform:scale(0.95)\n}\n100%{\n    opacity:1;\n    transform:scale(1)\n}\n}\n@keyframes bounce-out{\n0%{\n    opacity:1;\n    transform:scale(1)\n}\n75%{\n    opacity:0\n}\n100%{\n    opacity:0;\n    transform:scale(1.2)\n}\n}\n@keyframes bounce-circle{\n0%{\n    transform:scale(1)\n}\n20%{\n    transform:scale(0.8)\n}\n60%{\n    transform:scale(1.1)\n}\n100%{\n    transform:scale(1)\n}\n}\n@keyframes wiggle{\n0%{\n    transform:scale(0, 0) rotate(0);\n    opacity:0\n}\n70%{\n    transform:scale(1.3, 1.3) rotate(3deg);\n    opacity:1\n}\n100%{\n    transform:scale(1, 1) rotate(0);\n    opacity:1\n}\n}\n.client-reviews-grid{\n  background-color:#fbfbfb;\n  padding-top:40px;\n  padding-bottom:40px\n}\n.client-reviews-grid__title{\n  font-weight:300\n}\n.client-reviews-grid__logos{\n  display:flex\n}\n.client-reviews-grid__logos>div img:first-child{\n  transition:all .3s ease\n}\n.client-reviews-grid__logos>div:hover img:first-child{\n  animation:swing linear 1s infinite\n}\n.client-reviews-grid__store-logo{\n  width:70px;\n  margin:0 auto\n}\n.client-reviews-grid__stars{\n  width:180px\n}\n.client-reviews-grid .review img{\n  width:100px;\n  height:100px;\n  border-radius:100%;\n  box-shadow:1px 1px 2px #364653\n}\n.client-reviews-grid .review__name{\n  margin-top:16px;\n  text-align:center;\n  padding:0 20px\n}\n@media(min-width: 1024px){\n.client-reviews-grid .review__name{\n    margin-bottom:0\n}\n}\n.client-reviews-grid .review__text{\n  position:relative;\n  text-indent:36px;\n  font-weight:300;\n  color:#233746;\n  text-indent:0;\n  font-style:italic\n}\n@media(min-width: 1024px){\n.client-reviews-grid .review__text{\n    padding:0 20px;\n    padding:0 5%\n}\n}\n.client-reviews-grid .quote{\n  font-size:74px;\n  font-weight:700;\n  position:absolute;\n  line-height:62px\n}\n.client-reviews-grid .slick-custom-controls{\n  margin:0 0 36px 0\n}\n@media(min-width: 1024px){\n.client-reviews-grid .slick-custom-controls{\n    margin:20px 0 32px -12px\n}\n}\n.client-reviews-grid .slick-slide>div{\n  width:100%;\n  margin-left:0;\n  margin-right:0\n}\n.client-reviews-grid .slick-custom-controls .dot{\n  box-shadow:inset .5px .5px 1px rgba(0,0,0,.5)\n}\n.client-reviews-grid .slick-custom-controls .dot.active{\n  background-color:#2ad2c9\n}\n\n/* purgecss end ignore */",""]),o.locals={},n.exports=o}}]);
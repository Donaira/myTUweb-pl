(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{1201:function(n,t,e){"use strict";e.r(t);e(58),e(16),e(35),e(34);var o=e(4),r=e(7),c=e(8),f=e(9),l=e(10),d=e(5),m=e(3),v=e(1),y=e(603);function h(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,o=Object(d.a)(n);if(t){var r=Object(d.a)(this).constructor;e=Reflect.construct(o,arguments,r)}else e=o.apply(this,arguments);return Object(l.a)(this,e)}}var k=function(n){Object(f.a)(l,n);var t,e=h(l);function l(){var n;return Object(r.a)(this,l),(n=e.apply(this,arguments)).articleSelected=!1,n.page="",n}return Object(c.a)(l,[{key:"nuxtI18n",value:function(){return{locales:["lt","en"]}}},{key:"onRouteChange",value:function(){this.articleSelected=this.$route.query.a,window.scrollTo({top:0,behavior:"smooth"})}},{key:"fetchArticle",value:(t=Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!this.articleSelected){n.next=5;break}return console.log("FETCH ARTICLE",this.page),n.next=4,this.$content("blog/"+this.articleSelected).fetch();case 4:this.page=n.sent;case 5:case"end":return n.stop()}}),n,this)}))),function(){return t.apply(this,arguments)})},{key:"mounted",value:function(){this.articleSelected=this.$route.query.a,this.fetchArticle()}},{key:"goBack",value:function(){this.page="",this.articleSelected=!1,this.$router.push(this.localePath({name:"blog"}))}},{key:"isBlogIndex",get:function(){var n=this.$route.path.split("/").filter((function(n){return""!==n}));return"blog"===n[n.length-1]&&!this.$route.query.a}}]),l}(v.Vue);Object(m.a)([Object(v.Watch)("$route.query.article",{deep:!0})],k.prototype,"onRouteChange",null);var w=k=Object(m.a)([Object(v.Component)({components:{FooterComponent:y.a}})],k),x=(e(894),e(14)),component=Object(x.a)(w,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("div",{class:[n.isBlogIndex?"":"blog-article"]},[n.isBlogIndex?n._e():e("div",{staticClass:"w-full lg:w-2/4 mx-auto flex items-center justify-center space-x-4 leading-none back",on:{click:function(t){return n.goBack()}}},[e("font-awesome-icon",{staticClass:"text-xs mb-0.5",attrs:{icon:["fas","chevron-left"]}}),n._v(" "),e("span",[n._v(n._s(n.$t("blog.backToGrid")))])],1),n._v(" "),!n.isBlogIndex&&n.articleSelected?e("div",[e("div",{staticClass:"container mx-auto min-h-scren"},[e("nuxt-content",{staticClass:"mb-24 xl:mb-40",attrs:{document:n.page}})],1)]):e("div",[e("NuxtChild",{class:[n.isBlogIndex?"":"container mx-auto min-h-screen"]})],1)]),n._v(" "),e("footer-component")],1)}),[],!1,null,null,null);t.default=component.exports},601:function(n,t,e){var content=e(605);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(24).default)("4f6522b0",content,!0,{sourceMap:!1})},603:function(n,t,e){"use strict";var o=e(7),r=e(8),c=e(9),f=e(10),l=e(5),d=e(3),m=e(1),v=e(70);function y(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,o=Object(l.a)(n);if(t){var r=Object(l.a)(this).constructor;e=Reflect.construct(o,arguments,r)}else e=o.apply(this,arguments);return Object(f.a)(this,e)}}var h=function(n){Object(c.a)(e,n);var t=y(e);function e(){return Object(o.a)(this,e),t.apply(this,arguments)}return Object(r.a)(e,[{key:"handleClick",value:function(link){Object(v.a)(link,this)}},{key:"companyData",get:function(){return this.$t("contacts")}},{key:"footerMenu",get:function(){return this.$t("footer")}},{key:"socialLinks",get:function(){return this.$te("footer.socialLinks."+this.$i18n.locale)?this.$t("footer.socialLinks."+this.$i18n.locale):this.$t("footer.socialLinks.default")}},{key:"footerMenuItems",get:function(){return this.$t("footerMenuItems")}}]),e}(m.Vue);Object(d.a)([Object(m.Prop)({required:!1,default:""})],h.prototype,"type",void 0),Object(d.a)([Object(m.Prop)({required:!1,default:""})],h.prototype,"extraStyles",void 0);var k=h=Object(d.a)([Object(m.Component)({components:{}})],h),w=(e(604),e(14)),component=Object(w.a)(k,(function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",["business"!=n.type&&"no-legal"!=n.type?o("div",{staticClass:"container mx-auto"},[o("div",{staticClass:"legal"},[o("span",{domProps:{innerHTML:n._s(n.$t("pocketMoney.legal.text"))}}),n._v(" "),o("nuxt-link",{attrs:{to:n.localePath({name:"prices"})}},[o("span",{domProps:{innerHTML:n._s(n.$t("pocketMoney.legal.linkText"))}})])],1)]):n._e(),n._v(" "),o("div",{class:["footer",n.extraStyles]},[o("div",{staticClass:"container mx-auto"},[o("div",{staticClass:"w-full flex flex-wrap lg:flex-row"},[o("div",{staticClass:"w-full mb-10 lg:w-2/5"},[o("img",{staticClass:"opacity-80",attrs:{src:e(281)}}),n._v(" "),o("div",{staticClass:"w-full social-icons text-2xl mt-5 space-x-5"},[o("a",{attrs:{href:n.socialLinks.facebook,target:"_blank"}},[o("font-awesome-icon",{attrs:{icon:["fab","facebook"]}})],1),n._v(" "),o("a",{attrs:{href:n.socialLinks.instagram,target:"_blank"}},[o("font-awesome-icon",{attrs:{icon:["fab","instagram"]}})],1),n._v(" "),o("a",{attrs:{href:n.socialLinks.linkedin,target:"_blank"}},[o("font-awesome-icon",{attrs:{icon:["fab","linkedin-in"]}})],1)])]),n._v(" "),o("div",{staticClass:"flex w-full mb-10 lg:w-3/5 space-x-4"},n._l(n.footerMenuItems,(function(t,e){return o("div",{key:"footer-item-"+e,staticClass:"w-1/3"},[o("ul",[t.link?o("li",{staticClass:"link"},[o("a",{attrs:{href:t.link,target:"_blank"},domProps:{innerHTML:n._s(t.title)}})]):o("li",{domProps:{innerHTML:n._s(t.title)}}),n._v(" "),n._l(t.items,(function(t,i){return o("li",{key:"footer-subitem-"+i},[t.link&&!t.link.includes("https")?o("a",{on:{click:function(e){return n.handleClick(t.link)}}},[o("span",{domProps:{innerHTML:n._s(t.title)}})]):o("a",{attrs:{href:t.link,target:"_blank"},domProps:{innerHTML:n._s(t.title)}})])}))],2)])})),0),n._v(" "),o("div",{staticClass:"w-full lg:flex"},[o("div",{staticClass:"w-full lg:w-1/2"},[o("div",{staticClass:"mt-4 w-5/6 opacity-50"},[n._v("© 2023 UAB Travel Union")]),n._v(" "),o("div",{staticClass:"mt-1 w-5/6 opacity-50",domProps:{innerHTML:n._s(n.footerMenu.legalText)}})]),n._v(" "),o("div",{staticClass:"w-full lg:w-1/2 lg:text-right"},[o("div",{staticClass:"mt-4 opacity-50"},[n._v("UAB Travel Union, "),o("span",{domProps:{innerHTML:n._s(n.companyData.address)}})]),n._v(" "),o("div",{staticClass:"mt-1 opacity-50"},[o("font-awesome-icon",{staticClass:"text-primary",attrs:{icon:["fas","phone"]}}),n._v(" "),o("span",{staticClass:"mr-2",domProps:{innerHTML:n._s(n.companyData.phone)}}),n._v(" "),o("font-awesome-icon",{staticClass:"text-primary",attrs:{icon:["fas","at"]}}),n._v(" "),o("span",{domProps:{innerHTML:n._s(n.companyData.email)}})],1),n._v(" "),o("div",{staticClass:"mt-1 opacity-50",domProps:{innerHTML:n._s(n.companyData.companyCode)}}),n._v(" "),o("div",{staticClass:"mt-1 opacity-50",domProps:{innerHTML:n._s(n.companyData.vatCode)}})])])])])])])}),[],!1,null,"2f6bdeb3",null);t.a=component.exports},604:function(n,t,e){"use strict";e(601)},605:function(n,t,e){(t=e(18)(!1)).push([n.i,"/* purgecss start ignore */\n.page-in-transition[data-v-2f6bdeb3]{\n  overflow-x:hidden\n}\n.zoomIn-leave[data-v-2f6bdeb3],.zoomIn-leave-active[data-v-2f6bdeb3],.zoomIn-enter[data-v-2f6bdeb3],.zoomIn-enter-active[data-v-2f6bdeb3]{\n  position:absolute;\n  left:0;\n  top:0;\n  width:100vw !important;\n  height:101vh !important;\n  max-width:none !important;\n  transition:all .3s ease\n}\n.zoomIn-leave-active[data-v-2f6bdeb3]{\n  -webkit-animation:bounce-out-data-v-2f6bdeb3 .3s ease;\n          animation:bounce-out-data-v-2f6bdeb3 .3s ease;\n  transform-origin:50% 50%\n}\n.zoomIn-enter-active[data-v-2f6bdeb3]{\n  -webkit-animation:bounce-in-data-v-2f6bdeb3 .3s ease-out;\n          animation:bounce-in-data-v-2f6bdeb3 .3s ease-out;\n  transform-origin:50% 50%\n}\n.fadeInUp-enter-active[data-v-2f6bdeb3]{\n  -webkit-animation:fadeInUp-data-v-2f6bdeb3 .5s;\n          animation:fadeInUp-data-v-2f6bdeb3 .5s\n}\n.fadeInUp-leave-active[data-v-2f6bdeb3]{\n  animation:fadeInUp-data-v-2f6bdeb3 .5s reverse\n}\n.fadeInLeft-enter-active[data-v-2f6bdeb3]{\n  -webkit-animation:fadeInLeft-data-v-2f6bdeb3 .3s;\n          animation:fadeInLeft-data-v-2f6bdeb3 .3s\n}\n.fadeInLeft-leave-active[data-v-2f6bdeb3]{\n  animation:fadeInLeft-data-v-2f6bdeb3 .3s reverse\n}\n.fadeIn-enter-active[data-v-2f6bdeb3]{\n  -webkit-animation:fadeIn-data-v-2f6bdeb3 .14s ease-in;\n          animation:fadeIn-data-v-2f6bdeb3 .14s ease-in\n}\n.fadeIn-leave-active[data-v-2f6bdeb3]{\n  animation:fadeIn-data-v-2f6bdeb3 .14s ease-out reverse\n}\n.slideDown-enter-active[data-v-2f6bdeb3]{\n  -webkit-animation:slideDown-data-v-2f6bdeb3 .3s;\n          animation:slideDown-data-v-2f6bdeb3 .3s\n}\n.slideDown-leave-active[data-v-2f6bdeb3]{\n  animation:slideDown-data-v-2f6bdeb3 .3s reverse\n}\n@-webkit-keyframes swing-data-v-2f6bdeb3{\n0%{\n    transform:rotate(0deg)\n}\n25%{\n    transform:rotate(-3deg)\n}\n75%{\n    transform:rotate(3deg)\n}\n100%{\n    transform:rotate(0deg)\n}\n}\n@keyframes swing-data-v-2f6bdeb3{\n0%{\n    transform:rotate(0deg)\n}\n25%{\n    transform:rotate(-3deg)\n}\n75%{\n    transform:rotate(3deg)\n}\n100%{\n    transform:rotate(0deg)\n}\n}\n@-webkit-keyframes slideDown-data-v-2f6bdeb3{\n0%{\n    height:0\n}\n100%{\n    height:100vh\n}\n}\n@keyframes slideDown-data-v-2f6bdeb3{\n0%{\n    height:0\n}\n100%{\n    height:100vh\n}\n}\n@-webkit-keyframes fadeIn-data-v-2f6bdeb3{\n0%{\n    opacity:0\n}\n100%{\n    opacity:1\n}\n}\n@keyframes fadeIn-data-v-2f6bdeb3{\n0%{\n    opacity:0\n}\n100%{\n    opacity:1\n}\n}\n@-webkit-keyframes fadeInLeft-data-v-2f6bdeb3{\n0%{\n    transform:translateX(10px);\n    opacity:0\n}\n100%{\n    transform:translateX(0);\n    opacity:1\n}\n}\n@keyframes fadeInLeft-data-v-2f6bdeb3{\n0%{\n    transform:translateX(10px);\n    opacity:0\n}\n100%{\n    transform:translateX(0);\n    opacity:1\n}\n}\n@-webkit-keyframes fadeInUp-data-v-2f6bdeb3{\n0%{\n    transform:translateY(10px);\n    opacity:0\n}\n100%{\n    transform:translateY(0);\n    opacity:1\n}\n}\n@keyframes fadeInUp-data-v-2f6bdeb3{\n0%{\n    transform:translateY(10px);\n    opacity:0\n}\n100%{\n    transform:translateY(0);\n    opacity:1\n}\n}\n@-webkit-keyframes bounce-in-data-v-2f6bdeb3{\n0%{\n    opacity:0;\n    transform:scale(0.95)\n}\n100%{\n    opacity:1;\n    transform:scale(1)\n}\n}\n@keyframes bounce-in-data-v-2f6bdeb3{\n0%{\n    opacity:0;\n    transform:scale(0.95)\n}\n100%{\n    opacity:1;\n    transform:scale(1)\n}\n}\n@-webkit-keyframes bounce-out-data-v-2f6bdeb3{\n0%{\n    opacity:1;\n    transform:scale(1)\n}\n75%{\n    opacity:0\n}\n100%{\n    opacity:0;\n    transform:scale(1.2)\n}\n}\n@keyframes bounce-out-data-v-2f6bdeb3{\n0%{\n    opacity:1;\n    transform:scale(1)\n}\n75%{\n    opacity:0\n}\n100%{\n    opacity:0;\n    transform:scale(1.2)\n}\n}\n@-webkit-keyframes bounce-circle-data-v-2f6bdeb3{\n0%{\n    transform:scale(1)\n}\n20%{\n    transform:scale(0.8)\n}\n60%{\n    transform:scale(1.1)\n}\n100%{\n    transform:scale(1)\n}\n}\n@keyframes bounce-circle-data-v-2f6bdeb3{\n0%{\n    transform:scale(1)\n}\n20%{\n    transform:scale(0.8)\n}\n60%{\n    transform:scale(1.1)\n}\n100%{\n    transform:scale(1)\n}\n}\n@-webkit-keyframes wiggle-data-v-2f6bdeb3{\n0%{\n    transform:scale(0, 0) rotate(0);\n    opacity:0\n}\n70%{\n    transform:scale(1.3, 1.3) rotate(3deg);\n    opacity:1\n}\n100%{\n    transform:scale(1, 1) rotate(0);\n    opacity:1\n}\n}\n@keyframes wiggle-data-v-2f6bdeb3{\n0%{\n    transform:scale(0, 0) rotate(0);\n    opacity:0\n}\n70%{\n    transform:scale(1.3, 1.3) rotate(3deg);\n    opacity:1\n}\n100%{\n    transform:scale(1, 1) rotate(0);\n    opacity:1\n}\n}\n.legal[data-v-2f6bdeb3]{\n  margin:5rem 0 0 0;\n  font-style:italic\n}\n.legal a[data-v-2f6bdeb3]{\n  color:#2ad2c9\n}\n@media(min-width: 1024px){\n.legal[data-v-2f6bdeb3]{\n    margin:10rem 0 0 0\n}\n}\n.footer[data-v-2f6bdeb3]{\n  margin-top:5rem;\n  background-color:#fbfbfb;\n  padding:40px 0;\n  font-size:12px\n}\n@media(min-width: 1024px){\n.footer[data-v-2f6bdeb3]{\n    margin-top:10rem\n}\n}\n.footer.no-mt[data-v-2f6bdeb3]{\n  margin-top:0\n}\n@media(min-width: 1024px){\n.footer.no-mt[data-v-2f6bdeb3]{\n    margin-top:0rem\n}\n}\n.footer a[data-v-2f6bdeb3]{\n  cursor:pointer\n}\n.footer .social-icons a[data-v-2f6bdeb3]{\n  opacity:.2;\n  transition:all .3s ease\n}\n.footer .social-icons a[data-v-2f6bdeb3]:hover{\n  opacity:.8;\n  color:#2ad2c9\n}\n.footer ul li[data-v-2f6bdeb3]{\n  margin-bottom:8px\n}\n.footer ul li a[data-v-2f6bdeb3]{\n  opacity:.5;\n  transition:all .2s ease\n}\n.footer ul li:hover a[data-v-2f6bdeb3]{\n  color:#2ad2c9;\n  opacity:.8\n}\n.footer ul li.link[data-v-2f6bdeb3]:first-child{\n  opacity:1\n}\n.footer ul li[data-v-2f6bdeb3]:first-child{\n  font-weight:700;\n  opacity:.5\n}\n\n/* purgecss end ignore */",""]),n.exports=t},773:function(n,t,e){var content=e(895);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(24).default)("2d1f1682",content,!0,{sourceMap:!1})},894:function(n,t,e){"use strict";e(773)},895:function(n,t,e){(t=e(18)(!1)).push([n.i,"/* purgecss start ignore */\n.page-in-transition{\n  overflow-x:hidden\n}\n.zoomIn-leave,.zoomIn-leave-active,.zoomIn-enter,.zoomIn-enter-active{\n  position:absolute;\n  left:0;\n  top:0;\n  width:100vw !important;\n  height:101vh !important;\n  max-width:none !important;\n  transition:all .3s ease\n}\n.zoomIn-leave-active{\n  -webkit-animation:bounce-out .3s ease;\n          animation:bounce-out .3s ease;\n  transform-origin:50% 50%\n}\n.zoomIn-enter-active{\n  -webkit-animation:bounce-in .3s ease-out;\n          animation:bounce-in .3s ease-out;\n  transform-origin:50% 50%\n}\n.fadeInUp-enter-active{\n  -webkit-animation:fadeInUp .5s;\n          animation:fadeInUp .5s\n}\n.fadeInUp-leave-active{\n  animation:fadeInUp .5s reverse\n}\n.fadeInLeft-enter-active{\n  -webkit-animation:fadeInLeft .3s;\n          animation:fadeInLeft .3s\n}\n.fadeInLeft-leave-active{\n  animation:fadeInLeft .3s reverse\n}\n.fadeIn-enter-active{\n  -webkit-animation:fadeIn .14s ease-in;\n          animation:fadeIn .14s ease-in\n}\n.fadeIn-leave-active{\n  animation:fadeIn .14s ease-out reverse\n}\n.slideDown-enter-active{\n  -webkit-animation:slideDown .3s;\n          animation:slideDown .3s\n}\n.slideDown-leave-active{\n  animation:slideDown .3s reverse\n}\n@-webkit-keyframes swing{\n0%{\n    transform:rotate(0deg)\n}\n25%{\n    transform:rotate(-3deg)\n}\n75%{\n    transform:rotate(3deg)\n}\n100%{\n    transform:rotate(0deg)\n}\n}\n@keyframes swing{\n0%{\n    transform:rotate(0deg)\n}\n25%{\n    transform:rotate(-3deg)\n}\n75%{\n    transform:rotate(3deg)\n}\n100%{\n    transform:rotate(0deg)\n}\n}\n@-webkit-keyframes slideDown{\n0%{\n    height:0\n}\n100%{\n    height:100vh\n}\n}\n@keyframes slideDown{\n0%{\n    height:0\n}\n100%{\n    height:100vh\n}\n}\n@-webkit-keyframes fadeIn{\n0%{\n    opacity:0\n}\n100%{\n    opacity:1\n}\n}\n@keyframes fadeIn{\n0%{\n    opacity:0\n}\n100%{\n    opacity:1\n}\n}\n@-webkit-keyframes fadeInLeft{\n0%{\n    transform:translateX(10px);\n    opacity:0\n}\n100%{\n    transform:translateX(0);\n    opacity:1\n}\n}\n@keyframes fadeInLeft{\n0%{\n    transform:translateX(10px);\n    opacity:0\n}\n100%{\n    transform:translateX(0);\n    opacity:1\n}\n}\n@-webkit-keyframes fadeInUp{\n0%{\n    transform:translateY(10px);\n    opacity:0\n}\n100%{\n    transform:translateY(0);\n    opacity:1\n}\n}\n@keyframes fadeInUp{\n0%{\n    transform:translateY(10px);\n    opacity:0\n}\n100%{\n    transform:translateY(0);\n    opacity:1\n}\n}\n@-webkit-keyframes bounce-in{\n0%{\n    opacity:0;\n    transform:scale(0.95)\n}\n100%{\n    opacity:1;\n    transform:scale(1)\n}\n}\n@keyframes bounce-in{\n0%{\n    opacity:0;\n    transform:scale(0.95)\n}\n100%{\n    opacity:1;\n    transform:scale(1)\n}\n}\n@-webkit-keyframes bounce-out{\n0%{\n    opacity:1;\n    transform:scale(1)\n}\n75%{\n    opacity:0\n}\n100%{\n    opacity:0;\n    transform:scale(1.2)\n}\n}\n@keyframes bounce-out{\n0%{\n    opacity:1;\n    transform:scale(1)\n}\n75%{\n    opacity:0\n}\n100%{\n    opacity:0;\n    transform:scale(1.2)\n}\n}\n@-webkit-keyframes bounce-circle{\n0%{\n    transform:scale(1)\n}\n20%{\n    transform:scale(0.8)\n}\n60%{\n    transform:scale(1.1)\n}\n100%{\n    transform:scale(1)\n}\n}\n@keyframes bounce-circle{\n0%{\n    transform:scale(1)\n}\n20%{\n    transform:scale(0.8)\n}\n60%{\n    transform:scale(1.1)\n}\n100%{\n    transform:scale(1)\n}\n}\n@-webkit-keyframes wiggle{\n0%{\n    transform:scale(0, 0) rotate(0);\n    opacity:0\n}\n70%{\n    transform:scale(1.3, 1.3) rotate(3deg);\n    opacity:1\n}\n100%{\n    transform:scale(1, 1) rotate(0);\n    opacity:1\n}\n}\n@keyframes wiggle{\n0%{\n    transform:scale(0, 0) rotate(0);\n    opacity:0\n}\n70%{\n    transform:scale(1.3, 1.3) rotate(3deg);\n    opacity:1\n}\n100%{\n    transform:scale(1, 1) rotate(0);\n    opacity:1\n}\n}\n.back{\n  margin-bottom:20px;\n  cursor:pointer;\n  transition:all .2s ease\n}\n.back:hover{\n  color:#2ad2c9\n}\n@media(min-width: 1024px){\n.blog-article{\n    width:65%;\n    margin-left:auto;\n    margin-right:auto\n}\n}\n.blog-author{\n  text-align:center;\n  padding:20px 40px 20px 20px;\n  border-radius:20px;\n  background-color:#fbfbfb;\n  margin-top:40px\n}\n@media(min-width: 1024px){\n.blog-author{\n    display:inline-flex;\n    align-items:center;\n    text-align:left\n}\n}\n.blog-author img{\n  width:120px;\n  margin:auto\n}\n@media(min-width: 1024px){\n.blog-author img{\n    margin-right:20px\n}\n}\n.blog-author span{\n  display:block\n}\n\n/* purgecss end ignore */",""]),n.exports=t}}]);
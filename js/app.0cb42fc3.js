(function(){var e={4880:function(e,t,n){"use strict";var a=n(7764),s=n(4108),o=n(9096);const i=e=>((0,s.ED)("data-v-78231154"),e=e(),(0,s.ii)(),e),l={class:"logo"},r={class:"logo__icon"},c={viewBox:"0 0 26 26",fill:"none",xmlns:"http://www.w3.org/2000/svg",display:"flex"},u=["fill"],p=["fill"],m=i((()=>(0,s.QD)("span",{class:"logo__name"},"Nisa",-1)));function v(e,t,n,a,o,i){return(0,s.Wz)(),(0,s.An)("div",l,[(0,s.QD)("div",r,[((0,s.Wz)(),(0,s.An)("svg",c,[(0,s.QD)("path",{d:"M26 26L0 0H8.66667L19.3968 10.7302V0H26V26Z",fill:a.col},null,8,u),(0,s.QD)("path",{d:"M1 12.1841L5.71014 16.957L10.4203 21.73H1V12.1841Z",fill:a.col},null,8,p)]))]),m])}var _=n(2500),d={setup(){const e=(0,_.IL)("#FF3C78");return{col:e}}},g=n(4100);const f=(0,g.c)(d,[["render",v],["__scopeId","data-v-78231154"]]);var b=f,h={__name:"ui-button-nav",props:{isOpen:{type:Boolean}},emits:["toggle"],setup(e,{emit:t}){const n=e,a=(0,s.S6)((()=>n.isOpen?"nav-closed":"nav-open")),i=t,l=()=>{i("toggle")};return(e,t)=>((0,s.Wz)(),(0,s.An)("button",{class:(0,o.WN)(a.value),onClick:l},[(0,s.QD)("div",{class:(0,o.WN)(`icon-${a.value}`)},null,2)],2))}};const w=(0,g.c)(h,[["__scopeId","data-v-319602f7"]]);var k=w,D=n(7192);const Q={class:"top-menu"},A={class:"top-menu__container"},y={class:"top-menu__wrap"},x=["src"],W={class:"top-menu__nav",appear:"","out-in":""},O={class:"nav-1"},z={class:"nav-1__list"},T=["href"],E={class:"nav-2"},L=["src"];var N={__name:"top-menu",setup(e){const t=(0,_.IL)(!0),n=()=>{t.value=!t.value},i=(0,D.o3)(),l=e=>i.getters["structure/HEADER_DATA_PL"](e),r=(0,s.S6)((()=>l("nav1"))),c=(0,s.S6)((()=>l("nav2"))),u=e=>{t.value=!(e<=375)},p=(0,_.IL)(null),m=new ResizeObserver((e=>u(e[0].contentRect.width)));return(0,s.u2)((()=>{m.observe(p.value)})),(0,s.wx)((()=>{m.unobserve(p.value)})),(e,i)=>{const l=(0,s.E1)("ua-button-base");return(0,s.Wz)(),(0,s.An)("section",Q,[(0,s.QD)("div",A,[(0,s.QD)("div",{class:"top-menu__probe",ref_key:"elem",ref:p,"data-i":"width meter"},null,512),(0,s.K2)(k,{class:"top-menu__burger",onToggle:i[0]||(i[0]=e=>n()),isOpen:t.value},null,8,["isOpen"]),(0,s.QD)("div",y,[(0,s.QD)("a",{class:"top-menu__logo",src:r.value[0].path},[(0,s.K2)(b)],8,x),(0,s.K2)(a.Ox,{name:"menu",appear:""},{default:(0,s.Ql)((()=>[(0,s.wt)((0,s.QD)("div",W,[(0,s.QD)("nav",O,[(0,s.QD)("ol",z,[(0,s.K2)(a.Q9,{name:"links"},{default:(0,s.Ql)((()=>[((0,s.Wz)(!0),(0,s.An)(s.ae,null,(0,s.mi)(r.value,((e,n)=>(0,s.wt)(((0,s.Wz)(),(0,s.An)("li",{class:"nav-1__item",key:`key${n}`,style:(0,o.MN)(`--i: ${n}`)},[(0,s.QD)("a",{class:"nav-1__link",href:e.path},(0,o.WA)(e.name),9,T)],4)),[[a.Ub,t.value]]))),128))])),_:1})])]),(0,s.wt)((0,s.QD)("nav",E,[((0,s.Wz)(),(0,s.An)("a",{class:"nav-2__link",key:11,src:c.value[0].path},(0,o.WA)(c.value[0].name),9,L)),((0,s.Wz)(),(0,s.Az)(l,{class:"nav-2__btn",col:"pink",key:12},{default:(0,s.Ql)((()=>[(0,s.mY)((0,o.WA)(c.value[1].name),1)])),_:1}))],512),[[a.Ub,t.value]])],512),[[a.Ub,t.value]])])),_:1})])])])}}};const S=(0,g.c)(N,[["__scopeId","data-v-2cb573e6"]]);var C=S;const I={class:"socials"},F=["src"];var P={__name:"socials-block",props:{setts:{type:Array}},setup(e){const t=e;return(e,a)=>((0,s.Wz)(),(0,s.An)("section",I,[((0,s.Wz)(!0),(0,s.An)(s.ae,null,(0,s.mi)(t.setts,((e,t)=>((0,s.Wz)(),(0,s.An)("a",{class:"socials__icon",key:t,href:"",style:(0,o.MN)({backgroundImage:"url("+n(1344)(`./${e.icon}.svg`)+")"}),src:e.link},null,12,F)))),128))]))}};const B=(0,g.c)(P,[["__scopeId","data-v-319e7f08"]]);var K=B;const M={class:"bottom-menu"},H={class:"bottom-menu__container"},R={class:"bottom-menu__wrap"},j={class:"bottom-menu__side-l"},U={class:"adv"},$={class:"adv__title"},V={class:"adv__sub-title"},q={class:"bottom-menu__side-r"},G={class:"links"},J={class:"links__title"},Z={class:"links__list"},Y=["href"];var X={__name:"bottom-menu",setup(e){const t=(0,D.o3)(),n=(0,s.S6)((()=>t.getters["structure/FOOTER_DATA"])),a=(0,s.S6)((()=>n.value[Object.keys(n.value)[3]]));return(e,t)=>((0,s.Wz)(),(0,s.An)("section",M,[(0,s.QD)("div",H,[(0,s.QD)("div",R,[(0,s.QD)("div",j,[(0,s.QD)("div",U,[(0,s.QD)("h2",$,(0,o.WA)(n.value.title),1),(0,s.QD)("p",V,(0,o.WA)(n.value.subTitle),1),(0,s.QD)("div",null,[(0,s.K2)(K,{setts:n.value.socials},null,8,["setts"])])])]),(0,s.QD)("div",q,[(0,s.QD)("div",G,[((0,s.Wz)(!0),(0,s.An)(s.ae,null,(0,s.mi)(a.value,((e,t,n)=>((0,s.Wz)(),(0,s.An)("div",{class:(0,o.WN)(["links__group",`links__group--${n+1}`]),key:t},[(0,s.QD)("h3",J,(0,o.WA)(t),1),(0,s.QD)("ol",Z,[((0,s.Wz)(!0),(0,s.An)(s.ae,null,(0,s.mi)(e,((e,t)=>((0,s.Wz)(),(0,s.An)("li",{class:"links__link",key:t},[(0,s.QD)("a",{href:e.link},(0,o.WA)(e.name),9,Y)])))),128))])],2)))),128))])])])])]))}};const ee=(0,g.c)(X,[["__scopeId","data-v-e1ee5dd6"]]);var te=ee;const ne=e=>((0,s.ED)("data-v-43f288a0"),e=e(),(0,s.ii)(),e),ae={class:"bottom-row"},se={class:"bottom-row__container"},oe={class:"bottom-row__wrapper"},ie={class:"bottom-row__part l"},le=ne((()=>(0,s.QD)("div",{class:"bottom-row__icon icon"},[(0,s.QD)("span",{class:"icon__txt"},"isa")],-1))),re=["innerHTML"],ce={class:"bottom-row__part c"},ue=["src"],pe={class:"bottom-row__part r"},me=["src"],ve=["src"];var _e={__name:"bottom-final-row",setup(e){const t=(0,D.o3)(),n=(0,s.S6)((()=>t.getters["structure/FOOTER_DATA_PL"]("footer")));return(e,t)=>((0,s.Wz)(),(0,s.An)("section",ae,[(0,s.QD)("div",se,[(0,s.QD)("div",oe,[(0,s.QD)("div",ie,[le,(0,s.QD)("div",{class:"bottom-row__txt",innerHTML:n.value[0].txt},null,8,re)]),(0,s.QD)("div",ce,[(0,s.QD)("a",{class:"bottom-row__terms",src:n.value[1].link},(0,o.WA)(n.value[1].name),9,ue)]),(0,s.QD)("div",pe,[(0,s.QD)("a",{class:"bottom-row__over",src:n.value[2].link},(0,o.WA)(n.value[2].name),9,me),(0,s.QD)("a",{class:"bottom-row__pages",src:n.value[3].link},(0,o.WA)(n.value[3].name),9,ve)])])])]))}};const de=(0,g.c)(_e,[["__scopeId","data-v-43f288a0"]]);var ge=de,fe={__name:"App",setup(e){return(e,t)=>{const n=(0,s.E1)("router-view");return(0,s.Wz)(),(0,s.An)(s.ae,null,[(0,s.K2)(C),(0,s.K2)(n),(0,s.K2)(te),(0,s.K2)(ge)],64)}}};const be=fe;var he=be,we=n(7464),ke=n.p+"img/img-head-1040@1x.9d827219.webp",De=n.p+"img/img-head-1040@2x.ecf4aeff.webp",Qe=n.p+"img/img-head-1040@3x.00d50f9c.webp",Ae=n.p+"img/img-head-786@2x.c399edf1.webp",ye=n.p+"img/img-head-786@3x.ed7608e6.webp",xe=n.p+"img/img-head-343@2x.02af2b4e.webp",We=n.p+"img/img-head-343@2.5x.e3c20c39.webp",Oe=n.p+"img/img-head-343@3x.859168e2.webp";const ze=ke+" 1x, "+De+" 2x, "+Qe+" 3x",Te=Ae+" 2x, "+ye+" 3x",Ee=xe+" 2x, "+We+" 2.5x, "+Oe+" 3x",Le={class:"top-section"},Ne={class:"top-section__container"},Se={class:"top-section__wrapper"},Ce=(0,s.QD)("hgroup",{class:"title"},[(0,s.QD)("div",{class:"title__sub-title"},"Teams Build"),(0,s.QD)("h1",{class:"title__title"},"Better Products With Nisa")],-1),Ie={class:"catcher"},Fe=(0,s.QD)("div",{class:"catcher__txt"}," Nisa is constantly improving to move forward through dashboard, statistics, data and verify and superior human resources. ",-1),Pe=(0,s.QD)("span",{class:"btn__txt"},"Get Started",-1),Be=(0,s.IL)('<div class="main-pic"><div class="main-pic__img-wrap"><picture class="main-pic__img"><source media="(min-width: 1440px)" srcset="'+ze+'" type="image/webp"><source media="(min-width: 834px)" srcset="'+Te+'" type="image/webp"><source media="(min-width: 0px)" srcset="'+Ee+'" type="image/webp"><img src="'+ke+'" alt="and this is our happy customer"></picture></div><div class="main-pic__pop"></div></div>',1),Ke=(0,s.QD)("div",{class:"top-section__divider"},null,-1);function Me(e,t){const n=(0,s.E1)("ua-button-base");return(0,s.Wz)(),(0,s.An)(s.ae,null,[(0,s.QD)("section",Le,[(0,s.QD)("div",Ne,[(0,s.QD)("div",Se,[Ce,(0,s.QD)("div",Ie,[Fe,(0,s.K2)(n,{class:"catcher__btn btn",col:"pink"},{default:(0,s.Ql)((()=>[Pe])),_:1})]),Be])])]),Ke],64)}const He={},Re=(0,g.c)(He,[["render",Me]]);var je=Re;const Ue=e=>((0,s.ED)("data-v-0ad27d28"),e=e(),(0,s.ii)(),e),$e={class:"main"},Ve={class:"main__container",ref:"elem"},qe=Ue((()=>(0,s.QD)("div",{class:"main__wrapper"}," Main section ",-1))),Ge=[qe];var Je={__name:"page-main",setup(e){return(e,t)=>((0,s.Wz)(),(0,s.An)("div",$e,[(0,s.K2)(je),(0,s.QD)("div",Ve,Ge,512)]))}};const Ze=(0,g.c)(Je,[["__scopeId","data-v-0ad27d28"]]);var Ye=Ze;const Xe=[{path:"/",name:"home",component:Ye},{path:"/:pathMatch(.*)",redirect:"/"}],et=(0,we.gv)({history:(0,we.oz)("/nisa-teams-build/"),routes:Xe});var tt=et,nt=JSON.parse('{"title":"Build a beautiful product with align","subTitle":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus euismod fusce pulvinar amet. Sollicitudin nullam mauris tellus accumsan, phasellus. Ut ac consequat arcu non aliquam.","socials":[{"icon":"twitter","link":"#https://twitter.com/#"},{"icon":"facebook","link":"#https://fb.com/#"},{"icon":"google","link":"#https://google.com/#"},{"icon":"pinterest","link":"#https://pinterest.com/#"},{"icon":"linkedin","link":"#https://www.linkedin.com/#"}],"menu":{"Overview":[{"name":"Home","link":"#/home/"},{"name":"About","link":"#/about/"},{"name":"Blog","link":"#/blog"},{"name":"Blog post","link":"#/blog-post"},{"name":"Team Member","link":"#/team-member"}],"Pages":[{"name":"Contact","link":"#/contact/"},{"name":"Customer Story","link":"#/customer-story/"},{"name":"Login","link":"#/login/"},{"name":"Register","link":"#/register/"},{"name":"Style Guide","link":"#/style-guide/"},{"name":"Change log","link":"#/change-log/"},{"name":"License","link":"#/License/"},{"name":"404","link":"#/404/"},{"name":"Password","link":"#/password/"}],"Connect:":[{"name":"+001 234 567 89","link":"+00123456789"},{"name":"hellow@nesa.com","link":"hellow@nesa.com"}]},"footer":[{"icon":"nisa","txt":"@ template by <span style=\\"color: #4FC553;\\">Flowbass</span>- Powered by <span style=\\"color: #4FC553;\\">ui8</span>"},{"name":"Term of services privacy policy","link":"#"},{"name":"Overview","link":"#"},{"name":"Pages","link":"#"}]}'),at=JSON.parse('{"nav1":[{"name":"Home","path":"#home"},{"name":"Pricing","path":"#pricing"},{"name":"About","path":"#about"},{"name":"Blog","path":"#blog"},{"name":"Contact","path":"#contact"}],"nav2":[{"name":"Login","path":"#login"},{"name":"Buy Nesa","path":"#nesa"}]}');const st={namespaced:!0,state:{headerData:at,footerData:nt},getters:{HEADER_DATA:e=>e.headerData,HEADER_DATA_PL:e=>t=>e.headerData[t],FOOTER_DATA:e=>e.footerData,FOOTER_DATA_PL:e=>t=>e.footerData[t]}};var ot=st,it=(0,D.eC)({state:{},getters:{},mutations:{},actions:{},modules:{structure:ot}}),lt={__name:"ui-button-base",props:{col:{type:String,default:"pink"}},setup(e){const t=e,n=(0,s.S6)((()=>"blue"===t.col?"set1":"set2"));return(e,t)=>((0,s.Wz)(),(0,s.An)("span",{class:(0,o.WN)(["base",n.value])},[(0,s.oF)(e.$slots,"default")],2))}};const rt=(0,g.c)(lt,[["__scopeId","data-v-139445ea"]]);var ct=rt,ut=[{name:"uaButtonBase",ui:ct}];const pt=(0,a.W0)(he);ut.forEach((e=>pt.component(e.name,e.ui))),pt.use(it).use(tt).mount("#app")},1344:function(e,t,n){var a={"./facebook.svg":5168,"./google.svg":9712,"./linkedin.svg":1524,"./pinterest.svg":9356,"./twitter.svg":8428};function s(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=o,e.exports=s,s.id=1344},5168:function(e,t,n){"use strict";e.exports=n.p+"img/facebook.eff20712.svg"},9712:function(e,t,n){"use strict";e.exports=n.p+"img/google.477fa836.svg"},1524:function(e,t,n){"use strict";e.exports=n.p+"img/linkedin.2c6b7d4a.svg"},9356:function(e,t,n){"use strict";e.exports=n.p+"img/pinterest.d7956aa5.svg"},8428:function(e,t,n){"use strict";e.exports=n.p+"img/twitter.45e003da.svg"}},t={};function n(a){var s=t[a];if(void 0!==s)return s.exports;var o=t[a]={exports:{}};return e[a].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,a,s,o){if(!a){var i=1/0;for(u=0;u<e.length;u++){a=e[u][0],s=e[u][1],o=e[u][2];for(var l=!0,r=0;r<a.length;r++)(!1&o||i>=o)&&Object.keys(n.O).every((function(e){return n.O[e](a[r])}))?a.splice(r--,1):(l=!1,o<i&&(i=o));if(l){e.splice(u--,1);var c=s();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[a,s,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/nisa-teams-build/"}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var s,o,i=a[0],l=a[1],r=a[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(s in l)n.o(l,s)&&(n.m[s]=l[s]);if(r)var u=r(n)}for(t&&t(a);c<i.length;c++)o=i[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(u)},a=self["webpackChunk_2024_01_29_nisa_ui_kit"]=self["webpackChunk_2024_01_29_nisa_ui_kit"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[999],(function(){return n(4880)}));a=n.O(a)})();
//# sourceMappingURL=app.0cb42fc3.js.map
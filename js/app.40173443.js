(function(){var t={6784:function(t,e,s){"use strict";var n=s(7764),a=s(4108),i=s(9096);const o=t=>((0,a.ED)("data-v-78231154"),t=t(),(0,a.ii)(),t),r={class:"logo"},c={class:"logo__icon"},l={viewBox:"0 0 26 26",fill:"none",xmlns:"http://www.w3.org/2000/svg",display:"flex"},u=["fill"],p=["fill"],g=o((()=>(0,a.QD)("span",{class:"logo__name"},"Nisa",-1)));function m(t,e,s,n,i,o){return(0,a.Wz)(),(0,a.An)("div",r,[(0,a.QD)("div",c,[((0,a.Wz)(),(0,a.An)("svg",l,[(0,a.QD)("path",{d:"M26 26L0 0H8.66667L19.3968 10.7302V0H26V26Z",fill:n.col},null,8,u),(0,a.QD)("path",{d:"M1 12.1841L5.71014 16.957L10.4203 21.73H1V12.1841Z",fill:n.col},null,8,p)]))]),g])}var v=s(2500),d={setup(){const t=(0,v.IL)("#FF3C78");return{col:t}}},b=s(4100);const f=(0,b.c)(d,[["render",m],["__scopeId","data-v-78231154"]]);var _=f,h={__name:"ui-button-nav",props:{isOpen:{type:Boolean}},emits:["toggle"],setup(t,{emit:e}){const s=t,n=(0,a.S6)((()=>s.isOpen?"nav-closed":"nav-open")),o=e,r=()=>{o("toggle")};return(t,e)=>((0,a.Wz)(),(0,a.An)("button",{class:(0,i.WN)(n.value),onClick:r},[(0,a.QD)("div",{class:(0,i.WN)(`icon-${n.value}`)},null,2)],2))}};const w=(0,b.c)(h,[["__scopeId","data-v-319602f7"]]);var A=w,x=s(7192);const D={class:"top-menu"},k={class:"top-menu__container"},Q={class:"top-menu__wrap"},y=["src"],W={class:"top-menu__nav",appear:"","out-in":""},O={class:"nav-1"},S={class:"nav-1__list"},N=["href"],z={class:"nav-2"},E=["src"];var M={__name:"menu-top",setup(t){const e=(0,v.IL)(!0),s=()=>{e.value=!e.value},o=(0,x.o3)(),r=t=>o.getters["structure/HEADER_DATA_PL"](t),c=(0,a.S6)((()=>r("nav1"))),l=(0,a.S6)((()=>r("nav2"))),u=t=>{e.value=!(t<=375)},p=(0,v.IL)(null),g=new ResizeObserver((t=>u(t[0].contentRect.width)));return(0,a.u2)((()=>{g.observe(p.value)})),(0,a.wx)((()=>{g.unobserve(p.value)})),(t,o)=>{const r=(0,a.E1)("ui-button-base");return(0,a.Wz)(),(0,a.An)("section",D,[(0,a.QD)("div",k,[(0,a.QD)("div",{class:"top-menu__probe",ref_key:"elem",ref:p,"data-i":"width meter"},null,512),(0,a.K2)(A,{class:"top-menu__burger",onToggle:o[0]||(o[0]=t=>s()),isOpen:e.value},null,8,["isOpen"]),(0,a.QD)("div",Q,[(0,a.QD)("a",{class:"top-menu__logo",src:c.value[0].path},[(0,a.K2)(_)],8,y),(0,a.K2)(n.Ox,{name:"menu",appear:""},{default:(0,a.Ql)((()=>[(0,a.wt)((0,a.QD)("div",W,[(0,a.QD)("nav",O,[(0,a.QD)("ol",S,[(0,a.K2)(n.Q9,{name:"links"},{default:(0,a.Ql)((()=>[((0,a.Wz)(!0),(0,a.An)(a.ae,null,(0,a.mi)(c.value,((t,s)=>(0,a.wt)(((0,a.Wz)(),(0,a.An)("li",{class:"nav-1__item",key:`key${s}`,style:(0,i.MN)(`--i: ${s}`)},[(0,a.QD)("a",{class:"nav-1__link",href:t.path},(0,i.WA)(t.name),9,N)],4)),[[n.Ub,e.value]]))),128))])),_:1})])]),(0,a.wt)((0,a.QD)("nav",z,[((0,a.Wz)(),(0,a.An)("a",{class:"nav-2__link",key:11,src:l.value[0].path},(0,i.WA)(l.value[0].name),9,E)),((0,a.Wz)(),(0,a.Az)(r,{class:"nav-2__btn",col:"pink",key:12},{default:(0,a.Ql)((()=>[(0,a.mY)((0,i.WA)(l.value[1].name),1)])),_:1}))],512),[[n.Ub,e.value]])],512),[[n.Ub,e.value]])])),_:1})])])])}}};const L=(0,b.c)(M,[["__scopeId","data-v-5afdddf4"]]);var H=L;const I={class:"socials"},P=["src"];var C={__name:"block-socials",props:{setts:{type:Array}},setup(t){const e=t;return(t,n)=>((0,a.Wz)(),(0,a.An)("section",I,[((0,a.Wz)(!0),(0,a.An)(a.ae,null,(0,a.mi)(e.setts,((t,e)=>((0,a.Wz)(),(0,a.An)("a",{class:"socials__icon",key:e,href:"",style:(0,i.MN)({backgroundImage:"url("+s(1344)(`./${t.icon}.svg`)+")"}),src:t.link},null,12,P)))),128))]))}};const T=(0,b.c)(C,[["__scopeId","data-v-2e852048"]]);var K=T;const B={class:"bottom-menu"},F={class:"bottom-menu__container"},U={class:"bottom-menu__wrap"},G={class:"bottom-menu__side-l"},Y={class:"adv"},R={class:"adv__title"},j={class:"adv__sub-title"},Z={class:"bottom-menu__side-r"},X={class:"links"},q={class:"links__title"},V={class:"links__list"},J=["href"];var $={__name:"menu-bottom",setup(t){const e=(0,x.o3)(),s=(0,a.S6)((()=>e.getters["structure/FOOTER_DATA"])),n=(0,a.S6)((()=>s.value[Object.keys(s.value)[3]]));return(t,e)=>((0,a.Wz)(),(0,a.An)("section",B,[(0,a.QD)("div",F,[(0,a.QD)("div",U,[(0,a.QD)("div",G,[(0,a.QD)("div",Y,[(0,a.QD)("h2",R,(0,i.WA)(s.value.title),1),(0,a.QD)("p",j,(0,i.WA)(s.value.subTitle),1),(0,a.QD)("div",null,[(0,a.K2)(K,{setts:s.value.socials},null,8,["setts"])])])]),(0,a.QD)("div",Z,[(0,a.QD)("div",X,[((0,a.Wz)(!0),(0,a.An)(a.ae,null,(0,a.mi)(n.value,((t,e,s)=>((0,a.Wz)(),(0,a.An)("div",{class:(0,i.WN)(["links__group",`links__group--${s+1}`]),key:e},[(0,a.QD)("h3",q,(0,i.WA)(e),1),(0,a.QD)("ol",V,[((0,a.Wz)(!0),(0,a.An)(a.ae,null,(0,a.mi)(t,((t,e)=>((0,a.Wz)(),(0,a.An)("li",{class:"links__link",key:e},[(0,a.QD)("a",{href:t.link},(0,i.WA)(t.name),9,J)])))),128))])],2)))),128))])])])])]))}};const tt=(0,b.c)($,[["__scopeId","data-v-3f124f90"]]);var et=tt;const st=t=>((0,a.ED)("data-v-5b1e61bb"),t=t(),(0,a.ii)(),t),nt={class:"bottom-row"},at={class:"bottom-row__container"},it={class:"bottom-row__wrapper"},ot={class:"bottom-row__part l"},rt=st((()=>(0,a.QD)("div",{class:"bottom-row__icon icon"},[(0,a.QD)("span",{class:"icon__txt"},"isa")],-1))),ct=["innerHTML"],lt={class:"bottom-row__part c"},ut=["src"],pt={class:"bottom-row__part r"},gt=["src"],mt=["src"];var vt={__name:"menu-bottom-row",setup(t){const e=(0,x.o3)(),s=(0,a.S6)((()=>e.getters["structure/FOOTER_DATA_PL"]("footer")));return(t,e)=>((0,a.Wz)(),(0,a.An)("section",nt,[(0,a.QD)("div",at,[(0,a.QD)("div",it,[(0,a.QD)("div",ot,[rt,(0,a.QD)("div",{class:"bottom-row__txt",innerHTML:s.value[0].txt},null,8,ct)]),(0,a.QD)("div",lt,[(0,a.QD)("a",{class:"bottom-row__terms",src:s.value[1].link},(0,i.WA)(s.value[1].name),9,ut)]),(0,a.QD)("div",pt,[(0,a.QD)("a",{class:"bottom-row__over",src:s.value[2].link},(0,i.WA)(s.value[2].name),9,gt),(0,a.QD)("a",{class:"bottom-row__pages",src:s.value[3].link},(0,i.WA)(s.value[3].name),9,mt)])])])]))}};const dt=(0,b.c)(vt,[["__scopeId","data-v-5b1e61bb"]]);var bt=dt,ft={__name:"App",setup(t){return(t,e)=>{const s=(0,a.E1)("router-view");return(0,a.Wz)(),(0,a.An)(a.ae,null,[(0,a.K2)(H),(0,a.K2)(s),(0,a.K2)(et),(0,a.K2)(bt)],64)}}};const _t=ft;var ht=_t,wt=s(7464),At=s.p+"img/img-head-1040@1x.9d827219.webp",xt=s.p+"img/img-head-1040@2x.ecf4aeff.webp",Dt=s.p+"img/img-head-1040@3x.00d50f9c.webp",kt=s.p+"img/img-head-786@2x.c399edf1.webp",Qt=s.p+"img/img-head-786@3x.ed7608e6.webp",yt=s.p+"img/img-head-343@2x.02af2b4e.webp",Wt=s.p+"img/img-head-343@2.5x.e3c20c39.webp",Ot=s.p+"img/img-head-343@3x.859168e2.webp";const St=t=>((0,a.ED)("data-v-b8f1cf3e"),t=t(),(0,a.ii)(),t),Nt={class:"overlay-phone-block block-with-circle"},zt=St((()=>(0,a.QD)("div",{class:"block__row block__row--1"},"+380",-1))),Et=St((()=>(0,a.QD)("div",{class:"block__row block__row--2"},null,-1))),Mt=St((()=>(0,a.QD)("div",{class:"block__row block__row--3"},null,-1))),Lt=St((()=>(0,a.QD)("div",{class:"block__row block__row--4"},null,-1))),Ht=[zt,Et,Mt,Lt];function It(t,e,s,n,i,o){return(0,a.Wz)(),(0,a.An)("div",Nt,Ht)}var Pt={};const Ct=(0,b.c)(Pt,[["render",It],["__scopeId","data-v-b8f1cf3e"]]);var Tt=Ct;const Kt=At+" 1x, "+xt+" 2x, "+Dt+" 3x",Bt=kt+" 2x, "+Qt+" 3x",Ft=yt+" 2x, "+Wt+" 2.5x, "+Ot+" 3x",Ut={class:"top-section"},Gt={class:"top-section__container"},Yt={class:"top-section__wrapper"},Rt={class:"top-section__title-block"},jt={class:"title"},Zt={class:"title__sub-title"},Xt={class:"title__title"},qt={class:"catcher"},Vt={class:"catcher__txt"},Jt={class:"btn__txt"},$t={class:"top-section__picture picture"},te=(0,a.IL)('<div class="picture__img-wrap"><picture class="picture__img"><source media="(min-width: 1440px)" srcset="'+Kt+'" type="image/webp"><source media="(min-width: 834px)" srcset="'+Bt+'" type="image/webp"><source media="(min-width: 0px)" srcset="'+Ft+'" type="image/webp"><img src="'+At+'" alt="and this is our happy customer"></picture></div>',1),ee=(0,a.QD)("div",{class:"top-section__divider"},null,-1);var se={__name:"home-page-sec1_v1",setup(t){const e=(0,x.o3)(),s=(0,a.S6)((()=>e.getters["structure/HOME_PAGE_PL"]("s1")));return(t,e)=>{const n=(0,a.E1)("ui-button-base");return(0,a.Wz)(),(0,a.An)(a.ae,null,[(0,a.QD)("section",Ut,[(0,a.QD)("div",Gt,[(0,a.QD)("div",Yt,[(0,a.QD)("div",Rt,[(0,a.QD)("hgroup",jt,[(0,a.QD)("div",Zt,(0,i.WA)(s.value[1]["sub-title"]),1),(0,a.QD)("h1",Xt,(0,i.WA)(s.value[0].title),1)]),(0,a.QD)("div",qt,[(0,a.QD)("div",Vt,(0,i.WA)(s.value[2].catcher),1),(0,a.K2)(n,{class:"catcher__btn btn",col:"pink"},{default:(0,a.Ql)((()=>[(0,a.QD)("span",Jt,(0,i.WA)(s.value[3].button),1)])),_:1})])]),(0,a.QD)("div",$t,[te,(0,a.K2)(Tt,{class:"picture__overlay"})])])])]),ee],64)}}};const ne=se;var ae=ne;s(3248);const ie=t=>((0,a.ED)("data-v-6b2f8909"),t=t(),(0,a.ii)(),t),oe={class:"author"},re=ie((()=>(0,a.QD)("div",{class:"author__side-1 side-1"},[(0,a.QD)("div",{class:"side-1__img"})],-1))),ce={class:"author__side-2 person"},le={class:"person__name"},ue={class:"person__job"};var pe={__name:"ui-author-block",props:{setts:{type:Object}},setup(t){(0,n.m4)((t=>({"077d2d45":o.value})));const e=t,o=(0,a.S6)((()=>`url(${r(e.setts.img)})`)),r=t=>s(904)("./"+t);return(e,s)=>((0,a.Wz)(),(0,a.An)("div",oe,[re,(0,a.QD)("div",ce,[(0,a.QD)("div",le,(0,i.WA)(t.setts.author),1),(0,a.QD)("div",ue,(0,i.WA)(t.setts.job),1)])]))}};const ge=(0,b.c)(pe,[["__scopeId","data-v-6b2f8909"]]);var me=ge;const ve={class:"sec-1"},de={class:"sec-1__container"},be={class:"sec-1__wrapper"},fe={class:"sec-1__side-1 side-1"},_e={class:"side-1__picture picture"},he=["media","srcset"],we=["src","alt"],Ae={class:"sec-1__side-2 side-2"},xe={class:"side-2__name"},De={class:"side-2__txt"},ke={class:"side-2__trigger"};var Qe={__name:"home-page-sec2_",setup(t){const e=(0,x.o3)(),n=e.getters["structure/HOME_PAGE_PL"]("s2"),o=(0,a.S6)((()=>{const t=[],e=n[6];for(let n=0;n<e.breaks.length;n++){const a=e.breaks[n],i={};i.media=`${e.media}: ${a[0]}`,i.arr=[];for(let t=0;t<a[2].length;t++){const n=e.path+e.name+"-",o=a[2][t],r=s(3500)(`./${n}${a[1]}-@${o}.webp`);i.arr.push(r+" "+o)}i.srcs=i.arr.join(", "),t.push(i)}const a={};return a.srcSetts=t,a.alt=e.alt,a.src=t[0].arr[t[0].arr.length-1].slice(0,-3),a}));return(t,e)=>{const s=(0,a.E1)("ui-button-base");return(0,a.Wz)(),(0,a.An)("section",ve,[(0,a.QD)("div",de,[(0,a.QD)("div",be,[(0,a.QD)("div",fe,[(0,a.QD)("picture",_e,[((0,a.Wz)(!0),(0,a.An)(a.ae,null,(0,a.mi)(o.value.srcSetts,(t=>((0,a.Wz)(),(0,a.An)("source",{key:t.id,media:t.media,srcset:t.srcs},null,8,he)))),128)),(0,a.QD)("img",{class:"picture__img",src:o.value.src,alt:o.value.alt},null,8,we)])]),(0,a.QD)("div",Ae,[(0,a.QD)("div",xe,(0,i.WA)((0,v.KV)(n)[0].title),1),(0,a.QD)("div",De,(0,i.WA)((0,v.KV)(n)[1].txt),1),(0,a.K2)(s,{class:"side-2__btn",col:(0,v.KV)(n)[2].color},{default:(0,a.Ql)((()=>[(0,a.mY)((0,i.WA)((0,v.KV)(n)[2].name),1)])),_:1},8,["col"]),(0,a.QD)("div",ke,(0,i.WA)((0,v.KV)(n)[3].trigger),1),(0,a.K2)(me,{class:"side-2__author",setts:(0,v.KV)(n)[4]},null,8,["setts"])])])])])}}};const ye=(0,b.c)(Qe,[["__scopeId","data-v-b86bbaa0"]]);var We=ye;const Oe={class:"main"};var Se={__name:"home-page",setup(t){return(t,e)=>((0,a.Wz)(),(0,a.An)("div",Oe,[(0,a.K2)(ae),(0,a.K2)(We)]))}};const Ne=Se;var ze=Ne;const Ee=[{path:"/",name:"home",component:ze},{path:"/:pathMatch(.*)",redirect:"/"}],Me=(0,wt.gv)({history:(0,wt.oz)("/nisa-teams-build/"),routes:Ee});var Le=Me,He=JSON.parse('{"title":"Build a beautiful product with align","subTitle":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus euismod fusce pulvinar amet. Sollicitudin nullam mauris tellus accumsan, phasellus. Ut ac consequat arcu non aliquam.","socials":[{"icon":"twitter","link":"#https://twitter.com/#"},{"icon":"facebook","link":"#https://fb.com/#"},{"icon":"google","link":"#https://google.com/#"},{"icon":"pinterest","link":"#https://pinterest.com/#"},{"icon":"linkedin","link":"#https://www.linkedin.com/#"}],"menu":{"Overview":[{"name":"Home","link":"#/home/"},{"name":"About","link":"#/about/"},{"name":"Blog","link":"#/blog"},{"name":"Blog post","link":"#/blog-post"},{"name":"Team Member","link":"#/team-member"}],"Pages":[{"name":"Contact","link":"#/contact/"},{"name":"Customer Story","link":"#/customer-story/"},{"name":"Login","link":"#/login/"},{"name":"Register","link":"#/register/"},{"name":"Style Guide","link":"#/style-guide/"},{"name":"Change log","link":"#/change-log/"},{"name":"License","link":"#/License/"},{"name":"404","link":"#/404/"},{"name":"Password","link":"#/password/"}],"Connect:":[{"name":"+001 234 567 89","link":"+00123456789"},{"name":"hellow@nesa.com","link":"hellow@nesa.com"}]},"footer":[{"icon":"nisa","txt":"@ template by <span style=\\"color: #4FC553;\\">Flowbass</span>- Powered by <span style=\\"color: #4FC553;\\">ui8</span>"},{"name":"Term of services privacy policy","link":"#"},{"name":"Overview","link":"#"},{"name":"Pages","link":"#"}]}'),Ie=JSON.parse('{"nav1":[{"name":"Home","path":"#home"},{"name":"Pricing","path":"#pricing"},{"name":"About","path":"#about"},{"name":"Blog","path":"#blog"},{"name":"Contact","path":"#contact"}],"nav2":[{"name":"Login","path":"#login"},{"name":"Buy Nesa","path":"#nesa"}]}'),Pe=JSON.parse('{"s1":[{"title":"Better Products With Nisa"},{"sub-title":"Teams Build"},{"catcher":"Nisa is constantly improving to move forward through dashboard, statistics, data and verify and superior human resources."},{"button":"Get Started","path":"#get-started"}],"s2":[{"id":1,"title":"Discover the power of creative freedom with Nisa.","path":"#!"},{"id":2,"txt":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt finibus tortor. Donec lobortis augue sed ante molestie, vitae maximus nunc semper.","path":"#!"},{"id":3,"name":"Explore Section","color":"blue","path":"#!explore_section"},{"id":4,"trigger":"Add some additional details about your product","path":"#!"},{"id":5,"author":"Motiur Leeman","job":"Markating Manager","img":"avatar.png","alt":"article author photo","path":"#!_author"},{"id":6,"path":"page-1/sec-2/","alt":"Alex, who discovered the power of creative freedom with Nisa","type":"image/webp","media":"min-width","breaks":[["1440",["_man-with-tablet_LG-@1x.webp","_man-with-tablet_LG-@2x.webp"]],["834",["_man-with-tablet_MD-@2x.webp","_man-with-tablet_MD-@3x.webp"]],["1",["_man-with-tablet_SM-@2x.webp","_man-with-tablet_SM-@2.5x.webp","_man-with-tablet_SM-@3x.webp"]]]},{"id":7,"name":"man-with-tablet","path":"page-1/sec-2/","alt":"Alex, who discovered the power of creative freedom with Nisa","type":"image/webp","media":"min-width","breaks":[["1440px","LG",["1x","2x"]],["834px","MD",["2x","3x"]],["1px","SM",["2x","2.5x","3x"]]]}]}');const Ce={namespaced:!0,state:{headerData:Ie,footerData:He,homePage:Pe},getters:{HEADER_DATA:t=>t.headerData,HEADER_DATA_PL:t=>e=>t.headerData[e],FOOTER_DATA:t=>t.footerData,FOOTER_DATA_PL:t=>e=>t.footerData[e],HOME_PAGE_PL:t=>e=>t.homePage[e]}};var Te=Ce,Ke=(0,x.eC)({state:{},getters:{},mutations:{},actions:{},modules:{structure:Te}}),Be={__name:"ui-button-base",props:{col:{type:String,default:"pink"}},setup(t){const e=t,s=(0,a.S6)((()=>"blue"===e.col?"set1":"set2"));return(t,e)=>((0,a.Wz)(),(0,a.An)("span",{class:(0,i.WN)(["base",s.value])},[(0,a.oF)(t.$slots,"default")],2))}};const Fe=(0,b.c)(Be,[["__scopeId","data-v-139445ea"]]);var Ue=Fe,Ge=[{name:"uiButtonBase",ui:Ue}];const Ye=(0,n.W0)(ht);Ge.forEach((t=>Ye.component(t.name,t.ui))),Ye.use(Ke).use(Le).mount("#app")},3500:function(t,e,s){var n={"./page-1/sec-2/man-with-tablet-LG-@1x.webp":9148,"./page-1/sec-2/man-with-tablet-LG-@2x.webp":1044,"./page-1/sec-2/man-with-tablet-MD-@2x.webp":6288,"./page-1/sec-2/man-with-tablet-MD-@3x.webp":7072,"./page-1/sec-2/man-with-tablet-SM-@2.5x.webp":7896,"./page-1/sec-2/man-with-tablet-SM-@2x.webp":6944,"./page-1/sec-2/man-with-tablet-SM-@3x.webp":5032};function a(t){var e=i(t);return s(e)}function i(t){if(!s.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=i,t.exports=a,a.id=3500},1344:function(t,e,s){var n={"./facebook.svg":5168,"./google.svg":9712,"./linkedin.svg":1524,"./pinterest.svg":9356,"./twitter.svg":8428};function a(t){var e=i(t);return s(e)}function i(t){if(!s.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=i,t.exports=a,a.id=1344},904:function(t,e,s){var n={"./arr-right.svg":8420,"./arr.svg":3568,"./avatar.png":7796,"./browserslistrc.svg":6092,"./burger.svg":8528,"./call.svg":8012,"./cancel.svg":2060,"./chevron-left icon.svg":6272,"./chevron-right icon.svg":3444,"./close.svg":1860,"./cloud-lightning.svg":6140,"./facebook Icon.svg":5452,"./google.svg":9204,"./hz-Icon.svg":3632,"./instagram icon.svg":9820,"./layers-s.svg":7500,"./layers.svg":7223,"./linkedin Icon.svg":9236,"./location.svg":8028,"./logo/site-logo-2.svg":1373,"./logo/site-logo.svg":1424,"./mail.svg":1684,"./messages.svg":6068,"./pattern-1.svg":6952,"./pattern-2.svg":8040,"./profil.svg":2140,"./socials/facebook.svg":5168,"./socials/google.svg":9712,"./socials/linkedin.svg":1524,"./socials/pinterest.svg":9356,"./socials/twitter.svg":8428,"./star.svg":6204,"./stop.svg":1440,"./twitch.svg":8264,"./twitter icon.svg":2068,"./user.svg":6604,"./youtube-l.svg":4116,"./youtube-m.svg":2924,"./youtube-s.svg":6805};function a(t){var e=i(t);return s(e)}function i(t){if(!s.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=i,t.exports=a,a.id=904},8420:function(t,e,s){"use strict";t.exports=s.p+"img/arr-right.1bd77ac3.svg"},3568:function(t,e,s){"use strict";t.exports=s.p+"img/arr.9f86ccdb.svg"},6092:function(t,e,s){"use strict";t.exports=s.p+"img/browserslistrc.804f951d.svg"},8528:function(t,e,s){"use strict";t.exports=s.p+"img/burger.c9ba6894.svg"},8012:function(t,e,s){"use strict";t.exports=s.p+"img/call.c59576e8.svg"},2060:function(t,e,s){"use strict";t.exports=s.p+"img/cancel.e5286432.svg"},6272:function(t,e,s){"use strict";t.exports=s.p+"img/chevron-left icon.59db1a79.svg"},3444:function(t,e,s){"use strict";t.exports=s.p+"img/chevron-right icon.c3c24d42.svg"},1860:function(t,e,s){"use strict";t.exports=s.p+"img/close.e085f3dc.svg"},6140:function(t,e,s){"use strict";t.exports=s.p+"img/cloud-lightning.13d8d647.svg"},5452:function(t,e,s){"use strict";t.exports=s.p+"img/facebook Icon.bd7247e8.svg"},9204:function(t,e,s){"use strict";t.exports=s.p+"img/google.1e9557ac.svg"},3632:function(t,e,s){"use strict";t.exports=s.p+"img/hz-Icon.3db413e5.svg"},9820:function(t,e,s){"use strict";t.exports=s.p+"img/instagram icon.6cd70d84.svg"},7500:function(t,e,s){"use strict";t.exports=s.p+"img/layers-s.d656133b.svg"},7223:function(t,e,s){"use strict";t.exports=s.p+"img/layers.f188165a.svg"},9236:function(t,e,s){"use strict";t.exports=s.p+"img/linkedin Icon.30a7c8e9.svg"},8028:function(t,e,s){"use strict";t.exports=s.p+"img/location.10010728.svg"},1373:function(t,e,s){"use strict";t.exports=s.p+"img/site-logo-2.faf982cc.svg"},1424:function(t,e,s){"use strict";t.exports=s.p+"img/site-logo.f8c14184.svg"},1684:function(t,e,s){"use strict";t.exports=s.p+"img/mail.838b4c6e.svg"},6068:function(t,e,s){"use strict";t.exports=s.p+"img/messages.c6b878a2.svg"},6952:function(t,e,s){"use strict";t.exports=s.p+"img/pattern-1.12bda4f4.svg"},8040:function(t,e,s){"use strict";t.exports=s.p+"img/pattern-2.9eb8c5e2.svg"},2140:function(t,e,s){"use strict";t.exports=s.p+"img/profil.9158584d.svg"},5168:function(t,e,s){"use strict";t.exports=s.p+"img/facebook.eff20712.svg"},9712:function(t,e,s){"use strict";t.exports=s.p+"img/google.477fa836.svg"},1524:function(t,e,s){"use strict";t.exports=s.p+"img/linkedin.2c6b7d4a.svg"},9356:function(t,e,s){"use strict";t.exports=s.p+"img/pinterest.d7956aa5.svg"},8428:function(t,e,s){"use strict";t.exports=s.p+"img/twitter.45e003da.svg"},6204:function(t,e,s){"use strict";t.exports=s.p+"img/star.8dfb6bbc.svg"},1440:function(t,e,s){"use strict";t.exports=s.p+"img/stop.341c27cb.svg"},8264:function(t,e,s){"use strict";t.exports=s.p+"img/twitch.75271dda.svg"},2068:function(t,e,s){"use strict";t.exports=s.p+"img/twitter icon.95ad35d5.svg"},6604:function(t,e,s){"use strict";t.exports=s.p+"img/user.656be7c4.svg"},4116:function(t,e,s){"use strict";t.exports=s.p+"img/youtube-l.fc75a8f3.svg"},2924:function(t,e,s){"use strict";t.exports=s.p+"img/youtube-m.0bc11eb0.svg"},6805:function(t,e,s){"use strict";t.exports=s.p+"img/youtube-s.8f172af2.svg"},9148:function(t,e,s){"use strict";t.exports=s.p+"img/man-with-tablet-LG-@1x.2d36bc46.webp"},1044:function(t,e,s){"use strict";t.exports=s.p+"img/man-with-tablet-LG-@2x.c0546a3a.webp"},6288:function(t,e,s){"use strict";t.exports=s.p+"img/man-with-tablet-MD-@2x.ef610719.webp"},7072:function(t,e,s){"use strict";t.exports=s.p+"img/man-with-tablet-MD-@3x.d8981b02.webp"},7896:function(t,e,s){"use strict";t.exports=s.p+"img/man-with-tablet-SM-@2.5x.19acc90c.webp"},6944:function(t,e,s){"use strict";t.exports=s.p+"img/man-with-tablet-SM-@2x.ab0d6e5a.webp"},5032:function(t,e,s){"use strict";t.exports=s.p+"img/man-with-tablet-SM-@3x.ff99942a.webp"},7796:function(t){"use strict";t.exports="data:image/png;base64,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"}},e={};function s(n){var a=e[n];if(void 0!==a)return a.exports;var i=e[n]={exports:{}};return t[n].call(i.exports,i,i.exports,s),i.exports}s.m=t,function(){var t=[];s.O=function(e,n,a,i){if(!n){var o=1/0;for(u=0;u<t.length;u++){n=t[u][0],a=t[u][1],i=t[u][2];for(var r=!0,c=0;c<n.length;c++)(!1&i||o>=i)&&Object.keys(s.O).every((function(t){return s.O[t](n[c])}))?n.splice(c--,1):(r=!1,i<o&&(o=i));if(r){t.splice(u--,1);var l=a();void 0!==l&&(e=l)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[n,a,i]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var n in e)s.o(e,n)&&!s.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.p="/nisa-teams-build/"}(),function(){var t={524:0};s.O.j=function(e){return 0===t[e]};var e=function(e,n){var a,i,o=n[0],r=n[1],c=n[2],l=0;if(o.some((function(e){return 0!==t[e]}))){for(a in r)s.o(r,a)&&(s.m[a]=r[a]);if(c)var u=c(s)}for(e&&e(n);l<o.length;l++)i=o[l],s.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return s.O(u)},n=self["webpackChunk_2024_01_29_nisa_ui_kit"]=self["webpackChunk_2024_01_29_nisa_ui_kit"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=s.O(void 0,[999],(function(){return s(6784)}));n=s.O(n)})();
//# sourceMappingURL=app.40173443.js.map
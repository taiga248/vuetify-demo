(function(t){function a(a){for(var s,n,o=a[0],l=a[1],c=a[2],m=0,v=[];m<o.length;m++)n=o[m],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&v.push(i[n][0]),i[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(a);while(v.length)v.shift()();return r.push.apply(r,c||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],s=!0,o=1;o<e.length;o++){var l=e[o];0!==i[l]&&(s=!1)}s&&(r.splice(a--,1),t=n(n.s=e[0]))}return t}var s={},i={app:0},r=[];function n(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=t,n.c=s,n.d=function(t,a,e){n.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,a){if(1&a&&(t=n(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)n.d(e,s,function(a){return t[a]}.bind(null,s));return e},n.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(a,"a",a),a},n.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},n.p="/vuetify-demo/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=a,o=o.slice();for(var c=0;c<o.length;c++)a(o[c]);var u=l;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"1f76":function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",{staticClass:"grey lighten-4"},[e("Navbar"),e("v-content",{staticClass:"ma-5"},[e("router-view")],1)],1)},r=[],n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",[e("v-app-bar",{attrs:{app:""}},[t.drawer?t._e():e("v-icon",{staticClass:"grey--text",attrs:{left:""},on:{click:t.toggle}},[t._v("mdi-menu")]),e("v-toolbar-title",[e("span",{staticClass:"font-weight-light"},[t._v("Energy")]),e("span",[t._v("TG")])]),e("v-spacer"),e("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(a){var s=a.on;return[e("v-btn",t._g({staticClass:"hidden-sm-and-down",attrs:{text:""}},s),[t._v("Dropdown Menu")])]}}])},[e("v-list",t._l(t.links,(function(a,s){return e("v-list-item",{key:s,attrs:{to:a.route}},[e("v-list-item-title",[t._v(t._s(a.text))])],1)})),1)],1),e("v-btn",{attrs:{text:"",color:"grey--text",to:"/sns"}},[e("span",[t._v("contact")]),e("v-icon",{attrs:{right:""}},[t._v("mdi-email-outline")])],1)],1),e("v-navigation-drawer",{staticClass:"indigo",attrs:{app:""},model:{value:t.drawer,callback:function(a){t.drawer=a},expression:"drawer"}},[e("v-list",[e("v-list-item",[e("v-list-item-title",{staticClass:"title white--text"},[t._v("EnergyTG")]),e("v-icon",{staticClass:"white--text",on:{click:t.toggle}},[t._v("mdi-window-close")])],1),t._l(t.links,(function(a,s){return e("v-list-item",{key:s,attrs:{router:"",to:a.route}},[e("v-list-item-action",[e("v-icon",{staticClass:"white--text",attrs:{right:""}},[t._v(t._s(a.icon))])],1),e("v-list-item-content",[e("v-list-item-title",{staticClass:"white--text"},[t._v(t._s(a.text))])],1)],1)}))],2)],1)],1)},o=[],l={data:function(){return{drawer:!1,links:[{icon:"mdi-account",text:"About",route:"/"},{icon:"mdi-grease-pencil",text:"Grid",route:"/Grid"},{icon:"mdi-format-color-fill",text:"Card",route:"/Card"},{icon:"mdi-cellphone",text:"SNS",route:"/SNS"}]}},methods:{toggle:function(){this.drawer=!this.drawer}}},c=l,u=e("2877"),m=e("6544"),v=e.n(m),d=e("40dc"),p=e("8336"),f=e("132d"),h=e("8860"),x=e("da13"),b=e("1800"),_=e("5d23"),g=e("e449"),C=e("f774"),y=e("2fa4"),w=e("2a7f"),V=Object(u["a"])(c,n,o,!1,null,null,null),k=V.exports;v()(V,{VAppBar:d["a"],VBtn:p["a"],VIcon:f["a"],VList:h["a"],VListItem:x["a"],VListItemAction:b["a"],VListItemContent:_["a"],VListItemTitle:_["b"],VMenu:g["a"],VNavigationDrawer:C["a"],VSpacer:y["a"],VToolbarTitle:w["a"]});var S={name:"App",components:{Navbar:k}},j=S,A=e("7496"),q=e("a75b"),T=Object(u["a"])(j,i,r,!1,null,null,null),O=T.exports;v()(T,{VApp:A["a"],VContent:q["a"]});var P=e("8c4f"),I=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"about"},[e("v-container",[e("h1",[t._v("About")]),e("h2",{staticClass:"text-center my-1"},[t._v("Title")]),e("p",[t._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quia magni sapiente sunt inventore voluptatibus explicabo eligendi eveniet sed veniam facilis, eaque fuga nemo corrupti dolore, fugiat doloribus culpa dolor? Adipisci beatae rerum aspernatur officiis eum? Quisquam ut fuga odio, alias ipsam eius possimus eum quaerat aliquid cum pariatur, placeat nihil recusandae perferendis magni ratione similique ad incidunt voluptatibus accusamus. Id incidunt modi odit magni voluptate earum facilis dolorum animi quidem minus sapiente, sunt eaque rerum cupiditate voluptatem qui consequatur illum accusamus? Cupiditate nihil expedita eius ex dolorum animi! Hic. ")]),e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{staticClass:"pa-5",attrs:{xs12:"",sm6:"",md4:""}},[e("h2",{staticClass:"text-center my-1"},[t._v("1")]),e("p",[t._v("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum sequi at, accusamus repellat sunt omnis? Adipisci facere autem minus culpa veniam nostrum eius sunt unde illo. Voluptates aperiam iusto non?")])]),e("v-flex",{staticClass:"pa-5",attrs:{xs12:"",sm6:"",md4:""}},[e("h2",{staticClass:"text-center my-1"},[t._v("2")]),e("p",[t._v("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum sequi at, accusamus repellat sunt omnis? Adipisci facere autem minus culpa veniam nostrum eius sunt unde illo. Voluptates aperiam iusto non?")])]),e("v-flex",{staticClass:"pa-5",attrs:{xs12:"",sm6:"",md4:""}},[e("h2",{staticClass:"text-center my-1"},[t._v("3")]),e("p",[t._v("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum sequi at, accusamus repellat sunt omnis? Adipisci facere autem minus culpa veniam nostrum eius sunt unde illo. Voluptates aperiam iusto non?")])])],1),e("v-divider",{staticClass:"my-10"}),e("v-layout",{attrs:{row:""}},[e("v-flex",{attrs:{xs12:"",md3:""}},[e("v-responsive",{staticClass:"my-4",attrs:{align:"center"}},[e("v-avatar",{attrs:{size:"20vh"}},[e("v-img",{attrs:{outlined:"",src:"https://picsum.photos/200",alt:"avatar"}})],1)],1)],1),e("v-flex",{attrs:{xs12:"",md9:""}},[e("h2",{staticClass:"text-center"},[t._v("Lorem")]),e("p",{attrs:{warp:""}},[e("span",{staticClass:"display-2"},[t._v("R")]),t._v(" ccusantium facere, at consequuntur iure et labore inventore sapiente qui officia laborum perferendis eius nemo necessitatibus deserunt adipisci itaque vero, vitae id molestiae tempora dignissimos rerum! Beatae sequi suscipit eligendi? Est at enim id inventore unde fuga, et incidunt perspiciatis aliquam, iste reprehenderit rerum. Necessitatibus, adipisci dolore et nesciunt vel expedita earum quos dolores explicabo ullam eligendi, porro suscipit! Accusamus. ")])])],1),e("v-divider",{staticClass:"my-10"}),[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{sm12:""}},[e("h1",{staticClass:"text-center my-4"},[t._v("Lazy loading")])]),t._l(9,(function(a){return e("v-flex",{key:a,attrs:{xs12:"",sm6:"",md4:""}},[e("v-lazy",{attrs:{options:{threshold:.7},"min-height":"200",transition:"fade-transition"}},[e("v-card",{staticClass:"mx-3 my-4",attrs:{"min-width":"200"}},[e("v-card-title",[t._v("Card title")]),e("v-card-text",[t._v(" Phasellus magna. Quisque rutrum. Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede. Aliquam lobortis. Quisque libero metus, condimentum nec, tempor a, commodo mollis, magna. In turpis. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. In turpis. Pellentesque dapibus hendrerit tortor. Ut varius tincidunt libero. ")])],1)],1)],1)}))],2)],e("v-divider",{staticClass:"my-10"}),[e("v-carousel",{attrs:{cycle:"",height:"400","hide-delimiter-background":"","show-arrows-on-hover":""}},t._l(t.slides,(function(a,s){return e("v-carousel-item",{key:s},[e("v-sheet",{attrs:{color:t.colors[s],height:"100%"}},[e("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[e("div",{staticClass:"display-3"},[t._v(t._s(a)+" Slide")])])],1)],1)})),1)]],2)],1)},L=[],D={name:"About",data:function(){return{colors:["indigo","warning","pink darken-2","red lighten-1","deep-purple accent-4"],slides:["First","Second","Third","Fourth","Fifth"]}}},N=D,E=e("8212"),F=e("b0af"),J=e("99d9"),B=e("5e66"),G=e("3e35"),M=e("a523"),$=e("ce7e"),z=e("0e8f"),R=e("adda"),U=e("a722"),W=e("b687"),K=e("6b53"),Q=e("0fd9"),Y=e("8dd9"),H=Object(u["a"])(N,I,L,!1,null,null,null),X=H.exports;v()(H,{VAvatar:E["a"],VCard:F["a"],VCardText:J["b"],VCardTitle:J["c"],VCarousel:B["a"],VCarouselItem:G["a"],VContainer:M["a"],VDivider:$["a"],VFlex:z["a"],VImg:R["a"],VLayout:U["a"],VLazy:W["a"],VResponsive:K["a"],VRow:Q["a"],VSheet:Y["a"]});var Z=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"grid"},[e("v-container",{staticClass:"my-5"},[e("h1",[t._v("Grid")]),e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs12:"",md6:""}},[e("v-btn",{attrs:{block:""}},[t._v("1")])],1),e("v-flex",{attrs:{xs4:"",md2:""}},[e("v-btn",{attrs:{block:""}},[t._v("2")])],1),e("v-flex",{attrs:{xs4:"",md2:""}},[e("v-btn",{attrs:{block:""}},[t._v("3")])],1),e("v-flex",{attrs:{xs4:"",md2:""}},[e("v-btn",{attrs:{block:""}},[t._v("4")])],1)],1),e("br"),e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs6:"",md4:""}},[e("v-btn",{attrs:{block:""}},[t._v("1")])],1),e("v-flex",{attrs:{xs6:"",md4:""}},[e("v-btn",{attrs:{block:""}},[t._v("2")])],1),e("v-flex",{attrs:{xs12:"",md4:""}},[e("v-btn",{attrs:{block:""}},[t._v("3")])],1)],1),e("br"),e("v-layout",{attrs:{row:"",wrap:"","justify-space-around":""}},[e("v-flex",{attrs:{xs4:"",md6:""}},[e("v-btn",{attrs:{block:""}},[t._v("1")])],1),e("v-flex",{attrs:{xs4:"",md6:""}},[e("v-btn",{attrs:{block:""}},[t._v("2")])],1)],1),e("br"),e("v-divider",{staticClass:"pa-3"}),e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs6:""}},[e("h1",[t._v("DashBoard")])]),e("v-flex",{staticClass:"my-auto"},[e("div",{staticClass:"text-center"},[e("v-dialog",{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function(a){var s=a.on,i=a.attrs;return[e("v-btn",t._g(t._b({},"v-btn",i,!1),s),[t._v("プロジェクト追加")])]}}]),model:{value:t.formDrawer,callback:function(a){t.formDrawer=a},expression:"formDrawer"}},[e("v-card",[e("v-card-title",{attrs:{"primary-title":""}},[t._v("Add new project")]),e("v-card-text",[e("v-form",{staticClass:"px-3"},[e("v-text-field",{attrs:{label:"Project title","prepend-icon":"mdi-folder"},model:{value:t.title,callback:function(a){t.title=a},expression:"title"}}),e("v-select",{attrs:{items:t.teams,label:"Team","prepend-icon":"mdi-account-check"},model:{value:t.team,callback:function(a){t.team=a},expression:"team"}}),e("v-text-field",{attrs:{label:"place","prepend-icon":"mdi-map-marker"},model:{value:t.place,callback:function(a){t.place=a},expression:"place"}})],1)],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"primary",text:""},on:{click:t.submit}},[t._v("Add")])],1)],1)],1)],1)])],1),t._l(t.projects,(function(a,s){return e("v-card",{key:s,staticClass:"my-4 px-4 py-3"},[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{staticClass:"pl-4",attrs:{xs12:"",md5:""}},[e("div",{staticClass:"caption grey--text"},[t._v("Project title")]),e("div",[t._v(t._s(a.title))])]),e("v-flex",{staticClass:"pl-4",attrs:{xs3:"",md2:""}},[e("div",{staticClass:"caption grey--text"},[t._v("Team")]),e("div",[t._v(t._s(a.team))])]),e("v-flex",{attrs:{xs4:"",md2:""}},[e("div",{staticClass:"caption grey--text"},[t._v("Place")]),e("div",[t._v(t._s(a.place))])]),e("v-flex",{attrs:{xs3:"",md2:""}},[e("div",{staticClass:"caption grey--text"},[t._v("Date")]),e("div",[t._v(t._s(a.date))])]),e("v-flex",{attrs:{xs2:"",md1:""}},[e("div",[e("v-chip",{staticClass:"caption px-2 my-2",attrs:{color:t.statusColor(a.status),"text-color":"white"}},[t._v(t._s(a.status))])],1)])],1)],1)}))],2)],1)},tt=[],at={name:"Grid",data:function(){return{formDrawer:!1,title:"",team:[],place:"",teams:["A","B","C"],project_status:["done","WIP","new"],projects:[{title:"Project-1",team:"B",place:"Kanagawa",date:"2019",status:"done"},{title:"Project-2",team:"C",place:"Tokyo",date:"2020",status:"WIP"},{title:"Project-3",team:"A",place:"Osaka",date:"2020",status:"new"}]}},methods:{submit:function(){this.formDrawer=!this.formDrawer;var t=new Date,a=t.getFullYear(),e={title:this.title,team:this.team,place:this.place,date:a,status:"new"};this.projects.push(e),this.title="",this.place=""},statusColor:function(t){switch(t){case"done":return"rgb(48, 209, 88)";case"WIP":return"rgb(10, 132, 255)";case"new":return"rgb(255, 55, 95)";default:break}}}},et=at,st=e("cc20"),it=e("169a"),rt=e("4bd4"),nt=e("b974"),ot=e("8654"),lt=Object(u["a"])(et,Z,tt,!1,null,null,null),ct=lt.exports;v()(lt,{VBtn:p["a"],VCard:F["a"],VCardActions:J["a"],VCardText:J["b"],VCardTitle:J["c"],VChip:st["a"],VContainer:M["a"],VDialog:it["a"],VDivider:$["a"],VFlex:z["a"],VForm:rt["a"],VLayout:U["a"],VSelect:nt["a"],VSpacer:y["a"],VTextField:ot["a"]});var ut=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card"},[e("v-container",{staticClass:"my-5"},[e("h1",[t._v("Card")]),e("v-layout",{attrs:{row:"",wrap:""}},t._l(t.cards,(function(a,s){return e("v-flex",{key:s,attrs:{xs12:"",sm6:"",md4:"",lg3:""}},[e("v-hover",{scopedSlots:t._u([{key:"default",fn:function(s){var i=s.hover;return[e("v-card",{staticClass:"card ma-3 text-center",attrs:{elevation:i?6:2}},[e("v-responsive",{staticClass:"pt-4"},[e("v-avatar",{attrs:{size:"100"}},[e("v-img",{attrs:{src:a.avatar,alt:"avatar"}})],1)],1),e("v-card-text",[e("div",{staticClass:"subheading"},[t._v(t._s(a.name))]),e("div",{staticClass:"grey--text"},[t._v(t._s(a.from))])]),e("v-card-actions",[e("v-btn",{attrs:{text:"",color:"grey--text"}},[e("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-message-outline")]),e("span",[t._v("Message")])],1)],1)],1)]}}],null,!0)})],1)})),1)],1)],1)},mt=[],vt={name:"Card",data:function(){return{cards:[{name:"Yuki",from:"Japan",avatar:"https://picsum.photos/195"},{name:"Jake",from:"USA",avatar:"https://picsum.photos/196"},{name:"Chim",from:"Korea",avatar:"https://picsum.photos/197"},{name:"Jhon",from:"USA",avatar:"https://picsum.photos/198"},{name:"Yuki",from:"Japan",avatar:"https://picsum.photos/195"},{name:"Jake",from:"USA",avatar:"https://picsum.photos/196"},{name:"Chim",from:"Korea",avatar:"https://picsum.photos/197"},{name:"Jhon",from:"USA",avatar:"https://picsum.photos/198"},{name:"Whon",from:"Chine",avatar:"https://picsum.photos/199"},{name:"Taro",from:"Japan",avatar:"https://picsum.photos/200"}]}}},dt=vt,pt=e("ce87"),ft=Object(u["a"])(dt,ut,mt,!1,null,null,null),ht=ft.exports;v()(ft,{VAvatar:E["a"],VBtn:p["a"],VCard:F["a"],VCardActions:J["a"],VCardText:J["b"],VContainer:M["a"],VFlex:z["a"],VHover:pt["a"],VIcon:f["a"],VImg:R["a"],VLayout:U["a"],VResponsive:K["a"]});var xt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"sns"},[e("v-container",[e("h1",[t._v("SNS")]),e("v-layout",[e("v-row",{staticClass:"text-center"},t._l(t.links,(function(a,s){return e("v-col",{key:s,attrs:{href:a.url}},[e("a",{staticClass:"icon",attrs:{href:a.url,target:"__blank"}},[e("v-icon",{attrs:{"x-large":""}},[t._v(t._s(a.icon))])],1)])})),1)],1)],1)],1)},bt=[],_t={name:"SNS",data:function(){return{links:[{icon:"mdi-twitter",url:"https://twitter.com/ez_taiga"},{icon:"mdi-github",url:"https://github.com/taiga248"},{icon:"mdi-instagram",url:"https://www.instagram.com/tg_____n/"},{icon:"mdi-gmail",url:"https://google.com"},{icon:"mdi-facebook",url:"https://www.facebook.com/itotai358"}]}}},gt=_t,Ct=(e("7a59"),e("62ad")),yt=Object(u["a"])(gt,xt,bt,!1,null,"494bba68",null),wt=yt.exports;v()(yt,{VCol:Ct["a"],VContainer:M["a"],VIcon:f["a"],VLayout:U["a"],VRow:Q["a"]}),s["a"].use(P["a"]);var Vt=[{path:"/",name:"About",component:X},{path:"/Grid",name:"Grid",component:ct},{path:"/Card",name:"Card",component:ht},{path:"/SNS",name:"SNS",component:wt}],kt=new P["a"]({mode:"history",base:"/vuetify-demo/",routes:Vt}),St=kt,jt=e("f309");s["a"].use(jt["a"]);var At=new jt["a"]({icons:{iconfont:"mdiSvg"}});s["a"].config.productionTip=!1,new s["a"]({router:St,vuetify:At,render:function(t){return t(O)}}).$mount("#app")},"7a59":function(t,a,e){"use strict";var s=e("1f76"),i=e.n(s);i.a}});
//# sourceMappingURL=app.8dbaed6e.js.map
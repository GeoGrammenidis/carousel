(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[409],{8160:function(e,s,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/multipleLessIndicators",function(){return l(9992)}])},3214:function(e,s,l){"use strict";l.d(s,{Z:function(){return i}});var n=l(5893);function i(e){let{configurationState:s,handleChange:l,hasControls:i=!1,hasFade:a=!1}=e,{transitionOpacity:t,hasModal:r,bindKeyDownEvents:c,controllersOnHover:o,numberOfItems:m}=s;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("form",{children:[(0,n.jsxs)("div",{className:"form-floating my-3",children:[(0,n.jsx)("select",{className:"form-select",id:"items",onChange:e=>{l({key:"numberOfItems",numberOfItems:+e.target.value})},value:"".concat(m),children:Array(25).fill(0).map((e,s)=>(0,n.jsx)("option",{value:s+1,children:s+1},s+1))}),(0,n.jsx)("label",{htmlFor:"items",children:"Number of items"})]}),a&&(0,n.jsxs)("div",{className:"form-floating my-3",children:[(0,n.jsxs)("select",{className:"form-select",id:"transition-opacity",onChange:()=>l({key:"transitionOpacity"}),value:t?"true":"false",children:[(0,n.jsx)("option",{value:"true",children:"True"}),(0,n.jsx)("option",{value:"false",children:"False"})]}),(0,n.jsx)("label",{htmlFor:"transition-opacity",children:"Fade"})]}),(0,n.jsxs)("div",{className:"form-floating mb-3",children:[(0,n.jsxs)("select",{className:"form-select",id:"has-modal",onChange:()=>l({key:"hasModal"}),value:r?"true":"false",children:[(0,n.jsx)("option",{value:"true",children:"True"}),(0,n.jsx)("option",{value:"false",children:"False"})]}),(0,n.jsx)("label",{htmlFor:"has-modal",children:"Has a modal"})]}),(0,n.jsxs)("div",{className:"form-floating mb-3",children:[(0,n.jsxs)("select",{className:"form-select",id:"bind-keys",onChange:()=>l({key:"bindKeyDownEvents"}),value:c?"true":"false",children:[(0,n.jsx)("option",{value:"true selected",children:"True"}),(0,n.jsx)("option",{value:"false",children:"False"})]}),(0,n.jsx)("label",{htmlFor:"bind-keys",children:"Binds keys: 'left-arrow', 'right-arrow'"})]}),i&&(0,n.jsxs)("div",{className:"form-floating mb-3",children:[(0,n.jsxs)("select",{className:"form-select",id:"controls-on-hover",onChange:()=>l({key:"controllersOnHover"}),value:o?"true":"false",children:[(0,n.jsx)("option",{value:"true selected",children:"True"}),(0,n.jsx)("option",{value:"false",children:"False"})]}),(0,n.jsx)("label",{htmlFor:"controls-on-hover",children:"Controls on Hover"})]})]})})}l(7294)},7129:function(e,s,l){"use strict";l.d(s,{Z:function(){return i}});var n=l(7294);function i(e){let{transitionOpacity:s=!1,bindKeyDownEvents:l=!1,hasModal:i=!1,controllersOnHover:a=!1,numberOfItems:t=9,hasThumbnails:r}=e;var c=[{id:1,type:"image",src:"/imgs/img".concat(1,".jpeg"),thumbnail:"/imgs/img".concat(1,"_600x400.jpeg")},...Array(24).fill(0).map((e,s)=>({id:s+2,type:"image",src:"/imgs/img".concat(s+2,".jpeg"),thumbnail:"/imgs/img".concat(s+2,"_600x400.jpeg")}))],o=[{id:1,type:"image",src:"/imgs/img".concat(1,".jpeg")},...Array(25).fill(0).map((e,s)=>({id:s+2,type:"image",src:"/imgs/img".concat(s+2,".jpeg")}))];let[m,d]=n.useState({transitionOpacity:s,bindKeyDownEvents:l,hasModal:i,controllersOnHover:a,numberOfItems:t,hasThumbnails:r,items:r?[c[0],...c.slice(1,t)]:[o[0],...o.slice(1,t)]});var u=e=>{let{key:s,numberOfItems:l}=e;"numberOfItems"==s?d(e=>(l&&(e.items=r?[c[0],...c.slice(1,l)]:[o[0],...o.slice(1,l)],e.numberOfItems=l),{...e})):d(e=>(e[s]=!e[s],{...e}))};return{configurationState:m,handleChange:u}}},9992:function(e,s,l){"use strict";l.r(s),l.d(s,{default:function(){return r}});var n=l(5893),i=l(1735),a=l(3214),t=l(7129);function r(){let{configurationState:e,handleChange:s}=(0,t.Z)({hasThumbnails:!1});return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"container mt-2",children:(0,n.jsx)("div",{className:"row",children:(0,n.jsxs)("div",{className:"col-12 col-md-8 m-auto",children:[(0,n.jsx)("h1",{className:"h3 text-center",children:"Multiple Items with Less Indicators"}),(0,n.jsx)(i.Z,{items:e.items,itemsPerPage:2,itemsMarginRem:1,carouselIndicators:!0,lessCarouselIndicators:!0,bindKeyDownEvents:e.bindKeyDownEvents,hasModal:e.hasModal}),(0,n.jsx)(a.Z,{configurationState:e,handleChange:s})]})})})})}}},function(e){e.O(0,[675,735,774,888,179],function(){return e(e.s=8160)}),_N_E=e.O()}]);
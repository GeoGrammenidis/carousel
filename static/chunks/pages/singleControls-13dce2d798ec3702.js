(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[413],{9739:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/singleControls",function(){return n(8871)}])},3214:function(e,s,n){"use strict";n.d(s,{Z:function(){return t}});var l=n(5893);function t(e){let{configurationState:s,handleChange:n,hasControls:t=!1,hasFade:i=!1}=e,{transitionOpacity:a,hasModal:r,bindKeyDownEvents:o,controllersOnHover:c,numberOfItems:m}=s;return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("form",{children:[(0,l.jsxs)("div",{className:"form-floating my-3",children:[(0,l.jsx)("select",{className:"form-select",id:"items",onChange:e=>{n({key:"numberOfItems",numberOfItems:+e.target.value})},value:"".concat(m),children:Array(25).fill(0).map((e,s)=>(0,l.jsx)("option",{value:s+1,children:s+1},s+1))}),(0,l.jsx)("label",{htmlFor:"items",children:"Number of items"})]}),i&&(0,l.jsxs)("div",{className:"form-floating my-3",children:[(0,l.jsxs)("select",{className:"form-select",id:"transition-opacity",onChange:()=>n({key:"transitionOpacity"}),value:a?"true":"false",children:[(0,l.jsx)("option",{value:"true",children:"True"}),(0,l.jsx)("option",{value:"false",children:"False"})]}),(0,l.jsx)("label",{htmlFor:"transition-opacity",children:"Fade"})]}),(0,l.jsxs)("div",{className:"form-floating mb-3",children:[(0,l.jsxs)("select",{className:"form-select",id:"has-modal",onChange:()=>n({key:"hasModal"}),value:r?"true":"false",children:[(0,l.jsx)("option",{value:"true",children:"True"}),(0,l.jsx)("option",{value:"false",children:"False"})]}),(0,l.jsx)("label",{htmlFor:"has-modal",children:"Has a modal"})]}),(0,l.jsxs)("div",{className:"form-floating mb-3",children:[(0,l.jsxs)("select",{className:"form-select",id:"bind-keys",onChange:()=>n({key:"bindKeyDownEvents"}),value:o?"true":"false",children:[(0,l.jsx)("option",{value:"true selected",children:"True"}),(0,l.jsx)("option",{value:"false",children:"False"})]}),(0,l.jsx)("label",{htmlFor:"bind-keys",children:"Binds keys: 'left-arrow', 'right-arrow'"})]}),t&&(0,l.jsxs)("div",{className:"form-floating mb-3",children:[(0,l.jsxs)("select",{className:"form-select",id:"controls-on-hover",onChange:()=>n({key:"controllersOnHover"}),value:c?"true":"false",children:[(0,l.jsx)("option",{value:"true selected",children:"True"}),(0,l.jsx)("option",{value:"false",children:"False"})]}),(0,l.jsx)("label",{htmlFor:"controls-on-hover",children:"Controls on Hover"})]})]})})}n(7294)},7129:function(e,s,n){"use strict";n.d(s,{Z:function(){return t}});var l=n(7294);function t(e){let{transitionOpacity:s=!1,bindKeyDownEvents:n=!1,hasModal:t=!1,controllersOnHover:i=!1,numberOfItems:a=9,hasThumbnails:r}=e;var o=[{id:1,type:"image",src:"/imgs/img".concat(1,".jpeg"),thumbnail:"/imgs/img".concat(1,"_600x400.jpeg")},...Array(24).fill(0).map((e,s)=>({id:s+2,type:"image",src:"/imgs/img".concat(s+2,".jpeg"),thumbnail:"/imgs/img".concat(s+2,"_600x400.jpeg")}))],c=[{id:1,type:"image",src:"/imgs/img".concat(1,".jpeg")},...Array(25).fill(0).map((e,s)=>({id:s+2,type:"image",src:"/imgs/img".concat(s+2,".jpeg")}))];let[m,d]=l.useState({transitionOpacity:s,bindKeyDownEvents:n,hasModal:t,controllersOnHover:i,numberOfItems:a,hasThumbnails:r,items:r?[o[0],...o.slice(1,a)]:[c[0],...c.slice(1,a)]});var u=e=>{let{key:s,numberOfItems:n}=e;"numberOfItems"==s?d(e=>(n&&(e.items=r?[o[0],...o.slice(1,n)]:[c[0],...c.slice(1,n)],e.numberOfItems=n),{...e})):d(e=>(e[s]=!e[s],{...e}))};return{configurationState:m,handleChange:u}}},8871:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return r}});var l=n(5893),t=n(1735),i=n(3214),a=n(7129);function r(){let{configurationState:e,handleChange:s}=(0,a.Z)({hasThumbnails:!1});return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"container mt-2",children:(0,l.jsx)("div",{className:"row",children:(0,l.jsxs)("div",{className:"col-12 col-md-8 m-auto",children:[(0,l.jsx)("h1",{className:"h3 text-center",children:"Single Items with Controls"}),(0,l.jsx)(t.Z,{items:e.items,carouselControls:!0,transitionOpacity:e.transitionOpacity,bindKeyDownEvents:e.bindKeyDownEvents,hasModal:e.hasModal,controllersOnHover:e.controllersOnHover}),(0,l.jsx)(i.Z,{configurationState:e,handleChange:s,hasControls:!0,hasFade:!0})]})})})})}}},function(e){e.O(0,[675,735,774,888,179],function(){return e(e.s=9739)}),_N_E=e.O()}]);
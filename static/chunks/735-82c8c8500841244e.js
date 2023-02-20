"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[735],{1735:function(e,t,r){r.d(t,{Z:function(){return j}});var n,a,c,i=r(5893),s=r(7294);function l(e){let{event:t,listener:r,arrayOfElementRef:n=[],trigger:a=!1,deps:c=[],eventExists:i=!0,windowElement:l=!1}=e;s.useEffect(()=>{if(i){let e=[document];return n.length&&(e=n.map(e=>e.current)),l&&(e=[window]),e.forEach(e=>{null!=e&&(e.addEventListener(t,r),a&&e.dispatchEvent(new Event(t)))}),()=>{e.forEach(e=>{null!=e&&e.removeEventListener(t,r)})}}},[...c,i])}function o(e,t){if(t&&null!=t.current){let r=document.querySelector(":root");null==r||r.style.setProperty("--carousel-temp-indicators-starting",t.current.style.left?t.current.style.left:"0");let n=Math.max(t.current.offsetWidth-t.current.scrollWidth,Math.min(0,-(110*e)+40));null==r||r.style.setProperty("--carousel-temp-indicators-ending","".concat(n,"px")),t.current.style.animationName="indicatorsAnimationCarousel",t.current.style.left="".concat(n,"px")}}function u(e,t){switch(t.type){case"updateActive":return o(t.payload.active,t.payload.wrapper),{...e,previousActive:e.active,active:t.payload.active};case"increaseActive":return o(e.active+e.varyBy,t.payload.wrapper),{...e,previousActive:e.active,active:e.active+e.varyBy};case"decreaseActive":return o(e.active-e.varyBy,t.payload.wrapper),{...e,previousActive:e.active,active:e.active-e.varyBy};case"trackMovement":return{...e,startingPoint:t.payload,dragging:!0};case"stopTracking":var r,n;if((null===(r=t.payload)||void 0===r?void 0:r.direction)=="moveRight"&&e.dragging)return o(e.active+e.varyBy,t.payload.wrapper),{...e,startingPoint:0,dragging:!1,previousActive:e.active,active:e.active+e.varyBy};if((null===(n=t.payload)||void 0===n?void 0:n.direction)=="moveLeft"&&e.dragging)return o(e.active-e.varyBy,t.payload.wrapper),{...e,startingPoint:0,dragging:!1,previousActive:e.active,active:e.active-e.varyBy};return{...e,startingPoint:0,dragging:!1};default:throw Error("".concat(t.type," is not supported to dipatch."))}}(n=a||(a={})).updateActive="updateActive",n.increaseActive="increaseActive",n.decreaseActive="decreaseActive",n.trackMovement="trackMovement",n.stopTracking="stopTracking";var d=r(5675),m=r.n(d);function v(e){let{indicatorsCarousel:t,items:r,currentActive:n,indicatorMouseUpHandler:a,indicatorMouseDownHandler:c,itemsPerPage:l}=e;return(0,i.jsx)("div",{style:{whiteSpace:"nowrap",overflowX:"hidden"},children:(0,i.jsx)("div",{className:"custom-carousel-indicator-wrapper position-relative py-2",ref:t,children:null==r?void 0:r.map((e,r,o)=>(0,i.jsxs)(s.Fragment,{children:["image"==e.type&&(0,i.jsxs)("div",{className:"custom-carousel-indicator-image".concat(r!=o.length-1?" me-2":"").concat(r==n?" active":""),children:[(0,i.jsx)("div",{className:"wrapper",children:(0,i.jsx)(m(),{src:e.src,alt:"Villa Ocean",className:"main-carousel-component-item",width:600,height:400,priority:!0})}),(0,i.jsx)("a",{onClick:e=>a(e,r,t),onMouseDown:e=>c(e),role:"button",className:"custom-carousel-indicator-anchor","aria-label":o.length==r+1&&l-1!=0?"Show carousel item ".concat(r+1," and ").concat(l-1!=1?"the rest ".concat(l-1," item"):"item ".concat(r+2)):"Show carousel item ".concat(r+1)})]}),"jsx"==e.type&&(0,i.jsx)("div",{children:"TODO"}),"text"==e.type&&(0,i.jsx)("div",{children:"TODO"}),"raw-html"==e.type&&(0,i.jsx)("div",{children:"TODO"})]},e.id))})})}function p(e){let{lessCarouselIndicators:t,currentActive:r,itemsPerPage:n,items:a,indicatorMouseUpHandler:c}=e;return(0,i.jsx)("div",{className:"text-center p-4 d-flex justify-content-center",children:a.slice(n-1).map((e,a,l)=>(0,i.jsx)(s.Fragment,{children:(!t||a%n==0)&&(0,i.jsx)("a",{onClick:e=>c(e,a),className:"custom-carousel-indicator ".concat(a==r&&"active"),role:"button","aria-label":l.length==a+1&&n-1!=0?"Show carousel item ".concat(a+1," and ").concat(n-1!=1?"the rest ".concat(n-1," item"):"item ".concat(a+2)):"Show carousel item ".concat(a+1)})},e.id))})}function y(e){let{controllerClickHandler:t,indicatorsCarousel:r}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("a",{onClick:()=>t("left",r),className:"custom-carousel-control-left",role:"button","aria-label":"Show left carousel item"}),(0,i.jsx)("a",{onClick:()=>t("right",r),className:"custom-carousel-control-right",role:"button","aria-label":"Show right carousel item"})]})}function g(e){let{children:t,itemsPerPage:r,itemsMarginRem:n,itemIterator:a,previousActive:c=0,currentActive:l=0,transitionOpacity:o}=e,{itemRef:u}=function(e){let{itemsPerPage:t,itemsMarginRem:r,transitionOpacity:n,itemIterator:a,previousActive:c,currentActive:i}=e;var l=s.useRef(null);return s.useEffect(()=>{l.current&&(l.current.style.width="calc((100%/".concat(t,") - ((").concat(t," - 1) * ").concat(r,"rem/").concat(t,"))"),l.current.style.marginRight="".concat(r,"rem"),l.current.style.position="relative",l.current.style.animationName="",l.current.style.animationDuration="0.5s",l.current.style.zIndex="0")},[n]),s.useEffect(()=>{if(n&&a==c){if(null!=document){let e=document.querySelector(":root");null==e||e.style.setProperty("--carousel-temp-transform","translateX(calc((".concat(i," - ").concat(c,")*100% + ").concat(i-c," * ").concat(r,"rem))"))}l.current&&(l.current.style.width="calc((100%/".concat(t,") - ((").concat(t," - 1) * ").concat(r,"rem/").concat(t,"))"),l.current.style.marginRight="".concat(r,"rem"),l.current.style.position="relative",l.current.style.animationName="opacityAnimationCarousel",l.current.style.animationDuration="0.5s",l.current.style.zIndex="1")}else l.current&&(l.current.style.animationName="",l.current.style.zIndex="0")},[c,l]),{itemRef:l}}({itemsPerPage:r,itemsMarginRem:n,transitionOpacity:o,itemIterator:a,previousActive:c,currentActive:l});return(0,i.jsx)("div",{className:"custom-carousel-item".concat(l==a?" active":""),ref:u,children:t})}function f(e){let{items:t,itemsPerPage:r,itemsMarginRem:n,transitionOpacity:a,carouselControls:c,previousActive:s,currentActive:l,carouselInnerStyle:o,innerCarousel:u,controllerClickHandler:d,indicatorsCarousel:v}=e;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"custom-carousel".concat(1==r?" rounded-3":""),style:{overflow:"hidden"},children:[(0,i.jsx)("div",{className:"custom-carousel-inner",style:o,ref:u,children:t.map((e,t)=>(0,i.jsx)(g,{itemIterator:t,previousActive:s,currentActive:l,itemsPerPage:r,itemsMarginRem:n,transitionOpacity:a,children:"image"==e.type&&(0,i.jsx)("div",{className:"wrapper",children:(0,i.jsx)(m(),{src:e.src,alt:"TODO alt texts...",className:"main-carousel-component-item".concat(r>1?" rounded-3":""),width:1200,height:800})})},e.id))}),t.length-t.length%r>r&&1==r&&(0,i.jsx)("div",{className:"custom-carousel-counter",children:(0,i.jsxs)("span",{children:[l+1," / ",t.length-r+1]})}),c&&t.length-t.length%r>r&&(0,i.jsx)(y,{controllerClickHandler:d,indicatorsCarousel:v})]})})}function h(){return(h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var x=function(e){return s.createElement("svg",h({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},e),c||(c=s.createElement("path",{d:"M11.202 4.271V3.205H3.205v7.997h1.066V5.025l7.588 7.588.754-.754-7.588-7.588zM20.798 3.205v1.066h6.177l-7.588 7.588.754.754 7.588-7.588v6.177h1.066V3.205zM11.859 19.387l-7.588 7.588v-6.177H3.205v7.997h7.997v-1.066H5.025l7.588-7.588zM27.729 26.975l-7.588-7.588-.754.754 7.588 7.588h-6.177v1.066h7.997v-7.997h-1.066z"})))};function w(e){let{carouselInnerStyle:t,innerCarousel:r,items:n,previousActive:a,currentActive:c,itemsPerPage:o,itemsMarginRem:u,transitionOpacity:d,carouselControls:m,controllerClickHandler:y,carouselIndicators:g,carouselIndicatorsImages:h,lessCarouselIndicators:w,indicatorsCarousel:j,indicatorMouseUpHandler:A,indicatorMouseDownHandler:M,modalId:N}=e;var E=s.useRef(null);return l({event:"show.bs.modal",listener:()=>{null!=E.current&&Array.from(E.current.querySelectorAll(".custom-carousel-item")).forEach(e=>{""!=e.style.animationName&&(e.style.animationName="")})},arrayOfElementRef:[E]}),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("button",{type:"button",className:"btn btn-expand-svg","data-bs-toggle":"modal","data-bs-target":"#".concat(N),"aria-label":"Show right carousel item",children:(0,i.jsx)(x,{className:"expand-carousel-svg"})}),(0,i.jsx)("div",{className:"custom-carousel-modal modal fade",id:N,tabIndex:-1,"aria-hidden":"true",ref:E,children:(0,i.jsx)("div",{className:"modal-dialog modal-xl",children:(0,i.jsx)("div",{className:"modal-content",children:(0,i.jsxs)("div",{className:"modal-body",children:[(0,i.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"}),(0,i.jsx)(f,{carouselInnerStyle:t,innerCarousel:r,items:n,previousActive:a,currentActive:c,itemsPerPage:o,itemsMarginRem:u,transitionOpacity:d,carouselControls:m,controllerClickHandler:y,indicatorsCarousel:j}),g&&n.length-n.length%o>o&&(0,i.jsx)(i.Fragment,{children:h?(0,i.jsx)(p,{lessCarouselIndicators:w,currentActive:c,itemsPerPage:o,items:n,indicatorMouseUpHandler:A}):(0,i.jsx)(v,{items:n,indicatorsCarousel:j,currentActive:c,indicatorMouseUpHandler:A,indicatorMouseDownHandler:M,itemsPerPage:o})})]})})})})]})}function j(e){let{items:t,itemsPerPage:r=1,itemsMarginRem:n=0,carouselControls:c=!1,carouselIndicators:o=!1,carouselIndicatorsImages:d=!1,lessCarouselIndicators:m=!1,transitionOpacity:y=!1,hasModal:g=!1,bindKeyDownEvents:h=!1,controllersOnHover:x=!1}=e,{state:j,carousel:A,innerCarousel:M,indicatorsCarousel:N,modalInnerCarousel:E,modalIndicatorsCarousel:b,modalId:P,carouselInnerStyle:C,controllerClickHandler:R,indicatorMouseUpHandler:O,indicatorMouseDownHandler:k}=function(e){let{itemsPerPage:t,itemsMarginRem:r,transitionOpacity:n,items:c,carouselIndicatorsImages:i,bindKeyDownEvents:o,hasModal:d,lessCarouselIndicators:m}=e,[v,p]=s.useReducer(u,{startingPoint:0,dragging:!1,active:0,previousActive:-1,leftIndicators:0,varyBy:m?t:1}),y=s.useRef(null),g=s.useRef(null),f=s.useRef(null),h=s.useRef(null),x=s.useRef(null),w=s.useId().slice(1,-1);var j=0,A=!1,M=0,N=0,E={transform:"translateX(calc(".concat(-(100/t)*v.active,"% - ").concat(r/t*v.active,"rem))")};n||(E.transition="transform 0.75s"),s.useEffect(()=>{p({type:a.updateActive,payload:{active:0}})},[c]);var b=(e,r)=>{i&&r.current&&(r.current.style.animationName=""),"left"==e?v.active>0&&p({type:a.decreaseActive,payload:{wrapper:r}}):v.active+v.varyBy<c.length-c.length%t&&p({type:a.increaseActive,payload:{wrapper:r}})},P=(e,t,r)=>{v.active!=t&&(!i||j-e.clientX<8&&j-e.clientX>-8)&&p({type:a.updateActive,payload:{active:t,wrapper:r}})},C=e=>{j=e.clientX};return l({event:"mousedown",listener:e=>{e.preventDefault(),i&&f.current&&(f.current.style.animationName=""),p({type:a.trackMovement,payload:e.clientX})},arrayOfElementRef:[g],deps:[c]}),l({event:"mousedown",listener:e=>{e.preventDefault(),i&&x.current&&(x.current.style.animationName=""),p({type:a.trackMovement,payload:e.clientX})},arrayOfElementRef:[h],deps:[d,c]}),l({event:"mouseup",listener:e=>{e.preventDefault(),p({type:a.stopTracking})},arrayOfElementRef:[g,h],eventExists:v.dragging,deps:[d]}),l({event:"mousemove",listener:e=>{e.preventDefault(),e.clientX-v.startingPoint<-12&&v.dragging?v.active+v.varyBy<c.length-c.length%t&&p({type:a.stopTracking,payload:{direction:"moveRight",wrapper:f}}):e.clientX-v.startingPoint>12&&v.dragging&&v.active>0&&p({type:a.stopTracking,payload:{direction:"moveLeft",wrapper:f}})},arrayOfElementRef:[g],eventExists:v.dragging,deps:[c]}),l({event:"mousemove",listener:e=>{e.preventDefault(),e.clientX-v.startingPoint<-12&&v.dragging?v.active+v.varyBy<c.length-c.length%t&&p({type:a.stopTracking,payload:{direction:"moveRight",wrapper:x}}):e.clientX-v.startingPoint>12&&v.dragging&&v.active>0&&p({type:a.stopTracking,payload:{direction:"moveLeft",wrapper:x}})},arrayOfElementRef:[h],eventExists:v.dragging,deps:[d,c]}),i&&(l({event:"mousedown",listener:e=>{e.preventDefault(),x.current&&(x.current.style.animationName=""),M=e.clientX,A=!0},arrayOfElementRef:[x],deps:[c]}),l({event:"mousedown",listener:e=>{e.preventDefault(),f.current&&(f.current.style.animationName=""),M=e.clientX,A=!0},arrayOfElementRef:[f],deps:[c]}),l({event:"mouseup",listener:()=>{A=!1,f.current&&(f.current.style.left="".concat(Math.max(f.current.offsetWidth-f.current.scrollWidth,Math.min(0,parseInt(f.current.style.left?f.current.style.left:"0"))),"px")),d&&x.current&&(x.current.style.left="".concat(Math.max(x.current.offsetWidth-x.current.scrollWidth,Math.min(0,parseInt(x.current.style.left?x.current.style.left:"0"))),"px"))},deps:[d,c]}),l({event:"mousemove",listener:e=>{e.preventDefault(),A&&(N=M-e.clientX,M=e.clientX,f.current&&(f.current.style.left=Math.max(f.current.offsetWidth-f.current.scrollWidth-70,Math.min(70,parseInt(f.current.style.left?f.current.style.left:"0")-N))+"px"))},arrayOfElementRef:[f],deps:[c]}),l({event:"mousemove",listener:e=>{e.preventDefault(),A&&(N=M-e.clientX,M=e.clientX,x.current&&(x.current.style.left=Math.max(x.current.offsetWidth-x.current.scrollWidth-70,Math.min(70,parseInt(x.current.style.left?x.current.style.left:"0")-N))+"px"))},arrayOfElementRef:[x],deps:[d,c]}),l({event:"resize",listener:()=>{f.current&&(f.current.style.left=Math.max(f.current.offsetWidth-f.current.scrollWidth,Math.min(0,parseInt(f.current.style.left?f.current.style.left:"0")))+"px"),d&&x.current&&(x.current.style.left=Math.max(x.current.offsetWidth-x.current.scrollWidth,Math.min(0,parseInt(x.current.style.left?x.current.style.left:"0")))+"px")},windowElement:!0,deps:[d,c]})),l({event:"keydown",listener:e=>{(e.target==document.body||e.target==document.getElementById(w))&&o&&("ArrowLeft"==e.code?b("left",e.target==document.getElementById(w)?x:f):"ArrowRight"==e.code&&b("right",e.target==document.getElementById(w)?x:f))},deps:[b,d,o,c]}),{state:v,carousel:y,innerCarousel:g,indicatorsCarousel:f,modalInnerCarousel:h,modalIndicatorsCarousel:x,modalId:w,carouselInnerStyle:E,controllerClickHandler:b,indicatorMouseUpHandler:P,indicatorMouseDownHandler:C}}({itemsPerPage:r,itemsMarginRem:n,transitionOpacity:y,items:t,carouselIndicatorsImages:d,bindKeyDownEvents:h,hasModal:g,lessCarouselIndicators:m});return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"position-relative".concat(x?" custom-carousel-controls-on-hover":""),ref:A,children:[(0,i.jsx)(f,{carouselInnerStyle:C,innerCarousel:M,items:t,previousActive:j.previousActive,currentActive:j.active,itemsPerPage:r,itemsMarginRem:n,transitionOpacity:y,carouselControls:c,controllerClickHandler:R,indicatorsCarousel:N}),o&&t.length-t.length%r>r&&(0,i.jsx)(i.Fragment,{children:d?(0,i.jsx)(v,{items:t,indicatorsCarousel:N,currentActive:j.active,indicatorMouseUpHandler:O,indicatorMouseDownHandler:k,itemsPerPage:r}):(0,i.jsx)(p,{items:t,lessCarouselIndicators:m,currentActive:j.active,itemsPerPage:r,indicatorMouseUpHandler:O})}),g&&(0,i.jsx)(w,{itemsPerPage:r,itemsMarginRem:n,transitionOpacity:y,carouselControls:c,carouselIndicators:o,carouselIndicatorsImages:d,lessCarouselIndicators:m,carouselInnerStyle:C,innerCarousel:E,indicatorsCarousel:b,modalId:P,items:t,previousActive:j.previousActive,currentActive:j.active,controllerClickHandler:R,indicatorMouseUpHandler:O,indicatorMouseDownHandler:k})]})})}}}]);
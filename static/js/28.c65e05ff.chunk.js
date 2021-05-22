(this["webpackJsonpproduct-listing-frontend"]=this["webpackJsonpproduct-listing-frontend"]||[]).push([[28],{631:function(t,e,c){"use strict";function n(t,e){if(null==t)return{};var c,n,o=function(t,e){if(null==t)return{};var c,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)c=r[n],e.indexOf(c)>=0||(o[c]=t[c]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)c=r[n],e.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(t,c)&&(o[c]=t[c])}return o}c.d(e,"a",(function(){return n}))},632:function(t,e,c){"use strict";c.d(e,"a",(function(){return u}));var n=c(8),o=c(631),r=c(1),s=c.n(r),a=c(629),i=c(21),l=function(t){var e=t.name,c=t.text,r=Object(o.a)(t,["name","text"]),s=e?"https://coreui.io/react/docs/components/".concat(e):t.href;return Object(i.jsx)("div",{className:"card-header-actions",children:Object(i.jsx)(a.fb,Object(n.a)(Object(n.a)({},r),{},{href:s,rel:"noreferrer noopener",target:"_blank",className:"card-header-action",children:Object(i.jsx)("small",{className:"text-muted",children:c||"docs"})}))})},u=s.a.memo(l)},633:function(t,e,c){"use strict";c.d(e,"a",(function(){return o}));var n=c(165);function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var c=[],n=!0,o=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(n=(s=a.next()).done)&&(c.push(s.value),!e||c.length!==e);n=!0);}catch(i){o=!0,r=i}finally{try{n||null==a.return||a.return()}finally{if(o)throw r}}return c}}(t,e)||Object(n.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},692:function(t,e,c){"use strict";c.r(e);var n=c(115),o=c(633),r=c(1),s=c(629),a=c(632),i=c(21);e.default=function(){var t=Object(r.useState)([{position:"static"},{position:"static"},{position:"top-right",autohide:3e3}]),e=Object(o.a)(t,2),c=e[0],l=e[1],u=Object(r.useState)("top-right"),b=Object(o.a)(u,2),j=b[0],h=b[1],d=Object(r.useState)(!0),m=Object(o.a)(d,2),O=m[0],f=m[1],x=Object(r.useState)(5e3),p=Object(o.a)(x,2),y=p[0],g=p[1],v=Object(r.useState)(!0),k=Object(o.a)(v,2),w=k[0],N=k[1],S=Object(r.useState)(!0),C=Object(o.a)(S,2),M=C[0],T=C[1],A=c.reduce((function(t,e){return t[e.position]=t[e.position]||[],t[e.position].push(e),t}),{});return Object(i.jsxs)(s.j,{children:[Object(i.jsxs)(s.n,{children:["Toasts.",Object(i.jsx)(a.a,{name:"-Toast"})]}),Object(i.jsx)(s.k,{children:Object(i.jsx)(s.y,{children:Object(i.jsxs)(s.yb,{children:[Object(i.jsx)(s.w,{sm:"12",lg:"6",children:Object(i.jsxs)(s.L,{children:[Object(i.jsx)("h5",{children:"Add toast with following props:"}),Object(i.jsxs)(s.M,{variant:"custom-checkbox",className:"my-2 mt-4",children:[Object(i.jsx)(s.V,{id:"autohide",checked:O,onChange:function(t){f(t.target.checked)},custom:!0}),Object(i.jsx)(s.eb,{variant:"custom-checkbox",htmlFor:"autohide",children:"Autohide of the toast"})]}),O&&Object(i.jsxs)(s.M,{className:"my-2",children:[Object(i.jsx)(s.eb,{htmlFor:"ccyear",children:"Time to autohide"}),Object(i.jsx)(s.U,{type:"number",value:y,onChange:function(t){g(Number(t.target.value))}})]}),Object(i.jsxs)(s.M,{className:"my-2",children:[Object(i.jsx)(s.eb,{htmlFor:"ccyear",children:"Position"}),Object(i.jsx)("select",{className:"form-control",value:j,onChange:function(t){h(t.target.value)},children:["static","top-left","top-center","top-right","top-full","bottom-left","bottom-center","bottom-right","bottom-full"].map((function(t,e){return Object(i.jsx)("option",{children:t},e)}))})]}),Object(i.jsxs)(s.M,{variant:"custom-checkbox",className:"my-2",children:[Object(i.jsx)(s.V,{id:"fade",checked:M,onChange:function(t){T(t.target.checked)},custom:!0}),Object(i.jsx)(s.eb,{variant:"custom-checkbox",htmlFor:"fade",children:"fade"})]}),Object(i.jsxs)(s.M,{variant:"custom-checkbox",className:"my-2",children:[Object(i.jsx)(s.V,{id:"close",custom:!0,checked:w,onChange:function(t){N(t.target.checked)}}),Object(i.jsx)(s.eb,{variant:"custom-checkbox",htmlFor:"close",children:"closeButton"})]}),Object(i.jsx)(s.f,{className:"mr-1 w-25",color:"success",onClick:function(){l([].concat(Object(n.a)(c),[{position:j,autohide:O&&y,closeButton:w,fade:M}]))},children:"Add toast"})]})}),Object(i.jsx)(s.w,{sm:"12",lg:"6",children:Object.keys(A).map((function(t){return Object(i.jsx)(s.Pb,{position:t,children:A[t].map((function(e,c){return Object(i.jsxs)(s.Mb,{show:!0,autohide:e.autohide,fade:e.fade,children:[Object(i.jsx)(s.Ob,{closeButton:e.closeButton,children:"Toast title"}),Object(i.jsx)(s.Nb,{children:"This is a toast in ".concat(t," positioned toaster number ").concat(c+1,".")})]},"toast"+c)}))},"toaster"+t)}))})]})})})]})}}}]);
//# sourceMappingURL=28.c65e05ff.chunk.js.map
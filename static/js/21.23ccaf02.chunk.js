(this["webpackJsonpproduct-listing-frontend"]=this["webpackJsonpproduct-listing-frontend"]||[]).push([[21],{761:function(e,t,n){"use strict";n.r(t);var c=n(85),s=n(197),o=n(1),a=n(31),r=n(114),i=n(113),l=n(722),d=n(701),j=n(77),u=n(8),b=["isModal"],h=function(e){var t=e.isModal,n=Object(s.a)(e,b),d=Object(o.useState)(!1),j=Object(c.a)(d,2),h=j[0],O=j[1],f=Object(o.useState)(!1),g=Object(c.a)(f,2),k=g[0],x=g[1];Object(o.useEffect)((function(){n.setLoader(!0),Object(l.a)().then((function(e){var t=e.json;if(e.response.ok){var c=!t.can_user_generate;n.setSKUAutoGeneration(c),x(c)}n.setLoader(!1)}))}),[]);return Object(u.jsx)("div",{children:Object(u.jsx)(a.e,{className:"addpro-custom-card sm-pd",children:Object(u.jsxs)(a.f,{children:[t?null:Object(u.jsx)("h4",{className:"font-weight-bold mb-4",children:"SKU"}),Object(u.jsxs)(a.u,{variant:"checkbox",className:"checkbox",children:[Object(u.jsx)(a.P,{children:Object(u.jsxs)(a.j,{xs:"4",children:[Object(u.jsx)(a.D,{checked:k,id:"autoskugeneration",onChange:function(e){x(e.target.checked)}}),Object(u.jsx)(a.I,{variant:"checkbox",className:"form-check-label",htmlFor:"autoskugeneration",children:"Auto SKU Generation"})]})}),Object(u.jsx)("p",{className:"small",children:"Auto generation wont allow user to input SKU in products."})]}),Object(u.jsx)(a.P,{className:"mt-4",children:Object(u.jsx)(a.j,{sm:"2",md:"2",children:Object(u.jsx)(a.d,{block:!0,color:"dark",onClick:function(){O(!0);var e=(new AbortController).signal,t={can_user_generate:!k};Object(l.b)(e,t).then((function(e){var t=e.json,c=e.response;c.ok?(document.dispatchEvent(new KeyboardEvent("keydown",{keyCode:27})),i.a.fire({icon:"success",title:Object(r.a)("success","SKU Settings saved.")}),console.log(t,c),O(!1),n.setSKUAutoGeneration(!t.can_user_generate)):(i.a.fire({icon:"warning",title:Object(r.a)("warning","Error saving SKU Setting")}),console.log(t,c),O(!1))}))},children:h?Object(u.jsx)(a.X,{color:"secondary",size:"sm"}):"Save"})})})]})})})};h.defaultProps={isModal:!1};t.default=Object(j.b)((function(e){return{sku:e.settings.sku}}),{setSKUAutoGeneration:d.b,setLoader:d.a})(h)}}]);
//# sourceMappingURL=21.23ccaf02.chunk.js.map
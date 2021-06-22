(this["webpackJsonpproduct-listing-frontend"]=this["webpackJsonpproduct-listing-frontend"]||[]).push([[20],{714:function(e,t,n){"use strict";n(1);var c=n(31),r=n(8);t.a=function(e){var t=e.name,n=e.color,a=e.labelOn,s=e.labelOff,i=e.onChange,o=e.value,d=e.defaultValue,l=e.checked;return console.log(" value [switch] ",o),Object(r.jsxs)("div",{className:"d-flex align-items-center",children:[Object(r.jsx)("span",{children:Object(r.jsx)("b",{children:s})}),"\xa0 \xa0",Object(r.jsx)(c.Y,{onChange:i,defaultChecked:d,checked:l,value:o,color:n,name:t,shape:"pill",size:"lg"}),"\xa0 \xa0",Object(r.jsx)("span",{children:Object(r.jsx)("b",{children:a})})]})}},723:function(e,t,n){"use strict";var c=Number.isNaN||function(e){return"number"===typeof e&&e!==e};function r(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(r=e[n],a=t[n],!(r===a||c(r)&&c(a)))return!1;var r,a;return!0}t.a=function(e,t){var n;void 0===t&&(t=r);var c,a=[],s=!1;return function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];return s&&n===this&&t(r,a)||(c=e.apply(this,r),s=!0,n=this,a=r),c}}},765:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(85),a=n(197),s=n(31),i=n(114),o=n(113),d=n(724),l=n(701),u=n(77),j=n(8),b=["isModal"],h=function(e){e.isModal;var t=Object(a.a)(e,b),n=Object(c.useState)(!1),l=Object(r.a)(n,2),u=l[0],h=l[1],f=Object(c.useState)(!1),O=Object(r.a)(f,2),g=O[0],x=O[1];Object(c.useEffect)((function(){t.setLoader(!0),Object(d.a)().then((function(e){var n=e.json;if(e.response.ok){var c=!n.can_user_generate;t.setSKUAutoGeneration(c),x(c)}t.setLoader(!1)}))}),[]);return Object(j.jsx)("div",{children:Object(j.jsx)(s.e,{className:"addpro-custom-card sm-pd",children:Object(j.jsxs)(s.f,{children:[Object(j.jsxs)(s.u,{variant:"checkbox",className:"checkbox",children:[Object(j.jsx)(s.P,{children:Object(j.jsxs)(s.j,{xs:"4",children:[Object(j.jsx)(s.D,{checked:g,id:"autoskugeneration",onChange:function(e){x(e.target.checked)}}),Object(j.jsx)(s.I,{variant:"checkbox",className:"form-check-label",htmlFor:"autoskugeneration",children:"Auto SKU Generation"})]})}),Object(j.jsx)("p",{className:"small",children:"Auto generation wont allow user to input SKU in products."})]}),Object(j.jsx)(s.P,{className:"mt-4",children:Object(j.jsx)(s.j,{sm:"2",md:"2",children:Object(j.jsx)(s.d,{block:!0,color:"dark",onClick:function(){h(!0);var e=(new AbortController).signal,n={can_user_generate:!g};Object(d.b)(e,n).then((function(e){var n=e.json,c=e.response;c.ok?(document.dispatchEvent(new KeyboardEvent("keydown",{keyCode:27})),o.a.fire({icon:"success",title:Object(i.a)("success","SKU Settings saved.")}),console.log(n,c),h(!1),t.setSKUAutoGeneration(!n.can_user_generate)):(o.a.fire({icon:"warning",title:Object(i.a)("warning","Error saving SKU Setting")}),console.log(n,c),h(!1))}))},children:u?Object(j.jsx)(s.X,{color:"secondary",size:"sm"}):"Save"})})})]})})})};h.defaultProps={isModal:!1};var f=Object(u.b)((function(e){return{sku:e.settings.sku}}),{setSKUAutoGeneration:l.b,setLoader:l.a})(h),O=n(6),g=n(741),x=n(714),p=[{id:"1",content:"Brand",isInvolved:!0},{id:"2",content:"Manufacturer",isInvolved:!0}],v=function(e){var t=Object(c.useState)(p),n=Object(r.a)(t,2),a=n[0],i=n[1];return Object(j.jsx)(s.e,{className:"addpro-custom-card sm-pd",children:Object(j.jsx)(s.f,{children:Object(j.jsx)(g.a,{onDragEnd:function(e){if(e.destination){var t=function(e,t,n){var c=Array.from(e),a=c.splice(t,1),s=Object(r.a)(a,1)[0];return c.splice(n,0,s),c}(a,e.source.index,e.destination.index);i(t)}},children:Object(j.jsx)(g.c,{droppableId:"droppable",children:function(e,t){return Object(j.jsxs)("div",Object(O.a)(Object(O.a)({},e.droppableProps),{},{ref:e.innerRef,style:(t.isDraggingOver,{background:"white",padding:8,width:250}),children:[a.map((function(e,t){return Object(j.jsx)(g.b,{draggableId:e.id,index:t,children:function(t,n){return Object(j.jsxs)("div",Object(O.a)(Object(O.a)(Object(O.a)({ref:t.innerRef},t.draggableProps),t.dragHandleProps),{},{style:(c=n.isDragging,r=t.draggableProps.style,Object(O.a)(Object(O.a)({userSelect:"none",padding:16,margin:"0 0 ".concat(8,"px 0"),background:c?"lightgreen":"lightgrey"},r),{},{borderRadius:"10px"})),className:"d-flex justify-content-between align-items-start",children:[Object(j.jsx)("p",{children:e.content}),Object(j.jsx)(x.a,{color:"lightgreen",onChange:function(t){return n=e.id,void a.findIndex((function(e){return e.id===n}));var n}})]}));var c,r}},e.id)})),e.placeholder]}))}})})})})};t.default=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{className:"outside-card-title mb-4",children:"SKU"}),Object(j.jsx)(f,{}),Object(j.jsx)("h4",{className:"mt-5 mb-3 font-weight-bold",children:"SKU Formulation"}),Object(j.jsx)(v,{})]})}}}]);
//# sourceMappingURL=20.f8db8e66.chunk.js.map
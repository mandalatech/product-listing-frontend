(this["webpackJsonpproduct-listing-frontend"]=this["webpackJsonpproduct-listing-frontend"]||[]).push([[11],{661:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}n.d(t,"a",(function(){return r}))},663:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(170);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,c=!1,s=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(l){c=!0,s=l}finally{try{r||null==a.return||a.return()}finally{if(c)throw s}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},665:function(e,t,n){"use strict";n(1);var r=n(659),c=n(666),s=n(22),i=function(e){var t=e.name,n=e.label,i=e.placeholder,a=e.require,l=e.labelTag,o=e.type,u=e.onChange,d=e.value,j=e.error;return Object(s.jsxs)(r.M,{className:"mb-4",children:[Object(s.jsxs)(r.eb,{htmlFor:t,children:[n," ",l?Object(s.jsx)("small",{children:Object(s.jsx)("code",{children:l})}):null]}),Object(s.jsx)(r.U,{type:o,id:t,name:t,onChange:u,value:d,placeholder:i,required:!!a}),Object(s.jsx)(c.a,{children:j})]})};i.defaultProps={name:"Name",label:"Label",placeholder:"Placeholder here",require:!1,labelTag:!1},t.a=i},666:function(e,t,n){"use strict";n(1);var r=n(659),c=n(667),s=n(22);t.a=function(e){return Object(c.a)(e.children)?Object(s.jsx)("span",{}):Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(r.L,{children:Object(s.jsx)(r.N,{color:"red",style:{color:"red"},children:e.children})})})}},667:function(e,t,n){"use strict";t.a=function(e){return void 0===e||null===e||"object"===typeof e&&0===Object.keys(e).length||"string"===typeof e&&0===e.trim().length}},671:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(119),c=n.n(r),s=n(172),i=n(175),a=function(){var e=Object(s.a)(c.a.mark((function e(t,n,r,a,l){var o,u,d;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!window.navigator.onLine){e.next=12;break}return o=function(){var e=Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(i.a).concat(t),{method:n,signal:r,headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.next=5,o();case 5:return u=e.sent,e.next=8,u.json();case 8:return d=e.sent,e.abrupt("return",{json:d,response:u});case 12:console.log("the app now is offline okay!"),alert("You are offline!!");case 14:e.next=19;break;case 16:throw e.prev=16,e.t0=e.catch(0),e.t0;case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t,n,r,c,s){return e.apply(this,arguments)}}()},676:function(e,t,n){"use strict";t.a=n.p+"static/media/view.ba2eff2b.svg"},677:function(e,t,n){"use strict";t.a=n.p+"static/media/edit.a2e87322.svg"},678:function(e,t,n){"use strict";t.a=n.p+"static/media/trash.f88bd880.svg"},690:function(e,t,n){"use strict";var r=n(661),c=n(1),s=n(659),i=n(665),a=n(663),l=n(664),o=n(803),u=n(90),d=n(91),j=n(22),b=function(e){var t=e.groupRecordId,n=e.onDelete,r=e.getRecord,o=Object(c.useState)(""),u=Object(a.a)(o,2),d=u[0],b=u[1],f=Object(c.useState)([]),h=Object(a.a)(f,2),p=h[0],O=h[1],m={id:t,name:d,possibleValues:p};return Object(c.useEffect)((function(){r(m)}),[d,p]),Object(j.jsxs)(s.yb,{className:"d-flex align-items-center",children:[Object(j.jsx)(s.w,{md:"5",children:Object(j.jsx)(i.a,{label:"Attribute",placeholder:"Eg. Hard-disk",onChange:function(e){b(e.target.value)}})}),Object(j.jsx)(s.w,{md:"6",children:Object(j.jsx)(i.a,{label:"Possible values",placeholder:"Eg. SSD, HDD",onChange:function(e){var t=e.target.value.split(",");O(t.filter((function(e){return""!==e})))}})}),Object(j.jsx)(s.w,{md:"1",children:Object(j.jsx)(s.f,{type:"reset",onClick:function(e){n&&"function"==typeof n&&n(t)},children:Object(j.jsx)(l.a,{className:"text-danger",name:"cil-x-circle"})})})]})},f=Object(u.b)((function(e){return{attributes:e.group.attributes}}),{setProductGroupAttributes:d.h})((function(e){var t=Object(c.useState)([1564135]),n=Object(a.a)(t,2),r=n[0],i=n[1],u=Object(c.useState)(""),d=Object(a.a)(u,2),f=d[0],h=d[1],p=function(e){1!==r.length?i((function(t){return t.filter((function(t){return t!==e}))})):h("At least one attribute field is required.")},O=function(t){var n=e.attributes.filter((function(e){return e.id!==t.id}));e.setProductGroupAttributes(n.concat(t))};return Object(c.useEffect)((function(){e.setProductGroupAttributes(e.attributes.filter((function(e){return r.includes(e.id)})))}),[r]),Object(j.jsxs)("div",{children:[r.map((function(e){return Object(j.jsx)(b,{groupRecordId:e,onDelete:p,getRecord:O})})),Object(j.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(j.jsx)("div",{children:Object(j.jsxs)(s.f,{className:"mb-0",style:{display:"flex",alignItems:"center"},onClick:function(e){h(""),i((function(e){return e.concat(Math.floor(1e8*Math.random()+1))}))},children:[Object(j.jsx)("div",{style:{marginRight:14},children:Object(j.jsx)(l.b,{content:o.a.cilPlus,size:"lg"})}),"Add Attribute"]})}),Object(j.jsx)("div",{children:Object(j.jsxs)("div",{style:{marginRight:"5rem"},children:[Object(j.jsx)(l.b,{name:"cilSettings"}),"\xa0",Object(j.jsx)("span",{children:"Add multiple values seperated by comma \u2018,\u2019"})]})})]}),Object(j.jsx)("div",{className:"my-3 text-danger small",children:f})]})}));t.a=Object(u.b)(null,{setProductGroupName:d.i})((function(e){var t=e.isModal,n=Object(r.a)(e,["isModal"]);return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(s.j,{className:t?"px-3":"addpro-custom-card sm-pd mt-4",children:[t?null:Object(j.jsx)("h4",{className:"outside-card-title mb-4 p-2",children:"Add Group"}),Object(j.jsxs)(s.k,{children:[Object(j.jsx)(i.a,{name:"name",label:"Group name",placeholder:"Enter group name here",onChange:function(e){n.setProductGroupName(e.target.value)}}),Object(j.jsx)(f,{}),Object(j.jsxs)(s.yb,{children:[Object(j.jsx)(s.w,{sm:"2",md:"2",children:Object(j.jsx)(s.f,{block:!0,variant:"outline",color:"dark",onClick:function(){document.dispatchEvent(new KeyboardEvent("keydown",{keyCode:27}))},children:"Cancel"})}),Object(j.jsx)(s.w,{sm:"2",md:"2",children:Object(j.jsx)(s.f,{block:!0,color:"dark",children:"Add"})})]})]})]})})}))},790:function(e,t,n){"use strict";n.r(t);n(1);var r=n(690),c=n(659),s=n(90),i=n(676),a=n(677),l=n(678),o=n(119),u=n.n(o),d=n(172),j=n(92),b=n(671),f=function(){var e=Object(d.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(b.a)(j.c+"".concat(n,"/"),"DELETE",t);case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),e.t0;case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,n){return e.apply(this,arguments)}}(),h=n(22),p=Object(s.b)((function(e){return{groups:e.root.productGroups}}),null)((function(e){var t=function(e){return e.fields.length>0?Object(h.jsx)("span",{children:e.fields.map((function(e){return e.name})).join(", ")}):Object(h.jsx)("span",{className:"text-warning",children:"No attributes set yet. "})},n=function(e){return e.fields.length>0?e.fields.map((function(e){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{className:"font-weight-bold",children:e.name}),"enum"===e.datatype?e.enum_group.values&&Object(h.jsx)("td",{children:e.enum_group.values.map((function(e){return e.value})).join(", ")}):Object(h.jsx)("td",{children:"Takes input from user."})]})})):Object(h.jsx)("span",{className:"text-warning",children:"Please set attributes first."})},r=function(e){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(c.f,{children:Object(h.jsx)("img",{src:i.a,alt:"View"})}),Object(h.jsx)(c.f,{children:Object(h.jsx)("img",{src:a.a,alt:"Edit"})}),Object(h.jsx)(c.f,{onClick:function(){!function(e){console.log("[DELETE] group: ",e);var t=(new AbortController).signal,n=f(t,e.id);console.log("[DELETE] response: ",n)}(e)},children:Object(h.jsx)("img",{src:l.a,alt:"Delete"})})]})};return Object(h.jsx)(c.j,{children:Object(h.jsx)(c.k,{style:{background:"white",borderRadius:"10px",padding:"2rem"},children:Object(h.jsx)(c.A,{items:e.groups,fields:[{key:"id",_style:{width:"3%"},filter:!1},{key:"name",_style:{width:"20%"}},{key:"attributes",label:"Attributes",_style:{width:"30%"}},{key:"possibleValues",label:"Possible values",_style:{width:"30%"}},{key:"action",_style:{width:"20%"},sorter:!1,filter:!1}],tableFilter:!0,itemsPerPageSelect:!0,itemsPerPage:5,hover:!0,sorter:!0,pagination:!0,scopedSlots:{attributes:function(e){return Object(h.jsx)("td",{children:t(e)})},possibleValues:function(e){return Object(h.jsx)("table",{style:{width:"100%"},className:"table",children:n(e)})},action:function(e){return Object(h.jsx)("td",{children:r(e)})}}})})})})),O=n(664),m=function(){return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"d-flex justify-content-between align-items-start",children:[Object(h.jsx)("h4",{className:"outside-card-title mb-4 mr-auto",children:"Groups"}),Object(h.jsx)(c.w,{md:"4",children:Object(h.jsxs)(c.X,{children:[Object(h.jsx)(c.Z,{children:Object(h.jsx)(c.ab,{style:{backgroundColor:"#ffffff"},children:Object(h.jsx)(O.a,{name:"cil-magnifying-glass"})})}),Object(h.jsx)(c.U,{placeholder:"Search Groups"})]})}),Object(h.jsx)(c.w,{md:"2",children:Object(h.jsx)(c.f,{block:!0,color:"warning",children:Object(h.jsx)("span",{style:{color:"#fff",fontWeight:600},children:"+ \xa0Add Group"})})})]})})};t.default=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(m,{}),Object(h.jsx)(r.a,{isModal:!1}),Object(h.jsx)("h4",{className:"mt-5 mb-3 font-weight-bold",children:"All Group"}),Object(h.jsx)(p,{})]})}}}]);
//# sourceMappingURL=11.459c2a0d.chunk.js.map
(this["webpackJsonpproduct-listing-frontend"]=this["webpackJsonpproduct-listing-frontend"]||[]).push([[12],{663:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(172);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],c=!0,r=!1,s=void 0;try{for(var i,l=e[Symbol.iterator]();!(c=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);c=!0);}catch(a){r=!0,s=a}finally{try{c||null==l.return||l.return()}finally{if(r)throw s}}return n}}(e,t)||Object(c.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},665:function(e,t,n){"use strict";n(1);var c=n(659),r=n(666),s=n(21),i=function(e){var t=e.name,n=e.label,i=e.placeholder,l=e.require,a=e.labelTag,d=e.type,o=e.onChange,j=e.value,b=e.error;return Object(s.jsxs)(c.M,{className:"mb-4",children:[Object(s.jsxs)(c.eb,{htmlFor:t,children:[n," ",a?Object(s.jsx)("small",{children:Object(s.jsx)("code",{children:a})}):null]}),Object(s.jsx)(c.U,{type:d,id:t,name:t,onChange:o,value:j,placeholder:i,required:!!l}),Object(s.jsx)(r.a,{children:b})]})};i.defaultProps={name:"Name",label:"Label",placeholder:"Placeholder here",require:!1,labelTag:!1},t.a=i},666:function(e,t,n){"use strict";n(1);var c=n(659),r=n(667),s=n(21);t.a=function(e){return Object(r.a)(e.children)?Object(s.jsx)("span",{}):Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(c.L,{children:Object(s.jsx)(c.N,{color:"red",style:{color:"red"},children:e.children})})})}},667:function(e,t,n){"use strict";t.a=function(e){return void 0===e||null===e||"object"===typeof e&&0===Object.keys(e).length||"string"===typeof e&&0===e.trim().length}},676:function(e,t,n){"use strict";t.a=n.p+"static/media/view.ba2eff2b.svg"},677:function(e,t,n){"use strict";t.a=n.p+"static/media/edit.a2e87322.svg"},678:function(e,t,n){"use strict";t.a=n.p+"static/media/trash.f88bd880.svg"},689:function(e,t,n){"use strict";var c=n(1),r=n(659),s=n(665),i=n(663),l=n(664),a=n(802),d=n(21),o=function(e){var t=e.groupRecordId,n=e.onDelete;return Object(d.jsxs)(r.yb,{className:"d-flex align-items-center",children:[Object(d.jsx)(r.w,{md:"5",children:Object(d.jsx)(s.a,{label:"Attribute",placeholder:"Eg. Hard-disk"})}),Object(d.jsx)(r.w,{md:"6",children:Object(d.jsx)(s.a,{label:"Possible values",placeholder:"Eg. SSD, HDD"})}),Object(d.jsx)(r.w,{md:"1",children:Object(d.jsx)(r.f,{type:"reset",onClick:function(e){n&&"function"==typeof n&&n(t)},children:Object(d.jsx)(l.a,{className:"text-danger",name:"cil-x-circle"})})})]})},j=function(e){var t=Object(c.useState)([1564135]),n=Object(i.a)(t,2),s=n[0],j=n[1],b=Object(c.useState)(""),u=Object(i.a)(b,2),h=u[0],f=u[1],m=function(e){1!==s.length?j((function(t){return t.filter((function(t){return t!==e}))})):f("At least one attribute field is required.")};return Object(d.jsxs)("div",{children:[s.map((function(e){return Object(d.jsx)(o,{groupRecordId:e,onDelete:m})})),Object(d.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(d.jsx)("div",{children:Object(d.jsxs)(r.f,{className:"mb-0",style:{display:"flex",alignItems:"center"},onClick:function(e){f(""),j((function(e){return e.concat(Math.floor(1e8*Math.random()+1))}))},children:[Object(d.jsx)("div",{style:{marginRight:14},children:Object(d.jsx)(l.b,{content:a.a.cilPlus,size:"lg"})}),"Add Attribute"]})}),Object(d.jsx)("div",{children:Object(d.jsxs)("div",{style:{marginRight:"5rem"},children:[Object(d.jsx)(l.b,{name:"cilSettings"}),"\xa0",Object(d.jsx)("span",{children:"Add multiple values seperated by comma \u2018,\u2019"})]})})]}),Object(d.jsx)("div",{className:"my-3 text-danger small",children:h})]})};t.a=function(e){var t=e.isModal;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(r.j,{className:t?"px-3":"addpro-custom-card sm-pd mt-4",children:[t?null:Object(d.jsx)("h4",{className:"outside-card-title mb-4 p-2",children:"Add Group"}),Object(d.jsxs)(r.k,{children:[Object(d.jsx)(s.a,{label:"Group name",placeholder:"Enter group name here"}),Object(d.jsx)(j,{}),Object(d.jsxs)(r.yb,{children:[Object(d.jsx)(r.w,{sm:"2",md:"2",children:Object(d.jsx)(r.f,{block:!0,variant:"outline",color:"dark",onClick:function(){document.dispatchEvent(new KeyboardEvent("keydown",{keyCode:27}))},children:"Cancel"})}),Object(d.jsx)(r.w,{sm:"2",md:"2",children:Object(d.jsx)(r.f,{block:!0,color:"dark",children:"Add"})})]})]})]})})}},791:function(e,t,n){"use strict";n.r(t);n(1);var c=n(689),r=n(659),s=n(90),i=n(676),l=n(677),a=n(678),d=n(21),o=Object(s.b)((function(e){return{groups:e.root.productGroups}}),null)((function(e){return Object(d.jsx)(r.j,{children:Object(d.jsx)(r.k,{style:{background:"white",borderRadius:"10px",padding:"2rem"},children:Object(d.jsx)(r.A,{items:e.groups,fields:[{key:"id",_style:{width:"3%"},filter:!1},{key:"name",_style:{width:"20%"}},{key:"attributes",label:"Attributes",_style:{width:"30%"}},{key:"possibleValues",label:"Possible values",_style:{width:"30%"}},{key:"action",_style:{width:"20%"},sorter:!1,filter:!1}],tableFilter:!0,itemsPerPageSelect:!0,itemsPerPage:5,hover:!0,sorter:!0,pagination:!0,scopedSlots:{attributes:function(e){return Object(d.jsx)("td",{children:e.fields.length>0?e.fields.map((function(e){return Object(d.jsxs)("span",{children:[e.name,", "]})})):Object(d.jsx)("span",{className:"text-warning",children:"No attributes set yet. "})})},possibleValues:function(e){return Object(d.jsx)("td",{children:e.fields.length>0?e.fields.map((function(e){return Object(d.jsxs)("div",{children:[Object(d.jsxs)("span",{className:"font-weight-bold",children:[e.name," -> "]}),"enum"===e.datatype?e.enum_group.values&&e.enum_group.values.map((function(e){return Object(d.jsxs)("span",{children:[e.value,", "]})})):"No possible values set."]})})):Object(d.jsx)("span",{className:"text-warning",children:"Please set attributes first."})})},action:function(e){return Object(d.jsxs)("td",{children:[Object(d.jsx)(r.f,{children:Object(d.jsx)("img",{src:i.a,alt:"View"})}),Object(d.jsx)(r.f,{children:Object(d.jsx)("img",{src:l.a,alt:"Edit"})}),Object(d.jsx)(r.f,{children:Object(d.jsx)("img",{src:a.a,alt:"Delete"})})]})}}})})})})),j=n(664),b=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"d-flex justify-content-between align-items-start",children:[Object(d.jsx)("h4",{className:"outside-card-title mb-4 mr-auto",children:"Groups"}),Object(d.jsx)(r.w,{md:"4",children:Object(d.jsxs)(r.X,{children:[Object(d.jsx)(r.Z,{children:Object(d.jsx)(r.ab,{style:{backgroundColor:"#ffffff"},children:Object(d.jsx)(j.a,{name:"cil-magnifying-glass"})})}),Object(d.jsx)(r.U,{placeholder:"Search Groups"})]})}),Object(d.jsx)(r.w,{md:"2",children:Object(d.jsx)(r.f,{block:!0,color:"warning",children:Object(d.jsx)("span",{style:{color:"#fff",fontWeight:600},children:"+ \xa0Add Group"})})})]})})};t.default=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(b,{}),Object(d.jsx)(c.a,{isModal:!1}),Object(d.jsx)("h4",{className:"mt-5 mb-3 font-weight-bold",children:"All Group"}),Object(d.jsx)(o,{})]})}}}]);
//# sourceMappingURL=12.445d4744.chunk.js.map
(this["webpackJsonpproduct-listing-frontend"]=this["webpackJsonpproduct-listing-frontend"]||[]).push([[16],{667:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(187);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,c=!1,a=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(u){c=!0,a=u}finally{try{r||null==i.return||i.return()}finally{if(c)throw a}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},668:function(e,t,n){"use strict";n(2);var r=n(665),c=n(671),a=n(16),l=function(e){var t=e.name,n=e.label,l=e.placeholder,i=e.require,u=e.labelTag,o=e.type,s=e.onChange,d=e.value,b=e.error,j=e.disabled,f=e.helpText,p=e.secondaryLabel,m=e.secondaryLabelClick,h=e.onBlur,O=e.plaintext;return Object(a.jsxs)(r.v,{className:"mb-4",children:[Object(a.jsxs)(r.J,{htmlFor:t,children:[n," ",u?Object(a.jsx)("small",{children:Object(a.jsx)("code",{children:u})}):null]}),Object(a.jsx)("span",{className:"font-weight-bold text-secondary",style:{float:"right",cursor:"pointer"},onClick:function(){m()},children:p}),Object(a.jsx)(r.D,{type:o,id:t,name:t,onChange:s,value:d,placeholder:l,required:!!i,disabled:j,onBlur:h,plaintext:O}),Object(a.jsx)("p",{className:"small",children:f}),Object(a.jsx)(c.a,{children:b})]})};l.defaultProps={name:"Name",label:"Label",placeholder:"Placeholder here",require:!1,labelTag:!1,disabled:!1,helpText:"",plaintext:!1},t.a=l},671:function(e,t,n){"use strict";n(2);var r=n(665),c=n(178),a=n(16);t.a=function(e){return Object(c.a)(e.children)?Object(a.jsx)("span",{}):Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(r.u,{children:Object(a.jsx)(r.w,{color:"red",style:{color:"red"},children:e.children})})})}},673:function(e,t,n){"use strict";var r=n(667),c=n(179),a=n(665),l=n(2),i=n(16),u=["title","showModal","onClose","size"],o=function(e){var t=e.title,n=e.showModal,o=e.onClose,s=e.size,d=Object(c.a)(e,u),b=Object(l.useState)(!1),j=Object(r.a)(b,2),f=j[0],p=j[1];return Object(l.useEffect)((function(){p(!0)}),[n]),Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(a.L,{show:f,onClose:function(){return o(!1)},size:s,children:[Object(i.jsx)(a.N,{closeButton:!0,children:Object(i.jsx)(a.O,{children:t})}),Object(i.jsx)(a.M,{children:d.children})]})})};o.defaultProps={size:"lg"},t.a=o},675:function(e,t,n){"use strict";t.a=n.p+"static/media/view.ba2eff2b.svg"},676:function(e,t,n){"use strict";t.a=n.p+"static/media/edit.a2e87322.svg"},677:function(e,t,n){"use strict";t.a=n.p+"static/media/trash.f88bd880.svg"},683:function(e,t,n){"use strict";n(2);var r=n(16),c=function(e){var t={width:"100%",height:1,backgroundColor:"rgba(0,0,0,0.125)",marginBottom:e.marginBottom,marginTop:e.marginTop};return Object(r.jsx)("div",{children:Object(r.jsx)("div",{style:t})})};c.defaultProps={marginBottom:"1.75rem",marginTop:"1.75rem"},t.a=c},685:function(e,t,n){"use strict";n(2);var r=n(665),c=n(714),a=n(671),l=n(16),i=function(e){var t=e.name,n=e.label,i=e.options,u=(e.placeholder,e.onChange),o=e.secondaryLabel,s=e.secondaryLabelClick,d=e.error,b=e.value,j=e.selectValueByLabel,f=e.defaultValueByLabel,p=e.valueByLabel,m=e.defaultValue,h=i.map((function(e){return e.name&&(e.value=e.id,e.label=e.name),e}));console.log("Value by Label: ",p);var O=i.filter((function(e){return e.id===b}));return console.log("Value from checkbox : ",O),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(r.v,{children:[Object(l.jsx)(r.J,{htmlFor:t,children:n}),Object(l.jsx)("span",{className:"font-weight-bold text-secondary",style:{float:"right",cursor:"pointer"},onClick:function(){s()},children:o}),Object(l.jsx)(c.a,{name:t,defaultValue:j?i.filter((function(e){return e.label===f})):i.filter((function(e){return e.value===m})),onChange:u,options:h,placeholder:O.length>0&&O[0].name||"Select..",value:j?i.filter((function(e){return e.label===p})):i.filter((function(e){return e.value===b}))}),Object(l.jsx)(a.a,{children:d})]})})};i.defaultProps={name:"name",label:"Label",placeholder:"placeholder here...",options:[{id:0,name:"Apple",created:"2019-08-24T14:15:22Z",modified:"2019-08-24T14:15:22Z"},{id:1,name:"Banana",created:"2019-08-24T14:15:22Z",modified:"2019-08-24T14:15:22Z"},{id:2,name:"Cat",created:"2019-08-24T14:15:22Z",modified:"2019-08-24T14:15:22Z"}]},t.a=i},849:function(e,t,n){"use strict";n.r(t);var r=n(667),c=n(2),a=n(3),l=n.n(a),i=n(8),u=n(179),o=n(665),s=n(98),d=n(13),b=n(12),j=function(){var e=Object(i.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(b.a)(d.b,"POST",t,n);case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),e.t0;case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=Object(i.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(b.a)(d.b+"".concat(n,"/"),"DELETE",t);case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),e.t0;case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,n){return e.apply(this,arguments)}}(),p=function(){var e=Object(i.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(b.a)(d.b+"?paginate=false","GET",t);case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),e.t0;case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(i.a)(l.a.mark((function e(t,n,r){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(b.a)(d.b+"".concat(n,"/"),"PATCH",t,r);case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),e.t0;case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,n,r){return e.apply(this,arguments)}}(),h=n(668),O=n(44),x=function(e){return function(t){t({type:O.j,payload:e})}},v=n(671),y=n(180),g=n(181),E=n(178),w=function(e){var t={};return Object(E.a)(e.name)&&(t.name="Bundle Name cant be empty."),Object(E.a)(e.bundleItems)&&(t.bundleItems="Please populate the bundle items and respective quantity"),e.bundleItems.forEach((function(e){var n={};Object(E.a)(e.product)&&(n.product="Product cant be empty."),console.log("validation check",e.quantity),(Object(E.a)(e.quantity)||""===e.quantity||0===e.quantity)&&(n.quantity="Quantity cant be empty or zero."),E.a||(t[e.id]=n)})),{isValid:Object(E.a)(t),errors:t}},B=n(669),k=n(846),A=n(1),I=n(685),T=n(76),N=function(e,t){var n;return null===(n=e.find((function(e){return e.id===t})))||void 0===n?void 0:n.title},C=function(e,t){var n;return null===(n=e.find((function(e){return e.id===t})))||void 0===n?void 0:n.total_available_stock},D=function(e,t){var n;return null===(n=e.find((function(e){return e.id===t})))||void 0===n?void 0:n.weight.major_weight},L=function(e,t){var n;return null===(n=e.find((function(e){return e.id===t})))||void 0===n?void 0:n.price},S=function(e,t){var n=Math.min.apply(Math,Object(T.a)(t.map((function(t){return Math.floor(C(e,t.product)/t.quantity||0)}))));return Number.isNaN(n)?0:n},q=function(e,t){return t.map((function(t){return t.quantity*L(e,t.product)})).reduce((function(e,t){return e+t}),0)},P=n(185),F=n(16),_=["record"],V=Object(s.b)((function(e){return{products:e.root.products,bundle:e.bundle,error:e.bundle.error,bundleItems:e.bundle.bundleItems}}),{removeBundleItem:function(e){return function(t){t({type:O.e,payload:{id:e}})}},setBundleItem:function(e){return function(t){t({type:O.h,payload:e})}}})((function(e){var t=e.record,n=Object(u.a)(e,_),a=Object(c.useState)(null),l=Object(r.a)(a,2),i=l[0],s=l[1],d=Object(c.useState)(null),b=Object(r.a)(d,2),j=b[0],f=b[1];Object(c.useEffect)((function(){if(s(""),f(""),n.error.hasOwnProperty(t.id)){var e=n.error[t.id];e&&e.product&&s(e.product),e&&e.quantity&&f(e.quantity)}}),[n.error]);return Object(F.jsx)("div",{children:Object(F.jsxs)(o.T,{className:"d-flex align-items-start",children:[Object(F.jsxs)(o.k,{children:[Object(F.jsx)(I.a,{label:"Product",placeholder:"Select Product",name:"product",options:function(e){if(Object(E.a)(e))return[];var t=n.bundleItems.map((function(e){return e.product}));return e.filter((function(e){return!t.includes(e.id)})).map((function(e){return{id:e.id,name:e.title}}))}(n.products),onChange:function(e){n.setBundleItem(Object(A.a)(Object(A.a)({},t),{},{product:e.id}))},value:t.product}),Object(E.a)(t.product)?null:Object(F.jsxs)("div",{className:"d-flex mb-4",children:[Object(F.jsx)("div",{children:Object(F.jsx)("img",{src:function(){var e=function(e,t){var n;return null===(n=e.find((function(e){return e.id===t})))||void 0===n?void 0:n.thumbnail}(n.products,t.product);return e=Object(E.a)(e)?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAzCAYAAAD7JnqGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEYSURBVHgB7ZnBrYMwEETXBg4gIYVOUgK/kvxOEleSpBNKSCdEQoIDIDIbkSjXvYAP8yQjbDg8zfo2Tlbatq2TJDkvy3LE9iAb45xr5nm+V1V1e+/10XXdeZqmS9/3go8COdmaLMskz3NJ0/RSlmVwSOof51fI7SL0C1ITSOnrn8f4TsMw7C6lqINOTa+Ux6Yex1FiYb1KRy+RsU7uEJ3YB4pZoZgVilmhmBWKWaGYFYpZoZgVilmhmBWKWaGYFYpZoZgVilmhmBWKWaGYFYpZiVrsqR1ObHhIPdDdSCxoC4d2pPHobkJRFBJDauqg1SDE7h7FZYOzoHWc2u4lhJ7yUwkGLVO/MWlviR9OWLVszxMpPbDCGpS8APZoYKSbfeFtAAAAAElFTkSuQmCC":P.b+e}(),alt:N(n.products,t.product),height:"50"})}),Object(F.jsx)("div",{style:{marginLeft:"1rem"}}),Object(F.jsxs)("div",{class:"d-flex flex-column justify-content-evenly align-items-start",children:[Object(F.jsx)("p",{className:"font-weight-bold",style:{margin:"0"},children:N(n.products,t.product)}),Object(F.jsxs)("p",{children:["Total Available Stock:"," ",C(n.products,t.product)]})]})]}),Object(F.jsx)(v.a,{children:i})]}),Object(F.jsxs)(o.k,{children:[Object(F.jsx)(h.a,{type:"number",label:"Bundle Quantity",placeholder:"Enter quantity",name:"bundleQuantity",onChange:function(e){n.setBundleItem(Object(A.a)(Object(A.a)({},t),{},{quantity:e.target.value}))},value:t.quantity,error:j}),Object(E.a)(t.quantity)?null:Object(F.jsxs)("div",{children:[Object(F.jsxs)("p",{className:"my-0",children:["Weight:"," ",Object(F.jsxs)("b",{children:[D(n.products,t.product)," *"," ",t.quantity," ="," ",D(n.products,t.product)*t.quantity]})]}),Object(F.jsxs)("p",{className:"my-0",children:["Quantity:"," ",Object(F.jsxs)("b",{children:[C(n.products,t.product)," /"," ",t.quantity," ="," ",Math.floor(C(n.products,t.product)/t.quantity)]})]}),Object(F.jsxs)("p",{className:"my-0",children:["Price:"," ",Object(F.jsxs)("b",{children:[L(n.products,t.product)," *"," ",t.quantity," ="," ",L(n.products,t.product)*t.quantity]})]})]})]}),Object(F.jsx)(o.k,{md:"1",className:"pt-4",children:Object(F.jsx)(o.d,{onClick:function(){n.removeBundleItem(t.id)},children:Object(F.jsx)(B.b,{className:"text-danger",name:"cil-x-circle"})})})]})})})),M=n(683),Y=Object(s.b)((function(e){return{products:e.root.products,bundleItems:e.bundle.bundleItems}}),{addBundleItems:function(e){return function(t){t({type:O.a,payload:e})}}})((function(e){var t,n;return Object(F.jsxs)("div",{children:[e.bundleItems.map((function(t){return Object(F.jsx)(V,{record:t,edit:e.edit},t.id)})),Object(F.jsxs)(o.d,{className:"mb-0",style:{display:"flex",alignItems:"center"},onClick:function(){var t={id:Math.floor(1e8*Math.random()+1),product:null,quantity:null};e.addBundleItems(t)},children:[Object(F.jsx)("div",{style:{marginRight:14},children:Object(F.jsx)(B.b,{content:k.a.cilPlus,size:"lg"})}),"Add Bundle Item"]}),Object(E.a)(e.bundleItems)?null:Object(F.jsxs)("div",{children:[Object(F.jsx)(M.a,{}),Object(F.jsxs)("p",{className:"font-weight-bold my-1",children:["Bundle Quantity :"," ",S(e.products,e.bundleItems)]}),Object(F.jsxs)("p",{className:"font-weight-bold my-1",children:["Bundle Weight :"," ",(t=e.products,n=e.bundleItems,n.map((function(e){return e.quantity*D(t,e.product)})).reduce((function(e,t){return e+t}),0))]}),Object(F.jsxs)("p",{className:"font-weight-bold my-1",children:["Bundle Price :"," ",q(e.products,e.bundleItems)]})]})]})})),Z=["_setShowCreateForm","isModal","edit","item"],z=function(e){var t,n,a=e._setShowCreateForm,s=e.isModal,d=e.edit,b=e.item,f=Object(u.a)(e,Z),O=Object(c.useState)(!1),x=Object(r.a)(O,2),E=x[0],B=x[1];Object(c.useEffect)((function(){f.clearBundleInput()}),[]),Object(c.useEffect)((function(){d&&(f.setBundleName(b.name),f.populateBundleItems(b.items))}),[]);var k=function(){document.dispatchEvent(new KeyboardEvent("keydown",{keyCode:27}))},A=function(){var e=Object(i.a)(l.a.mark((function e(){var t,n,r,c,a,i,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f.clearBundleInputError(),t=w(f.bundle),n=t.isValid,r=t.errors,f.setBundleInputError(r),!n){e.next=17;break}if(B(!0),c=f.bundleItems.map((function(e){return{product:e.product,quantity:e.quantity}})),a={name:f.bundle.name,items:c},console.log("[PAYLOAD] for Bundle",a),i=new AbortController,u=i.signal,d){e.next=15;break}return e.next=13,j(u,a).then((function(e){var t=e.json;e.response.ok?(console.log("Request succesfully sent."),y.a.fire({icon:"success",title:Object(g.a)("success","Bundle created.")}),f.clearBundleInput(),B(!1),p().then((function(e){var t=e.response,n=e.json;t.ok&&f.updateBundles(n)}))):(B(!1),t.non_field_errors&&t.non_field_errors.forEach((function(e){y.a.fire({icon:"warning",title:Object(g.a)("warning",e)})})))}));case 13:e.next=17;break;case 15:return e.next=17,m(u,b.id,a).then((function(e){var t=e.json;e.response.ok?(console.log("Request succesfully sent."),y.a.fire({icon:"success",title:Object(g.a)("success","Bundle edited.")}),k(),f.clearBundleInput(),B(!1),p().then((function(e){var t=e.response,n=e.json;t.ok&&f.updateBundles(n)}))):(B(!1),t.non_field_errors&&t.non_field_errors.forEach((function(e){y.a.fire({icon:"warning",title:Object(g.a)("warning",e)})})))}));case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(F.jsx)(F.Fragment,{children:Object(F.jsxs)(o.e,{className:"addpro-custom-card sm-pd",children:[s?null:Object(F.jsx)("h4",{className:"outside-card-title mb-4 p-2",children:"Add Bundle"}),Object(F.jsxs)(o.f,{children:[Object(F.jsx)(o.T,{children:Object(F.jsx)(o.k,{children:Object(F.jsx)(h.a,{label:"Bundle Name",placeholder:"Enter Bundle Name",name:"bundleName",error:null===(t=f.error)||void 0===t?void 0:t.name,value:f.bundle.name,onChange:function(e){return f.setBundleName(e.target.value)}})})}),Object(F.jsx)(Y,{}),Object(F.jsx)(v.a,{children:null===(n=f.error)||void 0===n?void 0:n.bundleItems}),Object(F.jsxs)(o.T,{className:"mt-5",children:[Object(F.jsx)(o.k,{sm:"2",md:"2",children:Object(F.jsx)(o.d,{block:!0,variant:"outline",color:"dark",onClick:function(){d?k():a(!1)},children:"Cancel"})}),Object(F.jsx)(o.k,{sm:"2",md:"2",children:Object(F.jsx)(o.d,{block:!0,color:"dark",onClick:A,disabled:E,children:E?Object(F.jsx)(o.bb,{color:"secondary",size:"sm"}):"Save"})})]})]})]})})};z.defaultProps={isModal:!1,edit:!1,item:null};var G=Object(s.b)((function(e){return{products:e.root.products,bundle:e.bundle,bundleItems:e.bundle.bundleItems,error:e.bundle.error}}),{setBundleInput:function(e){return function(t){t({type:O.f,payload:e})}},setBundleInputError:function(e){return function(t){t({type:O.g,payload:e})}},clearBundleInput:function(){return function(e){e({type:O.b})}},updateBundles:x,clearBundleInputError:function(){return function(e){e({type:O.c})}},setBundleName:function(e){return function(t){t({type:O.i,payload:{name:e}})}},populateBundleItems:function(e){return function(t){t({type:O.d,payload:e})}}})(z),R=n(184),W=n(676),J=n(677),Q=n(675),K=n(75),U=n(126),X=n(673),H=["item"],$=Object(s.b)(null,{updateBundles:x})((function(e){var t=e.item,n=Object(u.a)(e,H),a=Object.freeze({NOT_DELETED:"NOT_DELETED",DELETING:"DELETING",DELETED:"DELETED"}),s=Object(c.useState)(a.NOT_DELETED),d=Object(r.a)(s,2),b=d[0],j=d[1],m=function(){var e=Object(i.a)(l.a.mark((function e(t){var r,c,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new AbortController,c=r.signal,j(a.DELETING),console.log("[DELETE] BUNDLE: ",t),e.next=6,f(c,t.id).then((function(e){e.json;e.response.ok&&(j(a.DELETED),document.dispatchEvent(new KeyboardEvent("keydown",{keyCode:27})),y.a.fire({icon:"success",title:Object(g.a)("success","Bundle deleted.")}))}));case 6:i=e.sent,j(a.DELETED),console.log(i),p().then((function(e){var t=e.response,r=e.json;console.log(t,r),t.ok&&n.updateBundles(r)}));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(F.jsxs)("div",{className:"text-center",children:[b==a.DELETED?Object(F.jsx)("p",{children:"Bundle successfully deleted."}):Object(F.jsx)("p",{children:"Are you sure want to delete this bundle ?"}),b==a.DELETED?null:Object(F.jsx)(o.d,{color:"danger",disabled:b==a.DELETING,onClick:function(){m(t)},children:b==a.DELETING?Object(F.jsx)(o.bb,{color:"secondary",size:"sm"}):b==a.NOT_DELETED?"Delete":null})]})})),ee=Object(s.b)((function(e){return{bundles:e.root.bundles,products:e.root.products}}),{updateBundles:x,setLoader:U.a,updateProducts:K.G})((function(e){Object(c.useEffect)((function(){e.setLoader(!0),p().then((function(t){var n=t.response,r=t.json;n.ok&&e.updateBundles(r),Object(R.g)().then((function(t){var n=t.response,r=t.json;n.ok&&e.updateProducts(r),e.setLoader(!1)}))}))}),[]);var t=Object(c.useState)(""),n=Object(r.a)(t,2),a=n[0],l=n[1],i=Object(c.useState)({}),u=Object(r.a)(i,2),s=u[0],d=u[1],b=Object(c.useState)(!1),j=Object(r.a)(b,2),f=j[0],m=j[1],h=function(e){return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(o.d,{onClick:function(){d(e),l(P.a.VIEW),m(!0)},title:"View Bundle",children:Object(F.jsx)("img",{src:Q.a,alt:"View"})}),Object(F.jsx)(o.d,{onClick:function(){d(e),l(P.a.EDIT),m(!0)},title:"Edit Bundle",children:Object(F.jsx)("img",{src:W.a,alt:"Edit"})}),Object(F.jsx)(o.d,{onClick:function(){d(e),l(P.a.DELETE),m(!0)},title:"Delete Bundle",children:Object(F.jsx)("img",{src:J.a,alt:"Delete"})})]})},O=function(t){return t.items.map((function(t){return Object(F.jsxs)("tr",{children:[Object(F.jsx)("td",{className:"font-weight-bold",style:{width:"50%"},children:N(e.products,t.product)}),Object(F.jsx)("td",{style:{width:"50%"},children:t.quantity})]})}))};return Object(F.jsx)(F.Fragment,{children:Object(F.jsx)(o.e,{children:Object(F.jsxs)(o.f,{style:{background:"white",borderRadius:"10px",padding:"2rem"},children:[f?Object(F.jsxs)(X.a,{showModal:f,title:"".concat(a," ").concat(s.name),onClose:m,size:"EDIT"===a?"xl":"lg",children:["DELETE"===a?Object(F.jsx)($,{item:s}):null,"EDIT"===a?Object(F.jsx)(G,{item:s,isModal:!0,edit:!0}):null]}):null,Object(F.jsx)(o.n,{items:e.bundles,fields:[{key:"id",_style:{width:"3%"},label:"ID",filter:!1},{key:"name",_style:{width:"20%"},label:"Name",filter:!1},{key:"items",_style:{width:"40%"},label:"Bundle Items",filter:!1,sorter:!1},{key:"action",_style:{width:"20%"},sorter:!1,filter:!1}],columnFilter:!0,tableFilter:!0,itemsPerPageSelect:!0,itemsPerPage:10,hover:!0,sorter:!0,pagination:!0,scopedSlots:{id:function(e){return Object(F.jsx)("td",{children:e.id})},items:function(e){return Object(F.jsx)("table",{style:{width:"100%"},className:"table",children:O(e)})},action:function(e){return Object(F.jsx)("td",{children:h(e)})}}})]})})})})),te=function(e){var t=e._setShowCreateForm;return Object(F.jsx)("div",{children:Object(F.jsxs)("div",{className:"d-flex justify-content-between align-items-start",children:[Object(F.jsx)("h4",{className:"outside-card-title mb-4",children:"Bundle"}),Object(F.jsx)(o.k,{md:"2",children:Object(F.jsx)(o.d,{block:!0,color:"warning",onClick:function(){t(!0)},children:Object(F.jsx)("span",{style:{color:"#fff",fontWeight:600},children:"+ \xa0Add Bundle"})})})]})})};t.default=Object(s.b)(null,null)((function(e){var t=Object(c.useState)(!1),n=Object(r.a)(t,2),a=n[0],l=n[1];return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(te,{_setShowCreateForm:l}),a?Object(F.jsx)(G,{_setShowCreateForm:l}):null,Object(F.jsx)("h4",{className:"mt-5 mb-3 font-weight-bold",children:"All Bundles"}),Object(F.jsx)(ee,{})]})}))}}]);
//# sourceMappingURL=16.d115a620.chunk.js.map
(this["webpackJsonpproduct-listing-frontend"]=this["webpackJsonpproduct-listing-frontend"]||[]).push([[15],{642:function(e,t,n){"use strict";n(2);var r=n(635),c=n(643),a=n(11),s=function(e){var t=e.name,n=e.label,s=e.placeholder,i=e.require,l=e.labelTag,o=e.type,u=e.onChange,d=e.value,j=e.error,b=e.disabled,f=e.helpText,h=e.secondaryLabel,O=e.secondaryLabelClick,x=e.onBlur,m=e.plaintext;return Object(a.jsxs)(r.u,{className:"mb-4",children:[Object(a.jsxs)(r.I,{htmlFor:t,children:[n," ",l?Object(a.jsx)("small",{children:Object(a.jsx)("code",{children:l})}):null]}),Object(a.jsx)("span",{className:"font-weight-bold text-secondary",style:{float:"right",cursor:"pointer"},onClick:function(){O()},children:h}),Object(a.jsx)(r.C,{type:o,id:t,name:t,onChange:u,value:d,placeholder:s,required:!!i,disabled:b,onBlur:x,plaintext:m}),Object(a.jsx)("p",{className:"small",children:f}),Object(a.jsx)(c.a,{children:j})]})};s.defaultProps={name:"Name",label:"Label",placeholder:"Placeholder here",require:!1,labelTag:!1,disabled:!1,helpText:"",plaintext:!1},t.a=s},643:function(e,t,n){"use strict";n(2);var r=n(635),c=n(641),a=n(11);t.a=function(e){return Object(c.a)(e.children)?Object(a.jsx)("span",{}):Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(r.t,{children:Object(a.jsx)(r.v,{color:"red",style:{color:"red"},children:e.children})})})}},649:function(e,t,n){"use strict";var r=n(637),c=n(169),a=n(635),s=n(2),i=n(11),l=["title","showModal","onClose","size"],o=function(e){var t=e.title,n=e.showModal,o=e.onClose,u=e.size,d=Object(c.a)(e,l),j=Object(s.useState)(!1),b=Object(r.a)(j,2),f=b[0],h=b[1];return Object(s.useEffect)((function(){h(!0)}),[n]),Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(a.K,{show:f,onClose:function(){return o(!1)},size:u,children:[Object(i.jsx)(a.M,{closeButton:!0,children:Object(i.jsx)(a.N,{children:t})}),Object(i.jsx)(a.L,{children:d.children})]})})};o.defaultProps={size:"lg"},t.a=o},650:function(e,t,n){"use strict";t.a="data:image/png;base64,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"},651:function(e,t,n){"use strict";t.a=n.p+"static/media/view.ba2eff2b.svg"},652:function(e,t,n){"use strict";t.a=n.p+"static/media/edit.a2e87322.svg"},653:function(e,t,n){"use strict";t.a=n.p+"static/media/trash.f88bd880.svg"},654:function(e,t,n){"use strict";var r=n(1),c=n(639),a=n.n(c),s=n(669),i=n(640),l=n(637),o=n(670),u=n(2),d=n(672),j=n(660),b=n(650),f=n(661),h=n(11),O={display:"flex",flexDirection:"column",alignItems:"center",borderWidth:3,borderRadius:2,borderColor:"#eeeeee",borderStyle:"dashed",backgroundColor:"#fafafa",color:"#bdbdbd",transition:"border .3s ease-in-out"},x={borderColor:"#2196f3"},m={borderColor:"#00e676"},g={borderColor:"#ff1744"},p=function(e){var t=e.placeholder,n=e.padding,c=e.imagePreviewSize,p=e.previewOnSide,A=e.displayFlex,v=e.type,E=e.isSingle,w=e.clearFiles,S=Object(u.useState)([]),y=Object(l.a)(S,2),C=y[0],k=y[1];Object(u.useEffect)((function(){w&&k([])}),[w]);var N=Object(u.useCallback)(function(){var t=Object(i.a)(a.a.mark((function t(n){var r,c,i,l;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=[],c=Object(s.a)(n),t.prev=2,c.s();case 4:if((i=c.n()).done){t.next=10;break}return l=i.value,t.next=8,Object(f.a)(l).then((function(e){console.log("base64:",e),r.push({image:e,type:v})})).catch((function(e){return console.log(e)}));case 8:t.next=4;break;case 10:t.next=15;break;case 12:t.prev=12,t.t0=t.catch(2),c.e(t.t0);case 15:return t.prev=15,c.f(),t.finish(15);case 18:0!==r.length&&k((function(t){return console.log("base64:2",r),e.setImageFiles(t.concat(r)),t.concat(r)}));case 19:case"end":return t.stop()}}),t,null,[[2,12,15,18]])})));return function(e){return t.apply(this,arguments)}}(),[]),D=Object(d.a)({onDrop:N,accept:"image/jpeg, image/png"}),T=D.getRootProps,M=D.getInputProps,I=D.isDragActive,R=D.isDragAccept,B=D.isDragReject,L=Object(u.useMemo)((function(){return Object(r.a)(Object(r.a)(Object(r.a)(Object(r.a)(Object(r.a)({},O),I?x:{}),R?m:{}),B?g:{}),{},{padding:"".concat(n,"px")})}),[I,B,R,n]);console.log(" files: ",C);var P=C.map((function(t,n){return Object(h.jsx)("div",{children:Object(h.jsx)("div",{style:{border:"1px dashed #E7E7E7",boxSizing:"border-box",borderRadius:"5px",padding:"1rem",maxHeight:{imagePreviewSize:c},width:"auto",borderWidth:3,borderColor:"#eeeeee",borderStyle:"dashed",marginRight:"1rem"},children:Object(h.jsxs)("div",{class:"d-flex justify-content-between align-items-start",children:[Object(h.jsx)("img",{src:t.image,alt:t.type,height:c}),Object(h.jsx)("img",{src:b.a,alt:"Delete Product",onClick:function(){return function(t){var n=C.filter((function(e,n){return n!==t}));k((function(e){return n})),e.setImageFiles(n)}(n)}})]})})},n)}));return console.log(" product list[iu] ",e.product),Object(u.useEffect)((function(){return function(){C.forEach((function(e){return URL.revokeObjectURL(e.preview)}))}}),[C]),console.log(" Files [image] ",C),Object(h.jsxs)("section",{className:p?"d-flex flex-row-reverse justify-content-end align-items-center":null,children:[E&&1===C.length?null:Object(h.jsxs)("div",Object(r.a)(Object(r.a)({},T({style:L})),{},{className:A?"px-5":"",children:[Object(h.jsx)("input",Object(r.a)({},M())),Object(h.jsxs)("div",{className:A?"d-flex justify-content-around":"",children:[Object(h.jsx)("div",{style:{backgroundImage:"url(".concat(j.a,")"),backgroundRepeat:"no-repeat",width:"94px",height:"94px"},className:A?"px-5":"mx-auto"}),Object(h.jsx)("div",{style:{fontWeight:500,marginBottom:"-1rem",marginTop:"1rem"},className:A?"px-5":"",children:Object(o.a)(t)})]})]})),Object(h.jsx)("aside",{className:"d-flex",style:{overflowX:"auto"},children:P})]})};p.defaultProps={placeholder:"",padding:5,imagePreviewSize:50,previewOnSide:!1,displayFlex:!1,isSingle:!0,clearFiles:!1},t.a=p},659:function(e,t,n){"use strict";var r=n(650),c=n(11),a=function(e){var t=e.image,n=e.alt,a=e.imagePreviewSize,s=e.showPreview_;return Object(c.jsx)("div",{children:Object(c.jsx)("div",{style:{border:"1px dashed #E7E7E7",boxSizing:"border-box",borderRadius:"5px",padding:"1rem",maxHeight:{imagePreviewSize:a},width:a+100,borderWidth:3,borderColor:"#eeeeee",borderStyle:"dashed",marginRight:"1rem"},children:Object(c.jsxs)("div",{class:"d-flex justify-content-between align-items-start",children:[Object(c.jsx)("img",{src:t,alt:n,height:a}),Object(c.jsx)("img",{src:r.a,alt:"Delete Product",onClick:function(){s(!1)}})]})})})};a.defaultProps={imagePreviewSize:100,alt:""},t.a=a},660:function(e,t,n){"use strict";t.a="data:image/png;base64,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"},661:function(e,t,n){"use strict";t.a=function(e){return new Promise((function(t,n){var r=new FileReader;r.readAsDataURL(e),r.onload=function(){return t(r.result)},r.onerror=function(e){return n("Error: ",e)}}))}},682:function(e,t,n){"use strict";var r=n(639),c=n.n(r),a=n(640),s=n(1),i=n(637),l=n(169),o=n(2),u=n(635),d=n(642),j=n(654),b=n(92),f=n(638),h=n(645),O=n(646),x=n(641),m=n(643),g=n(675),p=n(659),A=n(11),v=["isModal","_setShowCreateForm","edit","item"],E=function(e){var t=e.isModal,n=e._setShowCreateForm,r=e.edit,b=e.item,f=Object(l.a)(e,v),E=Object(o.useState)(""),w=Object(i.a)(E,2),S=w[0],y=w[1],C=Object(o.useState)(""),k=Object(i.a)(C,2),N=k[0],D=k[1],T=Object(o.useState)({}),M=Object(i.a)(T,2),I=M[0],R=M[1],B=Object(o.useState)(!1),L=Object(i.a)(B,2),P=L[0],F=L[1],z=Object(o.useState)({}),V=Object(i.a)(z,2),H=V[0],X=V[1],Q=Object(o.useState)(r),Z=Object(i.a)(Q,2),q=Z[0],K=Z[1],J=Object(o.useState)(!1),U=Object(i.a)(J,2),Y=U[0],G=U[1];Object(o.useEffect)((function(){r&&!Object(x.a)(b)&&(y(b.name),D(b.shortcut_name),R({image:b.logo.encoded,url:b.logo.url}))}),[]);var W=function(){document.dispatchEvent(new KeyboardEvent("keydown",{keyCode:27}))},_=function(){if(X({}),Object(x.a)(S)&&X((function(e){return Object(s.a)(Object(s.a)({},e),{},{manufacturerName:"Please enter Manufacturer name"})})),Object(x.a)(N)&&X((function(e){return Object(s.a)(Object(s.a)({},e),{},{shortcutName:"Please enter Shortcut Name"})})),Object(x.a)(S)||Object(x.a)(N))return{payload:null,isValid:!1};var e={name:S,shortcut_name:N};return Object(x.a)(I.image)?e.logo="":e.logo=I.image,{payload:e,isValid:!0}},$=function(){var e=Object(a.a)(c.a.mark((function e(t){var n,a,s,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=_(),a=n.payload,!n.isValid){e.next=11;break}if(F(!0),s=new AbortController,i=s.signal,r){e.next=9;break}Object(g.a)(i,a).then((function(e){var t=e.response,n=e.json;if(!t.ok)throw F(!1),n;h.a.fire({icon:"success",title:Object(O.a)("success","Manufacturer created.")}),G(!0),W(),Object(g.c)(i).then((function(e){var t=e.response,n=e.json;t.ok&&(f.updateManufacturers(n),F(!1),y(""),D(""))}))})),e.next=11;break;case 9:return e.next=11,Object(g.d)(i,b.id,a).then((function(e){var t=e.json;e.response.ok?(console.log("Request succesfully sent."),h.a.fire({icon:"success",title:Object(O.a)("success","Brand edited.")}),G(!0),W(),F(!1),Object(g.c)().then((function(e){var t=e.response,n=e.json;t.ok&&f.updateManufacturers(n)}))):(F(!1),t.non_field_errors&&t.non_field_errors.forEach((function(e){h.a.fire({icon:"warning",title:Object(O.a)("warning",e)})})))}));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)(u.e,{className:t?"px-3":"addpro-custom-card sm-pd mt-4",children:[t?null:Object(A.jsx)("h4",{className:"outside-card-title mb-4 p-2",children:"Add Manufacturer"}),Object(A.jsxs)(u.f,{children:[Object(A.jsxs)(u.S,{class:"d-flex justify-content-evenly align-items-start",children:[Object(A.jsxs)(u.j,{md:"6",children:[Object(A.jsx)(d.a,{label:"Manufacturer name",placeholder:"Enter Manufacturer name here",onChange:function(e){console.log(e.target.value),y(e.target.value)},value:S,error:H.manufacturerName&&H.manufacturerName}),Object(A.jsx)(d.a,{label:"Manufacturer Shortcut Name",placeholder:"Eg. BNSH",onChange:function(e){D(e.target.value)},value:N,error:H.shortcutName&&H.shortcutName})]}),Object(A.jsxs)("div",{className:"ml-5",children:[Object(A.jsx)(u.I,{children:"Logo"}),r&&b&&I.url&&q?Object(A.jsx)(p.a,{image:I.url,alt:b.name,showPreview_:function(e){K(e),R({})}}):Object(A.jsx)(j.a,{placeholder:"<u>Click here</u> to select image <br/><b>OR</b> Drag and drop here",padding:20,imagePreviewSize:150,previewOnSide:!0,displayFlex:!t,type:"MANUFACTURER_IMAGES",clearFiles:Y,setImageFiles:function(e){return function(e){e&&e.length>0?R(e[e.length-1]):R(null)}(e)}}),Object(A.jsx)(m.a,{children:H.logo&&H.logo})]})]}),Object(A.jsxs)(u.S,{children:[Object(A.jsx)(u.j,{sm:"2",md:"2",children:Object(A.jsx)(u.d,{block:!0,variant:"outline",color:"dark",onClick:function(){W(),n&&n(!1)},children:"Cancel"})}),Object(A.jsx)(u.j,{sm:"2",md:"2",children:Object(A.jsx)(u.d,{block:!0,color:"dark",onClick:$,disabled:P,children:P?Object(A.jsx)(u.ab,{color:"secondary",size:"sm"}):"Save"})})]})]})]})})};E.defaultProps={isModal:!1,edit:!1,item:null},t.a=Object(b.b)(null,{updateManufacturers:f.D})(E)},856:function(e,t,n){"use strict";n.r(t);var r=n(637),c=n(2),a=n(635),s=(n(644),n(11)),i=function(e){var t=e._setShowCreateForm;return Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:"d-flex justify-content-between align-items-start",children:[Object(s.jsx)("h4",{className:"outside-card-title mb-2 mr-auto",children:"Manufacturer"}),Object(s.jsx)(a.j,{md:"2",children:Object(s.jsx)(a.d,{block:!0,color:"warning",onClick:function(){t(!0)},children:Object(s.jsx)("span",{style:{color:"#fff",fontWeight:600},children:"+ \xa0Add Manufacturer"})})})]})})},l=n(682),o=n(92),u=n(685),d=n(658),j=n(651),b=n(652),f=n(653),h=n(638),O=n(649),x=n(639),m=n.n(x),g=n(640),p=n(169),A=n(675),v=n(645),E=n(646),w=["item"],S=Object(o.b)(null,{updateManufacturers:h.D})((function(e){var t=e.item,n=Object(p.a)(e,w),i=Object.freeze({NOT_DELETED:"NOT_DELETED",DELETING:"DELETING",DELETED:"DELETED"}),l=Object(c.useState)(i.NOT_DELETED),o=Object(r.a)(l,2),u=o[0],d=o[1],j=function(){var e=Object(g.a)(m.a.mark((function e(t){var r,c,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new AbortController,c=r.signal,d(i.DELETING),console.log("[DELETE] BRAND: ",t),e.next=6,Object(A.b)(c,t.id).then((function(e){e.json;e.response.ok&&(d(i.DELETED),document.dispatchEvent(new KeyboardEvent("keydown",{keyCode:27})),v.a.fire({icon:"success",title:Object(E.a)("success","Manufacturer deleted.")}))}));case 6:a=e.sent,d(i.DELETED),console.log(a),Object(A.c)().then((function(e){var t=e.response,r=e.json;t.ok&&n.updateManufacturers(r)}));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(s.jsxs)("div",{className:"text-center",children:[u==i.DELETED?Object(s.jsxs)("p",{children:[Object(s.jsx)("strong",{children:t.name})," manufacturer successfully deleted."]}):Object(s.jsxs)("p",{children:["Are you sure want to delete ",Object(s.jsx)("strong",{children:t.name})," manufacturer ?"]}),u==i.DELETED?null:Object(s.jsx)(a.d,{color:"danger",disabled:u==i.DELETING,onClick:function(){j(t)},children:u==i.DELETING?Object(s.jsx)(a.ab,{color:"secondary",size:"sm"}):u==i.NOT_DELETED?"Delete":null})]})})),y=n(657),C=Object(o.b)((function(e){return{manufacturers:e.root.manufacturers}}),{updateManufacturers:h.D,setLoader:y.a})((function(e){Object(c.useEffect)((function(){e.setLoader(!0),Object(A.c)().then((function(t){var n=t.response,r=t.json;n.ok&&e.updateManufacturers(r),e.setLoader(!1)}))}),[]);var t=Object(c.useState)(""),n=Object(r.a)(t,2),i=n[0],o=n[1],h=Object(c.useState)({}),x=Object(r.a)(h,2),m=x[0],g=x[1],p=Object(c.useState)(!1),v=Object(r.a)(p,2),E=v[0],w=v[1],y=function(e){return Object(s.jsx)(s.Fragment,{children:e.logo.url?Object(s.jsx)("img",{src:e.logo.url,height:"50px",alt:e.name}):Object(s.jsx)(u.a,{value:e.shortcut_name,round:!0,size:"50px"})})},C=function(e){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(a.d,{onClick:function(){g(e),o(d.a.VIEW),w(!0)},title:"View Manufacturer",children:Object(s.jsx)("img",{src:j.a,alt:"View"})}),Object(s.jsx)(a.d,{onClick:function(){g(e),o(d.a.EDIT),w(!0)},title:"Edit Manufacturer",children:Object(s.jsx)("img",{src:b.a,alt:"Edit"})}),Object(s.jsx)(a.d,{onClick:function(){g(e),o(d.a.DELETE),w(!0)},title:"Delete Manufacturer",children:Object(s.jsx)("img",{src:f.a,alt:"Delete"})})]})};return Object(s.jsx)(a.e,{children:Object(s.jsxs)(a.f,{style:{background:"white",borderRadius:"10px",padding:"2rem"},children:[E?Object(s.jsxs)(O.a,{showModal:E,title:"".concat(i," ").concat(m.name),onClose:w,children:["DELETE"===i?Object(s.jsx)(S,{item:m}):null,"EDIT"===i?Object(s.jsx)(l.a,{item:m,isModal:!0,edit:!0}):null]}):null,Object(s.jsx)(a.m,{items:e.manufacturers,fields:[{key:"id",_style:{width:"3%"},filter:!1},{key:"name",_style:{width:"40%"},filter:!1},{key:"logo",label:"Manufacturer Logo",sorter:!1,filter:!1},{key:"shortcut_name",label:"Manufacturer Shortcut Name",_style:{width:"20%"},filter:!1},{key:"action",_style:{width:"20%"},sorter:!1,filter:!1}],columnFilter:!0,tableFilter:!0,itemsPerPageSelect:!0,itemsPerPage:10,hover:!0,sorter:!0,pagination:!0,scopedSlots:{logo:function(e){return Object(s.jsx)("td",{children:y(e)})},action:function(e){return Object(s.jsx)("td",{children:C(e)})}}})]})})}));t.default=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)(i,{_setShowCreateForm:a}),n?Object(s.jsx)(l.a,{_setShowCreateForm:a}):null,Object(s.jsx)("h4",{className:"mt-5 mb-3 font-weight-bold",children:"All Manufacturers"}),Object(s.jsx)(C,{})]})}}}]);
//# sourceMappingURL=15.73e855e4.chunk.js.map
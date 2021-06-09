(this["webpackJsonpproduct-listing-frontend"]=this["webpackJsonpproduct-listing-frontend"]||[]).push([[12],{668:function(e,t,n){"use strict";n(2);var r=n(665),c=n(671),a=n(16),s=function(e){var t=e.name,n=e.label,s=e.placeholder,i=e.require,l=e.labelTag,o=e.type,d=e.onChange,u=e.value,j=e.error,b=e.disabled,h=e.helpText,f=e.secondaryLabel,O=e.secondaryLabelClick,x=e.onBlur,m=e.plaintext;return Object(a.jsxs)(r.v,{className:"mb-4",children:[Object(a.jsxs)(r.J,{htmlFor:t,children:[n," ",l?Object(a.jsx)("small",{children:Object(a.jsx)("code",{children:l})}):null]}),Object(a.jsx)("span",{className:"font-weight-bold text-secondary",style:{float:"right",cursor:"pointer"},onClick:function(){O()},children:f}),Object(a.jsx)(r.D,{type:o,id:t,name:t,onChange:d,value:u,placeholder:s,required:!!i,disabled:b,onBlur:x,plaintext:m}),Object(a.jsx)("p",{className:"small",children:h}),Object(a.jsx)(c.a,{children:j})]})};s.defaultProps={name:"Name",label:"Label",placeholder:"Placeholder here",require:!1,labelTag:!1,disabled:!1,helpText:"",plaintext:!1},t.a=s},671:function(e,t,n){"use strict";n(2);var r=n(665),c=n(178),a=n(16);t.a=function(e){return Object(c.a)(e.children)?Object(a.jsx)("span",{}):Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(r.u,{children:Object(a.jsx)(r.w,{color:"red",style:{color:"red"},children:e.children})})})}},673:function(e,t,n){"use strict";var r=n(667),c=n(179),a=n(665),s=n(2),i=n(16),l=["title","showModal","onClose","size"],o=function(e){var t=e.title,n=e.showModal,o=e.onClose,d=e.size,u=Object(c.a)(e,l),j=Object(s.useState)(!1),b=Object(r.a)(j,2),h=b[0],f=b[1];return Object(s.useEffect)((function(){f(!0)}),[n]),Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(a.L,{show:h,onClose:function(){return o(!1)},size:d,children:[Object(i.jsx)(a.N,{closeButton:!0,children:Object(i.jsx)(a.O,{children:t})}),Object(i.jsx)(a.M,{children:u.children})]})})};o.defaultProps={size:"lg"},t.a=o},674:function(e,t,n){"use strict";t.a="data:image/png;base64,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"},675:function(e,t,n){"use strict";t.a=n.p+"static/media/view.ba2eff2b.svg"},676:function(e,t,n){"use strict";t.a=n.p+"static/media/edit.a2e87322.svg"},677:function(e,t,n){"use strict";t.a=n.p+"static/media/trash.f88bd880.svg"},678:function(e,t,n){"use strict";var r=n(1),c=n(3),a=n.n(c),s=n(686),i=n(8),l=n(667),o=n(687),d=n(2),u=n(689),j=n(681),b=n(674),h=n(682),f=n(16),O={display:"flex",flexDirection:"column",alignItems:"center",borderWidth:3,borderRadius:2,borderColor:"#eeeeee",borderStyle:"dashed",backgroundColor:"#fafafa",color:"#bdbdbd",transition:"border .3s ease-in-out"},x={borderColor:"#2196f3"},m={borderColor:"#00e676"},g={borderColor:"#ff1744"},p=function(e){var t=e.placeholder,n=e.padding,c=e.imagePreviewSize,p=e.previewOnSide,A=e.displayFlex,v=e.type,E=e.isSingle,w=e.clearFiles,y=Object(d.useState)([]),k=Object(l.a)(y,2),S=k[0],B=k[1];Object(d.useEffect)((function(){w&&B([])}),[w]);var C=Object(d.useCallback)(function(){var t=Object(i.a)(a.a.mark((function t(n){var r,c,i,l;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=[],c=Object(s.a)(n),t.prev=2,c.s();case 4:if((i=c.n()).done){t.next=10;break}return l=i.value,t.next=8,Object(h.a)(l).then((function(e){console.log("base64:",e),r.push({image:e,type:v})})).catch((function(e){return console.log(e)}));case 8:t.next=4;break;case 10:t.next=15;break;case 12:t.prev=12,t.t0=t.catch(2),c.e(t.t0);case 15:return t.prev=15,c.f(),t.finish(15);case 18:0!==r.length&&B((function(t){return console.log("base64:2",r),e.setImageFiles(t.concat(r)),t.concat(r)}));case 19:case"end":return t.stop()}}),t,null,[[2,12,15,18]])})));return function(e){return t.apply(this,arguments)}}(),[]),N=Object(u.a)({onDrop:C,accept:"image/jpeg, image/png"}),D=N.getRootProps,T=N.getInputProps,L=N.isDragActive,R=N.isDragAccept,I=N.isDragReject,P=Object(d.useMemo)((function(){return Object(r.a)(Object(r.a)(Object(r.a)(Object(r.a)(Object(r.a)({},O),L?x:{}),R?m:{}),I?g:{}),{},{padding:"".concat(n,"px")})}),[L,I,R,n]);console.log(" files: ",S);var F=S.map((function(t,n){return Object(f.jsx)("div",{children:Object(f.jsx)("div",{style:{border:"1px dashed #E7E7E7",boxSizing:"border-box",borderRadius:"5px",padding:"1rem",maxHeight:{imagePreviewSize:c},width:"auto",borderWidth:3,borderColor:"#eeeeee",borderStyle:"dashed",marginRight:"1rem"},children:Object(f.jsxs)("div",{class:"d-flex justify-content-between align-items-start",children:[Object(f.jsx)("img",{src:t.image,alt:t.type,height:c}),Object(f.jsx)("img",{src:b.a,alt:"Delete Product",onClick:function(){return function(t){var n=S.filter((function(e,n){return n!==t}));B((function(e){return n})),e.setImageFiles(n)}(n)}})]})})},n)}));return console.log(" product list[iu] ",e.product),Object(d.useEffect)((function(){return function(){S.forEach((function(e){return URL.revokeObjectURL(e.preview)}))}}),[S]),console.log(" Files [image] ",S),Object(f.jsxs)("section",{className:p?"d-flex flex-row-reverse justify-content-end align-items-center":null,children:[E&&1===S.length?null:Object(f.jsxs)("div",Object(r.a)(Object(r.a)({},D({style:P})),{},{className:A?"px-5":"",children:[Object(f.jsx)("input",Object(r.a)({},T())),Object(f.jsxs)("div",{className:A?"d-flex justify-content-around":"",children:[Object(f.jsx)("div",{style:{backgroundImage:"url(".concat(j.a,")"),backgroundRepeat:"no-repeat",width:"94px",height:"94px"},className:A?"px-5":"mx-auto"}),Object(f.jsx)("div",{style:{fontWeight:500,marginBottom:"-1rem",marginTop:"1rem"},className:A?"px-5":"",children:Object(o.a)(t)})]})]})),Object(f.jsx)("aside",{className:"d-flex",style:{overflowX:"auto"},children:F})]})};p.defaultProps={placeholder:"",padding:5,imagePreviewSize:50,previewOnSide:!1,displayFlex:!1,isSingle:!0,clearFiles:!1},t.a=p},680:function(e,t,n){"use strict";var r=n(674),c=n(16),a=function(e){var t=e.image,n=e.alt,a=e.imagePreviewSize,s=e.showPreview_;return Object(c.jsx)("div",{children:Object(c.jsx)("div",{style:{border:"1px dashed #E7E7E7",boxSizing:"border-box",borderRadius:"5px",padding:"1rem",maxHeight:{imagePreviewSize:a},width:a+100,borderWidth:3,borderColor:"#eeeeee",borderStyle:"dashed",marginRight:"1rem"},children:Object(c.jsxs)("div",{class:"d-flex justify-content-between align-items-start",children:[Object(c.jsx)("img",{src:t,alt:n,height:a}),Object(c.jsx)("img",{src:r.a,alt:"Delete Product",onClick:function(){s(!1)}})]})})})};a.defaultProps={imagePreviewSize:100,alt:""},t.a=a},681:function(e,t,n){"use strict";t.a="data:image/png;base64,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"},682:function(e,t,n){"use strict";t.a=function(e){return new Promise((function(t,n){var r=new FileReader;r.readAsDataURL(e),r.onload=function(){return t(r.result)},r.onerror=function(e){return n("Error: ",e)}}))}},697:function(e,t,n){"use strict";var r=n(3),c=n.n(r),a=n(8),s=n(1),i=n(667),l=n(179),o=n(2),d=n(665),u=n(668),j=n(678),b=n(98),h=n(75),f=n(180),O=n(181),x=n(189),m=n(178),g=n(671),p=n(680),A=n(16),v=["isModal","_setShowCreateForm","edit","item"],E=function(e){var t=e.isModal,n=e._setShowCreateForm,r=e.edit,b=e.item,h=Object(l.a)(e,v),E=Object(o.useState)(""),w=Object(i.a)(E,2),y=w[0],k=w[1],S=Object(o.useState)(""),B=Object(i.a)(S,2),C=B[0],N=B[1],D=Object(o.useState)({}),T=Object(i.a)(D,2),L=T[0],R=T[1],I=Object(o.useState)(!1),P=Object(i.a)(I,2),F=P[0],M=P[1],z=Object(o.useState)({}),V=Object(i.a)(z,2),H=V[0],X=V[1],Q=Object(o.useState)(r),Z=Object(i.a)(Q,2),q=Z[0],J=Z[1],K=Object(o.useState)(!1),U=Object(i.a)(K,2),Y=U[0],G=U[1];Object(o.useEffect)((function(){r&&!Object(m.a)(b)&&(k(b.name),N(b.shortcut_name),R({image:b.logo.encoded,url:b.logo.url}))}),[]);var W=function(){document.dispatchEvent(new KeyboardEvent("keydown",{keyCode:27}))},_=function(){if(X({}),Object(m.a)(y)&&X((function(e){return Object(s.a)(Object(s.a)({},e),{},{brandName:"Please enter Brand name"})})),Object(m.a)(C)&&X((function(e){return Object(s.a)(Object(s.a)({},e),{},{shortcutName:"Please enter Shortcut Name"})})),Object(m.a)(y)||Object(m.a)(C))return{payload:null,isValid:!1};var e={name:y,shortcut_name:C};return Object(m.a)(L.image)?e.logo="":e.logo=L.image,{payload:e,isValid:!0}},$=function(){var e=Object(a.a)(c.a.mark((function e(t){var n,a,s,i,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=_(),a=n.payload,s=n.isValid,console.log("LOG \ud83d\ude80  ------------------------------------------------------------------------"),console.log("LOG \ud83d\ude80  ~ file: AddBrand.js ~ line 123 ~ submitPayload ~ payload",a),console.log("LOG \ud83d\ude80  ------------------------------------------------------------------------"),!s){e.next=14;break}if(M(!0),i=new AbortController,l=i.signal,r){e.next=12;break}Object(x.a)(l,a).then((function(e){var t=e.response,n=e.json;if(!t.ok)throw M(!1),n;f.a.fire({icon:"success",title:Object(O.a)("success","Brand created.")}),G(!0),W(),Object(x.c)().then((function(e){var t=e.response,n=e.json;t.ok?(h.updateBrands(n),M(!1),k(""),N("")):M(!1)}))})),e.next=14;break;case 12:return e.next=14,Object(x.d)(l,b.id,a).then((function(e){var t=e.json;e.response.ok?(console.log("Request succesfully sent."),f.a.fire({icon:"success",title:Object(O.a)("success","Brand edited.")}),G(!0),W(),M(!1),Object(x.c)().then((function(e){var t=e.response,n=e.json;t.ok&&h.updateBrands(n)}))):(M(!1),t.non_field_errors&&t.non_field_errors.forEach((function(e){f.a.fire({icon:"warning",title:Object(O.a)("warning",e)})})))}));case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)(d.e,{className:t?"px-3":"addpro-custom-card sm-pd mt-4",children:[t?null:Object(A.jsx)("h4",{className:"outside-card-title mb-4 p-2",children:"Add Brand"}),Object(A.jsxs)(d.f,{children:[Object(A.jsxs)(d.T,{class:"d-flex justify-content-evenly align-items-start",children:[Object(A.jsxs)(d.k,{md:"6",children:[Object(A.jsx)(u.a,{label:"Brand name",placeholder:"Enter Brand name here",onChange:function(e){console.log(e.target.value),k(e.target.value)},value:y,error:H.brandName&&H.brandName}),Object(A.jsx)(u.a,{label:"Brand Shortcut Name",placeholder:"Eg. BNSH",onChange:function(e){N(e.target.value)},value:C,error:H.shortcutName&&H.shortcutName})]}),Object(A.jsxs)("div",{className:"ml-5",children:[Object(A.jsx)(d.J,{children:"Logo"}),r&&b&&L.url&&q?Object(A.jsx)(p.a,{image:L.url,alt:b.name,showPreview_:function(e){J(e),R({})}}):Object(A.jsx)(j.a,{placeholder:"<u>Click here</u> to select image <br/><b>OR</b> Drag and drop here",padding:20,imagePreviewSize:150,previewOnSide:!0,displayFlex:!t,type:"BRAND_IMAGES",setImageFiles:function(e){return function(e){e&&e.length>0?R(e[e.length-1]):R(null)}(e)},clearFiles:Y}),Object(A.jsx)(g.a,{children:H.logo&&H.logo})]})]}),Object(A.jsxs)(d.T,{children:[Object(A.jsx)(d.k,{sm:"2",md:"2",children:Object(A.jsx)(d.d,{block:!0,variant:"outline",color:"dark",onClick:function(){W(),n&&n(!1)},children:"Cancel"})}),Object(A.jsx)(d.k,{sm:"2",md:"2",children:Object(A.jsx)(d.d,{block:!0,color:"dark",onClick:$,disabled:F,children:F?Object(A.jsx)(d.bb,{color:"secondary",size:"sm"}):"Save"})})]})]})]})})};E.defaultProps={isModal:!1,edit:!1,item:null},t.a=Object(b.b)(null,{updateBrands:h.B})(E)},854:function(e,t,n){"use strict";n.r(t);var r=n(667),c=n(2),a=n(665),s=(n(669),n(16)),i=function(e){var t=e._setShowCreateForm;return Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:"d-flex justify-content-between align-items-start",children:[Object(s.jsx)("h4",{className:"outside-card-title mb-2 mr-auto",children:"Brand"}),Object(s.jsx)(a.k,{md:"2",children:Object(s.jsx)(a.d,{block:!0,color:"warning",onClick:function(){t(!0)},children:Object(s.jsx)("span",{style:{color:"#fff",fontWeight:600},children:"+ \xa0Add Brand"})})})]})})},l=n(697),o=n(98),d=n(699),u=n(185),j=n(675),b=n(676),h=n(677),f=n(75),O=n(673),x=n(3),m=n.n(x),g=n(8),p=n(179),A=n(189),v=n(180),E=n(181),w=["item"],y=Object(o.b)(null,{updateBrands:f.B})((function(e){var t=e.item,n=Object(p.a)(e,w),i=Object.freeze({NOT_DELETED:"NOT_DELETED",DELETING:"DELETING",DELETED:"DELETED"}),l=Object(c.useState)(i.NOT_DELETED),o=Object(r.a)(l,2),d=o[0],u=o[1],j=function(){var e=Object(g.a)(m.a.mark((function e(t){var r,c,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new AbortController,c=r.signal,u(i.DELETING),console.log("[DELETE] BRAND: ",t),e.next=6,Object(A.b)(c,t.id).then((function(e){e.json;e.response.ok&&(u(i.DELETED),document.dispatchEvent(new KeyboardEvent("keydown",{keyCode:27})),v.a.fire({icon:"success",title:Object(E.a)("success","Brand deleted.")}))}));case 6:a=e.sent,console.log(a),Object(A.c)().then((function(e){var t=e.response,r=e.json;t.ok&&n.updateBrands(r)}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(s.jsxs)("div",{className:"text-center",children:[d==i.DELETED?Object(s.jsxs)("p",{children:[Object(s.jsx)("strong",{children:t.name})," brand successfully deleted."]}):Object(s.jsxs)("p",{children:["Are you sure want to delete ",Object(s.jsx)("strong",{children:t.name})," brand ?"]}),d==i.DELETED?null:Object(s.jsx)(a.d,{color:"danger",disabled:d==i.DELETING,onClick:function(){j(t)},children:d==i.DELETING?Object(s.jsx)(a.bb,{color:"secondary",size:"sm"}):d==i.NOT_DELETED?"Delete":null})]})})),k=n(126),S=Object(o.b)((function(e){return{brands:e.root.brands}}),{updateBrands:f.B,setLoader:k.a})((function(e){Object(c.useEffect)((function(){e.setLoader(!0),Object(A.c)().then((function(t){var n=t.response,r=t.json;n.ok&&e.updateBrands(r),e.setLoader(!1)}))}),[]);var t=Object(c.useState)(""),n=Object(r.a)(t,2),i=n[0],o=n[1],f=Object(c.useState)({}),x=Object(r.a)(f,2),m=x[0],g=x[1],p=Object(c.useState)(!1),v=Object(r.a)(p,2),E=v[0],w=v[1],k=function(e){return Object(s.jsx)(s.Fragment,{children:e.logo.url?Object(s.jsx)("img",{src:e.logo.url,height:"50px",alt:e.name}):Object(s.jsx)(d.a,{value:e.shortcut_name,round:!0,size:"50px"})})},S=function(e){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(a.d,{onClick:function(){g(e),o(u.a.VIEW),w(!0)},title:"View Brand",children:Object(s.jsx)("img",{src:j.a,alt:"View"})}),Object(s.jsx)(a.d,{onClick:function(){g(e),o(u.a.EDIT),w(!0)},title:"Edit Brand",children:Object(s.jsx)("img",{src:b.a,alt:"Edit"})}),Object(s.jsx)(a.d,{onClick:function(){g(e),o(u.a.DELETE),w(!0)},title:"Delete Brand",children:Object(s.jsx)("img",{src:h.a,alt:"Delete"})})]})};return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(a.e,{children:Object(s.jsxs)(a.f,{style:{background:"white",borderRadius:"10px",padding:"2rem"},children:[E?Object(s.jsxs)(O.a,{showModal:E,title:"".concat(i," ").concat(m.name),onClose:w,children:["DELETE"===i?Object(s.jsx)(y,{item:m}):null,"EDIT"===i?Object(s.jsx)(l.a,{item:m,isModal:!0,edit:!0}):null]}):null,Object(s.jsx)(a.n,{items:e.brands,fields:[{key:"id",_style:{width:"3%"},filter:!1},{key:"name",_style:{width:"40%"},filter:!1},{key:"logo",label:"Brand Logo",sorter:!1,filter:!1},{key:"shortcut_name",label:"Brand Shortcut Name",_style:{width:"20%"},filter:!1},{key:"action",_style:{width:"20%"},sorter:!1,filter:!1}],columnFilter:!0,tableFilter:!0,itemsPerPageSelect:!0,itemsPerPage:10,hover:!0,sorter:!0,pagination:!0,scopedSlots:{logo:function(e){return Object(s.jsx)("td",{children:k(e)})},action:function(e){return Object(s.jsx)("td",{children:S(e)})}}})]})})})}));t.default=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)(i,{_setShowCreateForm:a}),n?Object(s.jsx)(l.a,{_setShowCreateForm:a}):null,Object(s.jsx)("h4",{className:"mt-5 mb-3 font-weight-bold",children:"All Brands"}),Object(s.jsx)(S,{})]})}}}]);
//# sourceMappingURL=12.7e967a5a.chunk.js.map
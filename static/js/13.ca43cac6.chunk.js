(this["webpackJsonpproduct-listing-frontend"]=this["webpackJsonpproduct-listing-frontend"]||[]).push([[13],{691:function(e,t,r){"use strict";r(1);var n=r(29),c=r(692),a=r(8),s=function(e){var t=e.name,r=e.label,s=e.placeholder,o=e.require,i=e.labelTag,l=e.type,u=e.onChange,d=e.value,j=e.error,b=e.disabled,h=e.helpText,f=e.secondaryLabel,O=e.secondaryLabelClick,x=e.onBlur,p=e.plaintext;return Object(a.jsxs)(n.u,{className:"mb-4",children:[Object(a.jsxs)(n.I,{htmlFor:t,children:[r," ",i?Object(a.jsx)("small",{children:Object(a.jsx)("code",{children:i})}):null]}),Object(a.jsx)("span",{className:"font-weight-bold text-secondary",style:{float:"right",cursor:"pointer"},onClick:function(){O()},children:f}),Object(a.jsx)(n.C,{type:l,id:t,name:t,onChange:u,value:d,placeholder:s,required:!!o,disabled:b,onBlur:x,plaintext:p}),Object(a.jsx)("p",{className:"small",children:h}),Object(a.jsx)(c.a,{children:j})]})};s.defaultProps={name:"Name",label:"Label",placeholder:"Placeholder here",require:!1,labelTag:!1,disabled:!1,helpText:"",plaintext:!1},t.a=s},692:function(e,t,r){"use strict";r(1);var n=r(29),c=r(65),a=r(8);t.a=function(e){return Object(c.a)(e.children)?Object(a.jsx)("span",{}):Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(n.t,{children:Object(a.jsx)(n.v,{color:"red",style:{color:"red"},children:e.children})})})}},694:function(e,t,r){"use strict";var n=r(85),c=r(197),a=r(29),s=r(1),o=r(8),i=["title","showModal","onClose","size"],l=function(e){var t=e.title,r=e.showModal,l=e.onClose,u=e.size,d=Object(c.a)(e,i),j=Object(s.useState)(!1),b=Object(n.a)(j,2),h=b[0],f=b[1];return Object(s.useEffect)((function(){f(!0)}),[r]),Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(a.K,{show:h,onClose:function(){return l(!1)},size:u,children:[Object(o.jsx)(a.M,{closeButton:!0,children:Object(o.jsx)(a.N,{children:t})}),Object(o.jsx)(a.L,{children:d.children})]})})};l.defaultProps={size:"lg"},t.a=l},696:function(e,t,r){"use strict";t.a=r.p+"static/media/edit.a2e87322.svg"},697:function(e,t,r){"use strict";t.a=r.p+"static/media/trash.f88bd880.svg"},698:function(e,t,r){"use strict";t.a="data:image/png;base64,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"},699:function(e,t,r){"use strict";t.a=r.p+"static/media/view.ba2eff2b.svg"},700:function(e,t,r){"use strict";var n=r(6),c=r(16),a=r.n(c),s=r(710),o=r(30),i=r(85),l=r(711),u=r(1),d=r(713),j=r(703),b=r(698),h=r(704),f=r(8),O={display:"flex",flexDirection:"column",alignItems:"center",borderWidth:3,borderRadius:2,borderColor:"#eeeeee",borderStyle:"dashed",backgroundColor:"#fafafa",color:"#bdbdbd",transition:"border .3s ease-in-out"},x={borderColor:"#2196f3"},p={borderColor:"#00e676"},m={borderColor:"#ff1744"},g=function(e){var t=e.placeholder,r=e.padding,c=e.imagePreviewSize,g=e.previewOnSide,v=e.displayFlex,A=e.type,C=e.isSingle,E=e.clearFiles,w=Object(u.useState)([]),y=Object(i.a)(w,2),S=y[0],k=y[1];Object(u.useEffect)((function(){E&&k([])}),[E]);var N=Object(u.useCallback)(function(){var t=Object(o.a)(a.a.mark((function t(r){var n,c,o,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=[],c=Object(s.a)(r),t.prev=2,c.s();case 4:if((o=c.n()).done){t.next=10;break}return i=o.value,t.next=8,Object(h.a)(i).then((function(e){console.log("base64:",e),n.push({image:e,type:A})})).catch((function(e){return console.log(e)}));case 8:t.next=4;break;case 10:t.next=15;break;case 12:t.prev=12,t.t0=t.catch(2),c.e(t.t0);case 15:return t.prev=15,c.f(),t.finish(15);case 18:0!==n.length&&k((function(t){return console.log("base64:2",n),e.setImageFiles(t.concat(n)),t.concat(n)}));case 19:case"end":return t.stop()}}),t,null,[[2,12,15,18]])})));return function(e){return t.apply(this,arguments)}}(),[]),D=Object(d.a)({onDrop:N,accept:"image/jpeg, image/png"}),T=D.getRootProps,I=D.getInputProps,R=D.isDragActive,L=D.isDragAccept,B=D.isDragReject,P=Object(u.useMemo)((function(){return Object(n.a)(Object(n.a)(Object(n.a)(Object(n.a)(Object(n.a)({},O),R?x:{}),L?p:{}),B?m:{}),{},{padding:"".concat(r,"px")})}),[R,B,L,r]);console.log(" files: ",S);var F=S.map((function(t,r){return Object(f.jsx)("div",{children:Object(f.jsx)("div",{style:{border:"1px dashed #E7E7E7",boxSizing:"border-box",borderRadius:"5px",padding:"1rem",maxHeight:{imagePreviewSize:c},width:"auto",borderWidth:3,borderColor:"#eeeeee",borderStyle:"dashed",marginRight:"1rem"},children:Object(f.jsxs)("div",{class:"d-flex justify-content-between align-items-start",children:[Object(f.jsx)("img",{src:t.image,alt:t.type,height:c}),Object(f.jsx)("img",{src:b.a,alt:"Delete Product",onClick:function(){return function(t){var r=S.filter((function(e,r){return r!==t}));k((function(e){return r})),e.setImageFiles(r)}(r)}})]})})},r)}));return console.log(" product list[iu] ",e.product),Object(u.useEffect)((function(){return function(){S.forEach((function(e){return URL.revokeObjectURL(e.preview)}))}}),[S]),console.log(" Files [image] ",S),Object(f.jsxs)("section",{className:g?"d-flex flex-row-reverse justify-content-end align-items-center":null,children:[C&&1===S.length?null:Object(f.jsxs)("div",Object(n.a)(Object(n.a)({},T({style:P})),{},{className:v?"px-5":"",children:[Object(f.jsx)("input",Object(n.a)({},I())),Object(f.jsxs)("div",{className:v?"d-flex justify-content-around":"",children:[Object(f.jsx)("div",{style:{backgroundImage:"url(".concat(j.a,")"),backgroundRepeat:"no-repeat",width:"94px",height:"94px"},className:v?"px-5":"mx-auto"}),Object(f.jsx)("div",{style:{fontWeight:500,marginBottom:"-1rem",marginTop:"1rem"},className:v?"px-5":"",children:Object(l.a)(t)})]})]})),Object(f.jsx)("aside",{className:"d-flex",style:{overflowX:"auto"},children:F})]})};g.defaultProps={placeholder:"",padding:5,imagePreviewSize:50,previewOnSide:!1,displayFlex:!1,isSingle:!0,clearFiles:!1},t.a=g},702:function(e,t,r){"use strict";var n=r(698),c=r(8),a=function(e){var t=e.image,r=e.alt,a=e.imagePreviewSize,s=e.showPreview_;return Object(c.jsx)("div",{children:Object(c.jsx)("div",{style:{border:"1px dashed #E7E7E7",boxSizing:"border-box",borderRadius:"5px",padding:"1rem",maxHeight:{imagePreviewSize:a},width:a+100,borderWidth:3,borderColor:"#eeeeee",borderStyle:"dashed",marginRight:"1rem"},children:Object(c.jsxs)("div",{class:"d-flex justify-content-between align-items-start",children:[Object(c.jsx)("img",{src:t,alt:r,height:a}),Object(c.jsx)("img",{src:n.a,alt:"Delete Product",onClick:function(){s(!1)}})]})})})};a.defaultProps={imagePreviewSize:100,alt:""},t.a=a},703:function(e,t,r){"use strict";t.a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABeCAYAAACq0qNuAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAXRSURBVHgB7Z1dTuNIEIDLhkiIp9xgPSdYQCII8TDOCXY5AZkTACeAOcGKE5CcYLkB2QfEryA3GO8N/MpPYKuCe5XJQHe7/xw79UmWcdrJMJ+d6u7qbhPBDLe3t+nb29se/pjilgBjw4i2KIoGm5ubw+mCSPzw8PDQfn5+/hvehTPu6Y/H4+/b29sZHUzEX15eJktLS+fAd7hvslartY7kMR2h9CNg6SFIiqgCURHTz4EJBoacblxUpExAMMLsxVjjrgETmnQZ73iV+AwYExJZ2TLIyTqdzhdgSnNzc/MDJPJjYCqBxVcEi68IFl8RLL4iWHxFqJqTtYcSgMvLywn2V5I4jnPc57Mp2ipopHhKcb+8vOyj5B4ekvTJ66+vr5M9trFpN8RtgP2UPlRAo8QL4ZgBPMDDtuL0lDa8CEeUtBJ58lA0JsZTSEHh53h3H4Na+jQ0FvEDs7RHEJBGiJ8ayDFO+NEFu7q6OoBANEI8Sj8FBwM5WPn+hRcxhQDUXjzG6B44HCemi0h1BXimCXe869icPD4+9sAztRZ/fX39J+iFmCHG8O+4PwGN8QUMOX+AZ2rdnMTRM5WgHJuKu9hUHE69doAXrI/vlQ15pvf3979tbGz8C56o9R2vMWx5OCN9wtbWVg/eJxt9CvYHuuCRWotXDFvmsl4p9mIHIAHLvVawTU6S5bJCytnIyvHbxOIlyOS1Zc1ClVjVhbGl7jE+kxS3n56ePuyJ0gXBlss+mH+2NXWP8f/IylHe0WwaQOR0QNEMxRgvrXxtqXVzEpuKZ9jTlN65lAbA3i2liEdFeElBzdB3trLWd3zRVNS5MxOUTp2tFPQYgGdq36rBu/4Q3JKFGBypvfjirj8BN1BP12vHSeA9xtM0cNx9xcpqjWIsNdOoUsTtzFUcbbVax1hhfgWLfDyBv9O3UCNR3sQXgxOn+J9J6Rilg9gX8ZYqvT5KO6QVEmABvR+biF2Uf4yH+wYf8VFOxyteQs3UiFCqOLWHsh7ofLCE5GNsPkCB36DEDGf65uF71kNKJ5yLN1hPNTnfhXwCBfZphnNxAYbwce82w+2E4jkmzHZDD3QTTkONxSI2Id/ZaD9dANz1xe8lXl9ZWcltQ5sLnIl3sHLQuXxBFXe0CiehxuFyTadhZ56xFu9hjexCyLcSX1J6hi2IXVDkyQsaL99YfFnpRQviDJuP1DNcePlG4k2kiwpuZ2dnxPINxNtIF7D8kuJdSBcsunxt8S6lCxZZvpZ4H9IFiypfKd6ndME8yA99MSNMzb5JyvNiS0CNkfRpLi4u1jBNTBdZZ06L1b83tVwnhZ+zqJPHWU0/TckE2yX1bQgknQh159MFpnR0sXoknSmmwZQefXYxBdwLLnI1TqQLfMu/u7vbK75VqvdQ+amvJTq24p1KF/iST9JxCLIPJdZI0bfCh3wb8V6kC1zLn5JeGh/yTcV7lS5wJd9GusC1fBPxQaQLbOW7kC5wKb+s+KDSBabyS0rXGg50Jb+M+EqkC0zkl5A+wpbOF5SqNXXPhXxd8ZVKF5SVD3qQ9C4NgNMSnVDydcTPhXRBSfkq/pcuXgglXyU+nyfpAkfyf5EuCCFfKX4ep0YQlvI/lS7wLb/Ws4UN5SulC3zKr/00bZJPcx9Bb77kUFe6wJf8Riy3pHBIdVGxbD774BRaUr/b6XS6JtP3fMhX5eNr+YhbSvvGcdzGdny+urqauZorqbEUX5tGiveJK/n8+MOSlAk7Mli8AS7ks3hDbOWzeAts5LN4S0zls3gHmMhn8Y4oK5/FO6SMfBbvGF35LN4DxcPmMtk5LL4iWHxFsPiKYPEVweIrgsVXBIuvCNUIFJEBY0IiK6THpmSKk2RljBmjWPW0UsYLo9jV3HFGn/F4PIiLh6ANgQlFn5xPWjWtVoueI5MB4xuaeEWTrt6bkzThp5iJZT1tgfkUmj64LiYBR7Ol9Aeo4jjuRVH0O1g+uZSZRJEhxfTZ51r+B2OkKBS1k4G8AAAAAElFTkSuQmCC"},704:function(e,t,r){"use strict";t.a=function(e){return new Promise((function(t,r){var n=new FileReader;n.readAsDataURL(e),n.onload=function(){return t(n.result)},n.onerror=function(e){return r("Error: ",e)}}))}},857:function(e,t,r){"use strict";r.r(t);var n=r(85),c=r(1),a=r(16),s=r.n(a),o=r(30),i=r(6),l=r(197),u=r(29),d=r(691),j=r(700),b=r(77),h=r(690),f=r(113),O=r(114),x=r(65),p=r(46),m=r(199),g=function(){var e=Object(o.a)(s.a.mark((function e(t,r){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(m.a)(p.g+"".concat(r,"/"),"DELETE",t);case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),e.t0;case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,r){return e.apply(this,arguments)}}(),v=function(){var e=Object(o.a)(s.a.mark((function e(t,r){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(m.a)(p.g,"POST",t,r);case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),e.t0;case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,r){return e.apply(this,arguments)}}(),A=function(){var e=Object(o.a)(s.a.mark((function e(t,r,n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(m.a)(p.g+"".concat(r,"/"),"PATCH",t,n);case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),e.t0;case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,r,n){return e.apply(this,arguments)}}(),C=function(){var e=Object(o.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(m.a)(p.g+"?paginate=false","GET",t);case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),e.t0;case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),E=r(702),w=r(8),y=["isModal","_setShowCreateForm","edit","item"],S=function(e){var t=e.isModal,r=e._setShowCreateForm,a=e.edit,b=e.item,h=Object(l.a)(e,y),p=Object(c.useState)(!1),m=Object(n.a)(p,2),g=m[0],S=m[1],k=Object(c.useState)(""),N=Object(n.a)(k,2),D=N[0],T=N[1],I=Object(c.useState)(""),R=Object(n.a)(I,2),L=R[0],B=R[1],P=Object(c.useState)(""),F=Object(n.a)(P,2),M=F[0],H=F[1],z=Object(c.useState)({}),V=Object(n.a)(z,2),X=V[0],Q=V[1],Z=Object(c.useState)({}),q=Object(n.a)(Z,2),K=q[0],J=q[1],U=Object(c.useState)(a),Y=Object(n.a)(U,2),G=Y[0],W=Y[1],_=Object(c.useState)(!1),$=Object(n.a)(_,2),ee=$[0],te=$[1];Object(c.useEffect)((function(){a&&!Object(x.a)(b)&&(T(b.name),B(b.shortcut_name),H(b.code),Q({image:b.image.encoded,url:b.image.url}))}),[]);var re=function(){document.dispatchEvent(new KeyboardEvent("keydown",{keyCode:27}))},ne=function(){if(J({}),Object(x.a)(D)&&J((function(e){return Object(i.a)(Object(i.a)({},e),{},{name:"Please enter Name"})})),Object(x.a)(L)&&J((function(e){return Object(i.a)(Object(i.a)({},e),{},{shortcutName:"Please enter Shortcut Name"})})),Object(x.a)(X)&&Object(x.a)(M)&&J((function(e){return Object(i.a)(Object(i.a)({},e),{},{hexCode:"Either fill hex code or provide image."})})),!Object(x.a)(M)&&M.length>7&&J((function(e){return Object(i.a)(Object(i.a)({},e),{},{hexCode:"Code Length should be less than 7."})})),Object(x.a)(D)||Object(x.a)(L)||Object(x.a)(M)&&Object(x.a)(X)||!(M.length<=7))return{payload:null,isValid:!1};var e={name:D,shortcut_name:L,code:M};return Object(x.a)(X.image)||(e.image=X.image),{payload:e,isValid:!0}},ce=function(){var e=Object(o.a)(s.a.mark((function e(t){var r,n,c,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=ne(),n=r.payload,!r.isValid){e.next=11;break}if(S(!0),c=new AbortController,o=c.signal,a){e.next=9;break}v(o,n).then((function(e){var t=e.response,r=e.json;if(!t.ok)throw S(!1),r;f.a.fire({icon:"success",title:Object(O.a)("success","Color created.")}),te(!0),re(),C().then((function(e){var t=e.response,r=e.json;t.ok?(h.updateColors(r),S(!1),T(""),B(""),H(""),Q({})):S(!1)}))})),e.next=11;break;case 9:return e.next=11,A(o,b.id,n).then((function(e){var t=e.json;e.response.ok?(console.log("Request succesfully sent."),f.a.fire({icon:"success",title:Object(O.a)("success","Color edited.")}),te(!0),re(),S(!1),C().then((function(e){var t=e.response,r=e.json;t.ok&&h.updateColors(r)}))):(S(!1),t.non_field_errors&&t.non_field_errors.forEach((function(e){f.a.fire({icon:"warning",title:Object(O.a)("warning",e)})})))}));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(w.jsx)("div",{children:Object(w.jsx)(u.e,{className:t?"px-3":"addpro-custom-card sm-pd mt-4",children:Object(w.jsxs)(u.f,{children:[t?null:Object(w.jsx)(u.S,{children:Object(w.jsx)(u.j,{children:Object(w.jsx)("h4",{className:"font-weight-bold mb-4",children:"Add Color"})})}),Object(w.jsxs)(u.S,{children:[Object(w.jsxs)(u.j,{xs:"12",md:"6",children:[Object(w.jsx)(d.a,{label:"Color Name",placeholder:"Enter Color name here",onChange:function(e){T(e.target.value)},value:D,error:K.name&&K.name}),Object(w.jsx)(d.a,{label:"Shortcut Name",placeholder:"Enter Shortcut Name here",onChange:function(e){B(e.target.value)},value:L,error:K.shortcutName&&K.shortcutName})]}),Object(w.jsxs)(u.j,{children:[Object(w.jsx)("h5",{className:"font-weight-bold mb-2",children:"Color Image"}),a&&b&&X.url&&G?Object(w.jsx)(E.a,{image:X.url,alt:b.name,showPreview_:function(e){W(e),Q({})}}):Object(w.jsx)(j.a,{placeholder:"<u>Click here</u> to select image <br/><b>OR</b> Drag and drop here",padding:20,imagePreviewSize:150,previewOnSide:!0,displayFlex:!t,type:"COLOR_IMAGES",clearFiles:ee,setImageFiles:function(e){return function(e){e&&e.length>0?Q(e[e.length-1]):Q(null)}(e)}}),Object(w.jsx)("p",{className:"h5 font-weight-bold my-3",children:"OR"}),Object(w.jsx)(d.a,{label:"HEX/HTML Code",placeholder:"Eg: #ff0000 for Red",onChange:function(e){H(e.target.value)},value:M,error:K.hexCode&&K.hexCode})]})]}),Object(w.jsxs)(u.S,{className:"mt-5",children:[Object(w.jsx)(u.j,{sm:"2",md:"2",children:Object(w.jsx)(u.d,{block:!0,variant:"outline",color:"dark",onClick:function(){re(),r&&r(!1)},children:"Cancel"})}),Object(w.jsx)(u.j,{sm:"2",md:"2",children:Object(w.jsx)(u.d,{block:!0,color:"dark",onClick:ce,disabled:g,children:g?Object(w.jsx)(u.ab,{color:"secondary",size:"sm"}):"Save"})})]})]})})})};S.defaultProps={isModal:!1,edit:!1,item:null};var k=Object(b.b)(null,{updateColors:h.C})(S),N=r(723),D=r(79),T=r(699),I=r(696),R=r(697),L=r(694),B=["item"],P=Object(b.b)(null,{updateColors:h.C})((function(e){var t=e.item,r=Object(l.a)(e,B),a=Object.freeze({NOT_DELETED:"NOT_DELETED",DELETING:"DELETING",DELETED:"DELETED"}),i=Object(c.useState)(a.NOT_DELETED),d=Object(n.a)(i,2),j=d[0],b=d[1],h=function(){var e=Object(o.a)(s.a.mark((function e(t){var n,c,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new AbortController,c=n.signal,b(a.DELETING),console.log("[DELETE] COLOR: ",t),e.next=6,g(c,t.id).then((function(e){e.json;e.response.ok&&(b(a.DELETED),document.dispatchEvent(new KeyboardEvent("keydown",{keyCode:27})),f.a.fire({icon:"success",title:Object(O.a)("success","Color deleted.")}))}));case 6:o=e.sent,console.log(o),C().then((function(e){var t=e.response,n=e.json;t.ok&&r.updateColors(n)}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(w.jsxs)("div",{className:"text-center",children:[j==a.DELETED?Object(w.jsxs)("p",{children:[Object(w.jsx)("strong",{children:t.name})," color successfully deleted."]}):Object(w.jsxs)("p",{children:["Are you sure want to delete ",Object(w.jsx)("strong",{children:t.name})," color ?"]}),j==a.DELETED?null:Object(w.jsx)(u.d,{color:"danger",disabled:j==a.DELETING,onClick:function(){h(t)},children:j==a.DELETING?Object(w.jsx)(u.ab,{color:"secondary",size:"sm"}):j==a.NOT_DELETED?"Delete":null})]})})),F=r(701),M=Object(b.b)((function(e){return{colors:e.root.colors}}),{updateColors:h.C,setLoader:F.a})((function(e){Object(c.useEffect)((function(){e.setLoader(!0),C().then((function(t){var r=t.response,n=t.json;r.ok&&e.updateColors(n),e.setLoader(!1)}))}),[]),console.log(e.colors);var t=Object(c.useState)(""),r=Object(n.a)(t,2),a=r[0],s=r[1],o=Object(c.useState)({}),i=Object(n.a)(o,2),l=i[0],d=i[1],j=Object(c.useState)(!1),b=Object(n.a)(j,2),h=b[0],f=b[1],O=function(e){return Object(w.jsx)(w.Fragment,{children:e.image.url?Object(w.jsx)("img",{src:e.image.url,height:"50px",alt:e.name}):Object(w.jsx)(N.a,{color:e.code,value:e.shortcut_name,round:!0,size:"50px"})})},x=function(e){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(u.d,{onClick:function(){d(e),s(D.a.VIEW),f(!0)},title:"View Color",children:Object(w.jsx)("img",{src:T.a,alt:"View"})}),Object(w.jsx)(u.d,{onClick:function(){d(e),s(D.a.EDIT),f(!0)},title:"Edit Color",children:Object(w.jsx)("img",{src:I.a,alt:"Edit"})}),Object(w.jsx)(u.d,{onClick:function(){d(e),s(D.a.DELETE),f(!0)},title:"Delete Color",children:Object(w.jsx)("img",{src:R.a,alt:"Delete"})})]})};return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(u.e,{children:Object(w.jsxs)(u.f,{style:{background:"white",borderRadius:"10px",padding:"2rem"},children:[h?Object(w.jsxs)(L.a,{showModal:h,title:"".concat(a," ").concat(l.name),onClose:f,children:["DELETE"===a?Object(w.jsx)(P,{item:l}):null,"EDIT"===a?Object(w.jsx)(k,{item:l,isModal:!0,edit:!0}):null]}):null,Object(w.jsx)(u.m,{items:e.colors,fields:[{key:"id",_style:{width:"3%"},filter:!1},{key:"name",label:"Color Name",_style:{width:"30%"},filter:!1},{key:"code",label:"Color Hex Code",_style:{width:"10%"},filter:!1},{key:"image",label:"Color Image",sorter:!1,filter:!1},{key:"shortcut_name",label:"Color Shortcut Name",_style:{width:"20%"},filter:!1},{key:"action",_style:{width:"20%"},sorter:!1,filter:!1}],columnFilter:!0,tableFilter:!0,itemsPerPageSelect:!0,itemsPerPage:10,hover:!0,sorter:!0,pagination:!0,scopedSlots:{image:function(e){return Object(w.jsx)("td",{children:O(e)})},action:function(e){return Object(w.jsx)("td",{children:x(e)})}}})]})})})})),H=function(e){var t=e._setShowCreateForm;return Object(w.jsx)("div",{children:Object(w.jsxs)("div",{className:"d-flex justify-content-between align-items-start",children:[Object(w.jsx)("h4",{className:"outside-card-title mb-4",children:"Color"}),Object(w.jsx)(u.j,{md:"2",children:Object(w.jsx)(u.d,{block:!0,color:"warning",onClick:function(){t(!0)},children:Object(w.jsx)("span",{style:{color:"#fff",fontWeight:600},children:"+ \xa0Add Color"})})})]})})};t.default=function(){var e=Object(c.useState)(!1),t=Object(n.a)(e,2),r=t[0],a=t[1];return Object(w.jsxs)("div",{children:[Object(w.jsx)(H,{_setShowCreateForm:a}),r?Object(w.jsx)(k,{_setShowCreateForm:a}):null,Object(w.jsx)("h4",{className:"mt-5 mb-3 font-weight-bold",children:"All Colors"}),Object(w.jsx)(M,{})]})}}}]);
//# sourceMappingURL=13.ca43cac6.chunk.js.map
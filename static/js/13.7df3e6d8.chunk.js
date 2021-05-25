(this["webpackJsonpproduct-listing-frontend"]=this["webpackJsonpproduct-listing-frontend"]||[]).push([[13],{667:function(e,t,n){"use strict";n(1);var r=n(661),c=n(668),a=n(22),s=function(e){var t=e.name,n=e.label,s=e.placeholder,i=e.require,o=e.labelTag,l=e.type,u=e.onChange,d=e.value,b=e.error;return Object(a.jsxs)(r.M,{className:"mb-4",children:[Object(a.jsxs)(r.eb,{htmlFor:t,children:[n," ",o?Object(a.jsx)("small",{children:Object(a.jsx)("code",{children:o})}):null]}),Object(a.jsx)(r.U,{type:l,id:t,name:t,onChange:u,value:d,placeholder:s,required:!!i}),Object(a.jsx)(c.a,{children:b})]})};s.defaultProps={name:"Name",label:"Label",placeholder:"Placeholder here",require:!1,labelTag:!1},t.a=s},668:function(e,t,n){"use strict";n(1);var r=n(661),c=n(669),a=n(22);t.a=function(e){return Object(c.a)(e.children)?Object(a.jsx)("span",{}):Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(r.L,{children:Object(a.jsx)(r.N,{color:"red",style:{color:"red"},children:e.children})})})}},669:function(e,t,n){"use strict";t.a=function(e){return void 0===e||null===e||"object"===typeof e&&0===Object.keys(e).length||"string"===typeof e&&0===e.trim().length}},671:function(e,t,n){"use strict";var r=n(4),c=n(121),a=n.n(c),s=n(687),i=n(174),o=n(664),l=n(1),u=n(691),d=n(688),b=function(e){return new Promise((function(t,n){var r=new FileReader;r.readAsDataURL(e),r.onload=function(){return t(r.result)},r.onerror=function(e){return n("Error: ",e)}}))},j=(n(689),n(22)),f={display:"flex",flexDirection:"column",alignItems:"center",borderWidth:3,borderRadius:2,borderColor:"#eeeeee",borderStyle:"dashed",backgroundColor:"#fafafa",color:"#bdbdbd",transition:"border .3s ease-in-out"},h={borderColor:"#2196f3"},x={borderColor:"#00e676"},O={borderColor:"#ff1744"},p=function(e){var t=e.placeholder,n=e.padding,c=e.imagePreviewSize,p=e.previewOnSide,m=e.displayFlex,g=e.type,A=Object(l.useState)([]),v=Object(o.a)(A,2),E=v[0],w=v[1],y=Object(l.useCallback)(function(){var t=Object(i.a)(a.a.mark((function t(n){var r,c,i,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=[],c=Object(s.a)(n),t.prev=2,c.s();case 4:if((i=c.n()).done){t.next=10;break}return o=i.value,t.next=8,b(o).then((function(e){console.log("base64:",e),r.push({base64:e,type:g})})).catch((function(e){return console.log(e)}));case 8:t.next=4;break;case 10:t.next=15;break;case 12:t.prev=12,t.t0=t.catch(2),c.e(t.t0);case 15:return t.prev=15,c.f(),t.finish(15);case 18:0!==r.length&&w((function(t){return console.log("base64:2",r),e.setImageFiles(t.concat(r)),t.concat(r)}));case 19:case"end":return t.stop()}}),t,null,[[2,12,15,18]])})));return function(e){return t.apply(this,arguments)}}(),[]),k=Object(u.a)({onDrop:y,accept:"image/jpeg, image/png"}),N=k.getRootProps,C=k.getInputProps,S=k.isDragActive,D=k.isDragAccept,T=k.isDragReject,R=Object(l.useMemo)((function(){return Object(r.a)(Object(r.a)(Object(r.a)(Object(r.a)(Object(r.a)({},f),S?h:{}),D?x:{}),T?O:{}),{},{padding:"".concat(n,"px")})}),[S,T,D,n]);console.log(" files: ",E);var I=E.map((function(t,n){return Object(j.jsx)("div",{children:Object(j.jsx)("div",{style:{border:"1px dashed #E7E7E7",boxSizing:"border-box",borderRadius:"5px",padding:"1rem",maxHeight:{imagePreviewSize:c},width:"auto",borderWidth:3,borderColor:"#eeeeee",borderStyle:"dashed",marginRight:"1rem"},children:Object(j.jsxs)("div",{class:"d-flex justify-content-between align-items-start",children:[Object(j.jsx)("img",{src:t.base64,alt:t.type,height:c}),Object(j.jsx)("img",{src:"data:image/png;base64,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",alt:"Delete Product",onClick:function(){return function(t){var n=E.filter((function(e,n){return n!==t}));w((function(e){return n})),e.setImageFiles(n)}(n)}})]})})},n)}));return console.log(" product list[iu] ",e.product),Object(l.useEffect)((function(){return function(){E.forEach((function(e){return URL.revokeObjectURL(e.preview)}))}}),[E]),console.log(" Files [image] ",E),Object(j.jsxs)("section",{className:p?"d-flex flex-row-reverse justify-content-end align-items-center":null,children:[Object(j.jsxs)("div",Object(r.a)(Object(r.a)({},N({style:R})),{},{className:m?"px-5":"",children:[Object(j.jsx)("input",Object(r.a)({},C())),Object(j.jsxs)("div",{className:m?"d-flex justify-content-around":"",children:[Object(j.jsx)("div",{style:{backgroundImage:"url(".concat("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABeCAYAAACq0qNuAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAXRSURBVHgB7Z1dTuNIEIDLhkiIp9xgPSdYQCII8TDOCXY5AZkTACeAOcGKE5CcYLkB2QfEryA3GO8N/MpPYKuCe5XJQHe7/xw79UmWcdrJMJ+d6u7qbhPBDLe3t+nb29se/pjilgBjw4i2KIoGm5ubw+mCSPzw8PDQfn5+/hvehTPu6Y/H4+/b29sZHUzEX15eJktLS+fAd7hvslartY7kMR2h9CNg6SFIiqgCURHTz4EJBoacblxUpExAMMLsxVjjrgETmnQZ73iV+AwYExJZ2TLIyTqdzhdgSnNzc/MDJPJjYCqBxVcEi68IFl8RLL4iWHxFqJqTtYcSgMvLywn2V5I4jnPc57Mp2ipopHhKcb+8vOyj5B4ekvTJ66+vr5M9trFpN8RtgP2UPlRAo8QL4ZgBPMDDtuL0lDa8CEeUtBJ58lA0JsZTSEHh53h3H4Na+jQ0FvEDs7RHEJBGiJ8ayDFO+NEFu7q6OoBANEI8Sj8FBwM5WPn+hRcxhQDUXjzG6B44HCemi0h1BXimCXe869icPD4+9sAztRZ/fX39J+iFmCHG8O+4PwGN8QUMOX+AZ2rdnMTRM5WgHJuKu9hUHE69doAXrI/vlQ15pvf3979tbGz8C56o9R2vMWx5OCN9wtbWVg/eJxt9CvYHuuCRWotXDFvmsl4p9mIHIAHLvVawTU6S5bJCytnIyvHbxOIlyOS1Zc1ClVjVhbGl7jE+kxS3n56ePuyJ0gXBlss+mH+2NXWP8f/IylHe0WwaQOR0QNEMxRgvrXxtqXVzEpuKZ9jTlN65lAbA3i2liEdFeElBzdB3trLWd3zRVNS5MxOUTp2tFPQYgGdq36rBu/4Q3JKFGBypvfjirj8BN1BP12vHSeA9xtM0cNx9xcpqjWIsNdOoUsTtzFUcbbVax1hhfgWLfDyBv9O3UCNR3sQXgxOn+J9J6Rilg9gX8ZYqvT5KO6QVEmABvR+biF2Uf4yH+wYf8VFOxyteQs3UiFCqOLWHsh7ofLCE5GNsPkCB36DEDGf65uF71kNKJ5yLN1hPNTnfhXwCBfZphnNxAYbwce82w+2E4jkmzHZDD3QTTkONxSI2Id/ZaD9dANz1xe8lXl9ZWcltQ5sLnIl3sHLQuXxBFXe0CiehxuFyTadhZ56xFu9hjexCyLcSX1J6hi2IXVDkyQsaL99YfFnpRQviDJuP1DNcePlG4k2kiwpuZ2dnxPINxNtIF7D8kuJdSBcsunxt8S6lCxZZvpZ4H9IFiypfKd6ndME8yA99MSNMzb5JyvNiS0CNkfRpLi4u1jBNTBdZZ06L1b83tVwnhZ+zqJPHWU0/TckE2yX1bQgknQh159MFpnR0sXoknSmmwZQefXYxBdwLLnI1TqQLfMu/u7vbK75VqvdQ+amvJTq24p1KF/iST9JxCLIPJdZI0bfCh3wb8V6kC1zLn5JeGh/yTcV7lS5wJd9GusC1fBPxQaQLbOW7kC5wKb+s+KDSBabyS0rXGg50Jb+M+EqkC0zkl5A+wpbOF5SqNXXPhXxd8ZVKF5SVD3qQ9C4NgNMSnVDydcTPhXRBSfkq/pcuXgglXyU+nyfpAkfyf5EuCCFfKX4ep0YQlvI/lS7wLb/Ws4UN5SulC3zKr/00bZJPcx9Bb77kUFe6wJf8Riy3pHBIdVGxbD774BRaUr/b6XS6JtP3fMhX5eNr+YhbSvvGcdzGdny+urqauZorqbEUX5tGiveJK/n8+MOSlAk7Mli8AS7ks3hDbOWzeAts5LN4S0zls3gHmMhn8Y4oK5/FO6SMfBbvGF35LN4DxcPmMtk5LL4iWHxFsPiKYPEVweIrgsVXBIuvCNUIFJEBY0IiK6THpmSKk2RljBmjWPW0UsYLo9jV3HFGn/F4PIiLh6ANgQlFn5xPWjWtVoueI5MB4xuaeEWTrt6bkzThp5iJZT1tgfkUmj64LiYBR7Ol9Aeo4jjuRVH0O1g+uZSZRJEhxfTZ51r+B2OkKBS1k4G8AAAAAElFTkSuQmCC",")"),backgroundRepeat:"no-repeat",width:"94px",height:"94px"},className:m?"px-5":"mx-auto"}),Object(j.jsx)("div",{style:{fontWeight:500,marginBottom:"-1rem",marginTop:"1rem"},className:m?"px-5":"",children:Object(d.a)(t)})]})]})),Object(j.jsx)("aside",{className:"d-flex",style:{overflowX:"auto"},children:I})]})};p.defaultProps={placeholder:"",padding:5,imagePreviewSize:50,previewOnSide:!1,displayFlex:!1};t.a=p},673:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(121),c=n.n(r),a=n(174),s=n(176),i=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r,i,o){var l,u,d;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!window.navigator.onLine){e.next=12;break}return l=function(){var e=Object(a.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s.b).concat(t),{method:n,signal:r,headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.next=5,l();case 5:return u=e.sent,e.next=8,u.json();case 8:return d=e.sent,e.abrupt("return",{json:d,response:u});case 12:console.log("the app now is offline okay!"),alert("You are offline!!");case 14:e.next=19;break;case 16:throw e.prev=16,e.t0=e.catch(0),e.t0;case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t,n,r,c,a){return e.apply(this,arguments)}}()},678:function(e,t,n){"use strict";var r=n(664),c=n(663),a=n(1),s=n(661),i=n(22);t.a=function(e){var t=e.title,n=e.showModal,o=e.onClose,l=Object(c.a)(e,["title","showModal","onClose"]),u=Object(a.useState)(!1),d=Object(r.a)(u,2),b=d[0],j=d[1];return Object(a.useEffect)((function(){console.log("Converting from ",b,!0),j(!0)}),[n]),Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(s.ib,{show:b,onClose:function(){return o(!1)},size:"lg",children:[Object(i.jsx)(s.lb,{closeButton:!0,children:Object(i.jsx)(s.mb,{children:t})}),Object(i.jsx)(s.jb,{children:l.children})]})})}},679:function(e,t,n){"use strict";t.a=n.p+"static/media/view.ba2eff2b.svg"},680:function(e,t,n){"use strict";t.a=n.p+"static/media/edit.a2e87322.svg"},681:function(e,t,n){"use strict";t.a=n.p+"static/media/trash.f88bd880.svg"},686:function(e,t,n){"use strict";var r=n(664),c=n(663),a=n(1),s=n(661),i=n(667),o=n(671),l=n(70),u=n(69),d=n(93),b=n(68),j=n(22),f=function(e){var t=e.isModal,n=Object(c.a)(e,["isModal"]),d=Object(a.useState)(""),b=Object(r.a)(d,2),f=b[0],h=b[1],x=Object(a.useState)(""),O=Object(r.a)(x,2),p=O[0],m=O[1],g=Object(a.useState)({}),A=Object(r.a)(g,2),v=A[0],E=A[1],w=Object(a.useState)(!1),y=Object(r.a)(w,2),k=y[0],N=y[1],C=function(){if(f&&p&&v)return{name:f,shortcut_name:p,logo:v.base64};console.log("validation error")};return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(s.j,{className:t?"px-3":"addpro-custom-card sm-pd mt-4",children:[t?null:Object(j.jsx)("h4",{className:"outside-card-title mb-4 p-2",children:"Add Manufacturer"}),Object(j.jsxs)(s.k,{children:[Object(j.jsxs)(s.yb,{class:"d-flex justify-content-evenly align-items-start",children:[Object(j.jsxs)(s.w,{md:"6",children:[Object(j.jsx)(i.a,{label:"Manufacturer name",placeholder:"Enter Manufacturer name here",onChange:function(e){console.log(e.target.value),h(e.target.value)},value:f}),Object(j.jsx)(i.a,{label:"Manufacturer Shortcut Name",placeholder:"Eg. BNSH",onChange:function(e){m(e.target.value)},value:p})]}),Object(j.jsxs)("div",{className:"ml-5",children:[Object(j.jsx)(s.eb,{children:"Logo"}),Object(j.jsx)(o.a,{placeholder:"<u>Click here</u> to select image <br/><b>OR</b> Drag and drop here",padding:20,imagePreviewSize:150,previewOnSide:!0,displayFlex:!t,type:"MANUFACTURER_IMAGES",setImageFiles:function(e){return function(e){e&&e.length>0?E(e[e.length-1]):E(null)}(e)}})]})]}),Object(j.jsxs)(s.yb,{children:[Object(j.jsx)(s.w,{sm:"2",md:"2",children:Object(j.jsx)(s.f,{block:!0,variant:"outline",color:"dark",onClick:function(){document.dispatchEvent(new KeyboardEvent("keydown",{keyCode:27}))},children:"Cancel"})}),Object(j.jsx)(s.w,{sm:"2",md:"2",children:Object(j.jsx)(s.f,{block:!0,color:"dark",onClick:function(e){N(!0),console.log("Payload for manufacturer: ",C()),Object(l.a)(u.b,"post",C()).then((function(e){Object(l.a)(u.b,"get").then((function(e){e.message&&"Network Error"===e.message?N(!1):(n.updateManufacturers(e),N(!1),h(""),m(""))}))})).catch((function(e){throw N(!1),e}))},disabled:k,children:k?Object(j.jsx)(s.Hb,{color:"secondary",size:"sm"}):"Add"})})]})]})]})})};f.defaultProps={isModal:!1},t.a=Object(d.b)(null,{updateManufacturers:b.m})(f)},792:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(661),a=(n(666),n(22)),s=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("div",{className:"d-flex justify-content-between align-items-start",children:Object(a.jsx)("h4",{className:"outside-card-title mb-2 mr-auto",children:"Manufacturer"})})})},i=n(686),o=n(664),l=n(93),u=n(707),d=n(176),b=n(679),j=n(680),f=n(681),h=n(121),x=n.n(h),O=n(174),p=n(69),m=n(673),g=function(){var e=Object(O.a)(x.a.mark((function e(t,n){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(m.a)(p.b+"".concat(n,"/"),"DELETE",t);case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),e.t0;case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,n){return e.apply(this,arguments)}}(),A=n(68),v=n(678),E=n(663),w=n(70),y=Object(l.b)(null,{updateManufacturers:A.m})((function(e){var t=e.item,n=Object(E.a)(e,["item"]),s=Object.freeze({NOT_DELETED:"NOT_DELETED",DELETING:"DELETING",DELETED:"DELETED"}),i=Object(r.useState)(s.NOT_DELETED),l=Object(o.a)(i,2),u=l[0],d=l[1],b=function(){var e=Object(O.a)(x.a.mark((function e(t){var r,c,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new AbortController,c=r.signal,d(s.DELETING),console.log("[DELETE] BRAND: ",t),e.next=6,g(c,t.id);case 6:a=e.sent,d(s.DELETED),console.log(a),Object(w.a)(p.b,"get").then((function(e){e.message&&"Network Error"===e.message||n.updateManufacturers(e)}));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"text-center",children:[u==s.DELETED?Object(a.jsxs)("p",{children:[Object(a.jsx)("strong",{children:t.name})," manufacturer successfully deleted."]}):Object(a.jsxs)("p",{children:["Are you sure want to delete ",Object(a.jsx)("strong",{children:t.name})," manufacturer ?"]}),Object(a.jsx)(c.f,{color:u==s.DELETED?"success":"danger",disabled:u==s.DELETING||u==s.DELETED,onClick:function(){b(t)},children:u==s.DELETING?Object(a.jsx)(c.Hb,{color:"secondary",size:"sm"}):u==s.NOT_DELETED?"Delete":"Deleted"})]})})),k=Object(l.b)((function(e){return{manufacturers:e.root.manufacturers}}),{updateManufacturers:A.m})((function(e){var t=Object(r.useState)(""),n=Object(o.a)(t,2),s=n[0],i=n[1],l=Object(r.useState)({}),h=Object(o.a)(l,2),x=h[0],O=h[1],p=Object(r.useState)(!1),m=Object(o.a)(p,2),g=m[0],A=m[1],E=function(e){return Object(a.jsx)(a.Fragment,{children:e.logo?Object(a.jsx)("img",{src:e.logo,height:"50px",alt:e.name}):Object(a.jsx)(u.a,{color:u.a.getRandomColor("sitebase",["red","green","blue","pink"]),value:e.shortcut_name,round:!0,size:"50px"})})},w=function(e){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(c.f,{onClick:function(){O(e),i(d.a.VIEW),A(!0)},children:Object(a.jsx)("img",{src:b.a,alt:"View"})}),Object(a.jsx)(c.f,{onClick:function(){O(e),i(d.a.EDIT),A(!0)},children:Object(a.jsx)("img",{src:j.a,alt:"Edit"})}),Object(a.jsx)(c.f,{onClick:function(){O(e),i(d.a.DELETE),A(!0)},children:Object(a.jsx)("img",{src:f.a,alt:"Delete"})})]})};return Object(a.jsx)(c.j,{children:Object(a.jsxs)(c.k,{style:{background:"white",borderRadius:"10px",padding:"2rem"},children:[g?Object(a.jsx)(v.a,{showModal:g,title:"".concat(s," ").concat(x.name),onClose:A,children:"DELETE"===s?Object(a.jsx)(y,{item:x}):null}):null,Object(a.jsx)(c.A,{items:e.manufacturers,fields:[{key:"id",_style:{width:"3%"},filter:!1},{key:"name",_style:{width:"40%"}},{key:"logo",label:"Manufacturer Logo",sorter:!1,filter:!1},{key:"shortcut_name",label:"Manufacturer Shortcut Name",_style:{width:"20%"}},{key:"action",_style:{width:"20%"},sorter:!1,filter:!1}],columnFilter:!0,tableFilter:!0,itemsPerPageSelect:!0,itemsPerPage:5,hover:!0,sorter:!0,pagination:!0,scopedSlots:{logo:function(e){return Object(a.jsx)("td",{children:E(e)})},action:function(e){return Object(a.jsx)("td",{children:w(e)})}}})]})})}));t.default=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(s,{}),Object(a.jsx)(i.a,{}),Object(a.jsx)("h4",{className:"mt-5 mb-3 font-weight-bold",children:"All Manufacturers"}),Object(a.jsx)(k,{})]})}}}]);
//# sourceMappingURL=13.7df3e6d8.chunk.js.map
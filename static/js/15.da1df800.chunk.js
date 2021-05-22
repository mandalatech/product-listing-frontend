(this["webpackJsonpproduct-listing-frontend"]=this["webpackJsonpproduct-listing-frontend"]||[]).push([[15],{635:function(e,t,r){"use strict";r(1);var c=r(629),n=r(636),a=r(21),l=function(e){var t=e.name,r=e.label,l=e.placeholder,i=e.require,s=e.labelTag,d=e.type,o=e.onChange,j=e.value,b=e.error;return Object(a.jsxs)(c.M,{className:"mb-4",children:[Object(a.jsxs)(c.eb,{htmlFor:t,children:[r," ",s?Object(a.jsx)("small",{children:Object(a.jsx)("code",{children:s})}):null]}),Object(a.jsx)(c.U,{type:d,id:t,name:t,onChange:o,value:j,placeholder:l,required:!!i}),Object(a.jsx)(n.a,{children:b})]})};l.defaultProps={name:"Name",label:"Label",placeholder:"Placeholder here",require:!1,labelTag:!1},t.a=l},636:function(e,t,r){"use strict";r(1);var c=r(629),n=r(638),a=r(21);t.a=function(e){return Object(n.a)(e.children)?Object(a.jsx)("span",{}):Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(c.L,{children:Object(a.jsx)(c.N,{color:"red",style:{color:"red"},children:e.children})})})}},638:function(e,t,r){"use strict";t.a=function(e){return void 0===e||null===e||"object"===typeof e&&0===Object.keys(e).length||"string"===typeof e&&0===e.trim().length}},640:function(e,t,r){"use strict";var c=r(8),n=r(633),a=r(1),l=r(654),i=r(652),s=r(21),d={display:"flex",flexDirection:"column",alignItems:"center",borderWidth:3,borderRadius:2,borderColor:"#eeeeee",borderStyle:"dashed",backgroundColor:"#fafafa",color:"#bdbdbd",transition:"border .3s ease-in-out"},o={borderColor:"#2196f3"},j={borderColor:"#00e676"},b={borderColor:"#ff1744"},u=function(e){var t=e.placeholder,r=e.padding,u=e.imagePreviewSize,A=e.previewOnSide,x=e.displayFlex,f=Object(a.useState)([]),h=Object(n.a)(f,2),p=h[0],O=h[1],m=Object(a.useCallback)((function(e){var t=e.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})}));O((function(e){return e.concat(t)}))}),[]);console.log(" saved files : ",p);var g=Object(l.a)({onDrop:m,accept:"image/jpeg, image/png"}),v=g.getRootProps,C=g.getInputProps,y=g.isDragActive,N=g.isDragAccept,w=g.isDragReject,S=Object(a.useMemo)((function(){return Object(c.a)(Object(c.a)(Object(c.a)(Object(c.a)(Object(c.a)({},d),y?o:{}),N?j:{}),w?b:{}),{},{padding:"".concat(r,"px")})}),[y,w,N,r]),k=p.map((function(e,t){return Object(s.jsx)("div",{children:Object(s.jsx)("div",{style:{border:"1px dashed #E7E7E7",boxSizing:"border-box",borderRadius:"5px",padding:"1rem",maxHeight:{imagePreviewSize:u},width:"auto",borderWidth:3,borderColor:"#eeeeee",borderStyle:"dashed",marginRight:"1rem"},children:Object(s.jsxs)("div",{class:"d-flex justify-content-between align-items-start",children:[Object(s.jsx)("img",{src:e.preview,alt:e.name,height:u}),Object(s.jsx)("img",{src:"data:image/png;base64,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",alt:"Delete Product",onClick:function(){return function(e){var t=p.filter((function(t,r){return r!==e}));O((function(e){return t}))}(t)}})]})})},e.name)}));return console.log(" product list[iu] ",e.product),Object(a.useEffect)((function(){return function(){p.forEach((function(e){return URL.revokeObjectURL(e.preview)}))}}),[p]),console.log(" Files [image] ",p),Object(s.jsxs)("section",{className:A?"d-flex flex-row-reverse justify-content-end align-items-center":null,children:[Object(s.jsxs)("div",Object(c.a)(Object(c.a)({},v({style:S})),{},{className:x?"px-5":"",children:[Object(s.jsx)("input",Object(c.a)({},C())),Object(s.jsxs)("div",{className:x?"d-flex justify-content-around":"",children:[Object(s.jsx)("div",{style:{backgroundImage:"url(".concat("data:image/png;base64,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",")"),backgroundRepeat:"no-repeat",width:"94px",height:"94px"},className:x?"px-5":"mx-auto"}),Object(s.jsx)("div",{style:{fontWeight:500,marginBottom:"-1rem",marginTop:"1rem"},className:x?"px-5":"",children:Object(i.a)(t)})]})]})),Object(s.jsx)("aside",{className:"d-flex",style:{overflowX:"auto"},children:k})]})};u.defaultProps={placeholder:"",padding:5,imagePreviewSize:50,previewOnSide:!1,displayFlex:!1};t.a=u},651:function(e,t,r){"use strict";r(1);var c=r(629),n=r(635),a=r(640),l=r(21),i=function(e){var t=e.isModal;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(c.j,{className:t?"px-3":"addpro-custom-card sm-pd mt-4",children:[t?null:Object(l.jsx)("h4",{className:"outside-card-title mb-4 p-2",children:"Add Manufacturer"}),Object(l.jsxs)(c.k,{children:[Object(l.jsxs)(c.yb,{class:"d-flex justify-content-evenly align-items-start",children:[Object(l.jsxs)(c.w,{md:"6",children:[Object(l.jsx)(n.a,{label:"Manufacturer name",placeholder:"Enter Manufacturer name here"}),Object(l.jsx)(n.a,{label:"Manufacturer Shortcut Name",placeholder:"Eg. BNSH"})]}),Object(l.jsxs)("div",{className:"ml-5",children:[Object(l.jsx)(c.eb,{children:"Logo"}),Object(l.jsx)(a.a,{placeholder:"<u>Click here</u> to select image <br/><b>OR</b> Drag and drop here",padding:20,imagePreviewSize:150,previewOnSide:!0,displayFlex:!t})]})]}),Object(l.jsxs)(c.yb,{children:[Object(l.jsx)(c.w,{sm:"2",md:"2",children:Object(l.jsx)(c.f,{block:!0,variant:"outline",color:"dark",onClick:function(){document.dispatchEvent(new KeyboardEvent("keydown",{keyCode:27}))},children:"Cancel"})}),Object(l.jsx)(c.w,{sm:"2",md:"2",children:Object(l.jsx)(c.f,{block:!0,color:"dark",children:"Add"})})]})]})]})})};i.defaultProps={isModal:!1},t.a=i},780:function(e,t,r){"use strict";r.r(t);r(1);var c=r(629),n=r(634),a=r(21),l=function(){return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"d-flex justify-content-between align-items-start",children:[Object(a.jsx)("h4",{className:"outside-card-title mb-4 mr-auto",children:"Manufacturer"}),Object(a.jsx)(c.w,{md:"4",children:Object(a.jsxs)(c.X,{children:[Object(a.jsx)(c.Z,{children:Object(a.jsx)(c.ab,{style:{backgroundColor:"#ffffff"},children:Object(a.jsx)(n.a,{name:"cil-magnifying-glass"})})}),Object(a.jsx)(c.U,{placeholder:"Search Manufacturers"})]})}),Object(a.jsx)(c.w,{md:"2",children:Object(a.jsx)(c.f,{block:!0,color:"warning",children:Object(a.jsx)("span",{style:{color:"#fff",fontWeight:600},children:"+ \xa0Add Manufacturer"})})})]})})},i=r(651);t.default=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(l,{}),Object(a.jsx)(i.a,{})]})}}}]);
//# sourceMappingURL=15.da1df800.chunk.js.map
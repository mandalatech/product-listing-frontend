(this["webpackJsonpproduct-listing-frontend"]=this["webpackJsonpproduct-listing-frontend"]||[]).push([[18],{691:function(e,t,s){"use strict";s(1);var c=s(29),a=s(692),n=s(8),r=function(e){var t=e.name,s=e.label,r=e.placeholder,l=e.require,i=e.labelTag,o=e.type,j=e.onChange,d=e.value,b=e.error,u=e.disabled,m=e.helpText,h=e.secondaryLabel,O=e.secondaryLabelClick,x=e.onBlur,f=e.plaintext;return Object(n.jsxs)(c.u,{className:"mb-4",children:[Object(n.jsxs)(c.I,{htmlFor:t,children:[s," ",i?Object(n.jsx)("small",{children:Object(n.jsx)("code",{children:i})}):null]}),Object(n.jsx)("span",{className:"font-weight-bold text-secondary",style:{float:"right",cursor:"pointer"},onClick:function(){O()},children:h}),Object(n.jsx)(c.C,{type:o,id:t,name:t,onChange:j,value:d,placeholder:r,required:!!l,disabled:u,onBlur:x,plaintext:f}),Object(n.jsx)("p",{className:"small",children:m}),Object(n.jsx)(a.a,{children:b})]})};r.defaultProps={name:"Name",label:"Label",placeholder:"Placeholder here",require:!1,labelTag:!1,disabled:!1,helpText:"",plaintext:!1},t.a=r},692:function(e,t,s){"use strict";s(1);var c=s(29),a=s(65),n=s(8);t.a=function(e){return Object(a.a)(e.children)?Object(n.jsx)("span",{}):Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(c.t,{children:Object(n.jsx)(c.v,{color:"red",style:{color:"red"},children:e.children})})})}},694:function(e,t,s){"use strict";var c=s(85),a=s(197),n=s(29),r=s(1),l=s(8),i=["title","showModal","onClose","size"],o=function(e){var t=e.title,s=e.showModal,o=e.onClose,j=e.size,d=Object(a.a)(e,i),b=Object(r.useState)(!1),u=Object(c.a)(b,2),m=u[0],h=u[1];return Object(r.useEffect)((function(){h(!0)}),[s]),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(n.K,{show:m,onClose:function(){return o(!1)},size:j,children:[Object(l.jsx)(n.M,{closeButton:!0,children:Object(l.jsx)(n.N,{children:t})}),Object(l.jsx)(n.L,{children:d.children})]})})};o.defaultProps={size:"lg"},t.a=o},696:function(e,t,s){"use strict";t.a=s.p+"static/media/edit.a2e87322.svg"},697:function(e,t,s){"use strict";t.a=s.p+"static/media/trash.f88bd880.svg"},854:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s(77),n=s(87),r=s(701),l=s(115),i=s(65),o=s(85),j=s(29),d=s.p+"static/media/settings.e5ff19e1.svg",b=s.p+"static/media/logs.06e7d35a.svg",u=s.p+"static/media/password.13eea246.svg",m=s.p+"static/media/profileAvatar.04508acb.svg",h=s(694),O=s(197),x=s(52),f=s(691),p=s(8),g=["isModal","fn","ln","em"],v=function(e){var t=e.isModal,s=e.fn,a=e.ln,r=e.em,l=Object(O.a)(e,g),d=Object(c.useState)(""),b=Object(o.a)(d,2),u=b[0],m=b[1],h=Object(c.useState)(""),v=Object(o.a)(h,2),w=v[0],N=v[1],k=Object(c.useState)(""),C=Object(o.a)(k,2),y=C[0],S=C[1],_=Object(c.useState)(!1),E=Object(o.a)(_,2),L=E[0],P=E[1];Object(c.useEffect)((function(){m(s),N(a),S(r)}),[]);var M=function(){document.dispatchEvent(new KeyboardEvent("keydown",{keyCode:27}))};return Object(p.jsx)(j.e,{className:t?"px-3":"addpro-custom-card sm-pd mt-4",children:Object(p.jsx)(j.f,{children:Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={};u.trim()!==s.trim()&&(t.first_name=u),w.trim()!==a.trim()&&(t.last_name=w),y.trim()!==r.trim()&&(t.email=y),Object(i.a)(t)?Object(x.b)("No changes made"):(P(!0),Object(i.a)(l.token)?x.b.error("Token Error"):Object(n.i)((new AbortController).signal,l.token,t).then((function(e){var t=e.json;if(e.response.ok){var s={first_name:t.first_name,last_name:t.last_name,email:t.email,id:t.id};l.updateUserDetailsState(s),M(),x.b.success("Updated successfully")}else x.b.success("Cant be updated.");P(!1)})))},children:[Object(p.jsxs)(j.S,{children:[Object(p.jsx)(j.j,{xs:"12",md:"6",children:Object(p.jsx)(f.a,{label:"First Name",placeholder:"First Name",value:u,onChange:function(e){return m(e.target.value)},required:!0})}),Object(p.jsx)(j.j,{xs:"12",md:"6",children:Object(p.jsx)(f.a,{label:"Last Name",placeholder:"Last Name",value:w,onChange:function(e){return N(e.target.value)},required:!0})})]}),Object(p.jsx)(j.S,{children:Object(p.jsx)(j.j,{children:Object(p.jsx)(f.a,{type:"email",label:"Email",placeholder:"Email",value:y,onChange:function(e){return S(e.target.value)},required:!0,disabled:!0,plaintext:!0})})}),Object(p.jsxs)(j.S,{children:[Object(p.jsx)(j.j,{sm:"2",md:"2",children:Object(p.jsx)(j.d,{block:!0,variant:"outline",color:"dark",type:"button",onClick:function(){return M()},children:"Cancel"})}),Object(p.jsx)(j.j,{sm:"2",md:"2",children:Object(p.jsx)(j.d,{block:!0,color:"dark",disabled:L,type:"submit",children:L?Object(p.jsx)(j.ab,{color:"secondary",size:"sm"}):"Save"})})]})]})})})};v.defaultProps={isModal:!1};var w=Object(a.b)((function(e){return{token:e.user.token}}),{updateUserDetailsState:l.e})(v),N=s.p+"static/media/clock.b993e2ee.svg",k=s.p+"static/media/create.4c0ab963.svg",C=s(696),y=s(697),S=Object(a.b)((function(e){return{token:e.user.token}}),null)((function(e){var t=Object(c.useState)({}),s=Object(o.a)(t,2),a=(s[0],s[1]),r=Object(c.useState)([]),l=Object(o.a)(r,2),d=l[0],b=l[1],u=function(e){switch(e){case 1:return k;case 2:return C.a;case 3:return y.a;default:return null}};return Object(c.useEffect)((function(){if(!Object(i.a)(e.token)){var t=(new AbortController).signal;Object(n.f)(t,e.token).then((function(e){var t=e.json;e.response.ok&&(a({count:t.count,next:t.next,previous:t.previous}),b(t.results))}))}}),[]),Object(p.jsx)("div",{style:{overflowY:"scroll",overflowX:"hidden"},children:Object(p.jsx)(j.S,{children:Object(p.jsxs)(j.j,{xs:"12",md:"12",className:"mb-4",children:[Object(p.jsx)("h4",{className:"outside-card-title mb-4",children:"Logs"}),Object(p.jsx)(j.e,{className:"addpro-custom-card sm-pd",children:Object(p.jsx)(j.f,{children:Object(p.jsx)(j.S,{children:d.map((function(e){return Object(p.jsx)(j.j,{xs:"12",md:"4",className:"mb-3",children:Object(p.jsxs)(j.e,{className:"shadow-sm m-2 p-3 bg-light",children:[Object(p.jsxs)("p",{className:"mb-1 font-weight-bold d-flex align-items-center",children:[Object(p.jsx)("img",{src:u(e.action_flag),alt:"Action",height:"17"}),Object(p.jsx)("span",{className:"pl-2",children:e.str_repr})]}),Object(p.jsxs)("p",{className:"m-0 d-flex align-items-center",children:[Object(p.jsx)("img",{src:N,alt:"Time",height:"11"}),Object(p.jsx)("span",{className:"pl-2",children:e.humanized_time})]})]},e.id)})}))})})})]})})})})),_=s(49),E=Object(a.b)((function(e){return{}}),{})((function(e){var t=Object(c.useState)(!1),s=Object(o.a)(t,2),a=s[0],r=s[1],l=Object(c.useState)(""),i=Object(o.a)(l,2),d=i[0],b=i[1],u=Object(c.useState)(""),m=Object(o.a)(u,2),h=m[0],O=m[1];return Object(p.jsx)(j.e,{className:"d-flex align-items-center",style:{backgroundColor:"white"},children:Object(p.jsx)(j.f,{style:{width:"40rem"},children:Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r(!0),Object(n.a)((new AbortController).signal,{new_password1:d,new_password2:h}).then((function(e){var t=e.json,s=e.response;if(r(!1),s.ok)document.dispatchEvent(new KeyboardEvent("keydown",{keyCode:27})),x.b.success("Password changed successfully.");else for(var c in t){t[c].forEach((function(e){x.b.error(e)}))}}))},children:[Object(p.jsxs)(j.E,{className:"mb-4",children:[Object(p.jsx)(j.G,{children:Object(p.jsx)(j.H,{children:Object(p.jsx)(_.b,{name:"cil-lock-locked"})})}),Object(p.jsx)(j.C,{type:"password",placeholder:"Password",required:!0,value:d,onChange:function(e){return b(e.target.value)}})]}),Object(p.jsxs)(j.E,{className:"mb-4",children:[Object(p.jsx)(j.G,{children:Object(p.jsx)(j.H,{children:Object(p.jsx)(_.b,{name:"cil-lock-locked"})})}),Object(p.jsx)(j.C,{type:"password",placeholder:"Confirm Password",required:!0,value:h,onChange:function(e){return O(e.target.value)}})]}),Object(p.jsx)(j.S,{children:Object(p.jsx)(j.j,{xs:"6",children:Object(p.jsx)(j.d,{color:"primary",className:"px-4",type:"submit",disabled:a,children:a?Object(p.jsx)(j.ab,{color:"secondary",size:"sm"}):"Update Password"})})})]})})})})),L=function(e){var t=e.firstName,s=e.lastName,a=e.email,n=Object(c.useState)(!1),r=Object(o.a)(n,2),l=r[0],i=r[1],O=Object(c.useState)(!1),x=Object(o.a)(O,2),f=x[0],g=x[1],v=Object(c.useState)(!1),N=Object(o.a)(v,2),k=N[0],C=N[1];return Object(p.jsxs)("div",{children:[l?Object(p.jsx)(h.a,{showModal:l,title:"Edit Profile",onClose:i,children:Object(p.jsx)(w,{fn:t,ln:s,em:a,isModal:!0})}):null,f?Object(p.jsx)(h.a,{showModal:f,title:"Admin Logs",onClose:g,size:"xl",children:Object(p.jsx)(S,{})}):null,k?Object(p.jsx)(h.a,{showModal:k,title:"Change Password",onClose:C,children:Object(p.jsx)(E,{})}):null,Object(p.jsx)(j.S,{children:Object(p.jsxs)(j.j,{xs:"12",md:"12",className:"mb-4",children:[Object(p.jsx)("h4",{className:"outside-card-title mb-4",children:"Profile"}),Object(p.jsx)(j.e,{className:"addpro-custom-card sm-pd",children:Object(p.jsxs)(j.f,{children:[Object(p.jsxs)("div",{className:"d-flex flex-column align-items-end",style:{marginBottom:"-150px"},children:[Object(p.jsx)("button",{className:"mt-4 btn btn-light rounded shadow",onClick:function(){return i(!0)},children:Object(p.jsx)("img",{src:d,alt:"Settings",height:"25"})}),Object(p.jsx)("button",{className:"mt-4 btn btn-light rounded shadow",onClick:function(){return g(!0)},children:Object(p.jsx)("img",{src:b,alt:"Settings",height:"25"})}),Object(p.jsx)("button",{className:"mt-4 btn btn-light rounded shadow",onClick:function(){return C(!0)},children:Object(p.jsx)("img",{src:u,alt:"Settings",height:"25"})})]}),Object(p.jsxs)("div",{className:"text-center",children:[Object(p.jsx)("div",{class:"avatar mb-4",children:Object(p.jsx)("img",{class:"avatar-img",src:m,alt:"user@email.com",height:"100",title:"This is an auto-generated static image."})}),Object(p.jsx)("p",{className:"h4 font-weight-bold",children:"".concat(t," ").concat(s)}),Object(p.jsx)("p",{className:"h6",children:a})]})]})})]})})]})};L.defaultProps={firstName:"Loading",lastName:"...",email:"weareloading@pr.com"};var P=Object(a.b)(null,{})(L);t.default=Object(a.b)((function(e){return{token:e.user.token,email:e.user.email,first_name:e.user.first_name,last_name:e.user.last_name}}),{setLoader:r.a,updateUserDetails:l.e})((function(e){return Object(c.useEffect)((function(){if(e.setLoader(!0),!Object(i.a)(e.token)){var t=(new AbortController).signal;Object(n.e)(t,e.token).then((function(t){var s=t.json;if(t.response.ok){var c={first_name:s.first_name,last_name:s.last_name,email:s.email,id:s.id};e.updateUserDetails(c),e.setLoader(!1)}}))}}),[]),Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(P,{firstName:e.first_name,lastName:e.last_name,email:e.email})})}))}}]);
//# sourceMappingURL=18.33f1187a.chunk.js.map
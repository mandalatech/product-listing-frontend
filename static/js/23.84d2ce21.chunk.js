(this["webpackJsonpproduct-listing-frontend"]=this["webpackJsonpproduct-listing-frontend"]||[]).push([[23],{868:function(e,t,s){"use strict";s.r(t);var c=s(85),r=s(50),a=s(31),n=s(1),i=s(52),l=s(77),o=s(212),j=s(87),d=s(115),b=s(65),u=s.p+"static/media/login.9ff10445.svg",m=s(8);t.default=Object(l.b)((function(e){return{message:e.user.message}}),{loginError:d.b,loginUser:d.c,clearUserMessage:d.a})((function(e){var t=Object(n.useState)(""),s=Object(c.a)(t,2),l=s[0],d=s[1],g=Object(n.useState)(""),O=Object(c.a)(g,2),h=O[0],x=O[1],p=Object(n.useState)(!1),f=Object(c.a)(p,2),v=f[0],y=f[1];Object(n.useEffect)((function(){Object(b.a)(e.message)||Object(i.b)(e.message),e.clearUserMessage()}),[e.message]);return Object(m.jsx)("div",{children:Object(m.jsx)(a.k,{className:"d-flex justify-content-around align-items-center",style:{height:"100vh"},children:Object(m.jsxs)(a.e,{className:"p-5 d-flex align-items-center",style:{backgroundColor:"white",borderRadius:"3%"},children:[Object(m.jsx)("img",{src:u,alt:"Login",style:{width:"25rem"}}),Object(m.jsx)(a.f,{style:{width:"40rem"},children:Object(m.jsxs)(a.t,{onSubmit:function(t){t.preventDefault(),y(!0);var s=(new AbortController).signal;Object(j.g)(s,{email:l,password:h}).then((function(t){var s=t.json;if(t.response.ok){var c=s.key,r=s.user,a=r.id,n=r.email,i=r.first_name,l=r.last_name;localStorage.setItem("productListingUserKey",c),e.loginUser({userID:a,email:n,token:c,first_name:i,last_name:l})}else localStorage.removeItem("productListingUserKey"),e.loginError();y(!1)}))},children:[Object(m.jsx)("h1",{children:"Login"}),Object(m.jsx)("p",{className:"text-muted",children:"Sign In to your account"}),Object(m.jsxs)(a.E,{className:"mb-3",children:[Object(m.jsx)(a.G,{children:Object(m.jsx)(a.H,{children:Object(m.jsx)(r.b,{name:"cil-user"})})}),Object(m.jsx)(a.C,{type:"email",placeholder:"Email",autoComplete:"email",onChange:function(e){return d(e.target.value)},value:l,required:!0})]}),Object(m.jsxs)(a.E,{className:"mb-4",children:[Object(m.jsx)(a.G,{children:Object(m.jsx)(a.H,{children:Object(m.jsx)(r.b,{name:"cil-lock-locked"})})}),Object(m.jsx)(a.C,{type:"password",placeholder:"Password",onChange:function(e){return x(e.target.value)},value:h,required:!0})]}),Object(m.jsxs)(a.P,{children:[Object(m.jsx)(a.j,{xs:"6",children:Object(m.jsx)(a.d,{color:"primary",className:"px-4",type:"submit",disabled:v,children:v?Object(m.jsx)(a.X,{color:"secondary",size:"sm"}):"Login"})}),Object(m.jsx)(a.j,{xs:"6",className:"text-right",children:Object(m.jsx)(o.Link,{className:"px-0",to:"/forgot-password",children:"Forgot password?"})})]})]})})]})})})}))}}]);
//# sourceMappingURL=23.84d2ce21.chunk.js.map
(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{41:function(e,t,c){},69:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),n=(c(13),c(28)),o=(c(41),c(14)),l=c(9),i=c(34),r=c(29),j=c.n(r),d=c(15),m=(c(60),c(11)),u=c(1),b=function(e){var t=e.children;return Object(u.jsxs)(s.a.Fragment,{children:[Object(u.jsx)("nav",{children:Object(u.jsxs)("ul",{className:"nav nav-tabs",children:[Object(u.jsx)("li",{className:"nav-item p-3",children:Object(u.jsx)(m.b,{to:"/",children:"Home"})}),Object(u.jsx)("li",{className:"nav-item p-3",children:Object(u.jsx)(m.b,{to:"/feedback",children:"Feedback"})}),Object(u.jsx)("li",{className:"nav-item p-3",children:Object(u.jsx)(m.b,{to:"/about",children:"About"})})]})}),Object(u.jsx)("div",{className:"container",children:t})]})},O=function(){var e=Object(a.useState)({name:"",email:"",message:"",phone:"",uploadedFiles:[],buttonText:"Submit",uploadPhotosButtonText:"Upload files"}),t=Object(i.a)(e,2),c=t[0],n=t[1],r=c.name,m=c.email,O=c.message,p=c.phone,h=c.uploadedFiles,x=c.buttonText,N=c.uploadPhotosButtonText,f=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API:"http://localhost:8000/api",REACT_APP_CLOUDINARY_CLOUD_NAME:"devstup-cloudinary",REACT_APP_CLOUDINARY_UPLOAD_SECRET:"xjz5lm4z"}),_=f.REACT_APP_API,v=f.REACT_APP_CLOUDINARY_CLOUD_NAME,A=f.REACT_APP_CLOUDINARY_UPLOAD_SECRET,P=function(e){return function(t){n(Object(l.a)(Object(l.a)({},c),{},Object(o.a)({},e,t.target.value)))}},T=function(e){e.preventDefault(),n(Object(l.a)(Object(l.a)({},c),{},{buttonText:"...sending"})),j()({method:"POST",url:"".concat(_,"/feedback"),data:{name:r,email:m,phone:p,message:O,uploadedFiles:h}}).then((function(e){e.data.success&&d.b.success("Thanks for your feedback"),n(Object(l.a)(Object(l.a)({},c),{},{name:"",phone:"",email:"",message:"",uploadedFiles:"",buttonText:"Submitted",uploadPhotosButtonText:"Uploaded"}))})).catch((function(e){e.response.data.error&&d.b.success("Try again later")}))};return Object(u.jsxs)(b,{children:[Object(u.jsx)(d.a,{}),Object(u.jsx)("div",{className:"container text-center",children:Object(u.jsx)("h1",{className:"p-5",children:"Feedback Online"})}),Object(u.jsx)("div",{className:"container col-md-10 offset-md-1 p-5",children:Object(u.jsxs)(s.a.Fragment,{children:[Object(u.jsx)("div",{className:"form-group",children:Object(u.jsx)("button",{onClick:function(){window.cloudinary.openUploadWidget({cloud_name:v,upload_preset:A,tags:["ebooks"]},(function(e,t){n(Object(l.a)(Object(l.a)({},c),{},{uploadedFiles:t,uploadPhotosButtonText:"".concat(t?t.length:0," Photos uploaded")}))}))},className:"btn btn-outline-secondary btn-block p-5",children:N})}),Object(u.jsxs)("form",{onSubmit:T,children:[Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{className:"text-muted",children:"Description"}),Object(u.jsx)("textarea",{onChange:P("message"),type:"text",className:"form-control",value:O,required:!0})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{className:"text-muted",children:"Your Name"}),Object(u.jsx)("input",{className:"form-control",type:"text",onChange:P("name"),value:r,required:!0})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{className:"text-muted",children:"Your Email"}),Object(u.jsx)("input",{className:"form-control",type:"email",onChange:P("email"),value:m,required:!0})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{className:"text-muted",children:"Your Phone"}),Object(u.jsx)("input",{className:"form-control",type:"number",onChange:P("phone"),value:p,required:!0})]}),Object(u.jsx)("button",{className:"btn btn-outline-primary btn-block",children:x})]})]})})]})},p=c(31),h=function(){return Object(u.jsxs)(b,{children:[Object(u.jsxs)(p.a,{children:[Object(u.jsx)("title",{children:"MERN Stack"}),Object(u.jsx)("meta",{name:"description",content:"MERN Stack React Cloudinary Sendgrid SSR App"})]}),Object(u.jsxs)("div",{className:"container text-center",children:[Object(u.jsx)("h1",{className:"p-5",children:"Home"}),Object(u.jsx)("hr",{}),Object(u.jsx)("p",{className:"lead",children:"loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum"})]})]})},x=function(){return Object(u.jsx)(b,{children:Object(u.jsxs)("div",{className:"container text-center",children:[Object(u.jsx)("h1",{className:"p-5",children:"About"}),Object(u.jsx)("hr",{}),Object(u.jsx)("p",{className:"lead",children:"loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum"})]})})},N=c(3),f=function(){return Object(u.jsxs)(m.a,{children:[Object(u.jsx)(N.a,{path:"/",exact:!0,component:h}),Object(u.jsx)(N.a,{path:"/about",exact:!0,component:x}),Object(u.jsx)(N.a,{path:"/feedback",exact:!0,component:O})]})};Object(n.render)(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.63073684.chunk.js.map
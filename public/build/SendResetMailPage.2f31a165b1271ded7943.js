"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[3818],{2713:(A,r,t)=>{t.r(r),t.d(r,{SendResetMailPage:()=>l,default:()=>P});var e=t(96540),s=t(20851),m=t(32196),d=t(49785),c=t(17172),u=t(40845),g=t(66864),n=t(55852),f=t(17408),E=t(88575),y=t(10354),v=t(67061),S=t(2913);const h=a=>(0,m.css)({color:a.colors.text.secondary,fontSize:a.typography.bodySmall.fontSize,fontWeight:a.typography.fontWeightRegular,marginTop:a.spacing(1),display:"block"}),p=()=>{const[a,R]=(0,e.useState)(!1),z=(0,u.of)(h),o=`${S.Ay.appSubUrl}/login`,{handleSubmit:B,register:C,formState:{errors:i}}=(0,d.mN)(),L=async x=>{await(0,c.AI)().post("/api/user/password/send-reset-email",x)&&R(!0)};return a?e.createElement("div",null,e.createElement("p",null,"An email with a reset link has been sent to the email address. You should receive it shortly."),e.createElement(g.mc,{margin:"md"}),e.createElement(n.z9,{variant:"primary",href:o},"Back to login")):e.createElement("form",{onSubmit:B(L)},e.createElement(f.s,null,"Reset password"),e.createElement(E.D,{label:"User",description:"Enter your information to get a reset link sent to you",invalid:!!i.userOrEmail,error:i?.userOrEmail?.message},e.createElement(y.p,{id:"user-input",placeholder:"Email or username",...C("userOrEmail",{required:"Email or username is required"})})),e.createElement(v.B,null,e.createElement(n.$n,{type:"submit"},"Send reset email"),e.createElement(n.z9,{fill:"text",href:o},"Back to login")),e.createElement("p",{className:z},"Did you forget your username or email? Contact your Grafana administrator."))},l=()=>e.createElement(s.GU,null,e.createElement(s.qm,null,e.createElement(p,null))),P=l}}]);

//# sourceMappingURL=SendResetMailPage.2f31a165b1271ded7943.js.map
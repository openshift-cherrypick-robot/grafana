(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{"6CAQ":function(e,r,t){"use strict";t.r(r);var n,i,s,a,o=t("q1tI"),c=t("NoLC"),l=t("kDLi"),u=t("t8hP"),d=t("vF1F"),j=t("ZFWI"),p=t("nKUr");function b(){return(b=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}const h=e=>d.css`
  color: ${e.colors.formDescription};
  font-size: ${e.typography.size.sm};
  font-weight: ${e.typography.weight.regular};
  margin-top: ${e.spacing.sm};
  display: block;
`,m=()=>{var e,r;const[t,c]=Object(o.useState)(!1),d=Object(l.useStyles)(h),m=j.b.appSubUrl+"/login";return t?Object(p.jsxs)("div",{children:[n||(n=Object(p.jsx)("p",{children:"An email with a reset link has been sent to the email address. You should receive it shortly."})),i||(i=Object(p.jsx)(l.Container,{margin:"md"})),Object(p.jsx)(l.LinkButton,{variant:"primary",href:m,children:"Back to login"})]}):Object(p.jsx)(l.Form,{onSubmit:async e=>{await Object(u.getBackendSrv)().post("/api/user/password/send-reset-email",e)&&c(!0)},children:({register:t,errors:n})=>{var i;return Object(p.jsxs)(p.Fragment,{children:[s||(s=Object(p.jsx)(l.Legend,{children:"Reset password"})),Object(p.jsx)(l.Field,{label:"User",description:"Enter your information to get a reset link sent to you",invalid:!!n.userOrEmail,error:null==n||null===(i=n.userOrEmail)||void 0===i?void 0:i.message,children:Object(p.jsx)(l.Input,b({id:"user-input",placeholder:"Email or username"},t("userOrEmail",{required:"Email or username is required"})))}),e||(e=Object(p.jsxs)(l.HorizontalGroup,{children:[a||(a=Object(p.jsx)(l.Button,{children:"Send reset email"})),Object(p.jsx)(l.LinkButton,{fill:"text",href:m,children:"Back to login"})]})),r||(r=Object(p.jsx)("p",{className:d,children:"Did you forget your username or email? Contact your Grafana administrator."}))]})}})};var O;t.d(r,"SendResetMailPage",(function(){return g}));const g=()=>O||(O=Object(p.jsx)(c.b,{children:Object(p.jsx)(c.a,{children:Object(p.jsx)(m,{})})}));r.default=g}}]);
//# sourceMappingURL=SendResetMailPage.993c95ae3828795bf1e6.js.map
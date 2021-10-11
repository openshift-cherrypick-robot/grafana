(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{"3QIV":function(e,n,t){"use strict";var r=t("t8hP"),a=t("Gqk0");const s={changePassword:async function(e){try{await Object(r.getBackendSrv)().put("/api/user/password",e)}catch(e){console.error(e)}},revokeUserSession:async function(e){await Object(r.getBackendSrv)().post("/api/user/revoke-auth-token",{authTokenId:e})},loadUser:function(){return Object(r.getBackendSrv)().get("/api/user")},loadSessions:function(){return Object(r.getBackendSrv)().get("/api/user/auth-tokens")},loadOrgs:function(){return Object(r.getBackendSrv)().get("/api/user/orgs")},loadTeams:function(){return Object(r.getBackendSrv)().get("/api/user/teams")},setUserOrg:async function(e){await Object(r.getBackendSrv)().post("/api/user/using/"+e.orgId,{})},updateUserProfile:async function(e){try{await Object(r.getBackendSrv)().put("/api/user",e)}catch(e){console.error(e)}}};function o(e){return async function(n){n(Object(a.g)({updating:!0})),await s.changePassword(e),n(Object(a.g)({updating:!1}))}}function c(){return async function(e){await e(i()),e((async function(e){e(Object(a.d)());const n=await s.loadTeams();e(Object(a.h)({teams:n}))})),e((async function(e){e(Object(a.b)());const n=await s.loadOrgs();e(Object(a.e)({orgs:n}))})),e((async function(e){e(Object(a.c)());const n=await s.loadSessions();e(Object(a.f)({sessions:n}))}))}}function i(){return async function(e){const n=await s.loadUser();e(Object(a.j)({user:n}))}}function d(e){return async function(n){n(Object(a.g)({updating:!0})),await s.revokeUserSession(e),n(Object(a.k)({tokenId:e}))}}function u(e){return async function(n){n(Object(a.g)({updating:!0})),await s.setUserOrg(e),window.location.href=r.config.appSubUrl+"/profile"}}function l(e){return async function(n){n(Object(a.g)({updating:!0})),await s.updateUserProfile(e),await n(i()),n(Object(a.g)({updating:!1}))}}t.d(n,"a",(function(){return o})),t.d(n,"c",(function(){return c})),t.d(n,"d",(function(){return i})),t.d(n,"e",(function(){return d})),t.d(n,"b",(function(){return u})),t.d(n,"f",(function(){return l}))},EZhu:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));t("q1tI");var r,a,s=t("vF1F"),o=t("kDLi"),c=t("ZFWI"),i=t("FUfA"),d=t("nKUr");function u(){return(u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}const l=({user:e,onChangePassword:n,isSaving:t})=>{var l,w;const{ldapEnabled:b,authProxyEnabled:j,disableLoginForm:g}=c.b,p=(null===(l=e.authLabels)||void 0===l?void 0:l.length)&&e.authLabels[0];return b||j?r||(r=Object(d.jsx)("p",{children:"You cannot change password when LDAP or auth proxy authentication is enabled."})):p&&g?a||(a=Object(d.jsx)("p",{children:"Password cannot be changed here."})):Object(d.jsx)("div",{className:s.css`
        max-width: 400px;
      `,children:Object(d.jsx)(o.Form,{onSubmit:n,children:({register:e,errors:n,getValues:r})=>{var a,s,l;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(o.Field,{label:"Old password",invalid:!!n.oldPassword,error:null==n||null===(a=n.oldPassword)||void 0===a?void 0:a.message,children:Object(d.jsx)(i.a,u({id:"current-password",autoComplete:"current-password"},e("oldPassword",{required:"Old password is required"})))}),Object(d.jsx)(o.Field,{label:"New password",invalid:!!n.newPassword,error:null==n||null===(s=n.newPassword)||void 0===s?void 0:s.message,children:Object(d.jsx)(i.a,u({id:"new-password",autoComplete:"new-password"},e("newPassword",{required:"New password is required",validate:{confirm:e=>e===r().confirmNew||"Passwords must match",old:e=>e!==r().oldPassword||"New password can't be the same as the old one."}})))}),Object(d.jsx)(o.Field,{label:"Confirm password",invalid:!!n.confirmNew,error:null==n||null===(l=n.confirmNew)||void 0===l?void 0:l.message,children:Object(d.jsx)(i.a,u({id:"confirm-new-password",autoComplete:"new-password"},e("confirmNew",{required:"New password confirmation is required",validate:e=>e===r().newPassword||"Passwords must match"})))}),Object(d.jsxs)(o.HorizontalGroup,{children:[w||(w=Object(d.jsx)(o.Button,{variant:"primary",disabled:t,children:"Change Password"})),Object(d.jsx)(o.LinkButton,{variant:"secondary",href:c.b.appSubUrl+"/profile",fill:"outline",children:"Cancel"})]})]})}})})}},PEdC:function(e,n,t){"use strict";t.r(n),function(e){t.d(n,"ChangePasswordPage",(function(){return j}));t("q1tI");var r,a=t("ubFk"),s=t("0cfB"),o=t("/MKj"),c=t("lzJ5"),i=t("ZGyg"),d=t("EZhu"),u=t("3QIV"),l=t("nKUr");const w={loadUser:u.d,changePassword:u.a},b=Object(o.connect)((function(e){const n=e.user,{isUpdating:t,user:r}=n;return{navModel:Object(c.a)(e.navIndex,"change-password"),isUpdating:t,user:r}}),w);function j({navModel:e,loadUser:n,isUpdating:t,user:s,changePassword:o}){return Object(a.a)(()=>n()),Object(l.jsx)(i.b,{navModel:e,children:Object(l.jsx)(i.b.Contents,{isLoading:!Boolean(s),children:s?Object(l.jsxs)(l.Fragment,{children:[r||(r=Object(l.jsx)("h3",{className:"page-heading",children:"Change Your Password"})),Object(l.jsx)(d.a,{user:s,onChangePassword:o,isSaving:t})]}):null})})}n.default=Object(s.hot)(e)(b(j))}.call(this,t("3UD+")(e))},ubFk:function(e,n,t){"use strict";var r=t("Zcyb");n.a=function(e){Object(r.a)((function(){e()}))}}}]);
//# sourceMappingURL=96.993c95ae3828795bf1e6.js.map
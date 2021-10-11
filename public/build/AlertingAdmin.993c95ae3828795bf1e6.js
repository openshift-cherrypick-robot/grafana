(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"9f6O":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return o}));var a=n("t8hP"),i=n("q1tI"),r=n("Ty5D");function o(){const{search:t}=Object(r.l)();return[Object(i.useMemo)(()=>Object(a.locationSearchToObject)(t||""),[t]),Object(i.useCallback)((t,n)=>e(()=>a.locationService.partial(t,n)),[])]}}).call(this,n("URgk").setImmediate)},FjVF:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var a,i=n("q1tI"),r=n("kDLi"),o=n("dEXO"),c=n("sbt+"),s=n("lcDh"),l=n("Jzaf"),u=n("/MKj"),d=n("4Yfp"),f=n("w+lj"),m=n("fXZ9"),g=n("nKUr");function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function p(){var e;const t=Object(u.useDispatch)(),[n,p]=Object(o.a)(),[j,O]=Object(i.useState)(!1),{loading:h}=Object(f.a)(e=>e.deleteAMConfig),{loading:v}=Object(f.a)(e=>e.saveAMConfig),y=Object(f.a)(e=>e.amConfigs),{result:I,loading:T,error:w}=n&&y[n]||m.c;Object(i.useEffect)(()=>{n&&t(Object(d.i)(n))},[n,t]);const x=()=>{n&&t(Object(d.c)(n)),O(!1)},S=Object(i.useMemo)(()=>({configJSON:I?JSON.stringify(I,null,2):""}),[I]),k=h||T||v;return Object(g.jsxs)(c.a,{pageId:"alerting-admin",children:[Object(g.jsx)(s.a,{current:n,onChange:p}),w&&!k&&Object(g.jsx)(r.Alert,{severity:"error",title:"Error loading Alertmanager configuration",children:w.message||"Unknown error."}),h&&n!==l.b&&(a||(a=Object(g.jsx)(r.Alert,{severity:"info",title:"Resetting Alertmanager configuration",children:"It might take a while..."}))),n&&I&&Object(g.jsx)(r.Form,{defaultValues:S,onSubmit:e=>{n&&t(Object(d.u)({newConfig:JSON.parse(e.configJSON),oldConfig:I,alertManagerSourceName:n,successMessage:"Alertmanager configuration updated.",refetch:!0}))},children:({register:t,errors:a})=>{var i;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(r.Field,{disabled:k,label:"Configuration",invalid:!!a.configJSON,error:null===(i=a.configJSON)||void 0===i?void 0:i.message,children:Object(g.jsx)(r.TextArea,b({},t("configJSON",{required:{value:!0,message:"Required."},validate:e=>{try{return JSON.parse(e),!0}catch(e){return e.message}}}),{id:"configuration",rows:25}))}),Object(g.jsxs)(r.HorizontalGroup,{children:[e||(e=Object(g.jsx)(r.Button,{type:"submit",variant:"primary",disabled:k,children:"Save"})),Object(g.jsx)(r.Button,{type:"button",disabled:k,variant:"destructive",onClick:()=>O(!0),children:"Reset configuration"})]}),!!j&&Object(g.jsx)(r.ConfirmModal,{isOpen:!0,title:"Reset Alertmanager configuration",body:`Are you sure you want to reset configuration ${n===l.b?"for the Grafana Alertmanager":`for "${n}"`}? Contact points and notification policies will be reset to their defaults.`,confirmText:"Yes, reset configuration",onConfirm:x,onDismiss:()=>O(!1)})]})}},S.configJSON)]})}},URgk:function(e,t,n){(function(e){var a=void 0!==e&&e||"undefined"!=typeof self&&self||window,i=Function.prototype.apply;function r(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new r(i.call(setTimeout,a,arguments),clearTimeout)},t.setInterval=function(){return new r(i.call(setInterval,a,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},r.prototype.unref=r.prototype.ref=function(){},r.prototype.close=function(){this._clearFn.call(a,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},n("YBdB"),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n("yLpj"))},YBdB:function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var a,i,r,o,c,s=1,l={},u=!1,d=e.document,f=Object.getPrototypeOf&&Object.getPrototypeOf(e);f=f&&f.setTimeout?f:e,"[object process]"==={}.toString.call(e.process)?a=function(e){t.nextTick((function(){g(e)}))}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((r=new MessageChannel).port1.onmessage=function(e){g(e.data)},a=function(e){r.port2.postMessage(e)}):d&&"onreadystatechange"in d.createElement("script")?(i=d.documentElement,a=function(e){var t=d.createElement("script");t.onreadystatechange=function(){g(e),t.onreadystatechange=null,i.removeChild(t),t=null},i.appendChild(t)}):a=function(e){setTimeout(g,0,e)}:(o="setImmediate$"+Math.random()+"$",c=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(o)&&g(+t.data.slice(o.length))},e.addEventListener?e.addEventListener("message",c,!1):e.attachEvent("onmessage",c),a=function(t){e.postMessage(o+t,"*")}),f.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var i={callback:e,args:t};return l[s]=i,a(s),s++},f.clearImmediate=m}function m(e){delete l[e]}function g(e){if(u)setTimeout(g,0,e);else{var t=l[e];if(t){u=!0;try{!function(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(void 0,n)}}(t)}finally{m(e),u=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n("yLpj"),n("8oxB"))},dEXO:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n("9f6O"),i=n("SMGL"),r=n("q1tI"),o=n("d6cI"),c=n("Jzaf");function s(e){return e===c.b||!!Object(c.c)().find(t=>t.name===e)}function l(){const[e,t]=Object(a.a)(),n=Object(r.useCallback)(e=>{s(e)&&(e===c.b?(i.a.delete(o.a),t({[o.b]:null})):(i.a.set(o.a,e),t({[o.b]:e})))},[t]),l=e[o.b];if(l&&"string"==typeof l)return s(l)?[l,n]:[void 0,n];const u=i.a.get(o.a);return u&&"string"==typeof u&&s(u)?(n(u),[u,n]):[c.b,n]}},lcDh:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n("Jzaf"),i=n("q1tI"),r=n("kDLi"),o=n("pz/R"),c=n("vF1F"),s=n("nKUr");const l=({onChange:e,current:t,disabled:n=!1})=>{const c=Object(r.useStyles2)(u),l=Object(i.useMemo)(()=>[{label:"Grafana",value:a.b,imgUrl:"public/img/grafana_icon.svg",meta:{}},...Object(o.a)().filter(e=>e.type===a.a.Alertmanager).map(e=>({label:e.name.substr(0,37),value:e.name,imgUrl:e.meta.info.logos.small,meta:e.meta}))],[]);return 1===l.length?null:Object(s.jsx)(r.Field,{className:c.field,label:n?"Alertmanager":"Choose Alertmanager",disabled:n,"data-testid":"alertmanager-picker",children:Object(s.jsx)(r.Select,{menuShouldPortal:!0,width:29,className:"ds-picker select-container",backspaceRemovesValue:!1,onChange:t=>t.value&&e(t.value),options:l,maxMenuHeight:500,noOptionsMessage:"No datasources found",value:t,getOptionLabel:e=>e.label})})},u=e=>({field:c.css`
    margin-bottom: ${e.spacing(4)};
  `})},"sbt+":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n("q1tI");var a=n("ZGyg"),i=n("lzJ5"),r=n("/MKj"),o=n("nKUr");const c=({children:e,pageId:t,isLoading:n})=>{const c=Object(i.a)(Object(r.useSelector)(e=>e.navIndex),t);return Object(o.jsx)(a.b,{navModel:c,children:Object(o.jsx)(a.b.Contents,{isLoading:n,children:e})})}}}]);
//# sourceMappingURL=AlertingAdmin.993c95ae3828795bf1e6.js.map
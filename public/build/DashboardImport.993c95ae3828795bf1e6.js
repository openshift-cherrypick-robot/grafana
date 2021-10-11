(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{gzYa:function(e,t,r){"use strict";r.r(t);var a=r("q1tI"),n=r("vF1F"),s=r("Obii"),o=r("Csm0"),i=r("kDLi"),d=r("ZGyg"),c=r("hBny"),l=r("/MKj"),b=r("t8hP"),u=r("fL47"),h=r("d4Ek");const j=e=>{try{return JSON.parse(e),!0}catch(e){return"Not valid JSON"}},p=e=>{const t=/(^\d+$)|dashboards\/(\d+)/.exec(e);return!(!t||!t[1]&&!t[2])||"Could not find a valid Grafana.com ID"},m=e=>Object(b.getBackendSrv)().get("/api/dashboards/uid/"+e).then(e=>`Dashboard named '${null==e?void 0:e.dashboard.title}' in folder '${null==e?void 0:e.meta.folderTitle}' has the same UID`).catch(e=>(e.isHandled=!0,!0));var O=r("nKUr");const f=["ref"],g=["ref"];var v;function x(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}const D=({register:e,errors:t,control:r,getValues:n,uidReset:s,inputs:d,initialFolderId:c,onUidReset:l,onCancel:j,onSubmit:p,watch:D})=>{const[S,w]=Object(a.useState)(!1),N=D("dataSources");return Object(a.useEffect)(()=>{S&&(t.title||t.uid)&&p(n(),{})},[t,n,S,p]),Object(O.jsxs)(O.Fragment,{children:[v||(v=Object(O.jsx)(i.Legend,{children:"Options"})),Object(O.jsx)(i.Field,{label:"Name",invalid:!!t.title,error:t.title&&t.title.message,children:Object(O.jsx)(i.Input,y({},e("title",{required:"Name is required",validate:async e=>{return await(t=e,r=n().folder.id,h.a.validateNewDashboardName(r,t).then(()=>!0).catch(e=>{if("EXISTING"===e.type)return e.message}));var t,r}}),{type:"text","data-testid":o.a.components.ImportDashboardForm.name}))}),Object(O.jsx)(i.Field,{label:"Folder",children:Object(O.jsx)(i.InputControl,{render:e=>{let{}=e,t=x(e.field,f);return Object(O.jsx)(u.a,y({},t,{enableCreateNew:!0,initialFolderId:c}))},name:"folder",control:r})}),Object(O.jsx)(i.Field,{label:"Unique identifier (UID)",description:"The unique identifier (UID) of a dashboard can be used for uniquely identify a dashboard between multiple Grafana installs. The UID allows having consistent URLs for accessing dashboards so changing the title of a dashboard will not break any bookmarked links to that dashboard.",invalid:!!t.uid,error:t.uid&&t.uid.message,children:Object(O.jsx)(O.Fragment,{children:s?Object(O.jsx)(i.Input,y({},e("uid",{required:!0,validate:async e=>await m(e)}))):Object(O.jsx)(i.Input,y({disabled:!0},e("uid",{validate:async e=>await m(e)}),{addonAfter:!s&&Object(O.jsx)(i.Button,{onClick:l,children:"Change uid"})}))})}),d.dataSources&&d.dataSources.map((e,a)=>{const n=`dataSources[${a}]`,s=null!=N?N:[];return Object(O.jsx)(i.Field,{label:e.label,invalid:t.dataSources&&!!t.dataSources[a],error:t.dataSources&&t.dataSources[a]&&"A data source is required",children:Object(O.jsx)(i.InputControl,{name:n,render:t=>{var r;let{}=t,n=x(t.field,g);return Object(O.jsx)(b.DataSourcePicker,y({},n,{noDefault:!0,placeholder:e.info,pluginId:e.pluginId,current:null===(r=s[a])||void 0===r?void 0:r.name}))},control:r,rules:{required:!0}})},n)}),d.constants&&d.constants.map((r,a)=>{const n=`constants[${a}]`;return Object(O.jsx)(i.Field,{label:r.label,error:t.constants&&t.constants[a]&&r.label+" needs a value",invalid:t.constants&&!!t.constants[a],children:Object(O.jsx)(i.Input,y({},e(n,{required:!0}),{defaultValue:r.value}))},n)}),Object(O.jsxs)(i.HorizontalGroup,{children:[Object(O.jsx)(i.Button,{type:"submit","data-testid":o.a.components.ImportDashboardForm.submit,variant:I(t),onClick:()=>{w(!0)},children:F(t)}),Object(O.jsx)(i.Button,{type:"reset",variant:"secondary",onClick:j,children:"Cancel"})]})]})};function I(e){return e&&(e.title||e.uid)?"destructive":"primary"}function F(e){return e&&(e.title||e.uid)?"Import (Overwrite)":"Import"}var S,w,N=r("5LyR"),J=r("nFP0");function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function C(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class L extends a.PureComponent{constructor(...e){super(...e),C(this,"state",{uidReset:!1}),C(this,"onSubmit",e=>{this.props.importDashboard(e)}),C(this,"onCancel",()=>{this.props.clearLoadedDashboard()}),C(this,"onUidReset",()=>{this.setState({uidReset:!0})})}render(){const{dashboard:e,inputs:t,meta:r,source:a,folder:n}=this.props,{uidReset:o}=this.state;return Object(O.jsxs)(O.Fragment,{children:[a===J.a.Gcom&&Object(O.jsxs)("div",{style:{marginBottom:"24px"},children:[Object(O.jsx)("div",{children:Object(O.jsxs)(i.Legend,{children:["Importing dashboard from"," ",Object(O.jsx)("a",{href:"https://grafana.com/dashboards/"+e.gnetId,className:"external-link",target:"_blank",rel:"noreferrer",children:"Grafana.com"})]})}),Object(O.jsx)("table",{className:"filter-table form-inline",children:Object(O.jsxs)("tbody",{children:[Object(O.jsxs)("tr",{children:[S||(S=Object(O.jsx)("td",{children:"Published by"})),Object(O.jsx)("td",{children:r.orgName})]}),Object(O.jsxs)("tr",{children:[w||(w=Object(O.jsx)("td",{children:"Updated on"})),Object(O.jsx)("td",{children:Object(s.dateTimeFormat)(r.updatedAt)})]})]})})]}),Object(O.jsx)(i.Form,{onSubmit:this.onSubmit,defaultValues:U({},e,{constants:[],dataSources:[],folder:n}),validateOnMount:!0,validateFieldsOnMount:["title","uid"],validateOn:"onChange",children:({register:e,errors:r,control:a,watch:s,getValues:i})=>Object(O.jsx)(D,{register:e,errors:r,control:a,getValues:i,uidReset:o,inputs:t,onCancel:this.onCancel,onUidReset:this.onUidReset,onSubmit:this.onSubmit,watch:s,initialFolderId:n.id})})]})}}const k={clearLoadedDashboard:N.a,importDashboard:N.g},q=Object(l.connect)(e=>{const t=b.locationService.getSearchObject();return{dashboard:e.importDashboard.dashboard,meta:e.importDashboard.meta,source:e.importDashboard.source,inputs:e.importDashboard.inputs,folder:t.folderId?{id:Number(t.folderId)}:{id:0}}},k)(L);q.displayName="ImportDashboardOverview";var P,R,G,T,B=r("Xmxp"),A=r("lzJ5");function V(){return(V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function $(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"DashboardImportPage",(function(){return K}));class M extends a.PureComponent{constructor(...e){super(...e),$(this,"onFileUpload",e=>{const{importDashboardJson:t}=this.props,r=e.currentTarget.files&&e.currentTarget.files.length>0&&e.currentTarget.files[0];if(r){const e=new FileReader,a=()=>e=>{let r;try{r=JSON.parse(e.target.result)}catch(e){return void B.b.emit(s.AppEvents.alertError,["Import failed","JSON -> JS Serialization failed: "+e.message])}t(r)};e.onload=a(),e.readAsText(r)}}),$(this,"getDashboardFromJson",e=>{this.props.importDashboardJson(JSON.parse(e.dashboardJson))}),$(this,"getGcomDashboard",e=>{let t;const r=/(^\d+$)|dashboards\/(\d+)/.exec(e.gcomDashboard);r&&r[1]?t=r[1]:r&&r[2]&&(t=r[2]),t&&this.props.fetchGcomDashboard(t)})}renderImportForm(){const e=H(this.props.theme);return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:e.option,children:Object(O.jsx)(i.FileUpload,{accept:"application/json",onFileUpload:this.onFileUpload,children:"Upload JSON file"})}),Object(O.jsxs)("div",{className:e.option,children:[P||(P=Object(O.jsx)(i.Legend,{children:"Import via grafana.com"})),Object(O.jsx)(i.Form,{onSubmit:this.getGcomDashboard,defaultValues:{gcomDashboard:""},children:({register:e,errors:t})=>Object(O.jsx)(i.Field,{invalid:!!t.gcomDashboard,error:t.gcomDashboard&&t.gcomDashboard.message,children:Object(O.jsx)(i.Input,V({placeholder:"Grafana.com dashboard URL or ID",type:"text"},e("gcomDashboard",{required:"A Grafana dashboard URL or ID is required",validate:p}),{addonAfter:R||(R=Object(O.jsx)(i.Button,{type:"submit",children:"Load"}))}))})})]}),Object(O.jsxs)("div",{className:e.option,children:[G||(G=Object(O.jsx)(i.Legend,{children:"Import via panel json"})),Object(O.jsx)(i.Form,{onSubmit:this.getDashboardFromJson,defaultValues:{dashboardJson:""},children:({register:e,errors:t})=>Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(i.Field,{invalid:!!t.dashboardJson,error:t.dashboardJson&&t.dashboardJson.message,children:Object(O.jsx)(i.TextArea,V({},e("dashboardJson",{required:"Need a dashboard JSON model",validate:j}),{"data-testid":o.a.components.DashboardImportPage.textarea,rows:10}))}),Object(O.jsx)(i.Button,{type:"submit","data-testid":o.a.components.DashboardImportPage.submit,children:"Load"})]})})]})]})}render(){const{isLoaded:e,navModel:t}=this.props;return Object(O.jsx)(d.b,{navModel:t,children:Object(O.jsx)(d.b.Contents,{children:e?T||(T=Object(O.jsx)(q,{})):this.renderImportForm()})})}}const E=Object(i.withTheme2)(M),z={fetchGcomDashboard:N.e,importDashboardJson:N.h},K=Object(c.a)(e=>({navModel:Object(A.a)(e.navIndex,"import",void 0,!0),isLoaded:e.importDashboard.isLoaded}),z,e=>e.importDashboard)(E);t.default=K;K.displayName="DashboardImport";const H=Object(i.stylesFactory)(e=>({option:n.css`
      margin-bottom: ${e.spacing(4)};
    `}))},hBny:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var a=r("/MKj"),n=r("zVNn"),s=r("q1tI"),o=r("2mql"),i=r.n(o),d=r("nKUr");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}const l=(e,t,r)=>o=>{const l=Object(a.connect)(e,t)(o),b=e=>{const t=Object(a.useDispatch)();return Object(s.useEffect)(()=>function(){t(Object(n.a)({stateSelector:r}))},[t]),Object(d.jsx)(l,c({},e))};return b.displayName=`ConnectWithCleanUp(${l.displayName})`,i()(b,o),b}}}]);
//# sourceMappingURL=DashboardImport.993c95ae3828795bf1e6.js.map
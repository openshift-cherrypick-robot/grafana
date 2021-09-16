(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{AkEj:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n("q1tI");var s=n("kDLi"),i=n("EKT6"),c=n("nKUr");const r=({searchQuery:e,disabled:t,onAddClick:n,onSearchChange:r})=>Object(c.jsxs)("div",{className:"page-action-bar",children:[Object(c.jsx)("div",{className:"gf-form gf-form--grow",children:Object(c.jsx)(i.a,{placeholder:"Search keys",value:e,onChange:r})}),Object(c.jsx)(s.Button,{className:"pull-right",onClick:n,disabled:t,children:"Add API key"})]})},Bu2e:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n("q1tI");var s,i,c,r=n("kDLi"),a=n("Obii"),o=n("nKUr");const l=({apiKeys:e,timeZone:t,onDelete:n})=>Object(o.jsxs)("table",{className:"filter-table",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[s||(s=Object(o.jsx)("th",{children:"Name"})),i||(i=Object(o.jsx)("th",{children:"Role"})),c||(c=Object(o.jsx)("th",{children:"Expires"})),Object(o.jsx)("th",{style:{width:"34px"}})]})}),e.length>0?Object(o.jsx)("tbody",{children:e.map(e=>Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:e.name}),Object(o.jsx)("td",{children:e.role}),Object(o.jsx)("td",{children:d(e.expiration,t)}),Object(o.jsx)("td",{children:Object(o.jsx)(r.DeleteButton,{size:"sm",onConfirm:()=>n(e)})})]},e.id))}):null]});function d(e,t){return e?Object(a.dateTimeFormat)(e,{timeZone:t}):"No expiration date"}},Q1xo:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i}));const s=e=>e.keys.length,i=e=>{const t=RegExp(e.searchQuery,"i");return e.keys.filter(e=>t.test(e.name)||t.test(e.role))}},gNBg:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var s,i,c,r,a,o=n("q1tI"),l=n("kDLi"),d=n("GQ3c"),u=n("Obii"),h=n("BVom"),j=n("1Ra3"),b=n("nKUr");const{Input:p}=l.LegacyForms;function y(e){if(!e)return!0;try{return u.rangeUtil.intervalToSeconds(e),!0}catch{}return!1}const f={[l.EventsWithValidation.onBlur]:[{rule:y,errorMessage:"Not a valid duration"}]},x=({show:e,onClose:t,onKeyAdded:n})=>{const[u,x]=Object(o.useState)(""),[O,m]=Object(o.useState)(d.i.Viewer),[g,v]=Object(o.useState)("");Object(o.useEffect)(()=>{x(""),m(d.i.Viewer),v("")},[e]);return Object(b.jsx)(h.a,{in:e,children:Object(b.jsxs)("div",{className:"gf-form-inline cta-form",children:[Object(b.jsx)(j.a,{onClick:t}),Object(b.jsxs)("form",{className:"gf-form-group",onSubmit:e=>{e.preventDefault(),y(g)&&(n({name:u,role:O,secondsToLive:g}),t())},children:[s||(s=Object(b.jsx)("h5",{children:"Add API Key"})),Object(b.jsxs)("div",{className:"gf-form-inline",children:[Object(b.jsxs)("div",{className:"gf-form max-width-21",children:[i||(i=Object(b.jsx)("span",{className:"gf-form-label",children:"Key name"})),Object(b.jsx)(p,{type:"text",className:"gf-form-input",value:u,placeholder:"Name",onChange:e=>{x(e.currentTarget.value)}})]}),Object(b.jsxs)("div",{className:"gf-form",children:[c||(c=Object(b.jsx)("span",{className:"gf-form-label",children:"Role"})),Object(b.jsx)("span",{className:"gf-form-select-wrapper",children:Object(b.jsx)("select",{className:"gf-form-input gf-size-auto",value:O,onChange:e=>{m(e.currentTarget.value)},children:Object.keys(d.i).map(e=>Object(b.jsx)("option",{label:e,value:e,children:e},e))})})]}),Object(b.jsxs)("div",{className:"gf-form max-width-21",children:[r||(r=Object(b.jsx)(l.InlineFormLabel,{tooltip:"The API key life duration. For example, 1d if your key is going to last for one day. Supported units are: s,m,h,d,w,M,y",children:"Time to live"})),Object(b.jsx)(p,{type:"text",className:"gf-form-input",placeholder:"1d",validationEvents:f,value:g,onChange:e=>{v(e.currentTarget.value)}})]}),a||(a=Object(b.jsx)("div",{className:"gf-form",children:Object(b.jsx)(l.Button,{children:"Add"})}))]})]})]})})}},m0s0:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return a}));var s=n("NXk7"),i=n("Gz/h");function c(e,t,n){return async c=>{const a=await Object(s.c)().post("/api/auth/keys",e);c(Object(i.c)("")),c(r(n)),t(a.key)}}function r(e){return async t=>{const n=await Object(s.c)().get("/api/auth/keys?includeExpired="+e);t(Object(i.a)(n))}}function a(e,t){return async n=>{Object(s.c)().delete("/api/auth/keys/"+e).then(()=>n(r(t)))}}},pSIq:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"ApiKeysPageUnconnected",(function(){return C}));var s=n("q1tI"),i=n("/MKj"),c=n("0cfB"),r=n("lzJ5"),a=n("Q1xo"),o=n("m0s0"),l=n("ZGyg"),d=n("qx0y"),u=n("ZFWI"),h=n("Xmxp"),j=n("QQVG"),b=n("kDLi"),p=n("Obii"),y=n("1LJY"),f=n("Gz/h"),x=n("gNBg"),O=n("AkEj"),m=n("Bu2e"),g=n("rXqu"),v=n("xAj+"),A=n("nKUr");function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e}).apply(this,arguments)}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const w={loadApiKeys:o.c,deleteApiKey:o.b,setSearchQuery:f.c,addApiKey:o.a},N=Object(i.connect)((function(e){return{navModel:Object(r.a)(e.navIndex,"apikeys"),apiKeys:Object(a.a)(e.apiKeys),searchQuery:e.apiKeys.searchQuery,apiKeysCount:Object(a.b)(e.apiKeys),hasFetched:e.apiKeys.hasFetched,timeZone:Object(y.a)(e.user)}}),w);class C extends s.PureComponent{constructor(e){super(e),k(this,"onDeleteApiKey",e=>{this.props.deleteApiKey(e.id,this.state.includeExpired)}),k(this,"onSearchQueryChange",e=>{this.props.setSearchQuery(e)}),k(this,"onIncludeExpiredChange",e=>{this.setState({hasFetched:!1,includeExpired:e.currentTarget.checked},this.fetchApiKeys)}),k(this,"onAddApiKey",e=>{const t=e=>{const t=window.location.origin+u.b.appSubUrl;h.b.publish(new v.ShowModalReactEvent({props:{apiKey:e,rootPath:t},component:d.a}))},n=e.secondsToLive;try{const s=K({},e,{secondsToLive:n?p.rangeUtil.intervalToSeconds(n):null});this.props.addApiKey(s,t,this.state.includeExpired),this.setState(e=>K({},e,{isAdding:!1}))}catch(e){console.error(e)}}),this.state={includeExpired:!1,hasFetched:!1}}componentDidMount(){this.fetchApiKeys()}async fetchApiKeys(){await this.props.loadApiKeys(this.state.includeExpired)}render(){const{hasFetched:e,navModel:t,apiKeysCount:n,apiKeys:s,searchQuery:i,timeZone:c}=this.props,{includeExpired:r}=this.state;return e?Object(A.jsx)(l.b,{navModel:t,children:Object(A.jsx)(l.b.Contents,{isLoading:!1,children:Object(A.jsx)(g.a,{children:({isAdding:e,toggleIsAdding:t})=>{const a=!e&&0===n,o=n>0;return Object(A.jsxs)(A.Fragment,{children:[a?Object(A.jsx)(j.a,{title:"You haven't added any API keys yet.",buttonIcon:"key-skeleton-alt",onClick:t,buttonTitle:"New API key",proTip:"Remember, you can provide view-only API access to other applications."}):null,o?Object(A.jsx)(O.a,{searchQuery:i,disabled:e,onAddClick:t,onSearchChange:this.onSearchQueryChange}):null,Object(A.jsx)(x.a,{show:e,onClose:t,onKeyAdded:this.onAddApiKey}),o?Object(A.jsxs)(b.VerticalGroup,{children:[Object(A.jsx)(b.InlineField,{label:"Show expired",children:Object(A.jsx)(b.InlineSwitch,{id:"showExpired",value:r,onChange:this.onIncludeExpiredChange})}),Object(A.jsx)(m.a,{apiKeys:s,timeZone:c,onDelete:this.onDeleteApiKey})]}):null]})}})})}):Object(A.jsx)(l.b,{navModel:t,children:Object(A.jsx)(l.b.Contents,{isLoading:!0})})}}const I=N(C);t.default=Object(c.hot)(e)(I)}.call(this,n("3UD+")(e))},qx0y:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("q1tI");var s,i,c=n("vF1F"),r=n("kDLi"),a=n("nKUr");function o({onDismiss:e,apiKey:t,rootPath:n}){const c=Object(r.useStyles2)(l);return Object(a.jsxs)(r.Modal,{title:"API Key Created",onDismiss:e,onClickBackdrop:e,isOpen:!0,children:[Object(a.jsx)(r.Field,{label:"Key",children:Object(a.jsx)("span",{className:c.label,children:t})}),s||(s=Object(a.jsx)(r.Alert,{severity:"info",title:"You will only be able to view this key here once!",children:"It is not stored in this form, so be sure to copy it now."})),i||(i=Object(a.jsx)("p",{className:"text-muted",children:"You can authenticate a request using the Authorization HTTP header, example:"})),Object(a.jsxs)("pre",{className:c.small,children:['curl -H "Authorization: Bearer ',t,'" ',n,"/api/dashboards/home"]})]})}function l(e){return{label:c.css`
      padding: ${e.spacing(1)};
      background-color: ${e.colors.background.secondary};
      border-radius: ${e.shape.borderRadius()};
    `,small:c.css`
      font-size: ${e.typography.bodySmall.fontSize};
      font-weight: ${e.typography.bodySmall.fontWeight};
    `}}},rXqu:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var s=n("q1tI");const i=({children:e})=>{const[t,n]=Object(s.useState)(!1),i=Object(s.useCallback)(()=>{n(!t)},[t]);return e({isAdding:t,toggleIsAdding:i})}}}]);
//# sourceMappingURL=ApiKeysPage.d7e0f7a1f9e400a945e0.js.map
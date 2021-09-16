(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"5BCB":function(e,a,t){"use strict";var n=t("Obii"),i=t("t8hP"),r=t("3SGO"),s=t("NXk7"),o=t("WnbS"),c=t("Vw/f"),u=t("okuo"),d=t("ZFWI");function l(e){const a=[{id:"tsdb",title:"Time series databases",plugins:[]},{id:"logging",title:"Logging & document databases",plugins:[]},{id:"tracing",title:"Distributed tracing",plugins:[]},{id:"sql",title:"SQL",plugins:[]},{id:"cloud",title:"Cloud",plugins:[]},{id:"enterprise",title:"Enterprise plugins",plugins:[]},{id:"iot",title:"Industrial & IoT",plugins:[]},{id:"other",title:"Others",plugins:[]}].filter(e=>e),t={},i={},r=[p({id:"grafana-splunk-datasource",name:"Splunk",description:"Visualize and explore Splunk logs",imgUrl:"public/img/plugins/splunk_logo_128.png"}),p({id:"grafana-oracle-datasource",name:"Oracle",description:"Visualize and explore Oracle SQL",imgUrl:"public/img/plugins/oracle.png"}),p({id:"grafana-dynatrace-datasource",name:"Dynatrace",description:"Visualize and explore Dynatrace data",imgUrl:"public/img/plugins/dynatrace.png"}),p({id:"grafana-servicenow-datasource",description:"ServiceNow integration and data source",name:"ServiceNow",imgUrl:"public/img/plugins/servicenow.svg"}),p({id:"grafana-datadog-datasource",description:"DataDog integration and data source",name:"DataDog",imgUrl:"public/img/plugins/datadog.png"}),p({id:"grafana-newrelic-datasource",description:"New Relic integration and data source",name:"New Relic",imgUrl:"public/img/plugins/newrelic.svg"}),p({id:"grafana-mongodb-datasource",description:"MongoDB integration and data source",name:"MongoDB",imgUrl:"public/img/plugins/mongodb.svg"}),p({id:"grafana-snowflake-datasource",description:"Snowflake integration and data source",name:"Snowflake",imgUrl:"public/img/plugins/snowflake.svg"}),p({id:"grafana-wavefront-datasource",description:"Wavefront integration and data source",name:"Wavefront",imgUrl:"public/img/plugins/wavefront.svg"}),p({id:"dlopes7-appdynamics-datasource",description:"AppDynamics integration and data source",name:"AppDynamics",imgUrl:"public/img/plugins/appdynamics.svg"}),p({id:"grafana-saphana-datasource",description:"SAP HANA® integration and data source",name:"SAP HANA®",imgUrl:"public/img/plugins/sap_hana.png"}),p({id:"grafana-honeycomb-datasource",description:"Honeycomb integration ad datasource",name:"Honeycomb",imgUrl:"public/img/plugins/honeycomb.png"})];for(const e of a)t[e.id]=e;const{edition:s,hasValidLicense:o}=d.a.licenseInfo;for(const n of e){const e=r.find(e=>e.id===n.id);var c;if(n.enterprise||e)n.category="enterprise",n.unlicensed="Open Source"!==s&&!o,n.info.links=(null==e||null===(c=e.info)||void 0===c?void 0:c.links)||n.info.links;if(n.info.links)for(const e of n.info.links)e.name="Learn more";(a.find(e=>e.id===n.category)||t.other).plugins.push(n),i[n.id]=n}for(const e of a){if("cloud"===e.id&&e.plugins.push({id:"gcloud",name:"Grafana Cloud",type:n.PluginType.datasource,module:"phantom",baseUrl:"",info:{description:"Hosted Graphite, Prometheus, and Loki",logos:{small:"public/img/grafana_icon.svg",large:"asd"},author:{name:"Grafana Labs"},links:[{url:"https://grafana.com/products/cloud/",name:"Learn more"}],screenshots:[],updated:"2019-05-10",version:"1.0.0"}}),"enterprise"===e.id)for(const a of r)i[a.id]||e.plugins.push(a);g(e.plugins)}return a.filter(e=>e.plugins.length>0)}function g(e){const a={prometheus:100,graphite:95,loki:90,mysql:80,jaeger:100,postgres:79,gcloud:-1};e.sort((e,t)=>{const n=a[e.id]||0,i=a[t.id]||0;return n>i?-1:n<i?1:e.name>t.name?-1:1})}function p(e){return{id:e.id,name:e.name,type:n.PluginType.datasource,module:"phantom",baseUrl:"",info:{description:e.description,logos:{small:e.imgUrl,large:e.imgUrl},author:{name:"Grafana Labs"},links:[{url:d.a.pluginCatalogURL+e.id,name:"Install now"}],screenshots:[],updated:"2019-05-10",version:"1.0.0"}}}var f=t("HUMP"),m=t("FFN/"),h=t("frIo");function b(){return(b=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}t.d(a,"c",(function(){return j})),t.d(a,"g",(function(){return y})),t.d(a,"f",(function(){return S})),t.d(a,"d",(function(){return O})),t.d(a,"a",(function(){return v})),t.d(a,"e",(function(){return w})),t.d(a,"h",(function(){return x})),t.d(a,"b",(function(){return k}));const j=(e,a={loadDataSource:O,getDataSource:h.a,getDataSourceMeta:h.b,importDataSourcePlugin:c.b})=>async(t,n)=>{if(e)try{if(await t(a.loadDataSource(e)),n().dataSourceSettings.plugin)return;const i=a.getDataSource(n().dataSources,e),r=a.getDataSourceMeta(n().dataSources,i.type),s=await a.importDataSourcePlugin(r);t(Object(m.h)(s))}catch(e){console.error("Failed to import plugin module",e),t(Object(m.g)(e))}else t(Object(m.g)(new Error("Invalid ID")))},y=(e,a={getDatasourceSrv:o.a,getBackendSrv:s.c})=>async(t,n)=>{const i=await a.getDatasourceSrv().get(e);i.testDatasource&&(t(Object(m.o)()),a.getBackendSrv().withNoBackendCache(async()=>{try{const e=await i.testDatasource();t(Object(m.p)(e))}catch(e){const{statusText:a,message:n,details:i,data:r}=e,s=n||(null==r?void 0:r.message)||"HTTP error "+a;t(Object(m.n)({message:s,details:i}))}}))};function S(){return async e=>{const a=await Object(s.c)().get("/api/datasources");e(Object(m.e)(a))}}function O(e){return async a=>{const t=await async function(e){try{const a=await Object(s.c)().fetch({method:"GET",url:"/api/datasources/uid/"+e,showErrorAlert:!1}).toPromise();if(a.ok)return a.data}catch(e){console.log("Failed to lookup data source by uid",e)}const a=parseInt(e,10);if(!Number.isNaN(a)){const t=await Object(s.c)().fetch({method:"GET",url:"/api/datasources/"+a,showErrorAlert:!1}).toPromise();if(t.ok&&t.data.id.toString()===e)return window.location.href=n.locationUtil.assureBaseUrl("/datasources/edit/"+t.data.uid),{}}throw Error("Could not find data source")}(e),o=await Object(u.a)(t.type),d=await Object(c.b)(o),l=b({},o,{isBackend:d.DataSourceClass.prototype instanceof i.DataSourceWithBackend});a(Object(m.a)(t)),a(Object(m.b)(l)),d.meta=l,a(Object(r.d)(Object(f.a)(t,d)))}}function v(e){return async(a,t)=>{await a(S());const n=t().dataSources.dataSources,r={name:e.name,type:e.id,access:"proxy",isDefault:0===n.length};D(n,r.name)&&(r.name=function(e,a){for(;D(e,a);)P(a)?a=`${N(a)}${t=L(a),isNaN(t)?1:t+1}`:a+="-1";var t;return a}(n,r.name));const o=await Object(s.c)().post("/api/datasources",r);i.locationService.push("/datasources/edit/"+o.datasource.uid)}}function w(){return async e=>{e(Object(m.c)());const a=await Object(s.c)().get("/api/plugins",{enabled:1,type:"datasource"}),t=l(a);e(Object(m.d)({plugins:a,categories:t}))}}function x(e){return async a=>(await Object(s.c)().put("/api/datasources/"+e.id,e),await C(),a(O(e.uid)))}function k(){return async(e,a)=>{const t=a().dataSources.dataSource;await Object(s.c)().delete("/api/datasources/"+t.id),await C(),i.locationService.push("/datasources")}}function D(e,a){return e.filter(e=>e.name.toLowerCase()===a.toLowerCase()).length>0}function C(){return Object(s.c)().get("/api/frontend/settings").then(e=>{d.b.datasources=e.datasources,d.b.defaultDatasource=e.defaultDatasource,Object(o.a)().init(d.b.datasources,e.defaultDatasource)})}function P(e){return e.endsWith("-",e.length-1)}function L(e){return parseInt(e.slice(-1),10)}function N(e){return e.slice(0,e.length-1)}},Fofh:function(e,a,t){"use strict";t.r(a),function(e){t.d(a,"getNavModel",(function(){return w}));var n,i,r,s,o=t("q1tI"),c=t("/MKj"),u=t("0cfB"),d=t("kDLi"),l=t("Csm0"),g=t("ZGyg"),p=t("5BCB"),f=t("frIo"),m=t("EKT6"),h=t("FFN/"),b=t("jcCG"),j=t("xLfX"),y=t("nKUr");function S(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}class O extends o.PureComponent{constructor(...e){super(...e),S(this,"onDataSourceTypeClicked",e=>{this.props.addDataSource(e)}),S(this,"onSearchQueryChange",e=>{this.props.setDataSourceTypeSearchQuery(e)}),S(this,"onLearnMoreClick",e=>{e.stopPropagation()})}componentDidMount(){this.props.loadDataSourcePlugins()}renderPlugins(e){return e&&e.length?Object(y.jsx)(d.List,{items:e,getItemKey:e=>e.id.toString(),renderItem:e=>Object(y.jsx)(v,{plugin:e,onClick:()=>this.onDataSourceTypeClicked(e),onLearnMoreClick:this.onLearnMoreClick})}):null}renderCategories(){const{categories:e}=this.props;return Object(y.jsxs)(y.Fragment,{children:[e.map(e=>Object(y.jsxs)("div",{className:"add-data-source-category",children:[Object(y.jsx)("div",{className:"add-data-source-category__header",children:e.title}),this.renderPlugins(e.plugins)]},e.id)),n||(n=Object(y.jsx)("div",{className:"add-data-source-more",children:Object(y.jsx)(d.LinkButton,{variant:"secondary",href:"https://grafana.com/plugins?type=datasource&utm_source=grafana_add_ds",target:"_blank",rel:"noopener",children:"Find more data source plugins on grafana.com"})}))]})}render(){const{navModel:e,isLoading:a,searchQuery:t,plugins:n}=this.props;return Object(y.jsx)(g.b,{navModel:e,children:Object(y.jsxs)(g.b.Contents,{isLoading:a,children:[Object(y.jsxs)("div",{className:"page-action-bar",children:[Object(y.jsx)(m.a,{value:t,onChange:this.onSearchQueryChange,placeholder:"Filter by name or type"}),i||(i=Object(y.jsx)("div",{className:"page-action-bar__spacer"})),r||(r=Object(y.jsx)(d.LinkButton,{href:"datasources",fill:"outline",variant:"secondary",icon:"arrow-left",children:"Cancel"}))]}),!t&&(s||(s=Object(y.jsx)(j.a,{}))),Object(y.jsxs)("div",{children:[t&&this.renderPlugins(n),!t&&this.renderCategories()]})]})})}}const v=e=>{var a,t;const{plugin:n,onLearnMoreClick:i}=e,r="phantom"===n.module,s=r||n.unlicensed?()=>{}:e.onClick,o=(null===(a=n.info)||void 0===a||null===(t=a.links)||void 0===t?void 0:t.length)>0?n.info.links[0]:null;return Object(y.jsx)(b.a,{title:n.name,description:n.info.description,ariaLabel:l.a.pages.AddDataSource.dataSourcePlugins(n.name),logoUrl:n.info.logos.small,actions:Object(y.jsxs)(y.Fragment,{children:[o&&Object(y.jsx)(d.LinkButton,{variant:"secondary",href:o.url+"?utm_source=grafana_add_ds",target:"_blank",rel:"noopener",onClick:i,icon:"external-link-alt",children:o.name}),!r&&Object(y.jsx)(d.Button,{disabled:n.unlicensed,children:"Select"})]}),labels:!r&&Object(y.jsx)(d.PluginSignatureBadge,{status:n.signature}),className:r?"add-data-source-item--phantom":"",onClick:s,"aria-label":l.a.pages.AddDataSource.dataSourcePlugins(n.name)})};function w(){const e={icon:"database",id:"datasource-new",text:"Add data source",href:"datasources/new",subTitle:"Choose a data source type"};return{main:e,node:e}}const x={addDataSource:p.a,loadDataSourcePlugins:p.e,setDataSourceTypeSearchQuery:h.j};a.default=Object(u.hot)(e)(Object(c.connect)((function(e){return{navModel:w(),plugins:Object(f.c)(e.dataSources),searchQuery:e.dataSources.dataSourceTypeSearchQuery,categories:e.dataSources.categories,isLoading:e.dataSources.isLoadingDataSources}}),x)(O))}.call(this,t("3UD+")(e))},HUMP:function(e,a,t){"use strict";t.d(a,"a",(function(){return r})),t.d(a,"c",(function(){return s})),t.d(a,"b",(function(){return o}));var n=t("Obii"),i=t("ZFWI");function r(e,a){const t=a.meta,n={img:t.info.logos.large,id:"datasource-"+e.uid,subTitle:"Type: "+t.name,url:"",text:e.name,breadcrumbs:[{title:"Data Sources",url:"datasources"}],children:[{active:!1,icon:"sliders-v-alt",id:"datasource-settings-"+e.uid,text:"Settings",url:`datasources/edit/${e.uid}/`}]};if(a.configPages)for(const t of a.configPages)n.children.push({active:!1,text:t.title,icon:t.icon,url:`datasources/edit/${e.uid}/?page=${t.id}`,id:"datasource-page-"+t.id});return t.includes&&void 0!==t.includes.find(e=>"dashboard"===e.type)&&n.children.push({active:!1,icon:"apps",id:"datasource-dashboards-"+e.uid,text:"Dashboards",url:`datasources/edit/${e.uid}/dashboards`}),i.b.licenseInfo.hasLicense&&(n.children.push({active:!1,icon:"lock",id:"datasource-permissions-"+e.id,text:"Permissions",url:`datasources/edit/${e.id}/permissions`}),n.children.push({active:!1,icon:"info-circle",id:"datasource-insights-"+e.id,text:"Insights",url:`datasources/edit/${e.id}/insights`}),n.children.push({active:!1,icon:"database",id:"datasource-cache-"+e.id,text:"Cache",url:`datasources/edit/${e.id}/cache`,hideFromTabs:!t.isBackend||!i.b.caching.enabled})),n}function s(e,a){let t;for(const n of e.children)if(n.id.indexOf(a)>0){n.active=!0,t=n;break}return{main:e,node:t}}function o(e){return s(r({access:"",basicAuth:!1,basicAuthUser:"",basicAuthPassword:"",withCredentials:!1,database:"",id:1,uid:"x",isDefault:!1,jsonData:{authType:"credentials",defaultRegion:"eu-west-2"},name:"Loading",orgId:1,password:"",readOnly:!1,type:"Loading",typeName:"Loading",typeLogoUrl:"public/img/icn-datasource.svg",url:"",user:"",secureJsonFields:{}},{meta:{id:"1",type:n.PluginType.datasource,name:"",info:{author:{name:"",url:""},description:"",links:[{name:"",url:""}],logos:{large:"",small:""},screenshots:[],updated:"",version:""},includes:[],module:"",baseUrl:""}}),e)}},frIo:function(e,a,t){"use strict";t.d(a,"d",(function(){return n})),t.d(a,"c",(function(){return i})),t.d(a,"a",(function(){return r})),t.d(a,"b",(function(){return s})),t.d(a,"g",(function(){return o})),t.d(a,"f",(function(){return c})),t.d(a,"e",(function(){return u}));const n=e=>{const a=new RegExp(e.searchQuery,"i");return e.dataSources.filter(e=>a.test(e.name)||a.test(e.database)||a.test(e.type))},i=e=>{const a=new RegExp(e.dataSourceTypeSearchQuery,"i");return e.plugins.filter(e=>a.test(e.name))},r=(e,a)=>e.dataSource.uid===a?e.dataSource:{},s=(e,a)=>e.dataSourceMeta.id===a?e.dataSourceMeta:{},o=e=>e.searchQuery,c=e=>e.layoutMode,u=e=>e.dataSourcesCount},jcCG:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));t("q1tI");var n=t("vF1F"),i=t("nKUr");const r=({logoUrl:e,title:a,description:t,labels:r,actions:s,onClick:o,ariaLabel:c,className:u})=>{const d=Object(n.cx)("add-data-source-item",u);return Object(i.jsxs)("div",{className:d,onClick:o,"aria-label":c,children:[e&&Object(i.jsx)("img",{className:"add-data-source-item-logo",src:e}),Object(i.jsxs)("div",{className:"add-data-source-item-text-wrapper",children:[Object(i.jsx)("span",{className:"add-data-source-item-text",children:a}),t&&Object(i.jsx)("span",{className:"add-data-source-item-desc",children:t}),r&&Object(i.jsx)("div",{className:"add-data-source-item-badge",children:r})]}),s&&Object(i.jsx)("div",{className:"add-data-source-item-actions",children:s})]})}},xLfX:function(e,a,t){"use strict";(function(e){t.d(a,"a",(function(){return b}));t("q1tI");var n,i=t("Csm0"),r=t("kDLi"),s=t("y6t6"),o=t("jGYO"),c=t("aBYM"),u=t.n(c),d=t("/MKj"),l=t("0cfB"),g=t("Obii"),p=t("vF1F"),f=t("nKUr");const m=e=>({errors:Object(s.a)(e.plugins)}),h={loadPluginsErrors:o.d},b=(Object(d.connect)(m,h),Object(l.hot)(e)(Object(d.connect)(m,h)(({loadPluginsErrors:e,errors:a,children:t})=>{const s=Object(r.useTheme)(),{loading:c}=u()(async()=>{await e()},[o.c]);return c||0===a.length?null:Object(f.jsx)(r.InfoBox,{"aria-label":i.a.pages.PluginsList.signatureErrorNotice,severity:"warning",urlTitle:"Read more about plugin signing",url:"https://grafana.com/docs/grafana/latest/plugins/plugin-signatures/",children:Object(f.jsxs)("div",{children:[n||(n=Object(f.jsx)("p",{children:"Unsigned plugins were found during plugin initialization. Grafana Labs cannot guarantee the integrity of these plugins. We recommend only using signed plugins."})),"The following plugins are disabled and not shown in the list below:",Object(f.jsx)(r.List,{items:a,className:p.css`
            list-style-type: circle;
          `,renderItem:e=>Object(f.jsx)("div",{className:p.css`
                margin-top: ${s.spacing.sm};
              `,children:Object(f.jsxs)(r.HorizontalGroup,{spacing:"sm",justify:"flex-start",align:"center",children:[Object(f.jsx)("strong",{children:e.pluginId}),Object(f.jsx)(r.PluginSignatureBadge,{status:j(e.errorCode),className:p.css`
                    margin-top: 0;
                  `})]})})}),t]})})})));function j(e){switch(e){case g.PluginErrorCode.invalidSignature:return g.PluginSignatureStatus.invalid;case g.PluginErrorCode.missingSignature:return g.PluginSignatureStatus.missing;case g.PluginErrorCode.modifiedSignature:return g.PluginSignatureStatus.modified;default:return g.PluginSignatureStatus.missing}}}).call(this,t("3UD+")(e))},y6t6:function(e,a,t){"use strict";t.d(a,"b",(function(){return n})),t.d(a,"a",(function(){return i})),t.d(a,"c",(function(){return r}));const n=e=>{const a=new RegExp(e.searchQuery,"i");return e.plugins.filter(e=>a.test(e.name)||a.test(e.info.author.name)||a.test(e.type)||a.test(e.info.description))},i=e=>e.errors,r=e=>e.searchQuery}}]);
//# sourceMappingURL=NewDataSourcePage.d7e0f7a1f9e400a945e0.js.map
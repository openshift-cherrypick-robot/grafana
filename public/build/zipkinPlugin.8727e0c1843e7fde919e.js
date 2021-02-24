(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{Dljr:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("Obii"),a=n("kDLi"),o=n("kDDq"),i=n("q1tI"),c=n.n(i),u=n("Wkk1");function s(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n    padding-bottom: ",";\n    color: ",";\n  "]);return s=function(){return e},e}function l(e){var t,n,o=e.options,i=e.onOptionsChange,s=Object(a.useStyles)(p);return c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",{className:"page-heading"},"Trace to logs"),c.a.createElement("div",{className:s.infoText},"Trace to logs let's you navigate from a trace span to the selected data source's log."),c.a.createElement("div",{className:"gf-form"},c.a.createElement(a.InlineFormLabel,{tooltip:"The data source the trace is going to navigate to"},"Data source"),c.a.createElement(u.a,{pluginId:"loki",current:null===(t=o.jsonData.tracesToLogs)||void 0===t?void 0:t.datasourceUid,noDefault:!0,onChange:function(e){var t;return Object(r.updateDatasourcePluginJsonDataOption)({onOptionsChange:i,options:o},"tracesToLogs",{datasourceUid:e.uid,tags:null===(t=o.jsonData.tracesToLogs)||void 0===t?void 0:t.tags})}})),c.a.createElement("div",{className:"gf-form"},c.a.createElement(a.InlineFormLabel,{tooltip:"Tags that will be used in the Loki query. Default tags: 'cluster', 'hostname', 'namespace', 'pod'"},"Tags"),c.a.createElement(a.TagsInput,{tags:null===(n=o.jsonData.tracesToLogs)||void 0===n?void 0:n.tags,onChange:function(e){var t;return Object(r.updateDatasourcePluginJsonDataOption)({onOptionsChange:i,options:o},"tracesToLogs",{datasourceUid:null===(t=o.jsonData.tracesToLogs)||void 0===t?void 0:t.datasourceUid,tags:e})}})))}var p=function(e){return{infoText:Object(o.css)(s(),e.spacing.md,e.colors.textSemiWeak)}}},GGQ8:function(e,t,n){"use strict";n.r(t);var r=n("Obii"),a=n("F/XL"),o=n("0/uQ"),i=n("zsCE"),c=n("t8hP"),u=n("67Y/"),s=n("LvDl");function l(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function p(e){var t,n,r,a,o,i={duration:e.duration,flags:1,logs:null!==(t=null===(n=e.annotations)||void 0===n?void 0:n.map(f))&&void 0!==t?t:[],operationName:e.name,processID:(null===(r=e.localEndpoint)||void 0===r?void 0:r.serviceName)||(null===(a=e.remoteEndpoint)||void 0===a?void 0:a.serviceName)||"unknown",startTime:e.timestamp,spanID:e.id,traceID:e.traceId,warnings:null,tags:Object.keys(e.tags||{}).map((function(t){return{key:t,type:"error"===t?"bool":"string",value:"error"===t||e.tags[t]}})),references:e.parentId?[{refType:"CHILD_OF",spanID:e.parentId,traceID:e.traceId}]:[]};e.kind&&(i.tags=[{key:"kind",type:"string",value:e.kind}].concat(l(null!==(o=i.tags)&&void 0!==o?o:[])));return i}function f(e){return{timestamp:e.timestamp,fields:[{key:"annotation",type:"string",value:e.value}]}}function v(e){var t=e.reduce((function(e,t){return t.localEndpoint&&e.push(d(t.localEndpoint)),t.remoteEndpoint&&e.push(d(t.remoteEndpoint)),e}),[]);return Object(s.keyBy)(t,"serviceName")}function d(e){return{serviceName:e.serviceName,tags:[m("ipv4",e.ipv4,"string"),m("ipv6",e.ipv6,"string"),m("port",e.port,"number")].filter(s.identity)}}function m(e,t,n){if(t)return{key:e,type:n,value:t}}function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t,n,r,a,o,i){try{var c=e[o](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,a)}function O(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){h(o,r,a,i,c,"next",e)}function c(e){h(o,r,a,i,c,"throw",e)}i(void 0)}))}}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var D=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=w(this,k(t).call(this,e))).instanceSettings=e,n}var n,r,s,l,p;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,e),n=t,(r=[{key:"query",value:function(e){var t,n=null===(t=e.targets[0])||void 0===t?void 0:t.query;return n?this.request("".concat("/api/v2","/trace/").concat(encodeURIComponent(n))).pipe(Object(u.a)(P)):Object(a.a)(T)}},{key:"metadataRequest",value:(p=O(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request(t,n,{hideFromInspector:!0}).toPromise();case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e,this)}))),function(e,t){return p.apply(this,arguments)})},{key:"testDatasource",value:(l=O(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.metadataRequest("".concat("/api/v2","/services"));case 2:return e.abrupt("return",!0);case 3:case"end":return e.stop()}}),e,this)}))),function(){return l.apply(this,arguments)})},{key:"getQueryDisplayText",value:function(e){return e.query}},{key:"request",value:function(e,t,n){var r="/api/datasources/proxy/".concat(this.instanceSettings.id),a=t?Object(i.d)(t):"",u=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,{url:"".concat(r).concat(e).concat(a.length?"?".concat(a):"")});return Object(o.a)(Object(c.getBackendSrv)().datasourceRequest(u))}}])&&j(n.prototype,r),s&&j(n,s),t}(r.DataSourceApi);function P(e){return{data:[new r.MutableDataFrame({fields:[{name:"trace",type:r.FieldType.trace,values:(null==e?void 0:e.data)?[(t=null==e?void 0:e.data,{processes:v(t),traceID:t[0].traceId,spans:t.map(p),warnings:null})]:[]}],meta:{preferredVisualisationType:"trace"}})]};var t}var T={data:[new r.MutableDataFrame({fields:[{name:"trace",type:r.FieldType.trace,values:[]}],meta:{preferredVisualisationType:"trace"}})]},S=n("q1tI"),x=n.n(S),I=n("kDLi"),q=n("Kwub"),C=n("Zcyb"),N=function(e){Object(C.a)((function(){e()}))},R=n("VQUf"),L=n("HJRA");function _(e,t,n,r,a,o,i){try{var c=e[o](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,a)}function F(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){_(o,r,a,i,c,"next",e)}function c(e){_(o,r,a,i,c,"throw",e)}i(void 0)}))}}function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(Object(n),!0).forEach((function(t){J(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function J(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Z=[{label:"No traces found",value:"no_traces",isLeaf:!0}],M={"[No traces in time range]":"__NO_TRACES__"},z=n("Dljr");n.d(t,"plugin",(function(){return B}));var B=new r.DataSourcePlugin(D).setConfigEditor((function(e){var t=e.options,n=e.onOptionsChange;return x.a.createElement(x.a.Fragment,null,x.a.createElement(I.DataSourceHttpSettings,{defaultUrl:"http://localhost:9411",dataSourceConfig:t,showAccessOptions:!1,onChange:n}),x.a.createElement(z.a,{options:t,onOptionsChange:n}))})).setExploreQueryField((function(e){var t=e.query,n=e.onChange,a=e.onRunQuery,o=e.datasource,i=function(e){var t="".concat("/api/v2","/services"),n=A(Object(q.a)(F(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.metadataRequest(t);case 3:if(!(a=n.sent)){n.next=6;break}return n.abrupt("return",a.sort().map((function(e){return{label:e,value:e,isLeaf:!1}})));case 6:return n.abrupt("return",[]);case 9:throw n.prev=9,n.t0=n.catch(0),L.a.emit(r.AppEvents.alertError,["Failed to load services from Zipkin",n.t0]),n.t0;case 13:case"end":return n.stop()}}),n,null,[[0,9]])}))),[e]),2),a=n[0],o=n[1];return N((function(){o()})),a}(o),c=function(e){var t=Object(R.a)(),n=A(Object(S.useState)({}),2),a=n[0],o=n[1],i=A(Object(q.a)(function(){var n=F(regeneratorRuntime.mark((function n(a){var i,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i="".concat("/api/v2","/spans"),n.prev=1,n.next=4,e.metadataRequest(i,{serviceName:a});case 4:c=n.sent,t()&&o((function(e){var t=Object(s.fromPairs)(c.map((function(e){return[e,void 0]})));return Q({},e,J({},a,t))})),n.next=12;break;case 8:throw n.prev=8,n.t0=n.catch(1),L.a.emit(r.AppEvents.alertError,["Failed to load spans from Zipkin",n.t0]),n.t0;case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}(),[e,a]),2)[1],c=A(Object(q.a)(function(){var n=F(regeneratorRuntime.mark((function n(a,i){var c,u,l,p;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c="".concat("/api/v2","/traces"),u={serviceName:a,spanName:i},n.prev=2,n.next=5,e.metadataRequest(c,u);case 5:l=n.sent,t()&&(p=l.length?Object(s.fromPairs)(l.map((function(e){var t=e.find((function(e){return!e.parentId}));return["".concat(t.name," [").concat(Math.floor(t.duration/1e3)," ms]"),t.traceId]}))):M,o((function(e){var t=e[a];return Q({},e,J({},a,Q({},t,J({},i,p))))}))),n.next=13;break;case 9:throw n.prev=9,n.t0=n.catch(2),L.a.emit(r.AppEvents.alertError,["Failed to load spans from Zipkin",n.t0]),n.t0;case 13:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(e,t){return n.apply(this,arguments)}}(),[e]),2)[1];return{onLoadOptions:Object(S.useCallback)((function(e){var t=e[0].value;if(1===e.length)i(t);else if(2===e.length){var n=e[1].value;c(t,n)}}),[i,c]),allOptions:a}}(o),u=c.onLoadOptions,l=c.allOptions,p=Object(S.useCallback)((function(e,r){if(3===r.length){var o=r[2].value;n(Q({},t,{query:o})),a()}}),[n,a,t]),f=function(e,t){return Object(S.useMemo)((function(){var n=[];return e.value&&e.value.length?n=e.value.map((function(e){return Q({},e,{children:t[e.value]&&Object.keys(t[e.value]).map((function(n){return{label:n,value:n,isLeaf:!1,children:t[e.value][n]&&Object.keys(t[e.value][n]).map((function(r){return{label:r,value:t[e.value][n][r]}}))}}))})})):e.value&&!e.value.length&&(n=Z),n}),[e,t])}(i,l);return x.a.createElement(x.a.Fragment,null,x.a.createElement("div",{className:"gf-form-inline gf-form-inline--nowrap"},x.a.createElement("div",{className:"gf-form flex-shrink-0"},x.a.createElement(I.ButtonCascader,{options:f,onChange:p,loadData:u},"Traces")),x.a.createElement("div",{className:"gf-form gf-form--grow flex-shrink-1"},x.a.createElement("div",{className:"slate-query-field__wrapper"},x.a.createElement("div",{className:"slate-query-field"},x.a.createElement("input",{style:{width:"100%"},value:t.query||"",onChange:function(e){return n(Q({},t,{query:e.currentTarget.value}))}}))))))}))},Zcyb:function(e,t,n){"use strict";var r=n("q1tI");t.a=function(e){Object(r.useEffect)(e,[])}}}]);
//# sourceMappingURL=zipkinPlugin.8727e0c1843e7fde919e.js.map
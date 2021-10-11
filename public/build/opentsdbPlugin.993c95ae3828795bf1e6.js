(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{"02dm":function(t,e,r){"use strict";r.r(e);var s=r("KHwQ"),i=r.n(s),a=r("LvDl"),o=r("F/XL"),n=r("9Z1F"),l=r("67Y/"),g=r("t8hP"),c=r("Obii"),h=r("5kRJ");function u(){return(u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s])}return t}).apply(this,arguments)}function p(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}class d extends c.DataSourceApi{constructor(t,e=Object(h.a)()){super(t),p(this,"type",void 0),p(this,"url",void 0),p(this,"name",void 0),p(this,"withCredentials",void 0),p(this,"basicAuth",void 0),p(this,"tsdbVersion",void 0),p(this,"tsdbResolution",void 0),p(this,"lookupLimit",void 0),p(this,"tagKeys",void 0),p(this,"aggregatorsPromise",void 0),p(this,"filterTypesPromise",void 0),this.templateSrv=e,this.type="opentsdb",this.url=t.url,this.name=t.name,this.withCredentials=t.withCredentials,this.basicAuth=t.basicAuth,t.jsonData=t.jsonData||{},this.tsdbVersion=t.jsonData.tsdbVersion||1,this.tsdbResolution=t.jsonData.tsdbResolution||1,this.lookupLimit=t.jsonData.lookupLimit||1e3,this.tagKeys={},this.aggregatorsPromise=null,this.filterTypesPromise=null}query(t){const e=this.convertToTSDBTime(t.range.raw.from,!1,t.timezone),r=this.convertToTSDBTime(t.range.raw.to,!0,t.timezone),s=[];Object(a.each)(t.targets,e=>{e.metric&&s.push(this.convertTargetToQuery(e,t,this.tsdbVersion))});const i=Object(a.compact)(s);if(Object(a.isEmpty)(i))return Object(o.a)({data:[]});const g={};return Object(a.each)(i,t=>{t.filters&&t.filters.length>0?Object(a.each)(t.filters,t=>{g[t.tagk]=!0}):Object(a.each)(t.tags,(t,e)=>{g[e]=!0})}),t.targets=Object(a.filter)(t.targets,t=>!0!==t.hide),this.performTimeSeriesQuery(i,e,r).pipe(Object(n.a)(t=>{var e,r;throw(null==t||null===(e=t.data)||void 0===e||null===(r=e.error)||void 0===r?void 0:r.message)||"Error performing time series query."}),Object(l.a)(e=>{const r=this.mapMetricsToTargets(e.data,t,this.tsdbVersion);return{data:Object(a.map)(e.data,(e,s)=>(-1===(s=r[s])&&(s=0),this._saveTagKeys(e),this.transformMetricData(e,g,t.targets[s],t,this.tsdbResolution)))}}))}annotationQuery(t){const e=this.convertToTSDBTime(t.rangeRaw.from,!1,t.timezone),r=this.convertToTSDBTime(t.rangeRaw.to,!0,t.timezone),s=[],i=[];s.push({aggregator:"sum",metric:t.annotation.target});const o=Object(a.compact)(s);return this.performTimeSeriesQuery(o,e,r).pipe(Object(l.a)(e=>{if(e.data[0]){let r=e.data[0].annotations;t.annotation.isGlobal&&(r=e.data[0].globalAnnotations),r&&Object(a.each)(r,e=>{const r={text:e.description,time:1e3*Math.floor(e.startTime),annotation:t.annotation};i.push(r)})}return i})).toPromise()}targetContainsTemplate(t){if(t.filters&&t.filters.length>0)for(let e=0;e<t.filters.length;e++)if(this.templateSrv.variableExists(t.filters[e].filter))return!0;if(t.tags&&Object.keys(t.tags).length>0)for(const e in t.tags)if(this.templateSrv.variableExists(t.tags[e]))return!0;return!1}performTimeSeriesQuery(t,e,r){let s=!1;2===this.tsdbResolution&&(s=!0);const i={start:e,queries:t,msResolution:s,globalAnnotations:!0};3===this.tsdbVersion&&(i.showQuery=!0),r&&(i.end=r);const a={method:"POST",url:this.url+"/api/query",data:i};return this._addCredentialOptions(a),Object(g.getBackendSrv)().fetch(a)}suggestTagKeys(t){return Promise.resolve(this.tagKeys[t]||[])}_saveTagKeys(t){const e=Object.keys(t.tags);Object(a.each)(t.aggregateTags,t=>{e.push(t)}),this.tagKeys[t.metric]=e}_performSuggestQuery(t,e){return this._get("/api/suggest",{type:e,q:t,max:this.lookupLimit}).pipe(Object(l.a)(t=>t.data))}_performMetricKeyValueLookup(t,e){if(!t||!e)return Object(o.a)([]);const r=e.split(",").map(t=>t.trim()),s=r[0];let i=s+"=*";r.length>1&&(i+=","+r.splice(1).join(","));const n=t+"{"+i+"}";return this._get("/api/search/lookup",{m:n,limit:this.lookupLimit}).pipe(Object(l.a)(t=>{t=t.data.results;const e=[];return Object(a.each)(t,t=>{-1===e.indexOf(t.tags[s])&&e.push(t.tags[s])}),e}))}_performMetricKeyLookup(t){return t?this._get("/api/search/lookup",{m:t,limit:1e3}).pipe(Object(l.a)(t=>{t=t.data.results;const e=[];return Object(a.each)(t,t=>{Object(a.each)(t.tags,(t,r)=>{-1===e.indexOf(r)&&e.push(r)})}),e})):Object(o.a)([])}_get(t,e){const r={method:"GET",url:this.url+t,params:e};return this._addCredentialOptions(r),Object(g.getBackendSrv)().fetch(r)}_addCredentialOptions(t){(this.basicAuth||this.withCredentials)&&(t.withCredentials=!0),this.basicAuth&&(t.headers={Authorization:this.basicAuth})}metricFindQuery(t){if(!t)return Promise.resolve([]);let e;try{e=this.templateSrv.replace(t,{},"distributed")}catch(t){return Promise.reject(t)}const r=t=>Object(a.map)(t,t=>({text:t})),s=e.match(/metrics\((.*)\)/);if(s)return this._performSuggestQuery(s[1],"metrics").pipe(Object(l.a)(r)).toPromise();const i=e.match(/tag_names\((.*)\)/);if(i)return this._performMetricKeyLookup(i[1]).pipe(Object(l.a)(r)).toPromise();const o=e.match(/tag_values\((.*?),\s?(.*)\)/);if(o)return this._performMetricKeyValueLookup(o[1],o[2]).pipe(Object(l.a)(r)).toPromise();const n=e.match(/suggest_tagk\((.*)\)/);if(n)return this._performSuggestQuery(n[1],"tagk").pipe(Object(l.a)(r)).toPromise();const g=e.match(/suggest_tagv\((.*)\)/);return g?this._performSuggestQuery(g[1],"tagv").pipe(Object(l.a)(r)).toPromise():Promise.resolve([])}testDatasource(){return this._performSuggestQuery("cpu","metrics").pipe(Object(l.a)(()=>({status:"success",message:"Data source is working"}))).toPromise()}getAggregators(){return this.aggregatorsPromise||(this.aggregatorsPromise=this._get("/api/aggregators").pipe(Object(l.a)(t=>t.data&&Object(a.isArray)(t.data)?t.data.sort():[])).toPromise()),this.aggregatorsPromise}getFilterTypes(){return this.filterTypesPromise||(this.filterTypesPromise=this._get("/api/config/filters").pipe(Object(l.a)(t=>t.data?Object.keys(t.data).sort():[])).toPromise()),this.filterTypesPromise}transformMetricData(t,e,r,s,i){const o=this.createMetricLabel(t,r,e,s),n=[];return Object(a.each)(t.dps,(t,e)=>{2===i?n.push([t,1*e]):n.push([t,1e3*e])}),{target:o,datapoints:n}}createMetricLabel(t,e,r,s){if(e.alias){const r=Object(a.clone)(s.scopedVars||{});return Object(a.each)(t.tags,(t,e)=>{r["tag_"+e]={value:t}}),this.templateSrv.replace(e.alias,r)}let i=t.metric;const o=[];return Object(a.isEmpty)(t.tags)||Object(a.each)(Object(a.toPairs)(t.tags),t=>{Object(a.has)(r,t[0])&&o.push(t[0]+"="+t[1])}),Object(a.isEmpty)(o)||(i+="{"+o.join(", ")+"}"),i}convertTargetToQuery(t,e,r){if(!t.metric||t.hide)return null;const s={metric:this.templateSrv.replace(t.metric,e.scopedVars,"pipe"),aggregator:"avg"};if(t.aggregator&&(s.aggregator=this.templateSrv.replace(t.aggregator)),t.shouldComputeRate&&(s.rate=!0,s.rateOptions={counter:!!t.isCounter},t.counterMax&&t.counterMax.length&&(s.rateOptions.counterMax=parseInt(t.counterMax,10)),t.counterResetValue&&t.counterResetValue.length&&(s.rateOptions.resetValue=parseInt(t.counterResetValue,10)),r>=2&&(s.rateOptions.dropResets=!(s.rateOptions.counterMax||s.rateOptions.ResetValue&&0!==s.rateOptions.ResetValue))),!t.disableDownsampling){let r=this.templateSrv.replace(t.downsampleInterval||e.interval);r.match(/\.[0-9]+s/)&&(r=1e3*parseFloat(r)+"ms"),s.downsample=r+"-"+t.downsampleAggregator,t.downsampleFillPolicy&&"none"!==t.downsampleFillPolicy&&(s.downsample+="-"+t.downsampleFillPolicy)}if(t.filters&&t.filters.length>0){if(s.filters=i.a.copy(t.filters),s.filters)for(const t in s.filters)s.filters[t].filter=this.templateSrv.replace(s.filters[t].filter,e.scopedVars,"pipe")}else if(s.tags=i.a.copy(t.tags),s.tags)for(const t in s.tags)s.tags[t]=this.templateSrv.replace(s.tags[t],e.scopedVars,"pipe");return t.explicitTags&&(s.explicitTags=!0),s}mapMetricsToTargets(t,e,r){let s,i;return Object(a.map)(t,t=>3===r?t.query.index:Object(a.findIndex)(e.targets,r=>r.filters&&r.filters.length>0?r.metric===t.metric:r.metric===t.metric&&Object(a.every)(r.tags,(r,o)=>(s=this.templateSrv.replace(r,e.scopedVars,"pipe"),i=s.split("|"),Object(a.includes)(i,t.tags[o])||"*"===s))))}interpolateVariablesInQueries(t,e){return t.length?t.map(t=>u({},t,{metric:this.templateSrv.replace(t.metric,e)})):t}convertToTSDBTime(t,e,r){return"now"===t?null:(t=c.dateMath.parse(t,e,r)).valueOf()}}var m=r("LzXI");function b(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}class f extends m.QueryCtrl{constructor(t,e){super(t,e),b(this,"aggregators",void 0),b(this,"fillPolicies",void 0),b(this,"filterTypes",void 0),b(this,"tsdbVersion",void 0),b(this,"aggregator",void 0),b(this,"downsampleInterval",void 0),b(this,"downsampleAggregator",void 0),b(this,"downsampleFillPolicy",void 0),b(this,"errors",void 0),b(this,"suggestMetrics",void 0),b(this,"suggestTagKeys",void 0),b(this,"suggestTagValues",void 0),b(this,"addTagMode",!1),b(this,"addFilterMode",!1),this.errors=this.validateTarget(),this.aggregators=["avg","sum","min","max","dev","zimsum","mimmin","mimmax"],this.fillPolicies=["none","nan","null","zero"],this.filterTypes=["wildcard","iliteral_or","not_iliteral_or","not_literal_or","iwildcard","literal_or","regexp"],this.tsdbVersion=this.datasource.tsdbVersion,this.target.aggregator||(this.target.aggregator="sum"),this.target.downsampleAggregator||(this.target.downsampleAggregator="avg"),this.target.downsampleFillPolicy||(this.target.downsampleFillPolicy="none"),this.datasource.getAggregators().then(t=>{0!==t.length&&(this.aggregators=t)}),this.datasource.getFilterTypes().then(t=>{0!==t.length&&(this.filterTypes=t)}),this.suggestMetrics=(t,e)=>{this.datasource.metricFindQuery("metrics("+t+")").then(this.getTextValues).then(e)},this.suggestTagKeys=(t,e)=>{this.datasource.suggestTagKeys(this.target.metric).then(e)},this.suggestTagValues=(t,e)=>{this.datasource.metricFindQuery("suggest_tagv("+t+")").then(this.getTextValues).then(e)}}targetBlur(){this.errors=this.validateTarget(),this.refresh()}getTextValues(t){return Object(a.map)(t,t=>c.textUtil.escapeHtml(t.text))}addTag(){this.target.filters&&this.target.filters.length>0&&(this.errors.tags="Please remove filters to use tags, tags and filters are mutually exclusive."),this.addTagMode?(this.target.tags||(this.target.tags={}),this.errors=this.validateTarget(),this.errors.tags||(this.target.tags[this.target.currentTagKey]=this.target.currentTagValue,this.target.currentTagKey="",this.target.currentTagValue="",this.targetBlur()),this.addTagMode=!1):this.addTagMode=!0}removeTag(t){delete this.target.tags[t],this.targetBlur()}editTag(t,e){this.removeTag(t),this.target.currentTagKey=t,this.target.currentTagValue=e,this.addTag()}closeAddTagMode(){this.addTagMode=!1}addFilter(){if(this.target.tags&&Object(a.size)(this.target.tags)>0&&(this.errors.filters="Please remove tags to use filters, tags and filters are mutually exclusive."),this.addFilterMode){if(this.target.filters||(this.target.filters=[]),this.target.currentFilterType||(this.target.currentFilterType="iliteral_or"),this.target.currentFilterGroupBy||(this.target.currentFilterGroupBy=!1),this.errors=this.validateTarget(),!this.errors.filters){const t={type:this.target.currentFilterType,tagk:this.target.currentFilterKey,filter:this.target.currentFilterValue,groupBy:this.target.currentFilterGroupBy};this.target.filters.push(t),this.target.currentFilterType="literal_or",this.target.currentFilterKey="",this.target.currentFilterValue="",this.target.currentFilterGroupBy=!1,this.targetBlur()}this.addFilterMode=!1}else this.addFilterMode=!0}removeFilter(t){this.target.filters.splice(t,1),this.targetBlur()}editFilter(t,e){this.removeFilter(e),this.target.currentFilterKey=t.tagk,this.target.currentFilterValue=t.filter,this.target.currentFilterType=t.type,this.target.currentFilterGroupBy=t.groupBy,this.addFilter()}closeAddFilterMode(){this.addFilterMode=!1}validateTarget(){const t={};if(this.target.shouldDownsample)try{this.target.downsampleInterval?c.rangeUtil.describeInterval(this.target.downsampleInterval):t.downsampleInterval="You must supply a downsample interval (e.g. '1m' or '1h')."}catch(e){t.downsampleInterval=e.message}return this.target.tags&&Object(a.has)(this.target.tags,this.target.currentTagKey)&&(t.tags="Duplicate tag key '"+this.target.currentTagKey+"'."),t}}f.$inject=["$scope","$injector"],b(f,"templateUrl","partials/query.editor.html");r("q1tI");var v,j,y,O,T=r("kDLi"),w=r("nKUr");function F(){return(F=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s])}return t}).apply(this,arguments)}const{Select:P,Input:x}=T.LegacyForms,S=[{label:"<=2.1",value:1},{label:"==2.2",value:2},{label:"==2.3",value:3}],V=[{label:"second",value:1},{label:"millisecond",value:2}],_=t=>{var e,r,s;const{onChange:i,value:a}=t;return Object(w.jsxs)(w.Fragment,{children:[v||(v=Object(w.jsx)("h5",{children:"OpenTSDB settings"})),Object(w.jsxs)("div",{className:"gf-form",children:[j||(j=Object(w.jsx)(T.InlineFormLabel,{width:7,children:"Version"})),Object(w.jsx)(P,{menuShouldPortal:!0,options:S,value:null!==(e=S.find(t=>t.value===a.jsonData.tsdbVersion))&&void 0!==e?e:S[0],onChange:M("tsdbVersion",a,i)})]}),Object(w.jsxs)("div",{className:"gf-form",children:[y||(y=Object(w.jsx)(T.InlineFormLabel,{width:7,children:"Resolution"})),Object(w.jsx)(P,{menuShouldPortal:!0,options:V,value:null!==(r=V.find(t=>t.value===a.jsonData.tsdbResolution))&&void 0!==r?r:V[0],onChange:M("tsdbResolution",a,i)})]}),Object(w.jsxs)("div",{className:"gf-form",children:[O||(O=Object(w.jsx)(T.InlineFormLabel,{width:7,children:"Lookup Limit"})),Object(w.jsx)(x,{type:"number",value:null!==(s=a.jsonData.lookupLimit)&&void 0!==s?s:1e3,onChange:k("lookupLimit",a,i)})]})]})},M=(t,e,r)=>s=>{r(F({},e,{jsonData:F({},e.jsonData,{[t]:s.value})}))},k=(t,e,r)=>s=>{r(F({},e,{jsonData:F({},e.jsonData,{[t]:s.currentTarget.value})}))};r.d(e,"plugin",(function(){return A}));class D{}var K,C,L;L="partials/annotations.editor.html",(C="templateUrl")in(K=D)?Object.defineProperty(K,C,{value:L,enumerable:!0,configurable:!0,writable:!0}):K[C]=L;const A=new c.DataSourcePlugin(d).setQueryCtrl(f).setConfigEditor(t=>{const{options:e,onOptionsChange:r}=t;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(T.DataSourceHttpSettings,{defaultUrl:"http://localhost:4242",dataSourceConfig:e,onChange:r}),Object(w.jsx)(_,{value:e,onChange:r})]})}).setAnnotationQueryCtrl(D)}}]);
//# sourceMappingURL=opentsdbPlugin.993c95ae3828795bf1e6.js.map
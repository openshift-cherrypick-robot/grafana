(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"4vLh":function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"f",(function(){return o})),a.d(t,"a",(function(){return u})),a.d(t,"g",(function(){return d})),a.d(t,"e",(function(){return h})),a.d(t,"d",(function(){return p})),a.d(t,"c",(function(){return g}));var n=a("Obii"),r=a("t8hP"),s=a("HJRA"),i=a("qOGI");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function l(e){return async t=>{t(Object(i.b)());const a=await Object(r.getBackendSrv)().get("/api/alerts",e);t(Object(i.c)(a))}}function o(e,t){return async a=>{await Object(r.getBackendSrv)().post(`/api/alerts/${e}/pause`,t);a(l({state:(r.locationService.getSearchObject().state||"all").toString()}))}}function u(e){return async t=>{try{await Object(r.getBackendSrv)().post("/api/alert-notifications",e),s.a.emit(n.AppEvents.alertSuccess,["Notification created"]),r.locationService.push("/alerting/notifications")}catch(e){s.a.emit(n.AppEvents.alertError,[e.data.error])}}}function d(e){return async t=>{try{await Object(r.getBackendSrv)().put("/api/alert-notifications/"+e.id,e),s.a.emit(n.AppEvents.alertSuccess,["Notification updated"])}catch(e){s.a.emit(n.AppEvents.alertError,[e.data.error])}}}function h(e){return async(t,a)=>{const n=a().notificationChannel.notificationChannel;await Object(r.getBackendSrv)().post("/api/alert-notifications/test",c({id:n.id},e))}}function p(){return async e=>{const t=(await Object(r.getBackendSrv)().get("/api/alert-notifiers")).sort((e,t)=>e.name>t.name?1:-1);e(Object(i.f)(t))}}function g(e){return async t=>{await t(p());const a=await Object(r.getBackendSrv)().get("/api/alert-notifications/"+e);t(Object(i.d)(a))}}},JRIL:function(e,t,a){"use strict";a.r(t),function(e){a.d(t,"AlertRuleListUnconnected",(function(){return A}));var n,r,s,i=a("q1tI"),c=a("0cfB"),l=a("/MKj"),o=a("ZGyg"),u=a("YAXX"),d=a("Xmxp"),h=a("lzJ5"),p=a("4vLh"),g=a("lPMX"),b=a("EKT6"),j=a("t8hP"),f=a("qOGI"),O=a("kDLi"),v=a("xAj+"),m=a("qo+S"),x=a("nKUr");function y(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const S={getAlertRulesAsync:p.b,setSearchQuery:f.g,togglePauseAlertRule:p.f},w=Object(l.connect)((function(e){return{navModel:Object(h.a)(e.navIndex,"alert-list"),alertRules:Object(g.a)(e),search:Object(g.b)(e.alertRules),isLoading:e.alertRules.isLoading}}),S);class A extends i.PureComponent{constructor(...e){super(...e),y(this,"stateFilters",[{label:"All",value:"all"},{label:"OK",value:"ok"},{label:"Not OK",value:"not_ok"},{label:"Alerting",value:"alerting"},{label:"No data",value:"no_data"},{label:"Paused",value:"paused"},{label:"Pending",value:"pending"}]),y(this,"onStateFilterChanged",e=>{j.locationService.partial({state:e.value})}),y(this,"onOpenHowTo",()=>{d.b.publish(new v.ShowModalReactEvent({component:m.a}))}),y(this,"onSearchQueryChange",e=>{this.props.setSearchQuery(e)}),y(this,"onTogglePause",e=>{this.props.togglePauseAlertRule(e.id,{paused:"paused"!==e.state})}),y(this,"alertStateFilterOption",({text:e,value:t})=>Object(x.jsx)("option",{value:t,children:e},t))}componentDidMount(){this.fetchRules()}componentDidUpdate(e){e.queryParams.state!==this.props.queryParams.state&&this.fetchRules()}async fetchRules(){await this.props.getAlertRulesAsync({state:this.getStateFilter()})}getStateFilter(){var e;return null!==(e=this.props.queryParams.state)&&void 0!==e?e:"all"}render(){const{navModel:e,alertRules:t,search:a,isLoading:i}=this.props;return Object(x.jsx)(o.b,{navModel:e,children:Object(x.jsxs)(o.b.Contents,{isLoading:i,children:[Object(x.jsxs)("div",{className:"page-action-bar",children:[Object(x.jsx)("div",{className:"gf-form gf-form--grow",children:Object(x.jsx)(b.a,{placeholder:"Search alerts",value:a,onChange:this.onSearchQueryChange})}),Object(x.jsxs)("div",{className:"gf-form",children:[n||(n=Object(x.jsx)("label",{className:"gf-form-label",children:"States"})),Object(x.jsx)("div",{className:"width-13",children:Object(x.jsx)(O.Select,{menuShouldPortal:!0,options:this.stateFilters,onChange:this.onStateFilterChanged,value:this.getStateFilter()})})]}),r||(r=Object(x.jsx)("div",{className:"page-action-bar__spacer"})),j.config.featureToggles.ngalert&&(s||(s=Object(x.jsx)(O.LinkButton,{variant:"primary",href:"alerting/ng/new",children:"Add NG Alert"}))),Object(x.jsx)(O.Button,{variant:"secondary",onClick:this.onOpenHowTo,children:"How to add an alert"})]}),Object(x.jsx)(O.VerticalGroup,{spacing:"none",children:t.map(e=>Object(x.jsx)(u.a,{rule:e,search:a,onTogglePause:()=>this.onTogglePause(e)},e.id))})]})})}}t.default=Object(c.hot)(e)(w(A))}.call(this,a("3UD+")(e))},YAXX:function(e,t,a){"use strict";var n=a("q1tI"),r=a("WG1l"),s=a.n(r),i=a("kDLi"),c=a("nKUr");t.a=({rule:e,search:t,onTogglePause:a})=>{const r=`${e.url}?editPanel=${e.panelId}&tab=alert`,l=Object(n.useCallback)(e=>Object(c.jsx)(s.a,{highlightClassName:"highlight-search-match",textToHighlight:e,searchWords:[t]},e),[t]);return Object(c.jsxs)(i.Card,{heading:Object(c.jsx)("a",{href:r,children:l(e.name)}),children:[Object(c.jsx)(i.Card.Figure,{children:Object(c.jsx)(i.Icon,{size:"xl",name:e.stateIcon,className:"alert-rule-item__icon "+e.stateClass})}),Object(c.jsxs)(i.Card.Meta,{children:[Object(c.jsxs)("span",{children:[Object(c.jsxs)("span",{className:""+e.stateClass,children:[l(e.stateText)," "]},"text"),"for ",e.stateAge]},"state"),e.info?l(e.info):null]}),Object(c.jsxs)(i.Card.Actions,{children:[Object(c.jsx)(i.Button,{variant:"secondary",icon:"paused"===e.state?"play":"pause",onClick:a,children:"paused"===e.state?"Resume":"Pause"},"play"),Object(c.jsx)(i.LinkButton,{variant:"secondary",href:r,icon:"cog",children:"Edit alert"},"edit")]})]})}},lPMX:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}));const n=e=>e.searchQuery,r=e=>{const t=new RegExp(e.alertRules.searchQuery,"i");return e.alertRules.items.filter(e=>t.test(e.name)||t.test(e.stateText)||t.test(e.info))}},"qo+S":function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n,r=a("kDLi"),s=(a("q1tI"),a("nKUr"));function i({onDismiss:e}){return Object(s.jsx)(r.Modal,{title:"Adding an Alert",isOpen:!0,onDismiss:e,onClickBackdrop:e,children:n||(n=Object(s.jsxs)(r.VerticalGroup,{spacing:"sm",children:[Object(s.jsx)("img",{src:"public/img/alert_howto_new.png",alt:"link to how to alert image"}),Object(s.jsx)("p",{children:"Alerts are added and configured in the Alert tab of any dashboard graph panel, letting you build and visualize an alert using existing queries."}),Object(s.jsx)("p",{children:"Remember to save the dashboard to persist your alert rule changes."})]}))})}}}]);
//# sourceMappingURL=AlertRuleList.d7e0f7a1f9e400a945e0.js.map
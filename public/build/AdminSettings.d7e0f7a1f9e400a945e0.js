(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{Cqi4:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"AdminSettings",(function(){return j}));var s,i=n("q1tI"),a=n.n(i),c=n("/MKj"),r=n("0cfB"),d=n("t8hP"),o=n("lzJ5"),l=n("ZGyg"),b=n("nKUr");class j extends a.a.PureComponent{constructor(...e){var t,n,s;super(...e),s={settings:{},isLoading:!0},(n="state")in(t=this)?Object.defineProperty(t,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[n]=s}async componentDidMount(){const e=await Object(d.getBackendSrv)().get("/api/admin/settings");this.setState({settings:e,isLoading:!1})}render(){const{settings:e,isLoading:t}=this.state,{navModel:n}=this.props;return Object(b.jsx)(l.b,{navModel:n,children:Object(b.jsxs)(l.b.Contents,{isLoading:t,children:[Object(b.jsx)("div",{className:"grafana-info-box span8",style:{margin:"20px 0 25px 0"},children:"These system settings are defined in grafana.ini or custom.ini (or overridden in ENV variables). To change these you currently need to restart Grafana."}),Object(b.jsx)("table",{className:"filter-table",children:Object(b.jsx)("tbody",{children:Object.entries(e).map(([e,t],n)=>Object(b.jsxs)(a.a.Fragment,{children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{className:"admin-settings-section",children:e}),s||(s=Object(b.jsx)("td",{}))]}),Object.entries(t).map(([e,t],n)=>Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{style:{paddingLeft:"25px"},children:e}),Object(b.jsx)("td",{style:{whiteSpace:"break-spaces"},children:t})]},"property-"+n))]},"section-"+n))})})]})})}}t.default=Object(r.hot)(e)(Object(c.connect)(e=>({navModel:Object(o.a)(e.navIndex,"server-settings")}))(j))}.call(this,n("3UD+")(e))}}]);
//# sourceMappingURL=AdminSettings.d7e0f7a1f9e400a945e0.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"1S9k":function(e,t,n){"use strict";var a=n("q1tI"),r=n("ZFWI"),i=n("EPCr"),s=n("nKUr");const o=({isCurrent:e,plugin:t,onClick:n,disabled:a})=>Object(s.jsx)(i.a,{title:t.name,plugin:t,description:t.info.description,onClick:n,isCurrent:e,disabled:a,showBadge:!0});o.displayName="VizTypePickerPlugin";var c,l=n("kDLi"),d=n("Obii"),u=n("vF1F");function p(){const e=r.b.panels;return Object.keys(e).filter(t=>!1===e[t].hideFromList).map(t=>e[t]).sort((e,t)=>e.sort-t.sort)}function b(e,t,n){if(!t.length)return e.filter(e=>e.state!==d.PluginState.deprecated||n.id===e.id);const a=t.toLowerCase(),r=[],i=[];for(const t of e){if(t.state===d.PluginState.deprecated&&n.id!==t.id)continue;const e=t.name.toLowerCase().indexOf(a);0===e?r.push(t):e>0&&i.push(t)}return r.concat(i)}n.d(t,"c",(function(){return p})),n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return h}));const h=({searchQuery:e,onTypeChange:t,current:n})=>{const r=Object(l.useTheme)(),i=g(r),u=Object(a.useMemo)(()=>p(),[]),h=Object(a.useCallback)(()=>b(u,e,n),[n,u,e]),j=h(),f=j.length>0,m=j.concat(u.filter(e=>-1===j.indexOf(e)));return Object(s.jsx)("div",{className:i.grid,children:f?m.map((a,r)=>a.state===d.PluginState.deprecated?null:((a,r)=>{const i=a.id===n.id,c=h().indexOf(a)>-1;return Object(s.jsx)(o,{disabled:!c&&!!e,isCurrent:i,plugin:a,onClick:e=>t(a,Boolean(e.metaKey||e.ctrlKey||e.altKey))},a.id)})(a)):c||(c=Object(s.jsx)(l.EmptySearchResult,{children:"Could not find anything matching your query"}))})};h.displayName="VizTypePicker";const g=Object(l.stylesFactory)(e=>({grid:u.css`
      max-width: 100%;
      display: grid;
      grid-gap: ${e.spacing.sm};
    `}))},"7iUX":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n("q1tI");var a=n("kDLi"),r=n("Obii"),i=n("nKUr");const s=e=>{const t=function(e){switch(e){case r.PluginState.deprecated:return{text:"Deprecated",color:"red",tooltip:"This feature is deprecated and will be removed in a future release"};case r.PluginState.alpha:return{text:"Alpha",color:"blue",tooltip:"This feature is experimental and future updates might not be backward compatible"};case r.PluginState.beta:return{text:"Beta",color:"blue",tooltip:"This feature is close to complete but not fully tested"};default:return null}}(e.state);return t?Object(i.jsx)(a.Badge,{color:t.color,title:t.tooltip,text:t.text,icon:t.icon}):null}},EPCr:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n("q1tI");var a=n("Obii"),r=n("kDLi"),i=n("vF1F"),s=n("Csm0"),o=n("7iUX"),c=n("nKUr");const l=({isCurrent:e,title:t,plugin:n,onClick:o,onDelete:l,disabled:p,showBadge:b,description:h,children:g})=>{const j=Object(r.useStyles2)(d),f=Object(i.cx)({[j.item]:!0,[j.disabled]:p||n.state===a.PluginState.deprecated,[j.current]:e});return Object(c.jsxs)("div",{className:f,"aria-label":s.a.components.PluginVisualization.item(n.name),onClick:p?void 0:o,title:e?"Click again to close this section":n.name,children:[Object(c.jsx)("img",{className:j.img,src:n.info.logos.small}),Object(c.jsxs)("div",{className:j.itemContent,children:[Object(c.jsx)("div",{className:j.name,children:t}),h?Object(c.jsx)("span",{className:j.description,children:h}):null,g]}),b&&Object(c.jsx)("div",{className:Object(i.cx)(j.badge,p&&j.disabled),children:Object(c.jsx)(u,{plugin:n})}),l&&Object(c.jsx)(r.IconButton,{name:"trash-alt",onClick:e=>{e.stopPropagation(),l()},"aria-label":"Delete button on panel type card"})]})};l.displayName="PanelTypeCard";const d=e=>({item:i.css`
      position: relative;
      display: flex;
      flex-shrink: 0;
      cursor: pointer;
      background: ${e.colors.background.secondary};
      border-radius: ${e.shape.borderRadius()};
      box-shadow: ${e.shadows.z1};
      border: 1px solid ${e.colors.background.secondary};
      align-items: center;
      padding: 8px;
      width: 100%;
      position: relative;
      overflow: hidden;
      transition: ${e.transitions.create(["background"],{duration:e.transitions.duration.short})};

      &:hover {
        background: ${e.colors.emphasize(e.colors.background.secondary,.03)};
      }
    `,itemContent:i.css`
      position: relative;
      width: 100%;
      padding: ${e.spacing(0,1)};
    `,current:i.css`
      label: currentVisualizationItem;
      border: 1px solid ${e.colors.primary.border};
      background: ${e.colors.action.selected};
    `,disabled:i.css`
      opacity: 0.2;
      filter: grayscale(1);
      cursor: default;
      pointer-events: none;
    `,name:i.css`
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      font-size: ${e.typography.size.sm};
      font-weight: ${e.typography.fontWeightMedium};
      width: 100%;
    `,description:i.css`
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      color: ${e.colors.text.secondary};
      font-size: ${e.typography.bodySmall.fontSize};
      font-weight: ${e.typography.fontWeightLight};
      width: 100%;
    `,img:i.css`
      max-height: 38px;
      width: 38px;
      display: flex;
      align-items: center;
    `,badge:i.css`
      background: ${e.colors.background.primary};
    `}),u=({plugin:e})=>Object(a.isUnsignedPluginSignature)(e.signature)?Object(c.jsx)(r.PluginSignatureBadge,{status:e.signature}):Object(c.jsx)(o.a,{state:e.state});u.displayName="PanelPluginBadge"},KO1d:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("vF1F");function r(e){return{myTable:a.css`
      max-height: 204px;
      overflow-y: auto;
      margin-top: 11px;
      margin-bottom: 28px;
      border-radius: ${e.border.radius.sm};
      border: 1px solid ${e.colors.bg3};
      background: ${e.colors.bg1};
      color: ${e.colors.textSemiWeak};
      font-size: ${e.typography.size.md};
      width: 100%;

      thead {
        color: #538ade;
        font-size: ${e.typography.size.sm};
      }

      th,
      td {
        padding: 6px 13px;
        height: ${e.spacing.xl};
      }

      tbody > tr:nth-child(odd) {
        background: ${e.colors.bg2};
      }
    `,noteTextbox:a.css`
      margin-bottom: ${e.spacing.xl};
    `,textInfo:a.css`
      color: ${e.colors.textSemiWeak};
      font-size: ${e.typography.size.sm};
    `,dashboardSearch:a.css`
      margin-top: ${e.spacing.md};
    `,modal:a.css`
      width: 500px;
    `,modalText:a.css`
      font-size: ${e.typography.heading.h4};
      color: ${e.colors.link};
      margin-bottom: calc(${e.spacing.d} * 2);
      padding-top: ${e.spacing.d};
    `}}},NluS:function(e,t,n){"use strict";function a(e){return"function"==typeof e?e():e}function r(){var e={};return e.promise=new Promise((function(t,n){e.resolve=t,e.reject=n})),e}e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=void 0,s=void 0,o=void 0,c=[];return function(){var d=a(t),u=(new Date).getTime(),p=!i||u-i>d;i=u;for(var b=arguments.length,h=Array(b),g=0;g<b;g++)h[g]=arguments[g];if(p&&n.leading)return n.accumulate?Promise.resolve(e.call(this,[h])).then((function(e){return e[0]})):Promise.resolve(e.call.apply(e,[this].concat(h)));if(s?clearTimeout(o):s=r(),c.push(h),o=setTimeout(l.bind(this),d),n.accumulate){var j=c.length-1;return s.promise.then((function(e){return e[j]}))}return s.promise};function l(){var t=s;clearTimeout(o),Promise.resolve(n.accumulate?e.call(this,c):e.apply(this,c[c.length-1])).then(t.resolve,t.reject),c=[],s=null}}},ZAQQ:function(e,t,n){"use strict";var a=n("q1tI"),r=n("rYwU"),i=n("vF1F"),s=n("kDLi"),o=n("Obii"),c=n("EPCr"),l=n("pugT"),d=n("0/uQ"),u=n("F/XL"),p=n("p0ib"),b=n("gI3B"),h=n("psW0"),g=n("9Z1F"),j=n("2WpN"),f=n("S1nX"),m=n("aGNc"),O=n("ny24"),y=n("V8VS"),x=n("i7Pf");function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const P={loadingState:o.LoadingState.Loading,libraryPanels:[],totalCount:0,perPage:40,page:1,numberOfPages:0,currentPanelId:void 0},w=Object(x.b)("libraryPanels/view/initSearch"),S=Object(x.b)("libraryPanels/view/searchCompleted"),C=Object(x.b)("libraryPanels/view/changePage"),k=(e,t)=>{if(w.match(t))return v({},e,{loadingState:o.LoadingState.Loading});if(S.match(t)){const{libraryPanels:n,page:a,perPage:r,totalCount:i}=t.payload,s=Math.ceil(i/r);return v({},e,{libraryPanels:n,perPage:r,totalCount:i,loadingState:o.LoadingState.Done,numberOfPages:s,page:a>s?a-1:a})}return C.match(t)?v({},e,{page:t.payload.page}):e};function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function $(e){return function(t){const n=new l.a,a=Object(d.a)(Object(y.f)({searchString:e.searchString,perPage:e.perPage,page:e.page,excludeUid:e.currentPanelId,sortDirection:e.sortDirection,typeFilter:e.panelFilter,folderFilter:e.folderFilter})).pipe(Object(h.b)(({perPage:e,elements:t,page:n,totalCount:a})=>Object(u.a)(S({libraryPanels:t,page:n,perPage:e,totalCount:a}))),Object(g.a)(t=>(console.error(t),Object(u.a)(S(F({},P,{page:e.page,perPage:e.perPage}))))),Object(j.a)(()=>n.unsubscribe()),Object(f.a)());n.add(Object(p.a)(Object(b.a)(50).pipe(Object(m.a)(w()),Object(O.a)(a)),a).subscribe(t))}}function N(e){return function(t){return t instanceof Function?t(e):e(t)}}function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const L={loadingState:o.LoadingState.Loading,dashboardTitles:[]},T=Object(x.b)("libraryPanels/delete/searchCompleted"),I=(e=L,t)=>T.match(t)?D({},e,{dashboardTitles:t.payload.dashboards.map(e=>e.title),loadingState:o.LoadingState.Done}):e;var z,M,B,U,V=n("KO1d"),A=n("nKUr");const K=({libraryPanel:e,onDismiss:t,onConfirm:n})=>{const r=Object(s.useStyles)(V.a),[{dashboardTitles:i,loadingState:c},l]=Object(a.useReducer)(I,L),d=Object(a.useMemo)(()=>N(l),[l]);Object(a.useEffect)(()=>{d(function(e){return async function(t){const n=await Object(y.c)(e.uid);t(T({dashboards:n}))}}(e))},[d,e]);const u=Boolean(i.length),p=c===o.LoadingState.Done;return Object(A.jsxs)(s.Modal,{className:r.modal,title:"Delete library panel",icon:"trash-alt",onDismiss:t,isOpen:!0,children:[p?null:z||(z=Object(A.jsx)(H,{})),p?Object(A.jsxs)("div",{children:[u?Object(A.jsx)(G,{dashboardTitles:i}):null,u?null:M||(M=Object(A.jsx)(Q,{})),Object(A.jsxs)(s.Modal.ButtonRow,{children:[Object(A.jsx)(s.Button,{variant:"secondary",onClick:t,fill:"outline",children:"Cancel"}),Object(A.jsx)(s.Button,{variant:"destructive",onClick:n,disabled:u,children:"Delete"})]})]}):null]})},H=()=>B||(B=Object(A.jsx)("span",{children:"Loading library panel..."})),Q=()=>{const e=Object(s.useStyles)(V.a);return Object(A.jsx)("div",{className:e.modalText,children:"Do you want to delete this panel?"})},G=({dashboardTitles:e})=>{const t=Object(s.useStyles)(V.a),n=1===e.length?"dashboard.":"dashboards.",a=`${e.length} ${n}`;return 0===e.length?null:Object(A.jsxs)("div",{children:[Object(A.jsxs)("p",{className:t.textInfo,children:["This library panel can not be deleted because it is connected to ",Object(A.jsx)("strong",{children:a})," Remove the library panel from the dashboards listed below and retry."]}),Object(A.jsxs)("table",{className:t.myTable,children:[U||(U=Object(A.jsx)("thead",{children:Object(A.jsx)("tr",{children:Object(A.jsx)("th",{children:"Dashboard name"})})})),Object(A.jsx)("tbody",{children:e.map((e,t)=>Object(A.jsx)("tr",{children:Object(A.jsx)("td",{children:e})},"dash-title-"+t))})]})]})};var R,W,q=n("t8hP"),X=n("pWAG");const E=({libraryPanel:e,onClick:t,onDelete:n,showSecondaryActions:r})=>{var i;const[s,o]=Object(a.useState)(!1),l=null!==(i=q.config.panels[e.model.type])&&void 0!==i?i:Object(X.b)(e.model.type).meta;return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(c.a,{isCurrent:!1,title:e.name,description:e.description,plugin:l,onClick:()=>t(e),onDelete:r?()=>o(!0):void 0,children:Object(A.jsx)(Z,{libraryPanel:e})}),s&&Object(A.jsx)(K,{libraryPanel:e,onConfirm:()=>{null==n||n(e),o(!1)},onDismiss:()=>o(!1)})]})};function Z({libraryPanel:e}){const t=Object(s.useStyles2)(J);return e.meta.folderUid?Object(A.jsx)("span",{className:t.metaContainer,children:Object(A.jsxs)(s.Link,{href:"/dashboards/f/"+e.meta.folderUid,children:[W||(W=Object(A.jsx)(s.Icon,{name:"folder-upload",size:"sm"})),Object(A.jsx)("span",{children:e.meta.folderName})]})}):Object(A.jsxs)("span",{className:t.metaContainer,children:[R||(R=Object(A.jsx)(s.Icon,{name:"folder",size:"sm"})),Object(A.jsx)("span",{children:e.meta.folderName})]})}function J(e){return{metaContainer:i.css`
      display: flex;
      align-items: center;
      color: ${e.colors.text.disabled};
      font-size: ${e.typography.bodySmall.fontSize};
      padding-top: ${e.spacing(.5)};

      svg {
        margin-right: ${e.spacing(.5)};
        margin-bottom: 3px;
      }
    `}}var Y;function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return ee}));const ee=({className:e,onClickCard:t,searchString:n,sortDirection:c,panelFilter:l,folderFilter:d,showSecondaryActions:u,currentPanelId:p,perPage:b=40})=>{const h=Object(s.useStyles)(te),[{libraryPanels:g,page:j,perPage:f,numberOfPages:m,loadingState:O,currentPanelId:x},v]=Object(a.useReducer)(k,_({},P,{currentPanelId:p,perPage:b})),w=Object(a.useMemo)(()=>N(v),[v]);Object(r.a)(()=>w($({searchString:n,sortDirection:c,panelFilter:l,folderFilter:d,page:j,perPage:f,currentPanelId:x})),300,[n,c,l,d,j,w]);const S=({uid:e})=>w(function(e,t){return async function(n){try{await Object(y.b)(e),$(t)(n)}catch(e){console.error(e)}}}(e,{searchString:n,page:j,perPage:f}));return Object(A.jsxs)("div",{className:Object(i.cx)(h.container,e),children:[Object(A.jsx)("div",{className:h.libraryPanelList,children:O===o.LoadingState.Loading?Y||(Y=Object(A.jsx)("p",{children:"Loading library panels..."})):g.length<1?Object(A.jsx)("p",{className:h.noPanelsFound,children:"No library panels found."}):null==g?void 0:g.map((e,n)=>Object(A.jsx)(E,{libraryPanel:e,onDelete:S,onClick:t,showSecondaryActions:u},"library-panel="+n))}),g.length?Object(A.jsx)("div",{className:h.pagination,children:Object(A.jsx)(s.Pagination,{currentPage:j,numberOfPages:m,onNavigate:e=>w(C({page:e})),hideWhenSinglePage:!0})}):null]})},te=e=>({container:i.css`
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
    `,libraryPanelList:i.css`
      max-width: 100%;
      display: grid;
      grid-gap: ${e.spacing.sm};
    `,searchHeader:i.css`
      display: flex;
    `,newPanelButton:i.css`
      margin-top: 10px;
      align-self: flex-start;
    `,pagination:i.css`
      align-self: center;
      margin-top: ${e.spacing.sm};
    `,noPanelsFound:i.css`
      label: noPanelsFound;
      min-height: 200px;
    `})},orvP:function(e,t,n){"use strict";var a,r=n("q1tI"),i=n("kDLi"),s=n("vF1F"),o=n("EKT6"),c=n("Hw4X"),l=n("uC62"),d=n("ZAQQ"),u=n("eXZ6"),p=n("NluS"),b=n.n(p),h=n("GQ3c"),g=n("NXk7"),j=n("nKUr");function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function m({onChange:e,maxMenuHeight:t}){const n=Object(i.useStyles2)(O),[s,o]=Object(r.useState)(!1),c=Object(r.useCallback)(e=>async function(e,t){t(!0);const n={query:e,type:"dash-folder",permission:h.j.View},a=(await Object(g.c)().search(n)).map(e=>({label:e.title,value:{id:e.id,title:e.title}}));e&&!"general".includes(e.toLowerCase())||a.unshift({label:"General",value:{id:0,title:"General"}});return t(!1),a}(e,o),[]),l=Object(r.useMemo)(()=>b()(c,300),[c]),[d,u]=Object(r.useState)([]),p=Object(r.useCallback)(t=>{const n=[];for(const e of t)e.value&&n.push(e.value);e(n),u(t)},[e]),m={defaultOptions:!0,isMulti:!0,noOptionsMessage:"No folders found",placeholder:"Filter by folder",styles:Object(i.resetSelectStyles)(),maxMenuHeight:t,value:d,onChange:p};return Object(j.jsxs)("div",{className:n.container,children:[d.length>0&&Object(j.jsx)("span",{className:n.clear,onClick:()=>p([]),children:"Clear folders"}),Object(j.jsx)(i.AsyncMultiSelect,f({menuShouldPortal:!0},m,{isLoading:s,loadOptions:l,prefix:a||(a=Object(j.jsx)(i.Icon,{name:"filter"})),"aria-label":"Folder filter"}))]})}function O(e){return{container:s.css`
      label: container;
      position: relative;
      min-width: 180px;
      flex-grow: 1;
    `,clear:s.css`
      label: clear;
      text-decoration: underline;
      font-size: ${e.spacing(1.5)};
      position: absolute;
      top: -${e.spacing(2.75)};
      right: 0;
      cursor: pointer;
      color: ${e.colors.text.link};

      &:hover {
        color: ${e.colors.text.maxContrast};
      }
    `}}var y=n("i7Pf");function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const v={searchQuery:"",panelFilter:[],folderFilter:[],sortDirection:void 0},P=Object(y.b)("libraryPanels/search/searchChanged"),w=Object(y.b)("libraryPanels/search/sortChanged"),S=Object(y.b)("libraryPanels/search/panelFilterChanged"),C=Object(y.b)("libraryPanels/search/folderFilterChanged"),k=(e,t)=>P.match(t)?x({},e,{searchQuery:t.payload}):w.match(t)?x({},e,{sortDirection:t.payload.value}):S.match(t)?x({},e,{panelFilter:t.payload.map(e=>e.id)}):C.match(t)?x({},e,{folderFilter:t.payload.map(e=>String(e.id))}):e;function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}let $;n.d(t,"b",(function(){return $})),n.d(t,"a",(function(){return N})),function(e){e.Tight="tight",e.Spacious="spacious"}($||($={}));const N=({onClick:e,variant:t=$.Spacious,currentPanelId:n,currentFolderId:a,perPage:s=u.b,showPanelFilter:p=!1,showFolderFilter:b=!1,showSort:h=!1,showSecondaryActions:g=!1})=>{var f,O;const y=Object(i.useStyles2)(D),[{sortDirection:x,panelFilter:N,folderFilter:L,searchQuery:T},I]=Object(r.useReducer)(k,F({},v,{folderFilter:a?[a.toString(10)]:[]})),z=e=>I(P(e)),M=e=>I(w(e)),B=e=>I(C(e)),U=e=>I(S(e));return t===$.Spacious?Object(j.jsx)("div",{className:y.container,children:Object(j.jsxs)(i.VerticalGroup,{spacing:"lg",children:[f||(f=Object(j.jsx)(o.a,{value:T,onChange:z,placeholder:"Search by name or description",width:0})),Object(j.jsxs)(i.HorizontalGroup,{spacing:"sm",justify:h&&p||b?"space-between":"flex-end",children:[h&&Object(j.jsx)(c.a,{value:x,onChange:M,filter:["alpha-asc","alpha-desc"]}),Object(j.jsxs)(i.HorizontalGroup,{spacing:"sm",justify:b&&p?"space-between":"flex-end",children:[b&&Object(j.jsx)(m,{onChange:B}),p&&Object(j.jsx)(l.a,{onChange:U})]})]}),Object(j.jsx)("div",{className:y.libraryPanelsView,children:O||(O=Object(j.jsx)(d.a,{onClickCard:e,searchString:T,sortDirection:x,panelFilter:N,folderFilter:L,currentPanelId:n,showSecondaryActions:g,perPage:s}))})]})}):Object(j.jsx)("div",{className:y.container,children:Object(j.jsxs)(i.VerticalGroup,{spacing:"xs",children:[Object(j.jsxs)("div",{className:y.buttonRow,children:[Object(j.jsx)("div",{className:y.tightFilter,children:Object(j.jsx)(o.a,{value:T,onChange:z,placeholder:"Search by name",width:0})}),Object(j.jsxs)("div",{className:y.tightSortFilter,children:[h&&Object(j.jsx)(c.a,{value:x,onChange:M}),b&&Object(j.jsx)(m,{onChange:B,maxMenuHeight:200}),p&&Object(j.jsx)(l.a,{onChange:U,maxMenuHeight:200})]})]}),Object(j.jsx)("div",{className:y.libraryPanelsView,children:Object(j.jsx)(d.a,{onClickCard:e,searchString:T,sortDirection:x,panelFilter:N,folderFilter:L,currentPanelId:n,showSecondaryActions:g,perPage:s})})]})})};function D(e){return{container:s.css`
      width: 100%;
      overflow-y: auto;
      padding: ${e.spacing(1)};
      min-height: 400px;
    `,buttonRow:s.css`
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-top: ${e.spacing(1.5)}; // Clear types link
    `,tightFilter:s.css`
      flex-grow: 1;
    `,tightSortFilter:s.css`
      flex-grow: 1;
      padding: ${e.spacing(0,0,0,.5)};
    `,libraryPanelsView:s.css`
      width: 100%;
    `}}},uC62:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a,r=n("q1tI"),i=n("1S9k"),s=n("kDLi"),o=n("vF1F"),c=n("nKUr");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const d=({onChange:e,maxMenuHeight:t})=>{const n=Object(r.useMemo)(()=>Object(i.c)(),[]),o=Object(r.useMemo)(()=>n.map(e=>({label:e.name,imgUrl:e.info.logos.small,value:e})).sort((e,t)=>{var n;return null===(n=e.label)||void 0===n?void 0:n.localeCompare(t.label)}),[n]),[d,p]=Object(r.useState)([]),b=Object(r.useCallback)(t=>{const n=[];for(const e of t)e.value&&n.push(e.value);e(n),p(t)},[e]),h=Object(s.useStyles2)(u),g={defaultOptions:!0,getOptionLabel:e=>e.label,getOptionValue:e=>e.value,noOptionsMessage:"No Panel types found",placeholder:"Filter by type",styles:Object(s.resetSelectStyles)(),maxMenuHeight:t,options:o,value:d,onChange:b};return Object(c.jsxs)("div",{className:h.container,children:[d.length>0&&Object(c.jsx)("span",{className:h.clear,onClick:()=>b([]),children:"Clear types"}),Object(c.jsx)(s.MultiSelect,l({menuShouldPortal:!0},g,{prefix:a||(a=Object(c.jsx)(s.Icon,{name:"filter"})),"aria-label":"Panel Type filter"}))]})};function u(e){return{container:o.css`
      label: container;
      position: relative;
      min-width: 180px;
      flex-grow: 1;
    `,clear:o.css`
      label: clear;
      text-decoration: underline;
      font-size: ${e.spacing(1.5)};
      position: absolute;
      top: -${e.spacing(2.75)};
      right: 0;
      cursor: pointer;
      color: ${e.colors.text.link};

      &:hover {
        color: ${e.colors.text.maxContrast};
      }
    `}}}}]);
//# sourceMappingURL=default~DashboardPage~FolderLibraryPanelsPage~LibraryPanelsPage.d7e0f7a1f9e400a945e0.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{LI4L:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),i=n("vF1F");function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight((function(e,t){return t(e)}),e)}}function p(e){return function t(){for(var n=this,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return t.apply(n,[].concat(o,r))}}}function h(e){return{}.toString.call(e).includes("Object")}function m(e){return"function"==typeof e}var b=p((function(e,t){throw new Error(e[t]||e.default)}))({initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"}),v={changes:function(e,t){return h(t)||b("changeType"),Object.keys(t).some((function(t){return n=e,r=t,!Object.prototype.hasOwnProperty.call(n,r);var n,r}))&&b("changeField"),t},selector:function(e){m(e)||b("selectorType")},handler:function(e){m(e)||h(e)||b("handlerType"),h(e)&&Object.values(e).some((function(e){return!m(e)}))&&b("handlersType")},initial:function(e){var t;e||b("initialIsRequired"),h(e)||b("initialType"),t=e,Object.keys(t).length||b("initialContent")}};function y(e,t){return m(t)?t(e.current):t}function O(e,t){return e.current=f(f({},e.current),t),t}function j(e,t,n){return m(t)?t(e.current):Object.keys(n).forEach((function(n){var r;return null===(r=t[n])||void 0===r?void 0:r.call(t,e.current[n])})),n}var w={create:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};v.initial(e),v.handler(t);var n={current:e},r=p(j)(n,t),o=p(O)(n),i=p(v.changes)(e),a=p(y)(n);function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e};return v.selector(e),e(n.current)}function u(e){g(r,o,i,a)(e)}return[c,u]}},M={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.23.0/min/vs"}};var C=function(e){return{}.toString.call(e).includes("Object")};var E={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:"Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "},k=function(e){return function t(){for(var n=this,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return t.apply(n,[].concat(o,r))}}}((function(e,t){throw new Error(e[t]||e.default)}))(E),P={config:function(e){return e||k("configIsRequired"),C(e)||k("configType"),e.urls?(console.warn(E.deprecation),{paths:{vs:e.urls.monacoBase}}):e}},S=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight((function(e,t){return t(e)}),e)}};var T=function e(t,n){return Object.keys(n).forEach((function(r){n[r]instanceof Object&&t[r]&&Object.assign(n[r],e(t[r],n[r]))})),u(u({},t),n)},R={type:"cancelation",msg:"operation is manually canceled"};var N,x,I=function(e){var t=!1,n=new Promise((function(n,r){e.then((function(e){return t?r(R):n(e)})),e.catch(r)}));return n.cancel=function(){return t=!0},n},L=w.create({config:M,isInitialized:!1,resolve:null,reject:null,monaco:null}),V=(x=2,function(e){if(Array.isArray(e))return e}(N=L)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(N,x)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(N,x)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),D=V[0],A=V[1];function q(e){return document.body.appendChild(e)}function _(e){var t=D((function(e){return{config:e.config,reject:e.reject}})),n=function(e){var t=document.createElement("script");return e&&(t.src=e),t}("".concat(t.config.paths.vs,"/loader.js"));return n.onload=function(){return e()},n.onerror=t.reject,n}function z(){var e=D((function(e){return{config:e.config,resolve:e.resolve,reject:e.reject}})),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],(function(t){K(t),e.resolve(t)}),(function(t){e.reject(t)}))}function K(e){D().monaco||A({monaco:e})}var B=new Promise((function(e,t){return A({resolve:e,reject:t})})),F={config:function(e){A((function(t){return{config:T(t.config,P.config(e))}}))},init:function(){if(!D((function(e){return{isInitialized:e.isInitialized}})).isInitialized){if(window.monaco&&window.monaco.editor)return K(window.monaco),I(Promise.resolve(window.monaco));S(q,_)(z),A({isInitialized:!0})}return I(B)},__getMonacoInstance:function(){return D((function(e){return e.monaco}))}},U=n("17x9"),$=n.n(U);const W={display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"};var J=function({content:e}){return o.a.createElement("div",{style:W},e)};var Y={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}};function G({width:e,height:t,isEditorReady:n,loading:r,_ref:i,className:a,wrapperClassName:c}){return o.a.createElement("section",{style:{...Y.wrapper,width:e,height:t},className:c},!n&&o.a.createElement(J,{content:r}),o.a.createElement("div",{ref:i,style:{...Y.fullWidth,...!n&&Y.hide},className:a}))}G.propTypes={width:$.a.oneOfType([$.a.number,$.a.string]).isRequired,height:$.a.oneOfType([$.a.number,$.a.string]).isRequired,loading:$.a.oneOfType([$.a.element,$.a.string]).isRequired,isEditorReady:$.a.bool.isRequired,className:$.a.string,wrapperClassName:$.a.string};var H=G,Q=Object(r.memo)(H);var X=function(e){Object(r.useEffect)(e,[])};var Z=function(e,t,n=!0){const o=Object(r.useRef)(!0);Object(r.useEffect)(o.current||!n?()=>{o.current=!1}:e,t)};function ee(){}function te(e,t,n,r){return function(e,t){return e.editor.getModel(ne(e,t))}(e,r)||function(e,t,n,r){return e.editor.createModel(t,n,r&&ne(e,r))}(e,t,n,r)}function ne(e,t){return e.Uri.parse(t)}function re({original:e,modified:t,language:n,originalLanguage:i,modifiedLanguage:a,originalModelPath:c,modifiedModelPath:u,theme:s,loading:l,options:d,height:f,width:g,className:p,wrapperClassName:h,beforeMount:m,onMount:b}){const[v,y]=Object(r.useState)(!1),[O,j]=Object(r.useState)(!0),w=Object(r.useRef)(null),M=Object(r.useRef)(null),C=Object(r.useRef)(null),E=Object(r.useRef)(b),k=Object(r.useRef)(m);X(()=>{const e=F.init();return e.then(e=>(M.current=e)&&j(!1)).catch(e=>"cancelation"!==(null==e?void 0:e.type)&&console.error("Monaco initialization: error:",e)),()=>w.current?T():e.cancel()}),Z(()=>{const e=w.current.getModifiedEditor();e.getOption(M.current.editor.EditorOption.readOnly)?e.setValue(t):t!==e.getValue()&&(e.executeEdits("",[{range:e.getModel().getFullModelRange(),text:t,forceMoveMarkers:!0}]),e.pushUndoStop())},[t],v),Z(()=>{w.current.getModel().original.setValue(e)},[e],v),Z(()=>{const{original:e,modified:t}=w.current.getModel();M.current.editor.setModelLanguage(e,i||n),M.current.editor.setModelLanguage(t,a||n)},[n,i,a],v),Z(()=>{M.current.editor.setTheme(s)},[s],v),Z(()=>{w.current.updateOptions(d)},[d],v);const P=Object(r.useCallback)(()=>{k.current(M.current);const r=M.current.editor.createModel(e,i||n,c&&M.current.Uri.parse(c)),o=M.current.editor.createModel(t,a||n,u&&M.current.Uri.parse(u));w.current.setModel({original:r,modified:o})},[n,t,a,e,i,c,u]),S=Object(r.useCallback)(()=>{w.current=M.current.editor.createDiffEditor(C.current,{automaticLayout:!0,...d}),P(),M.current.editor.setTheme(s),y(!0)},[d,s,P]);Object(r.useEffect)(()=>{v&&E.current(w.current,M.current)},[v]),Object(r.useEffect)(()=>{!O&&!v&&S()},[O,v,S]);const T=()=>{var e,t;const n=w.current.getModel();null===(e=n.original)||void 0===e||e.dispose(),null===(t=n.modified)||void 0===t||t.dispose(),w.current.dispose()};return o.a.createElement(Q,{width:g,height:f,isEditorReady:v,loading:l,_ref:C,className:p,wrapperClassName:h})}re.propTypes={original:$.a.string,modified:$.a.string,language:$.a.string,originalLanguage:$.a.string,modifiedLanguage:$.a.string,originalModelPath:$.a.string,modifiedModelPath:$.a.string,theme:$.a.string,loading:$.a.oneOfType([$.a.element,$.a.string]),options:$.a.object,width:$.a.oneOfType([$.a.number,$.a.string]),height:$.a.oneOfType([$.a.number,$.a.string]),className:$.a.string,wrapperClassName:$.a.string,beforeMount:$.a.func,onMount:$.a.func},re.defaultProps={theme:"light",loading:"Loading...",options:{},width:"100%",height:"100%",beforeMount:ee,onMount:ee};var oe=function(e){const t=Object(r.useRef)();return Object(r.useEffect)(()=>{t.current=e},[e]),t.current};const[ie,ae]=w.create({backup:null}),ce=new Map;function ue({defaultValue:e,defaultLanguage:t,defaultPath:n,value:i,language:a,path:c,theme:u,line:s,loading:l,options:d,overrideServices:f,saveViewState:g,keepCurrentModel:p,width:h,height:m,className:b,wrapperClassName:v,beforeMount:y,onMount:O,onChange:j,onValidate:w}){const[M,C]=Object(r.useState)(!1),[E,k]=Object(r.useState)(!0),P=Object(r.useRef)(null),S=Object(r.useRef)(null),T=Object(r.useRef)(null),R=Object(r.useRef)(O),N=Object(r.useRef)(y),x=Object(r.useRef)(null),I=Object(r.useRef)(i),L=oe(c);X(()=>{const e=F.init();return e.then(e=>(P.current=e)&&k(!1)).catch(e=>"cancelation"!==(null==e?void 0:e.type)&&console.error("Monaco initialization: error:",e)),()=>S.current?function(){var e,t;null===(e=x.current)||void 0===e||e.dispose(),p?g&&ce.set(c,S.current.saveViewState()):null===(t=S.current.getModel())||void 0===t||t.dispose();S.current.dispose()}():e.cancel()}),Z(()=>{const n=te(P.current,e||i,t||a,c);n!==S.current.getModel()&&(g&&ce.set(L,S.current.saveViewState()),S.current.setModel(n),g&&S.current.restoreViewState(ce.get(c)))},[c],M),Z(()=>{S.current.updateOptions(d)},[d],M),Z(()=>{S.current.getOption(P.current.editor.EditorOption.readOnly)?S.current.setValue(i):i!==S.current.getValue()&&(S.current.executeEdits("",[{range:S.current.getModel().getFullModelRange(),text:i,forceMoveMarkers:!0}]),S.current.pushUndoStop())},[i],M),Z(()=>{P.current.editor.setModelLanguage(S.current.getModel(),a)},[a],M),Z(()=>{void 0!==s&&S.current.revealLine(s)},[s],M),Z(()=>{P.current.editor.setTheme(u)},[u],M);const V=Object(r.useCallback)(()=>{N.current(P.current);const r=c||n,o=te(P.current,i||e,t||a,r);S.current=P.current.editor.create(T.current,{model:o,automaticLayout:!0,...d},f),g&&S.current.restoreViewState(ce.get(r)),P.current.editor.setTheme(u),ie().backup||ae({backup:P.current.editor.setModelMarkers}),C(!0)},[e,t,n,i,a,c,d,f,g,u]);return Object(r.useEffect)(()=>{M&&R.current(S.current,P.current)},[M]),Object(r.useEffect)(()=>{!E&&!M&&V()},[E,M,V]),I.current=i,Object(r.useEffect)(()=>{var e,t;M&&j&&(null===(e=x.current)||void 0===e||e.dispose(),x.current=null===(t=S.current)||void 0===t?void 0:t.onDidChangeModelContent(e=>{const t=S.current.getValue();I.current!==t&&j(t,e)}))},[M,j]),Object(r.useEffect)(()=>{M&&(P.current.editor.setModelMarkers=function(e,t,n){var r;null===(r=ie().backup)||void 0===r||r.call(P.current.editor,e,t,n),null==w||w(n)})},[M,w]),o.a.createElement(Q,{width:h,height:m,isEditorReady:M,loading:l,_ref:T,className:b,wrapperClassName:v})}ue.propTypes={defaultValue:$.a.string,defaultPath:$.a.string,defaultLanguage:$.a.string,value:$.a.string,language:$.a.string,path:$.a.string,theme:$.a.string,line:$.a.number,loading:$.a.oneOfType([$.a.element,$.a.string]),options:$.a.object,overrideServices:$.a.object,saveViewState:$.a.bool,keepCurrentModel:$.a.bool,width:$.a.oneOfType([$.a.number,$.a.string]),height:$.a.oneOfType([$.a.number,$.a.string]),className:$.a.string,wrapperClassName:$.a.string,beforeMount:$.a.func,onMount:$.a.func,onChange:$.a.func,onValidate:$.a.func},ue.defaultProps={theme:"light",loading:"Loading...",options:{},overrideServices:{},saveViewState:!0,keepCurrentModel:!1,width:"100%",height:"100%",beforeMount:ee,onMount:ee,onValidate:ee};var se=ue,le=Object(r.memo)(se),de=n("Csm0"),fe=n("Obii"),ge=n("MIBK"),pe=n("yi++");function he(){return(he=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function me(e,t,n,r){const o=[];for(const a of n){var i;t&&!a.label.startsWith(t)||o.push(he({},a,{kind:be(e,a.kind),range:r,insertText:null!==(i=a.insertText)&&void 0!==i?i:a.label}))}return o}function be(e,t){switch(t){case pe.b.Method:return e.languages.CompletionItemKind.Method;case pe.b.Field:return e.languages.CompletionItemKind.Field;case pe.b.Property:return e.languages.CompletionItemKind.Property;case pe.b.Constant:return e.languages.CompletionItemKind.Constant;case pe.b.Text:return e.languages.CompletionItemKind.Text}return e.languages.CompletionItemKind.Text}function ve(e,t,n){if(t&&n)return e.languages.registerCompletionItemProvider(t,{triggerCharacters:["$"],provideCompletionItems:(t,r,o)=>{const i={startLineNumber:r.lineNumber,endLineNumber:r.lineNumber,startColumn:r.column,endColumn:r.column};if("$"===o.triggerCharacter)return i.startColumn=r.column-1,{suggestions:me(e,"$",n(),i)};const a=t.getValueInRange({startLineNumber:r.lineNumber,startColumn:1,endLineNumber:r.lineNumber,endColumn:r.column}),{index:c,prefix:u}=function(e){for(let t=e.length-1;t>0;t--){const n=e.charAt(t);if("$"===n)return{index:t,prefix:e.substring(t)};if(" "===n||"\t"===n||'"'===n||"'"===n)return{index:t+1,prefix:e.substring(t+1)}}return{index:0,prefix:e}}(a);i.startColumn=c+1;const s=me(e,u,n(),i);return s.length?{suggestions:s}:void 0}})}var ye=n("nKUr");function Oe(){return(Oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function je(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}let we=!1;class Me extends o.a.PureComponent{constructor(e){var t;super(e),je(this,"completionCancel",void 0),je(this,"monaco",void 0),je(this,"loadCustomLanguage",()=>{const{language:e}=this.props,t=fe.monacoLanguageRegistry.getIfExists(e);return t?t.init():Promise.resolve()}),je(this,"getEditorValue",()=>""),je(this,"onBlur",()=>{const{onBlur:e}=this.props;e&&e(this.getEditorValue())}),je(this,"handleBeforeMount",e=>{this.monaco=e;const{language:t,theme:n,getSuggestions:r}=this.props;!function(e,t){const n={"editor.background":t.components.input.background,"minimap.background":t.colors.background.secondary};e.editor.defineTheme("grafana-dark",{base:"vs-dark",inherit:!0,colors:n,rules:[]}),e.editor.defineTheme("grafana-light",{base:"vs",inherit:!0,colors:n,rules:[]})}(e,n),r&&(this.completionCancel=ve(e,t,r))}),je(this,"handleOnMount",(e,t)=>{const{onSave:n,onEditorDidMount:r}=this.props;this.getEditorValue=()=>e.getValue(),n&&e.addCommand(t.KeyMod.CtrlCmd|t.KeyCode.KEY_S,()=>{n(this.getEditorValue())});const o=this.loadCustomLanguage();r&&o.then(()=>r(e,t))}),we||(F.config({paths:{vs:(null!==(t=window.__grafana_public_path__)&&void 0!==t?t:"public/")+"lib/monaco/min/vs"}}),we=!0)}componentWillUnmount(){this.completionCancel&&this.completionCancel.dispose()}componentDidUpdate(e){const{getSuggestions:t,language:n}=this.props;if(n!==e.language){if(this.completionCancel&&this.completionCancel.dispose(),!this.monaco)return void console.warn("Monaco instance not loaded yet");t&&(this.completionCancel=ve(this.monaco,n,t)),this.loadCustomLanguage()}}render(){var e;const{theme:t,language:n,width:r,height:o,showMiniMap:i,showLineNumbers:a,readOnly:c,monacoOptions:u}=this.props,s=null!==(e=this.props.value)&&void 0!==e?e:"",l=s.length>100,d=Ce(t),f={wordWrap:"off",tabSize:2,codeLens:!1,contextmenu:!1,minimap:{enabled:l&&i,renderCharacters:!1},readOnly:c,lineNumbersMinChars:4,lineDecorationsWidth:1*t.spacing.gridSize,overviewRulerBorder:!1,automaticLayout:!0,padding:{top:.5*t.spacing.gridSize,bottom:.5*t.spacing.gridSize}};return a||(f.glyphMargin=!1,f.folding=!1,f.lineNumbers="off",f.lineNumbersMinChars=0),Object(ye.jsx)("div",{className:d.container,onBlur:this.onBlur,"aria-label":de.a.components.CodeEditor.container,children:Object(ye.jsx)(le,{width:r,height:o,language:n,theme:t.isDark?"grafana-dark":"grafana-light",value:s,options:Oe({},f,null!=u?u:{}),beforeMount:this.handleBeforeMount,onMount:this.handleOnMount})})}}t.default=Object(ge.m)(Me);const Ce=e=>({container:i.css`
      border-radius: ${e.shape.borderRadius()};
      border: 1px solid ${e.components.input.borderColor};
    `})}}]);
//# sourceMappingURL=code-editor.d7e0f7a1f9e400a945e0.js.map
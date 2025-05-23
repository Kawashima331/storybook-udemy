import{j as a}from"./jsx-runtime-BYYWji4R.js";import{g as N}from"./_commonjsHelpers-Cpj98o6Y.js";var x={exports:{}},P="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",R=P,j=R;function b(){}function S(){}S.resetWarningCache=b;var O=function(){function e(p,l,I,C,F,v){if(v!==j){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:S,resetWarningCache:b};return r.PropTypes=r,r};x.exports=O();var A=x.exports;const n=N(A);function i({task:{id:e,title:t,state:r},onPinTask:p,onArchiveTask:l}){return a.jsxs("div",{className:`list-item ${r}`,children:[a.jsxs("label",{htmlFor:"checked",className:"checkbox",children:[a.jsx("input",{type:"checkbox",name:"checked",id:`archeiveTask-${e}`,"aria-label":`archiveTask-${e}`}),a.jsx("span",{className:"checkbox-custom",onClick:()=>l(e)})]}),a.jsx("label",{htmlFor:"title",className:"title","aria-label":t,children:a.jsx("input",{type:"text",value:t,readOnly:!0,name:"title",placeholder:"input title"})}),r!=="TASK_ARCHIVED"&&a.jsx("button",{className:"pin-button",id:`pinTask-${e}`,"aria-label":`pinTask-${e}`,onClick:()=>p(e),children:a.jsx("span",{className:"icon-star"})})]})}i.proptype={task:n.shape({id:n.string.isRequired,title:n.string.isRequired,state:n.string.isRequired}),onPinTask:n.func,onArchiveTask:n.func};i.__docgenInfo={description:"",methods:[],displayName:"Task"};const E={component:i,title:"Task",tags:["autodocs"]},s={args:{task:{id:"1",title:"Test Task",state:"TASK_INBOX"}}},o={args:{task:{...s.args.task,state:"TASK_PINNED"}}},c={args:{task:{...s.args.task,state:"TASK_ARCHIVED"}}};var u,T,d;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    task: {
      id: "1",
      title: "Test Task",
      state: "TASK_INBOX"
    }
  }
}`,...(d=(T=s.parameters)==null?void 0:T.docs)==null?void 0:d.source}}};var k,h,y;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_PINNED"
    }
  }
}`,...(y=(h=o.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var g,f,_;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_ARCHIVED"
    }
  }
}`,...(_=(f=c.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};const D=["Default","Pinned","Archived"],W=Object.freeze(Object.defineProperty({__proto__:null,Archived:c,Default:s,Pinned:o,__namedExportsOrder:D,default:E},Symbol.toStringTag,{value:"Module"}));export{s as D,i as T,W as a};

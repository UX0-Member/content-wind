import{u as d}from"./CVZv3_IZ.js";import{d as l,a1 as f,I as v,q as p,V as m,a2 as g,Z as h,a3 as y,M as r,E as _}from"./CSaNH51f.js";const q=l({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(u){const{query:t}=f(u),n=v(()=>{var a;return typeof((a=t.value)==null?void 0:a.params)=="function"?t.value.params():t.value});if(!n.value&&p("dd-navigation").value){const{navigation:a}=m();return{navigation:a}}const{data:o}=await d(`content-navigation-${g(n.value)}`,()=>y(n.value));return{navigation:o}},render(u){const t=h(),{navigation:n}=u,o=e=>r(_,{to:e._path},()=>e.title),a=(e,i)=>r("ul",i?{"data-level":i}:null,e.map(s=>s.children?r("li",null,[o(s),a(s.children,i+1)]):r("li",null,o(s)))),c=e=>a(e,0);return t!=null&&t.default?t.default({navigation:n,...this.$attrs}):c(n)}}),x=q;export{x as default};

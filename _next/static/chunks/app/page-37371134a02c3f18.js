(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5593:(e,t,r)=>{Promise.resolve().then(r.bind(r,4850)),Promise.resolve().then(r.t.bind(r,8173,23)),Promise.resolve().then(r.t.bind(r,231,23)),Promise.resolve().then(r.bind(r,77))},4850:(e,t,r)=>{"use strict";r.d(t,{default:()=>k});var i=r(7437),a=r(2265);class s{constructor(e=0,t="Network Error"){this.status=e,this.text=t}}let o={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:(()=>{if("undefined"!=typeof localStorage)return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}})()},l=e=>e?"string"==typeof e?{publicKey:e}:"[object Object]"===e.toString()?e:{}:{},n=async(e,t,r={})=>{let i=await fetch(o.origin+e,{method:"POST",headers:r,body:t}),a=await i.text(),l=new s(i.status,a);if(i.ok)return l;throw l},m=(e,t,r)=>{if(!e||"string"!=typeof e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||"string"!=typeof t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r||"string"!=typeof r)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},c=e=>e.webdriver||!e.languages||0===e.languages.length,d=()=>new s(451,"Unavailable For Headless Browser"),h=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if("string"!=typeof t)throw"The BlockList watchVariable has to be a string"},u=e=>!e.list?.length||!e.watchVariable,b=(e,t)=>e instanceof FormData?e.get(t):e[t],p=(e,t)=>{if(u(e))return!1;h(e.list,e.watchVariable);let r=b(t,e.watchVariable);return"string"==typeof r&&e.list.includes(r)},g=()=>new s(403,"Forbidden"),f=(e,t)=>{if("number"!=typeof e||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&"string"!=typeof t)throw"The LimitRate ID has to be a non-empty string"},w=async(e,t,r)=>{let i=Number(await r.get(e)||0);return t-Date.now()+i},v=async(e,t,r)=>{if(!t.throttle||!r)return!1;f(t.throttle,t.id);let i=t.id||e;return await w(i,t.throttle,r)>0||(await r.set(i,Date.now().toString()),!1)},y=()=>new s(429,"Too Many Requests"),_=e=>{if(!e||"FORM"!==e.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},x=e=>"string"==typeof e?document.querySelector(e):e,j={sendForm:async(e,t,r,i)=>{let a=l(i),s=a.publicKey||o.publicKey,h=a.blockHeadless||o.blockHeadless,u=o.storageProvider||a.storageProvider,b={...o.blockList,...a.blockList},f={...o.limitRate,...a.limitRate};if(h&&c(navigator))return Promise.reject(d());let w=x(r);m(s,e,t),_(w);let j=new FormData(w);return p(b,j)?Promise.reject(g()):await v(location.pathname,f,u)?Promise.reject(y()):(j.append("lib_version","4.4.1"),j.append("service_id",e),j.append("template_id",t),j.append("user_id",s),n("/api/v1.0/email/send-form",j))}},k=function(){let e=(0,a.useRef)();return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("form",{className:"text-center",ref:e,onSubmit:t=>{t.preventDefault(),j.sendForm("service_ciridian".toString(),"template_k0te5ov".toString(),e.current,{publicKey:"IAXOenKrF725KavyY".toString(),from_name:t.target.user_name.value,to_name:"Katie @ Ciridian",message:t.target.user_email.value+" has requested to be contacted.",reply_to:t.target.user_email.value}).then(()=>{console.log("Success")},e=>{console.log("FAILED...",e)})},children:[(0,i.jsxs)("div",{className:"form-floating mb-3",children:[(0,i.jsx)("input",{type:"text",id:"name",name:"user_name",className:"form-control bg-dark border-0 text-white",placeholder:"John Smith",required:!0}),(0,i.jsx)("label",{htmlFor:"name",children:"First Name"})]}),(0,i.jsxs)("div",{className:"form-floating mb-3",children:[(0,i.jsx)("input",{type:"email",id:"email",name:"user_email",className:"form-control bg-dark border-0 text-white",placeholder:"name@example.com",required:!0}),(0,i.jsx)("label",{htmlFor:"email",children:"Email Address"})]}),(0,i.jsx)("button",{type:"submit",className:"btn btn-dark mb-3 px-5",children:"Submit"})]})})}},77:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});let i={src:"/_next/static/media/ciridian-logo.455ebb70.svg",height:45,width:360,blurWidth:0,blurHeight:0}}},e=>{var t=t=>e(e.s=t);e.O(0,[231,173,130,215,744],()=>t(5593)),_N_E=e.O()}]);
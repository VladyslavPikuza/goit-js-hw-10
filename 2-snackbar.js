import"./assets/styles-B-wVNUTi.js";import{i as r}from"./assets/vendor-BbbuE1sJ.js";document.addEventListener("DOMContentLoaded",()=>{const o=document.getElementById("promise-form");o&&o.addEventListener("submit",e=>{e.preventDefault();const s=parseInt(e.target.delay.value,10),i=e.target.state.value;n(s,i).then(t=>{r.success({title:"Success",message:`✅ Fulfilled promise in ${t}ms`,position:"topRight"})}).catch(t=>{r.error({title:"Error",message:`❌ Rejected promise in ${t}ms`,position:"topRight"})})});function n(e,s){return new Promise((i,t)=>{setTimeout(()=>{s==="fulfilled"?i(e):t(e)},e)})}});
//# sourceMappingURL=2-snackbar.js.map

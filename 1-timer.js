import"./assets/styles-CR__O8yE.js";import{f}from"./assets/vendor-EyZmBGcZ.js";const r=document.querySelector("button[data-start]"),h=document.querySelector("[data-days]"),y=document.querySelector("[data-hours]"),S=document.querySelector("[data-minutes]"),p=document.querySelector("[data-seconds]");let s=null,u=null;const b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=e[0];t<=new Date?(alert("Please choose a date in the future"),r.disabled=!0):(u=t,r.disabled=!1),console.log(t)}};f("#datetime-picker",b);function o(e){return String(e).padStart(2,"0")}function q(e){const d=Math.floor(e/864e5),i=Math.floor(e%864e5/36e5),l=Math.floor(e%864e5%36e5/6e4),m=Math.floor(e%864e5%36e5%6e4/1e3);return{days:d,hours:i,minutes:l,seconds:m}}function c({days:e,hours:t,minutes:n,seconds:a}){h.textContent=o(e),y.textContent=o(t),S.textContent=o(n),p.textContent=o(a)}r.addEventListener("click",()=>{r.disabled=!0,document.querySelector("#datetime-picker").disabled=!0,s=setInterval(()=>{const t=u-new Date;if(t<=0){clearInterval(s),c({days:0,hours:0,minutes:0,seconds:0}),alert("Countdown finished!"),document.querySelector("#datetime-picker").disabled=!1;return}const n=q(t);c(n)},1e3)});
//# sourceMappingURL=1-timer.js.map

function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o);var a=o("kEUo3");const l=document.querySelector(".feedback-form");l.addEventListener("input",e(a).throttle((function(e){const t=e.currentTarget.elements.email.value,r=e.currentTarget.elements.message.value.trim(),n=function(e,t){return{email:e,message:t}}(t,r);localStorage.setItem("feedback-form-state",JSON.stringify(n))}),500)),l.addEventListener("submit",(function(e){e.preventDefault(),console.log(localStorage.getItem("feedback-form-state")),e.target.reset(),localStorage.removeItem("feedback-form-state")})),function(){const e=localStorage.getItem("feedback-form-state");if(e){const t=JSON.parse(e);l.elements.email.value=t.email,l.elements.message.value=t.message}}();
//# sourceMappingURL=03-feedback.9a33585a.js.map
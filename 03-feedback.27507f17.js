function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequired7c6=n);var a=n("kEUo3");const l=document.querySelector(".feedback-form");l.addEventListener("input",e(a).throttle((function(e){f[e.target.name]=e.target.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(f))}),500)),l.addEventListener("submit",(function(e){e.preventDefault(),console.log(f),f={},e.target.reset(),localStorage.removeItem("feedback-form-state")}));let f={};!function(){try{const e=localStorage.getItem("feedback-form-state");if(!e)return;f=JSON.parse(e),Object.entries(f).forEach((([e,t])=>{l.elements[e].value=t}))}catch(e){console.log(e.message)}}();
//# sourceMappingURL=03-feedback.27507f17.js.map
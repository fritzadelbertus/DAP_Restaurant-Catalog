(self.webpackChunklagi_laper=self.webpackChunklagi_laper||[]).push([[203],{203:()=>{function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},n(t)}function t(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===n(i)?i:String(i)),o)}var i}function r(t,e){if(e&&("object"===n(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(t)}function o(n){var t="function"==typeof Map?new Map:void 0;return o=function(n){if(null===n||(e=n,-1===Function.toString.call(e).indexOf("[native code]")))return n;var e;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(n))return t.get(n);t.set(n,r)}function r(){return i(n,arguments,a(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),c(r,n)},o(n)}function i(n,t,e){return i=u()?Reflect.construct.bind():function(n,t,e){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(n,r));return e&&c(o,e.prototype),o},i.apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}function c(n,t){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,t){return n.__proto__=t,n},c(n,t)}function a(n){return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},a(n)}var f=function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),t&&c(n,t)}(s,n);var o,i,f,l,p=(o=s,i=u(),function(){var n,t=a(o);if(i){var e=a(this).constructor;n=Reflect.construct(t,arguments,e)}else n=t.apply(this,arguments);return r(this,n)});function s(){return t(this,s),p.apply(this,arguments)}return f=s,(l=[{key:"menus",set:function(n){this._menus=n,this.render()}},{key:"render",value:function(){var n=function(n,t){return"".concat(n,"<p>").concat(t.name,"</p>")},t=this._menus,e=t.foods,r=t.drinks;this.innerHTML='\n    <div class="menu">\n      <h3>Menu</h3>\n      <div class="menu__content">\n        <div style="margin-bottom: 10px">\n          <h4 tabindex="0"\n            aria-label="\n            Makanan: \n            '.concat(e.reduce((function(n,t){return"".concat(n).concat(t.name,", ")}),""),'"\n          >Foods</h4>\n          ').concat(e.reduce(n,""),'\n        </div>\n        <div>\n          <h4 tabindex="0"\n            aria-label="\n            Minuman: \n            ').concat(r.reduce((function(n,t){return"".concat(n).concat(t.name,", ")}),""),'"\n          >Drinks</h4>\n          ').concat(r.reduce(n,""),"\n        </div>\n      </div>\n    </div>\n    ")}}])&&e(f.prototype,l),Object.defineProperty(f,"prototype",{writable:!1}),s}(o(HTMLElement));customElements.define("restaurant-menu",f)}}]);
//# sourceMappingURL=203.bundle.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69e44977"],{"1da1":function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r("d3b7");function a(e,t,r,a,n,o,i){try{var s=e[o](i),c=s.value}catch(l){return void r(l)}s.done?t(c):Promise.resolve(c).then(a,n)}function n(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function s(e){a(i,n,o,s,c,"next",e)}function c(e){a(i,n,o,s,c,"throw",e)}s(void 0)}))}}},"96cf":function(e,t,r){var a=function(e){"use strict";var t,r=Object.prototype,a=r.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",s=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch($){c=function(e,t,r){return e[t]=r}}function l(e,t,r,a){var n=t&&t.prototype instanceof h?t:h,o=Object.create(n.prototype),i=new N(a||[]);return o._invoke=A(e,r,i),o}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch($){return{type:"throw",arg:$}}}e.wrap=l;var m="suspendedStart",d="suspendedYield",f="executing",p="completed",_={};function h(){}function v(){}function y(){}var g={};g[o]=function(){return this};var b=Object.getPrototypeOf,C=b&&b(b(E([])));C&&C!==r&&a.call(C,o)&&(g=C);var w=y.prototype=h.prototype=Object.create(g);function T(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function r(n,o,i,s){var c=u(e[n],e,o);if("throw"!==c.type){var l=c.arg,m=l.value;return m&&"object"===typeof m&&a.call(m,"__await")?t.resolve(m.__await).then((function(e){r("next",e,i,s)}),(function(e){r("throw",e,i,s)})):t.resolve(m).then((function(e){l.value=e,i(l)}),(function(e){return r("throw",e,i,s)}))}s(c.arg)}var n;function o(e,a){function o(){return new t((function(t,n){r(e,a,t,n)}))}return n=n?n.then(o,o):o()}this._invoke=o}function A(e,t,r){var a=m;return function(n,o){if(a===f)throw new Error("Generator is already running");if(a===p){if("throw"===n)throw o;return O()}r.method=n,r.arg=o;while(1){var i=r.delegate;if(i){var s=k(i,r);if(s){if(s===_)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===m)throw a=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=f;var c=u(e,t,r);if("normal"===c.type){if(a=r.done?p:d,c.arg===_)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(a=p,r.method="throw",r.arg=c.arg)}}}function k(e,r){var a=e.iterator[r.method];if(a===t){if(r.delegate=null,"throw"===r.method){if(e.iterator["return"]&&(r.method="return",r.arg=t,k(e,r),"throw"===r.method))return _;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return _}var n=u(a,e.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,_;var o=n.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,_):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,_)}function I(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function D(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(I,this),this.reset(!0)}function E(e){if(e){var r=e[o];if(r)return r.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function r(){while(++n<e.length)if(a.call(e,n))return r.value=e[n],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:O}}function O(){return{value:t,done:!0}}return v.prototype=w.constructor=y,y.constructor=v,v.displayName=c(y,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c(e,s,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},T(x.prototype),x.prototype[i]=function(){return this},e.AsyncIterator=x,e.async=function(t,r,a,n,o){void 0===o&&(o=Promise);var i=new x(l(t,r,a,n),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},T(w),c(w,s,"Generator"),w[o]=function(){return this},w.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){while(t.length){var a=t.pop();if(a in e)return r.value=a,r.done=!1,r}return r.done=!0,r}},e.values=E,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(D),!e)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(a,n){return s.type="throw",s.arg=e,r.next=a,n&&(r.method="next",r.arg=t),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=a.call(i,"catchLoc"),l=a.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,_):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),_},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),D(r),_}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var a=r.completion;if("throw"===a.type){var n=a.arg;D(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,a){return this.delegate={iterator:E(e),resultName:r,nextLoc:a},"next"===this.method&&(this.arg=t),_}},e}(e.exports);try{regeneratorRuntime=a}catch(n){Function("r","regeneratorRuntime = r")(a)}},c36d:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",{staticClass:"page__content"},[r("ContentHeader",{attrs:{title:e.content_header.title,subTitle:e.content_header.subTitle}}),r("div",{staticClass:"page__body"},[e._m(0),r("div",{staticClass:"mt-5"},[r("table",{staticClass:"table customtable customtable__templateid"},[e._m(1),r("tbody",{staticClass:"table__body"},e._l(e.customerTypes,(function(t){return r("tr",{key:t.customerTypeKey,staticClass:"table__text"},[r("td",[e._v(e._s(t.clientTypeName))]),r("td",[e._v(e._s(t.clinetTypeCustomId))]),r("td",[e._v(e._s(t.clientTypeIdPattern))]),r("td",[r("div",{staticClass:"dropdown"},[r("button",{staticClass:"button btn-light dropdown-toggle",attrs:{type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"true"}},[e._v(" Action ")]),r("div",{staticClass:"dropdown-menu dropdown-menu-container",attrs:{"aria-labelledby":"dropdownMenuButton"}},[r("a",{staticClass:"dropdown-item",attrs:{href:"#",type:"button","data-toggle":"modal","data-target":"#editModal"},on:{click:function(r){return e.getCustomerType(t.customerTypeKey)}}},[e._v("Edit")]),r("a",{staticClass:"dropdown-item",attrs:{href:"#",type:"button","data-toggle":"modal","data-target":"#deleteConfirmModal"},on:{click:function(r){return e.openConfirmation(t.customerTypeKey)}}},[e._v("Delete")])])])])])})),0)])])]),r("div",{staticClass:"modal modal__right",attrs:{id:"newModal","aria-hidden":"true"}},[r("div",{},[r("div",{staticClass:"modal__dialog",attrs:{role:"document"}},[r("div",{staticClass:"modal__content"},[r("div",{staticClass:"modal__header"},[r("ion-icon",{staticClass:"modal__head__icon modal__close modal__close--black",attrs:{name:"arrow-back-outline","data-dismiss":"modal","aria-label":"Close"},on:{click:e.clearForm}}),e._m(2)],1),r("div",{staticClass:"modal__body"},[r("form",{staticClass:"form",on:{submit:e.saveForm}},[r("div",{staticClass:"form__item"},[r("label",{staticClass:"form__label"},[e._v("Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.clientTypeName,expression:"form.clientTypeName"}],staticClass:"input form__input w-100",attrs:{placeholder:"Enter Name"},domProps:{value:e.form.clientTypeName},on:{input:function(t){t.target.composing||e.$set(e.form,"clientTypeName",t.target.value)}}})]),r("div",{staticClass:"form__item"},[r("label",{staticClass:"form__label"},[e._v("ID")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.clinetTypeCustomId,expression:"form.clinetTypeCustomId"}],staticClass:"input form__input w-100",attrs:{placeholder:"Enter ID"},domProps:{value:e.form.clinetTypeCustomId},on:{input:function(t){t.target.composing||e.$set(e.form,"clinetTypeCustomId",t.target.value)}}})]),r("div",{staticClass:"form__item"},[r("label",{staticClass:"form__label"},[e._v("Client ID Template")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.clientTypeIdPattern,expression:"form.clientTypeIdPattern"}],staticClass:"input form__input w-100",attrs:{placeholder:"Enter Here"},domProps:{value:e.form.clientTypeIdPattern},on:{input:function(t){t.target.composing||e.$set(e.form,"clientTypeIdPattern",t.target.value)}}})]),r("div",[r("label",{staticClass:"form__label"},[e._v("Usage")]),r("div",{staticClass:"form__item"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.canOpenAccounts,expression:"form.canOpenAccounts"}],staticClass:"form__checkbox mr-4",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.form.canOpenAccounts)?e._i(e.form.canOpenAccounts,null)>-1:e.form.canOpenAccounts},on:{change:function(t){var r=e.form.canOpenAccounts,a=t.target,n=!!a.checked;if(Array.isArray(r)){var o=null,i=e._i(r,o);a.checked?i<0&&e.$set(e.form,"canOpenAccounts",r.concat([o])):i>-1&&e.$set(e.form,"canOpenAccounts",r.slice(0,i).concat(r.slice(i+1)))}else e.$set(e.form,"canOpenAccounts",n)}}}),r("label",{staticClass:"form__label"},[e._v("Allow opening accounts")])]),r("div",{staticClass:"form__item"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.canGuarantee,expression:"form.canGuarantee"}],staticClass:"form__checkbox mr-4",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.form.canGuarantee)?e._i(e.form.canGuarantee,null)>-1:e.form.canGuarantee},on:{change:function(t){var r=e.form.canGuarantee,a=t.target,n=!!a.checked;if(Array.isArray(r)){var o=null,i=e._i(r,o);a.checked?i<0&&e.$set(e.form,"canGuarantee",r.concat([o])):i>-1&&e.$set(e.form,"canGuarantee",r.slice(0,i).concat(r.slice(i+1)))}else e.$set(e.form,"canGuarantee",n)}}}),r("label",{staticClass:"form__label"},[e._v("Allow as guarantor")])]),r("div",{staticClass:"form__item"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.requireIdentification,expression:"form.requireIdentification"}],staticClass:"form__checkbox mr-4",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.form.requireIdentification)?e._i(e.form.requireIdentification,null)>-1:e.form.requireIdentification},on:{change:function(t){var r=e.form.requireIdentification,a=t.target,n=!!a.checked;if(Array.isArray(r)){var o=null,i=e._i(r,o);a.checked?i<0&&e.$set(e.form,"requireIdentification",r.concat([o])):i>-1&&e.$set(e.form,"requireIdentification",r.slice(0,i).concat(r.slice(i+1)))}else e.$set(e.form,"requireIdentification",n)}}}),r("label",{staticClass:"form__label"},[e._v("Require identification documents")])]),r("div",{staticClass:"form__item"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.useDefaultAddress,expression:"form.useDefaultAddress"}],staticClass:"form__checkbox mr-4",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.form.useDefaultAddress)?e._i(e.form.useDefaultAddress,null)>-1:e.form.useDefaultAddress},on:{change:function(t){var r=e.form.useDefaultAddress,a=t.target,n=!!a.checked;if(Array.isArray(r)){var o=null,i=e._i(r,o);a.checked?i<0&&e.$set(e.form,"useDefaultAddress",r.concat([o])):i>-1&&e.$set(e.form,"useDefaultAddress",r.slice(0,i).concat(r.slice(i+1)))}else e.$set(e.form,"useDefaultAddress",n)}}}),r("label",{staticClass:"form__label"},[e._v("Show default address fields")])])]),r("div",{staticClass:"form__item"},[r("label",{staticClass:"form__label"},[e._v("Description")]),r("div",{attrs:{id:"content-container"}},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.form.clientTypeDescription,expression:"form.clientTypeDescription"}],staticClass:"input form__input w-100",attrs:{label:"Description",placeholder:" Description",cols:"100",rows:"10"},domProps:{value:e.form.clientTypeDescription},on:{input:function(t){t.target.composing||e.$set(e.form,"clientTypeDescription",t.target.value)}}})])]),r("button",{staticClass:"button form__button form__button--lg",attrs:{type:"submit"}},[e._v(" Save Changes ")]),r("button",{staticClass:"button form__action__text form__action__text--danger ml-5",attrs:{"data-dismiss":"modal","aria-label":"Close",id:"formCloseButton"},on:{click:e.clearForm}},[e._v(" Cancel ")])])])])])])]),r("div",{staticClass:"modal modal__right",attrs:{id:"editModal","aria-hidden":"true"}},[r("div",{},[r("div",{staticClass:"modal__dialog",attrs:{role:"document"}},[r("div",{staticClass:"modal__content"},[r("div",{staticClass:"modal__header"},[r("ion-icon",{staticClass:"modal__head__icon modal__close modal__close--black",attrs:{name:"arrow-back-outline","data-dismiss":"modal","aria-label":"Close"},on:{click:e.clearForm}}),e._m(3)],1),null!=e.customerType?r("div",{staticClass:"modal__body"},[r("form",{staticClass:"form",on:{submit:e.saveEditForm}},[r("div",{staticClass:"form__item"},[r("label",{staticClass:"form__label"},[e._v("Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.clientTypeName,expression:"form.clientTypeName"}],staticClass:"input form__input w-100",attrs:{placeholder:"Enter Name"},domProps:{value:e.form.clientTypeName},on:{input:function(t){t.target.composing||e.$set(e.form,"clientTypeName",t.target.value)}}})]),r("div",{staticClass:"form__item"},[r("label",{staticClass:"form__label"},[e._v("ID")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.clinetTypeCustomId,expression:"form.clinetTypeCustomId"}],staticClass:"input form__input w-100",attrs:{placeholder:"Enter ID"},domProps:{value:e.form.clinetTypeCustomId},on:{input:function(t){t.target.composing||e.$set(e.form,"clinetTypeCustomId",t.target.value)}}})]),r("div",{staticClass:"form__item"},[r("label",{staticClass:"form__label"},[e._v("Client ID Template")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.clientTypeIdPattern,expression:"form.clientTypeIdPattern"}],staticClass:"input form__input w-100",attrs:{placeholder:"Enter Here"},domProps:{value:e.form.clientTypeIdPattern},on:{input:function(t){t.target.composing||e.$set(e.form,"clientTypeIdPattern",t.target.value)}}})]),r("div",[r("label",{staticClass:"form__label"},[e._v("Usage")]),r("div",{staticClass:"form__item"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.canOpenAccounts,expression:"form.canOpenAccounts"}],staticClass:"form__checkbox mr-4",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.form.canOpenAccounts)?e._i(e.form.canOpenAccounts,null)>-1:e.form.canOpenAccounts},on:{change:function(t){var r=e.form.canOpenAccounts,a=t.target,n=!!a.checked;if(Array.isArray(r)){var o=null,i=e._i(r,o);a.checked?i<0&&e.$set(e.form,"canOpenAccounts",r.concat([o])):i>-1&&e.$set(e.form,"canOpenAccounts",r.slice(0,i).concat(r.slice(i+1)))}else e.$set(e.form,"canOpenAccounts",n)}}}),r("label",{staticClass:"form__label"},[e._v("Allow opening accounts")])]),r("div",{staticClass:"form__item"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.canGuarantee,expression:"form.canGuarantee"}],staticClass:"form__checkbox mr-4",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.form.canGuarantee)?e._i(e.form.canGuarantee,null)>-1:e.form.canGuarantee},on:{change:function(t){var r=e.form.canGuarantee,a=t.target,n=!!a.checked;if(Array.isArray(r)){var o=null,i=e._i(r,o);a.checked?i<0&&e.$set(e.form,"canGuarantee",r.concat([o])):i>-1&&e.$set(e.form,"canGuarantee",r.slice(0,i).concat(r.slice(i+1)))}else e.$set(e.form,"canGuarantee",n)}}}),r("label",{staticClass:"form__label"},[e._v("Allow as guarantor")])]),r("div",{staticClass:"form__item"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.requireIdentification,expression:"form.requireIdentification"}],staticClass:"form__checkbox mr-4",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.form.requireIdentification)?e._i(e.form.requireIdentification,null)>-1:e.form.requireIdentification},on:{change:function(t){var r=e.form.requireIdentification,a=t.target,n=!!a.checked;if(Array.isArray(r)){var o=null,i=e._i(r,o);a.checked?i<0&&e.$set(e.form,"requireIdentification",r.concat([o])):i>-1&&e.$set(e.form,"requireIdentification",r.slice(0,i).concat(r.slice(i+1)))}else e.$set(e.form,"requireIdentification",n)}}}),r("label",{staticClass:"form__label"},[e._v("Require identification documents")])]),r("div",{staticClass:"form__item"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.useDefaultAddress,expression:"form.useDefaultAddress"}],staticClass:"form__checkbox mr-4",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.form.useDefaultAddress)?e._i(e.form.useDefaultAddress,null)>-1:e.form.useDefaultAddress},on:{change:function(t){var r=e.form.useDefaultAddress,a=t.target,n=!!a.checked;if(Array.isArray(r)){var o=null,i=e._i(r,o);a.checked?i<0&&e.$set(e.form,"useDefaultAddress",r.concat([o])):i>-1&&e.$set(e.form,"useDefaultAddress",r.slice(0,i).concat(r.slice(i+1)))}else e.$set(e.form,"useDefaultAddress",n)}}}),r("label",{staticClass:"form__label"},[e._v("Show default address fields")])])]),r("div",{staticClass:"form__item"},[r("label",{staticClass:"form__label"},[e._v("Description")]),r("div",{attrs:{id:"content-container"}},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.form.clientTypeDescription,expression:"form.clientTypeDescription"}],staticClass:"input form__input w-100",attrs:{label:"Description",placeholder:" Description",cols:"100",rows:"10"},domProps:{value:e.form.clientTypeDescription},on:{input:function(t){t.target.composing||e.$set(e.form,"clientTypeDescription",t.target.value)}}})])]),r("button",{staticClass:"button form__button form__button--lg",attrs:{type:"submit"}},[e._v(" Save Changes ")]),r("button",{staticClass:"button form__action__text form__action__text--danger ml-5",attrs:{"data-dismiss":"modal","aria-label":"Close",id:"editformCloseButton"},on:{click:e.clearForm}},[e._v(" Cancel ")])])]):e._e()])])])]),r("div",{staticClass:"modal modal__confirm",attrs:{id:"deleteConfirmModal","aria-hidden":"true"}},[r("ion-icon",{staticClass:"modal__head__icon modal__close",attrs:{name:"close-outline","data-dismiss":"modal","aria-label":"Close"}}),r("div",{},[r("div",{staticClass:"modal__dialog",attrs:{role:"document"}},[r("div",{staticClass:"modal__head"},[r("div",{staticClass:"modal__close modal__head__icon modal__close--white",attrs:{"data-dismiss":"modal","aria-label":"Close"}},[r("span",[r("ion-icon",{attrs:{name:"close-outline"}}),e._v(" Close")],1)]),r("h5",{staticClass:"modal__header__title"},[e._v("Confirmation")])]),r("div",{staticClass:"modal__content"},[e._m(4),r("div",[r("button",{staticClass:"button form__button form__button--lg mr-5 modal__confirm__button modal__confirm__button--cancel",attrs:{"data-dismiss":"modal","aria-label":"Close",id:"closeButton"}},[e._v(" Cancel ")]),r("button",{staticClass:"button form__button form__button--lg modal__confirm__button modal__confirm__button--delete",attrs:{type:"submit"},on:{click:function(t){return e.deleteCustomerType(e.deleteKey)}}},[e._v(" Delete ")])])])])])],1)],1)},n=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"text-right"},[r("button",{staticClass:"button page__body__header__button ml-auto button--grey text--capital",attrs:{type:"button","data-toggle":"modal","data-target":"#newModal"}},[e._v(" Add Type "),r("i",{staticClass:"ki ki-plus icon-sm ml-3"})])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("thead",{staticClass:"table__header"},[r("tr",{staticClass:"table_header_text"},[r("th",[e._v("Name")]),r("th",[e._v("ID")]),r("th",[e._v("ID Template")]),r("th",[e._v("Actions")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"modal__header__title"},[r("h5",{staticClass:"modal__head__title"},[e._v("Add Customer Type")]),r("br")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"modal__header__title"},[r("h5",{staticClass:"modal__head__title"},[e._v("Edit Customer Type")]),r("br")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"modal__header"},[r("div",{staticClass:"modal__header__title"},[r("h5",{staticClass:"modal__head__title"},[e._v(" Are you sure you want to delete this Customer Type ? ")])]),r("div",{staticClass:"modal__header__subtitle"},[r("h6",{staticClass:"my-4"},[e._v(" When you delete this Customer Type from your list, you won't be able to access it again, ")])])])}],o=(r("96cf"),r("1da1")),i=r("2b0e"),s=r("7b99"),c=r("30ab"),l="/CustomerType",u={get:function(){if(c["a"].getToken())return s["a"].setHeader(),s["a"].get(l,"")},getByKey:function(e){if(c["a"].getToken())return s["a"].setHeader(),s["a"].get(l,e)},create:function(e){if(c["a"].getToken())return s["a"].setHeader(),s["a"].post(l,e)},update:function(e,t){if(c["a"].getToken())return s["a"].setHeader(),s["a"].update(l,e,t)},delete:function(e){if(c["a"].getToken())return s["a"].setHeader(),s["a"].delete(l,e)}},m=u,d=i["default"].extend({name:"customer-types",data:function(){return{content_header:{title:"Customer Types",subTitle:"Set up organization's customer types."},deleteKey:null,isLoading:!1,form:{clientType:"",clientTypeName:"",clientTypeDescription:"",clientTypeIdPattern:"",clinetTypeCustomId:"",clientTypeIndex:0,canGuarantee:!0,canOpenAccounts:!0,useDefaultAddress:!0,requireIdentification:!0},customerTypes:[],customerType:null}},methods:{getCustomerTypes:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.isLoading=!0,t.next=4,m.get();case 4:r=t.sent,e.customerTypes=r.data.data.items,e.isLoading=!1,t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](0),a=t.t0.response.data.message,alert(a);case 13:case"end":return t.stop()}}),t,null,[[0,9]])})))()},getCustomerType:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t.isLoading=!0,r.next=4,m.getByKey(e);case 4:a=r.sent,t.customerType=a.data.data,t.form.clientType=t.customerType.clientType,t.form.clientTypeName=t.customerType.clientTypeName,t.form.clientTypeDescription=t.customerType.clientTypeDescription,t.form.clientTypeIdPattern=t.customerType.clientTypeIdPattern,t.form.clinetTypeCustomId=t.customerType.clinetTypeCustomId,t.form.clientTypeIndex=t.customerType.clientTypeIndex,t.form.canGuarantee=t.customerType.canGuarantee,t.form.canOpenAccounts=t.customerType.canOpenAccounts,t.form.useDefaultAddress=t.customerType.useDefaultAddress,t.form.requireIdentification=t.customerType.requireIdentification,t.isLoading=!1,r.next=23;break;case 19:r.prev=19,r.t0=r["catch"](0),n=r.t0.response.data.message,alert(n);case 23:case"end":return r.stop()}}),r,null,[[0,19]])})))()},saveForm:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,this.isLoading=!0,e.next=5,m.create(this.form);case 5:this.getCustomerTypes(),document.getElementById("formCloseButton").click(),this.clearForm(),this.isLoading=!1,e.next=15;break;case 11:e.prev=11,e.t0=e["catch"](1),r=e.t0.response.data.message,alert(r);case 15:case"end":return e.stop()}}),e,this,[[1,11]])})));function t(t){return e.apply(this,arguments)}return t}(),saveEditForm:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,this.isLoading=!0,this.form.customerTypeKey=this.customerType.customerTypeKey,e.next=6,m.update(this.customerType.customerTypeKey,this.form);case 6:this.getCustomerTypes(),document.getElementById("editformCloseButton").click(),this.clearForm(),this.isLoading=!1,e.next=16;break;case 12:e.prev=12,e.t0=e["catch"](1),r=e.t0.response.data.message,alert(r);case 16:case"end":return e.stop()}}),e,this,[[1,12]])})));function t(t){return e.apply(this,arguments)}return t}(),clearForm:function(){this.form={clientType:"",clientTypeName:"",clientTypeDescription:"",clientTypeIdPattern:"",clinetTypeCustomId:"",clientTypeIndex:0,canGuarantee:!0,canOpenAccounts:!0,useDefaultAddress:!0,requireIdentification:!0},this.customerType=null},deleteCustomerType:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,m.delete(e);case 2:document.getElementById("closeButton").click(),t.getCustomerTypes();case 4:case"end":return r.stop()}}),r)})))()},openConfirmation:function(e){this.deleteKey=e}},created:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.getCustomerTypes();case 1:case"end":return t.stop()}}),t)})))()}}),f=d,p=r("2877"),_=Object(p["a"])(f,a,n,!1,null,null,null);t["default"]=_.exports}}]);
//# sourceMappingURL=chunk-69e44977.3d10a7ee.js.map
!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("vue")):"function"==typeof define&&define.amd?define("tb-vue-google-login",["vue"],n):"object"==typeof exports?exports["tb-vue-google-login"]=n(require("vue")):e["tb-vue-google-login"]=n(e.vue)}(window,function(e){return function(e){var n={};function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(o,i,function(n){return e[n]}.bind(null,i));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=1)}([function(n,t){n.exports=e},function(e,n,t){"use strict";t.r(n);t(0);var o=function(){var e=this.$createElement;this._self._c;return this._m(0)};o._withStripped=!0;var i=function(e,n,t,o,i,r,s,u){var l,c="function"==typeof e?e.options:e;if(n&&(c.render=n,c.staticRenderFns=t,c._compiled=!0),o&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),s?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},c._ssrRegister=l):i&&(l=u?function(){i.call(this,this.$root.$options.shadowRoot)}:i),l)if(c.functional){c._injectStyles=l;var a=c.render;c.render=function(e,n){return l.call(n),a(e,n)}}else{var g=c.beforeCreate;c.beforeCreate=g?[].concat(g,l):[l]}return{exports:e,options:c}}({name:"GoogleLoginComponent",props:{authUrl:String},methods:{emitGoogleLoginSuccess:function(){this.$emit("googleLoginSuccess")},emitLoginSuccess:function(){this.$emit("loginSuccess"),this.disconnectGoogle()},emitGoogleLoginFailure:function(){this.$emit("googleLoginFailure")},emitLoginFailure:function(){this.$emit("loginFailure")},setup:function(){window.googleAuthUrl=this.authUrl,window.emitGoogleLoginSuccess=this.emitGoogleLoginSuccess.bind(this),window.emitLoginSuccess=this.emitLoginSuccess.bind(this),window.emitGoogleLoginFailure=this.emitGoogleLoginFailure.bind(this),window.emitLoginFailure=this.emitLoginFailure.bind(this)},disconnectGoogle:function(){delete window.googleAuthUrl,delete window.emitGoogleLoginSuccess,delete window.emitLoginSuccess,delete window.emitGoogleLoginFailure,delete window.emitLoginFailure}},created:function(){this.setup()}},o,[function(){var e=this.$createElement,n=this._self._c||e;return n("div",{attrs:{id:"google-login-component"}},[n("div",{staticClass:"g-signin2",attrs:{id:"my-signin2","data-onsuccess":"onSignIn","data-theme":"dark"}}),this._v(" "),n("script",{attrs:{type:"application/javascript"}},[this._v("\n    function renderButton() {\n      gapi.signin2.render('my-signin2', {\n        'scope': 'profile email',\n        'width': 300,\n        'height': 50,\n        'longtitle': true,\n        'theme': 'dark',\n        'onsuccess': onSuccess,\n        'onfailure': onFailure\n      });\n    }\n    function onSuccess(googleUser) {\n      var profile = googleUser.getBasicProfile();\n      window.emitGoogleLoginSuccess(profile);\n      var id_token = googleUser.getAuthResponse().id_token;\n      sendToken(id_token)\n    }\n    function onFailure(err) {\n      window.emitGoogleLoginFailure(err)\n    }\n    function sendToken(token) {\n      var xhr = new XMLHttpRequest();\n      xhr.open('POST', window.googleAuthUrl);\n      xhr.setRequestHeader('Content-Type', 'application/json');\n      xhr.onload = function() {\n        if (xhr.status === 200) {\n          window.emitLoginSuccess()\n        } else {\n          window.emitLoginFailure()\n        }\n        googleSignOut()\n      };\n      xhr.send(JSON.stringify({ token }));\n    }\n    function googleSignOut() {\n      gapi.auth2.getAuthInstance().signOut()\n        .then(() => console.log(\"Succes\"))\n        .catch(err => console.log(\"Error\", err))\n    }\n  ")]),this._v(" "),n("script",{attrs:{type:"application/javascript",src:"https://apis.google.com/js/platform.js?onload=renderButton",async:"",defer:""}})])}],!1,null,"77dff49e",null);i.options.__file="src/google-login-component.vue";var r=i.exports;function s(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}t.d(n,"default",function(){return u});var u=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,o;return n=e,o=[{key:"install",value:function(e,n){e.component("google-login-component",r)}}],(t=null)&&s(n.prototype,t),o&&s(n,o),e}()}])});
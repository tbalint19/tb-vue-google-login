import Vue from 'vue'
import GoogleLoginComponent from './google-login-component.vue'

export default class GoogleLoginPlugin {

  static install(Vue, options) {
    if (!options.loginUrl) throw "Login URL not defined for google authentication!";
    window.loginUrlForGoogleToken = options.loginUrl;
    Vue.component('google-login-component', GoogleLoginComponent);
  }

}

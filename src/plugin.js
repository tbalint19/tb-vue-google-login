import Vue from 'vue'
import GoogleLoginComponent from './google-login-component.vue'

export default class GoogleLoginPlugin {

  static install(Vue, options) {
    window.googleAuthUrl = options.authUrl;
    Vue.component('google-login-component', GoogleLoginComponent);
  }

}

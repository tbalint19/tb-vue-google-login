import Vue from 'vue'
import GoogleLoginComponent from './google-login-component.vue'

export default class GoogleLoginPlugin {

  static install(Vue, options) {
    Vue.component('google-login-component', Object.assign(GoogleLoginComponent, {
      data() {
        return options;
      }
    }));
  }

}

<template lang="html">
  <div id="google-login-component">
    <div id="my-signin2" class="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></div>
    <script type="application/javascript">
      function renderButton() {
        gapi.signin2.render('my-signin2', {
          'scope': 'profile email',
          'width': 173,
          'height': 25,
          'longtitle': true,
          'theme': 'dark',
          'onsuccess': onSuccess,
          'onfailure': onFailure
        });
      }
      function onSuccess(googleUser) {
        var profile = googleUser.getBasicProfile();
        window.emitGoogleAuthSuccess(googleUser);
        var id_token = googleUser.getAuthResponse().id_token;
        sendToken(id_token)
      }
      function onFailure(err) {
        window.emitGoogleAuthFailure(err)
      }
      function sendToken(token) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', window.loginUrlForGoogleToken);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function() {
          if (xhr.status === 200) {
            window.emitLoginSuccessWithGoogleToken(xhr.response)
          } else {
            window.emitLoginFailureWithGoogleToken(xhr.response)
          }
          googleSignOut()
        };
        xhr.send(JSON.stringify({ token }));
      }
      function googleSignOut() {
        gapi.auth2.getAuthInstance().signOut()
          .then(function() {})
          .catch(function() {})
      }
    </script>
    <script
      type="application/javascript"
      src="https://apis.google.com/js/platform.js?onload=renderButton" async defer>
    </script>
  </div>
</template>

<script>
export default {
  name: "GoogleLoginComponent",
  methods: {
    emitGoogleAuthSuccess: function(res) {
      this.$emit("authSuccess", res)
    },
    emitLoginSuccessWithGoogleToken: function(res) {
      this.$emit("loginSuccess", res)
      this.disconnectGoogle()
    },
    emitGoogleAuthFailure: function(res) {
      this.$emit("authFail", res)
    },
    emitLoginFailureWithGoogleToken: function(res) {
      this.$emit("loginFail", res)
    },
    setup: function() {
      window.emitGoogleAuthSuccess = this.emitGoogleAuthSuccess.bind(this)
      window.emitLoginSuccessWithGoogleToken = this.emitLoginSuccessWithGoogleToken.bind(this)
      window.emitGoogleAuthFailure = this.emitGoogleAuthFailure.bind(this)
      window.emitLoginFailureWithGoogleToken = this.emitLoginFailureWithGoogleToken.bind(this)
    },
    disconnectGoogle: function() {
      delete window["emitGoogleAuthSuccess"]
      delete window["emitLoginSuccessWithGoogleToken"]
      delete window["emitGoogleAuthFailure"]
      delete window["emitLoginFailureWithGoogleToken"]
    }
  },
  created() {
    this.setup()
  }
}
</script>

<style lang="css" scoped>
</style>

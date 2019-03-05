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
        window.emitGoogleLoginSuccess(profile);
        var id_token = googleUser.getAuthResponse().id_token;
        sendToken(id_token)
      }
      function onFailure(err) {
        window.emitGoogleLoginFailure(err)
      }
      function sendToken(token) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', window.googleAuthUrl);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function() {
          if (xhr.status === 200) {
            window.emitLoginSuccess(xhr.response)
          } else {
            window.emitLoginFailure(xhr.response)
          }
          googleSignOut()
        };
        xhr.send(JSON.stringify({ token }));
      }
      function googleSignOut() {
        gapi.auth2.getAuthInstance().signOut()
          .then((res) => window.emitGooglLogoutSuccess(res))
          .catch(err => window.emitGooglLogoutSuccess(err))
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
    emitGoogleLoginSuccess: function(res) {
      this.$emit("googleLoginSuccess", res)
    },
    emitLoginSuccess: function(res) {
      this.$emit("loginSuccess", res)
      this.disconnectGoogle()
    },
    emitGoogleLoginFailure: function(res) {
      this.$emit("googleLoginFailure", res)
    },
    emitLoginFailure: function(res) {
      this.$emit("loginFailure", res)
    },
    emitGoogleLogoutFailure: function(res) {
      this.$emit("googleLogoutFailure", res)
    },
    emitGooglLogoutSuccess: function(res) {
      this.$emit("googleLogoutSuccess", res)
    },
    setup: function() {
      window.emitGoogleLoginSuccess = this.emitGoogleLoginSuccess.bind(this)
      window.emitLoginSuccess = this.emitLoginSuccess.bind(this)
      window.emitGoogleLoginFailure = this.emitGoogleLoginFailure.bind(this)
      window.emitLoginFailure = this.emitLoginFailure.bind(this)
      window.emitGoogleLogoutFailure = this.emitGoogleLogoutFailure.bind(this)
      window.emitGooglLogoutSuccess = this.emitGooglLogoutSuccess.bind(this)
    },
    disconnectGoogle: function() {
      delete window["emitGoogleLoginSuccess"]
      delete window["emitLoginSuccess"]
      delete window["emitGoogleLoginFailure"]
      delete window["emitLoginFailure"]
      delete window["emitGoogleLogoutFailure"]
      delete window["emitGooglLogoutSuccess"]
    }
  },
  created() {
    this.setup()
  }
}
</script>

<style lang="css" scoped>
</style>

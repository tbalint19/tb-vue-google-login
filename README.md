# Vue google login plugin

### Usage
Install in your VueJS project:

```bash
npm i -s tb-vue-google-login
```

Import in __main.js__ and install:

```javascript
import GoogleLoginPlugin from 'tb-vue-google-login'

Vue.use(GoogleLoginPlugin)
```

A global _google-login-component_ tag will be installed.<br>

Add the following tags to your index.html:
```html
<meta name="google-signin-scope" content="profile email">
<meta name="google-signin-client_id"
  content="your-client-id.apps.googleusercontent.com">
<script src="https://apis.google.com/js/platform.js" async defer></script>
```

Use _google-login-component_ in any component you wish:

```html
<template>
  <div id="auth-popup">
    <google-login-component
      @loginSuccess="loginSuccessHandler()"
      :authUrl="googleAuthUrl">
    </google-login-component>
  </div>
</template>
```

<hr>

And you are good to go!

Emitted events and props:

```html
<template>
  <div id="auth-popup">
    <google-login-component

      :authUrl="http://your-site.com/endpoint/which/receives/token/and/authenticates/on/your/site/to/create/session"

      @loginSuccess="methodCalledWhenAuthIsSuccessfulOnYourSite()"

      @googleLoginSuccess="methodCalledBeforeTokenIsSentToYourBackend()"

      @loginFailure="methodCalledWhenAuthIsFailedOnYourSite()"

      @googleLoginFailure="methodCalledWhenErrorOccuredWithGoogleLogin()">

      <!-- authUrl will receive the following json in a post request:  -->
      <!-- { "token": "ejyffs.dfsdf.sdfsdf" } -->

    </google-login-component>
  </div>
</template>
```

# Vue google login plugin

### Usage
Install in your VueJS project:

```bash
npm i -s tb-vue-google-login
```

Import in __main.js__ and install:

```javascript
import GoogleLoginComponent from 'tb-vue-google-login'

Vue.use(GoogleLoginComponent)
```

A global _google-login-component_ tag will be installed.<br>
Use it in any component you wish:

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

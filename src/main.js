import './app.css'
import App from './App.svelte'
import NotLoggedIn from './NotLoggedIn.svelte'

// check search params & cookies for a token
const urlParams = new URLSearchParams(window.location.search)
var token = "";

if (urlParams.has('token')) {
  token = urlParams.get('token')
  document.cookie = `token=${token}`
} else if (document.cookie) {
  token = document.cookie.split('=')[1]
}

var app = null;
// TODO validate token
var tokenValid = false
if (!tokenValid) {
  app = new NotLoggedIn({
    target: document.getElementById('app'),
  })
} else {
  app = new App({
    target: document.getElementById('app'),
  })
}

export default app

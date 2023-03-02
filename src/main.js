import './app.css'
import App from './App.svelte'
import NotLoggedIn from './NotLoggedIn.svelte'

// check search params & cookies for a token
const hash = window.location.hash
const urlParams = new URLSearchParams(hash.substring(1))
console.log(hash)
console.log(urlParams.get('access_token'))
var token = "";

token = getCookie("discordtoken")

if (urlParams.has('access_token')) {
  token = urlParams.get('access_token')

  var expires = (new Date(Date.now()+ 604800*1000)).toUTCString();
  document.cookie = "discordtoken=" + token + "; expires=" + expires + ";path=/;"
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}


// send request to discord to validate token
// if valid, render app
// if not valid, render not logged in page
const xhr = new XMLHttpRequest()
xhr.open('GET', 'https://discordapp.com/api/users/@me')
xhr.setRequestHeader('Authorization', `Bearer ${token}`)

xhr.send()

var app = null;
xhr.onload = function() {
  if (xhr.status != 200) {
    app = new NotLoggedIn({
      target: document.getElementById('app'),
    })
  } else {
    app = new App({
      target: document.getElementById('app'),
    })

  }

  if (xhr.status == 401) {
    app = new NotLoggedIn({
      target: document.getElementById('app'),
    })
  }
}

export default app

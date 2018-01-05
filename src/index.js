import _ from 'lodash';
import 'whatwg-fetch';
import Cookies from 'js-cookie';
function component() {
  var element = document.createElement('div');
  var code = 'CA0B2373C58E1E8EFD17277BCC59D031';
  var base = 'http://t-cloud.gionee.com/api';
  var url = `/api/users/getUserInfo?code=${code}&redirectUri=1`
  url = `/api/users/isLogin?redirectUri=1`;
fetch(url,{
  credentials: 'include'
  })
  .then(function(response) {
    return response.text()
  }).then(function(body) {
    // document.body.innerHTML = body
    element.innerHTML = body;
  })
  // Lodash, currently included via a script, is required for this line to work
  

  return element;
}


function show_cookie() {
  var element = document.createElement('div');
  // Cookies.set('name', 'value');
  element.innerHTML = _.join(['Cookies:', document.cookie], ' ');
  return element;
}

document.body.appendChild(component());
document.body.appendChild(show_cookie());
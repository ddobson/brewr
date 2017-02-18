'use strict';

const config = require('../config');
const cookies = require('../../../lib/cookies');

function signUp (formData) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data: formData,
  });
}

function signIn (formData) {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data: formData,
  });
}

function changePassword (formData) {
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + cookies.getCookie('id'),
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + cookies.getCookie('token'),
    },
    data: formData,
  });
}

module.exports = {
  signUp,
  signIn,
  changePassword,
};

'use strict';

const config = require('../config');

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

module.exports = {
  signUp,
  signIn,
};

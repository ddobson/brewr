'use strict';

const api = require('./api');
const authUI = require('./ui');

const onSignUp = function (event) {
  event.preventDefault();
};

const onSignIn = function (event) {
  event.preventDefault();
};

const onSignOut = function (event) {
  event.preventDefault();
};

const onChangePassword = function (event) {
  event.preventDefault();
};

const addHandlers = () => {
  $('#content').on('submit', '#sign-up', onSignUp);
  $('#content').on('submit', '#sign-in', onSignIn);
  $('#content').on('submit', '#sign-out', onSignOut);
  $('#content').on('submit', '#change-password', onChangePassword);
};

module.exports = {
  addHandlers,
};

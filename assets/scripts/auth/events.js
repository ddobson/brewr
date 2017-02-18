'use strict';

const api = require('./api');
const authUI = require('./ui');
const getFormFields = require('../../../lib/get-form-fields');

const parseActionId = function (id) {
  return id.replace('-cta', '');
};

const onAuthPrompt = function (event) {
  event.preventDefault();

  const action = parseActionId(event.target.id);

  authUI.triggerAuthModal(action);
};

const onSignUp = function (event) {
  event.preventDefault();

  const formData = getFormFields(event.target);

  api.signUp(formData)
     .then(console.log('sign up successful'));
};

const onSignIn = function (event) {
  event.preventDefault();

  const formData = getFormFields(event.target);

  api.signIn(formData)
     .then(console.log('sign in successful'));
};

const onSignOut = function (event) {
  event.preventDefault();
};

const onChangePassword = function (event) {
  event.preventDefault();
};

// Event Handling

const addHandlers = () => {
  $('#content').on('click', '#sign-up-cta', onAuthPrompt);
  $('#content').on('click', '#sign-in-cta', onAuthPrompt);
  $('#content').on('submit', '#sign-up', onSignUp);
  $('#content').on('submit', '#sign-in', onSignIn);
  $('#content').on('submit', '#sign-out', onSignOut);
  $('#content').on('submit', '#change-password', onChangePassword);
};

module.exports = {
  addHandlers,
};

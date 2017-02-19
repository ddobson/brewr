'use strict';

const api = require('./api');
const authUI = require('./ui');
const recipeEvents = require('../recipes/events');
const getFormFields = require('../../../lib/get-form-fields');
const cookies = require('../../../lib/cookies');

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

  api.signUp(formData);
};

const onSignIn = function (event) {
  event.preventDefault();

  const formData = getFormFields(event.target);

  api.signIn(formData)
     .then((response) => {
       cookies.setCookie('id', response.user.id);
       cookies.setCookie('email', response.user.email);
       cookies.setCookie('token', response.user.token);
       authUI.closeModal();
     })
     .then(() => {
       recipeEvents.onsuccessfulSignIn();
     });
};

const onSignOut = function (event) {
  event.preventDefault();

  api.signOut()
     .then(() => {
       cookies.deleteCookie('id');
       cookies.deleteCookie('token');
     });
};

const onChangePassword = function (event) {
  event.preventDefault();

  const formData = getFormFields(event.target);

  api.changePassword(formData)
     .then(console.log('password changed'));
};

// Event Handling

const addHandlers = () => {
  $('#content').on('click', '#sign-up-cta', onAuthPrompt);
  $('#content').on('click', '#sign-in-cta', onAuthPrompt);
  $('#content').on('click', '#change-password-cta', onAuthPrompt);
  $('#content').on('submit', '#sign-up', onSignUp);
  $('#content').on('submit', '#sign-in', onSignIn);
  $('#content').on('submit', '#change-password', onChangePassword);
  $('#content').on('click', '#sign-out', onSignOut);
};

module.exports = {
  addHandlers,
};

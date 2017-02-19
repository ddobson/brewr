'use strict';

const api = require('./api');
const authUI = require('./ui');
const recipeEvents = require('../recipes/events');
const getFormFields = require('../../../lib/get-form-fields');
const cookies = require('../../../lib/cookies');

function parseActionId(id) {
  return id.replace('-cta', '');
}

function onAuthPrompt(event) {
  event.preventDefault();

  const action = parseActionId(event.target.id);

  authUI.triggerAuthModal(action);
}

function onSignUp(event) {
  event.preventDefault();

  const formData = getFormFields(event.target);

  api.signUp(formData)
     .then(authUI.closeModal());
}

function onSignIn(event) {
  event.preventDefault();

  const formData = getFormFields(event.target);

  api.signIn(formData)
    .then((response) => {
      cookies.setCookie('id', response.user.id);
      cookies.setCookie('email', response.user.email);
      cookies.setCookie('token', response.user.token);
    })
    .then(() => {
      const userEmail = cookies.getCookie('email');

      authUI.closeModal();
      authUI.renderNavigation(userEmail);
    })
    .then(() => {
      recipeEvents.getUserRecipes();
    });
}

function onSignOut(event) {
  event.preventDefault();

  api.signOut()
    .then(() => {
      cookies.deleteCookie('id');
      cookies.deleteCookie('email');
      cookies.deleteCookie('token');
    })
    .then(() => {
      authUI.renderWelcomeContent();
      authUI.resetNavigation();
    });
}

function onChangePassword(event) {
  event.preventDefault();

  const formData = getFormFields(event.target);

  api.changePassword(formData)
     .then(authUI.closeModal());
}

function checkAuthentication() {
  if (cookies.getCookie('token')) {
    const userEmail = cookies.getCookie('email');

    authUI.renderNavigation(userEmail);
    recipeEvents.getUserRecipes();
  } else {
    authUI.renderWelcomeContent();
  }
}

// Event Handling

function addHandlers() {
  $('#content').on('click', '#sign-up-cta', onAuthPrompt);
  $('#content').on('click', '#sign-in-cta', onAuthPrompt);
  $('#dropdown-options').on('click', '#change-password-cta', onAuthPrompt);
  $('#content').on('submit', '#sign-up', onSignUp);
  $('#content').on('submit', '#sign-in', onSignIn);
  $('#content').on('submit', '#change-password', onChangePassword);
  $('#dropdown-options').on('click', '#sign-out', onSignOut);
}

module.exports = {
  addHandlers,
  checkAuthentication,
};

'use strict';

// TEMPLATE FILES //
// Modal

const signUpModal = require('../templates/modals/sign-up-modal.handlebars');
const signInModal = require('../templates/modals/sign-in-modal.handlebars');
const changePasswordModal = require('../templates/modals/change-password-modal.handlebars');
const authErrors = require('../templates/modals/auth-errors.handlebars');

// Navigation

const authDropdown = require('../templates/navbar/authd-dropdown.handlebars');
const collapseToggle = require('../templates/navbar/collapse-toggle.handlebars');

// Welcome Content

const welcomeContent = require('../templates/welcome-content.handlebars');

// Alerts

const alertBar = require('../templates/alerts.handlebars');

function triggerAuthModal(action) {
  switch (action) {
    case 'sign-up':
      const signUpModalHtml = signUpModal();
      $('#content').append(signUpModalHtml);
      break;
    case 'sign-in':
      const signInModalHtml = signInModal();
      $('#content').append(signInModalHtml);
      break;
    case 'change-password':
      const changePasswordHtml = changePasswordModal();
      $('#content').append(changePasswordHtml);
      break;
    default:
  }
}

function onAuthError(type) {
  const message = {
    message: 'Uh oh, an error occured! Please check your credentials and try again.',
  };
  const authErrorsHtml = authErrors(message);

  switch (type) {
    case 'sign-in':
      $('#sign-in-body').prepend(authErrorsHtml);
      break;
    case 'sign-up':
      $('#sign-up-body').prepend(authErrorsHtml);
      break;
    case 'change-password':
      $('#change-password-body').prepend(authErrorsHtml);
      break;
  }
}

function onAuthSuccess(type) {
  const message = {
    alertType: 'alert-success',
  };

  switch (type) {
    case 'sign-up':
      message.message = 'Success! Sign-In to begin.';
      break;
    case 'change-password':
      message.message = 'Success! Your password has been changed.';
      break;
    default:
      message.message = 'Success!';
  }

  const alertBarHtml = alertBar(message);
  $('#alert-wrap').html(alertBarHtml);
}

// NAVIGATION FUNCTIONS

function renderNavigation(userEmail) {
  const userInfo = {
    email: userEmail,
  };

  const authDropdownHtml = authDropdown(userInfo);
  const collapseToggleHtml = collapseToggle();

  $('#dropdown-options').html(authDropdownHtml);
  $('#collapse-toggle-parent').prepend(collapseToggleHtml);
}

function resetNavigation() {
  $('#dropdown-options').html('');
  $('#nav-collapse-button').remove();
}

// END NAVIGATION FUNCTIONS

function renderWelcomeContent() {
  const welcomeContentHtml = welcomeContent();
  $('.content').html(welcomeContentHtml);
}

module.exports = {
  onAuthError,
  onAuthSuccess,
  renderNavigation,
  renderWelcomeContent,
  resetNavigation,
  triggerAuthModal,
};

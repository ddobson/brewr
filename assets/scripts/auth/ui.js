'use strict';

// TEMPLATE FILES //

// Modal
const signUpModal = require('../templates/modals/sign-up-modal.handlebars');
const signInModal = require('../templates/modals/sign-in-modal.handlebars');
const changePasswordModal = require('../templates/modals/change-password-modal.handlebars');

// Navigation
const authDropdown = require('../templates/navbar/authd-dropdown.handlebars');
const collapseToggle = require('../templates/navbar/collapse-toggle.handlebars');

// Welcome Content
const welcomeContent = require('../templates/welcome-content.handlebars');

// END TEMPLATES //

function triggerAuthModal (action) {
  switch (action) {
    case 'sign-up':
      const signUpModalHtml = signUpModal();
      $('.content').append(signUpModalHtml);
      break;
    case 'sign-in':
      const signInModalHtml = signInModal();
      $('.content').append(signInModalHtml);
      break;
    case 'change-password':
      const changePasswordHtml = changePasswordModal();
      $('.content').append(changePasswordHtml);
      break;
    default:
  }
}

function closeModal () {
  $('.modal').modal('toggle');
  $('.modal-backdrop').remove();
}

// NAVIGATION FUNCTIONS
function renderNavigation (userEmail) {
  const userInfo = {
    email: userEmail,
  };

  const authDropdownHtml = authDropdown(userInfo);
  const collapseToggleHtml = collapseToggle();

  $('#dropdown-options').html(authDropdownHtml);
  $('#collapse-toggle-parent').prepend(collapseToggleHtml);
}

function resetNavigation () {
  $('#dropdown-options').html('');
  $('#nav-collapse-button').remove();
}
// END NAVIGATION FUNCTIONS

function renderWelcomeContent () {
  const welcomeContentHtml = welcomeContent();
  $('.content').html(welcomeContentHtml);
}

module.exports = {
  closeModal,
  renderNavigation,
  renderWelcomeContent,
  resetNavigation,
  triggerAuthModal,
};

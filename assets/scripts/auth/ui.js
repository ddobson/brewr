'use strict';

const signUpModal = require('../templates/modals/sign-up-modal.handlebars');
const signInModal = require('../templates/modals/sign-in-modal.handlebars');
const changePasswordModal = require('../templates/modals/change-password-modal.handlebars');

const triggerAuthModal = function (action) {
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
};

module.exports = {
  triggerAuthModal,
};

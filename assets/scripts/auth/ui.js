'use strict';

const signUpModal = require('../templates/modals/sign-up-modal.handlebars');
const signInModal = require('../templates/modals/sign-in-modal.handlebars');

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
    default:
  }
};

module.exports = {
  triggerAuthModal,
};

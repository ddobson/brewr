'use strict';

function closeModal() {
  $('.modal').modal('toggle');
  $('.modal-backdrop').remove();
  $('body').removeClass('modal-open');
}

function clearAlerts() {
  $('.alert').remove();
}

function scrollTop() {
  $('html, body').animate({ scrollTop: 0 }, 'fast');
}

module.exports = {
  clearAlerts,
  closeModal,
  scrollTop,
};

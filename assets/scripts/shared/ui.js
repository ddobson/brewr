'use strict';

function closeModal() {
  $('.modal').modal('toggle');
  $('.modal-backdrop').remove();
  $('body').removeClass('modal-open');
}

function clearAlerts() {
  $('.alert').remove();
}

module.exports = {
  clearAlerts,
  closeModal,
};

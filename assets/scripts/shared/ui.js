'use strict';

function closeModal() {
  $('.modal').modal('toggle');
  $('.modal-backdrop').remove();
  $('body').removeClass('modal-open');
}

module.exports = {
  closeModal,
};

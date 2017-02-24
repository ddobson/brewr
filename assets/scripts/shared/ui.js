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
  $('html, body').animate({
    scrollTop: 0,
  }, 'fast');
}

function shake(div) {
  const interval = 100;
  const distance = 10;
  const times = 4;

  $(div).css('position', 'relative');

  for (let i = 0; i < (times + 1); i++) {
    $(div).animate({
      left: ((i % 2 === 0 ? distance : distance * -1)),
    }, interval);
  } //for

  $(div).animate({
    left: 0,
  }, interval);

}

module.exports = {
  clearAlerts,
  closeModal,
  scrollTop,
  shake,
};

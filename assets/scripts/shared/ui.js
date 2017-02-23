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

function shake(div){
    var interval = 100;
    var distance = 10;
    var times = 4;

    $(div).css('position','relative');

    for(var iter=0;iter<(times+1);iter++){
        $(div).animate({
            left:((iter%2==0 ? distance : distance*-1))
            },interval);
    }//for

    $(div).animate({ left: 0},interval);

}

module.exports = {
  clearAlerts,
  closeModal,
  scrollTop,
  shake,
};

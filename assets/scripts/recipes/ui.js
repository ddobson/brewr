'use strict';

const homeContent = require('../templates/home-content.handlebars');

function renderRecipeContent (recipes) {
  const homeContentHtml = homeContent(recipes);
  $('.content').html(homeContentHtml);
}

module.exports = {
  renderRecipeContent,
};

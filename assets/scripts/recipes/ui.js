'use strict';

const homeContent = require('../templates/home-content.handlebars');
const showRecipe = require('../templates/recipes/show-recipe.handlebars');

function renderHomeContent(recipes) {
  const homeContentHtml = homeContent(recipes);
  $('.content').html(homeContentHtml);
}

function showRecipeContent(recipe) {
  const showRecipeHtml = showRecipe(recipe);
  $('#main-recipe-content>.panel').html(showRecipeHtml);
}

module.exports = {
  renderHomeContent,
  showRecipeContent,
};

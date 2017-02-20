'use strict';

const homeContent = require('../templates/home-content.handlebars');
const showRecipe = require('../templates/recipes/show-recipe.handlebars');
const newRecipe = require('../templates/recipes/new-recipe-form.handlebars');

function renderHomeContent(recipes) {
  const homeContentHtml = homeContent(recipes);
  $('.content').html(homeContentHtml);
}

function showRecipeContent(recipe) {
  const showRecipeHtml = showRecipe(recipe);
  $('#main-recipe-content>.panel').html(showRecipeHtml);
}

function renderNewRecipeForm() {
  const newRecipeFormHtml = newRecipe();
  $('#main-recipe-content>.panel').html(newRecipeFormHtml);
}

module.exports = {
  renderHomeContent,
  showRecipeContent,
  renderNewRecipeForm,
};

'use strict';

const ui = require('./ui');
const api = require('./api');

function getUserRecipes() {
  api.getRecipes()
     .then((response) => {
       const templateData = {recipes: response.recipes};
       ui.renderHomeContent(templateData);
     });
}

function showUserRecipe(event) {
  event.preventDefault();

  const recipe_id = $(event.target).data('recipe-id');

  api.showRecipe(recipe_id)
     .then((response) => {
       const templateData = {recipe: response.recipe};
       ui.showRecipeContent(templateData);
     });
}

function addHandlers() {
  $('.content').on('click', '.recipe-item', showUserRecipe);
}

module.exports = {
  addHandlers,
  getUserRecipes,
};

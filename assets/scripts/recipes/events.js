'use strict';

const ui = require('./ui');
const api = require('./api');

function getAndShowRecipes() {
  api.getUserRecipes()
    .then((response) => {
      const templateData = {
        recipes: response.recipes,
      };

      ui.renderHomeContent(templateData);
    });
}

function showUserRecipe(event) {
  event.preventDefault();

  const recipeId = $(event.target).data('recipe-id');

  api.showRecipe(recipeId)
    .then((response) => {
      const templateData = {
        recipe: response.recipe,
      };

      ui.showRecipeContent(templateData);
    });
}

function addHandlers() {
  $('.content').on('click', '.recipe-item', showUserRecipe);
}

module.exports = {
  addHandlers,
  getAndShowRecipes,
};

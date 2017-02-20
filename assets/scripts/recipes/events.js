'use strict';

const ui = require('./ui');
const api = require('./api');
const getFormFields = require('../../../lib/get-form-fields');

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

function newRecipeForm() {
  ui.renderNewRecipeForm();
}

function onNewRecipeSubmit(event) {
  event.preventDefault();

  const formData = getFormFields(event.target);

  console.log(formData);

  api.createRecipe(formData)
    .then((response) => {
      console.log(response);
    });
}

function addHandlers() {
  $('#content').on('click', '.recipe-item', showUserRecipe);
  $('#content').on('click', '#new-recipe-btn', newRecipeForm);
  $('#content').on('submit', '#new-recipe-form', onNewRecipeSubmit);
}

module.exports = {
  addHandlers,
  getAndShowRecipes,
};

'use strict';

require('form-serializer');

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

  const $formData = $(event.target).serializeObject();

  api.createRecipe($formData)
    .then(() => {
      getAndShowRecipes();
    });
}

function onDestroyRecipe(event) {
  event.preventDefault(event);

  const recipeId = $(event.target).data('recipe-id');

  ui.confirmDestroyModal(recipeId);
}

function confirmDestroyRecipe(event) {
  event.preventDefault(event);

  const recipeId = $(event.target).data('recipe-id');

  api.destroyRecipe(recipeId)
  .then(ui.destroySuccessful)
  .then(getAndShowRecipes);
}

function addHandlers() {
  $('#content').on('click', '.recipe-item', showUserRecipe);
  $('#content').on('click', '#new-recipe-btn', newRecipeForm);
  $('#content').on('submit', '#new-recipe-form', onNewRecipeSubmit);
  $('#content').on('click', '#destroy-recipe-btn', onDestroyRecipe);
  $('#content').on('click', '#confirm-destroy-recipe-btn', confirmDestroyRecipe);
}

module.exports = {
  addHandlers,
  getAndShowRecipes,
};

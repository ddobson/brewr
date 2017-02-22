'use strict';

require('form-serializer');

const sharedUI = require('../shared/ui');
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

  api.getRecipe(recipeId)
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

function onAddIngredient(event) {
  event.preventDefault();

  ui.addIngredientForm(event.target);
}

function onEditRecipe(event) {
  event.preventDefault();

  const recipeId = $(event.target).data('recipe-id');

  api.getRecipe(recipeId)
    .then((response) => {
      const templateData = {
        recipe: response.recipe,
      };

      ui.renderEditRecipeForm(templateData);
    });
}

function onEditRecipeSubmit(event) {
  event.preventDefault();

  const formData = $(event.target).serializeObject();
  const recipeId = $(event.target).data('recipe-id');

  api.updateRecipe(formData, recipeId)
    .then(() => {
      getAndShowRecipes();
    });
}

function onDestroyIngredient(event) {
  event.preventDefault();

  ui.destroyIngredientForm(event.target);
}

function onNewRecipeSubmit(event) {
  event.preventDefault();

  const formData = $(event.target).serializeObject();

  api.createRecipe(formData)
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
  .then(sharedUI.closeModal)
  .then(getAndShowRecipes);
}

function addHandlers() {
  $('#content').on('click', '.recipe-list-item', showUserRecipe);
  $('#content').on('click', '#new-recipe-btn', newRecipeForm);
  $('#content').on('click', '#new-ingredient-btn', onAddIngredient);
  $('#content').on('click', '.destroy-ingredient-btn', onDestroyIngredient);
  $('#content').on('click', '#edit-recipe-btn', onEditRecipe);
  $('#content').on('submit', '#edit-recipe-form', onEditRecipeSubmit);
  $('#content').on('submit', '#new-recipe-form', onNewRecipeSubmit);
  $('#content').on('click', '#destroy-recipe-btn', onDestroyRecipe);
  $('#content').on('click', '#confirm-destroy-recipe-btn', confirmDestroyRecipe);
}

module.exports = {
  addHandlers,
  getAndShowRecipes,
};

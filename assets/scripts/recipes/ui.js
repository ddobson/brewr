'use strict';

const sharedUI = require('../shared/ui');

// TEMPLATES

// CONTENT
const homeContent = require('../templates/home-content.handlebars');
const showRecipe = require('../templates/recipes/show-recipe.handlebars');

// MODALS
const destroyRecipeModal = require('../templates/modals/confirm-destroy-recipe.handlebars');

// FORMS
const newRecipeForm = require('../templates/recipes/new-recipe-form.handlebars');
const editRecipeForm = require('../templates/recipes/edit-recipe-form.handlebars');
const ingredientForm = require('../templates/recipes/ingredient-form.handlebars');

function renderHomeContent(recipes) {
  const homeContentHtml = homeContent(recipes);

  sharedUI.clearAlerts();
  $('#content').html(homeContentHtml);
}

function showRecipeContent(recipe) {
  const showRecipeHtml = showRecipe(recipe);
  $('#main-recipe-content>.card').html(showRecipeHtml);
}

function renderEditRecipeForm(recipe) {
  const editRecipeFormHtml = editRecipeForm(recipe);
  $('#main-recipe-content>.card').html(editRecipeFormHtml);
}

function renderNewRecipeForm() {
  const newRecipeFormHtml = newRecipeForm();
  $('#main-recipe-content>.card').html(newRecipeFormHtml);
}

function addIngredientForm() {
  const ingredientFormHtml = ingredientForm();

  if ($('.ingredient-wrapper').length > 0) {
    $('.ingredient-wrapper').last().after(ingredientFormHtml);
  } else {
    $('#ingredients-label').after(ingredientFormHtml);
  }
}

function destroyIngredientForm($button) {
  $button.closest('.ingredient-wrapper').remove();
}

function confirmDestroyModal(recipeId) {
  const recipeIdSource = {
    id: recipeId,
  };

  const destroyRecipeModalHtml = destroyRecipeModal(recipeIdSource);

  $('#content').append(destroyRecipeModalHtml);
  $('#confirm-destroy-recipe-modal').modal('toggle');
}

module.exports = {
  addIngredientForm,
  confirmDestroyModal,
  destroyIngredientForm,
  renderEditRecipeForm,
  renderNewRecipeForm,
  renderHomeContent,
  showRecipeContent,
};

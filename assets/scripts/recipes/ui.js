'use strict';

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

function closeModal() {
  $('.modal').modal('toggle');
  $('.modal-backdrop').remove();
}

function renderHomeContent(recipes) {
  const homeContentHtml = homeContent(recipes);
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
  $('.ingredient-wrapper').last().after(ingredientFormHtml);
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

function destroySuccessful() {
  closeModal();
}

module.exports = {
  addIngredientForm,
  confirmDestroyModal,
  destroyIngredientForm,
  destroySuccessful,
  renderEditRecipeForm,
  renderNewRecipeForm,
  renderHomeContent,
  showRecipeContent,
};

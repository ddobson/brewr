'use strict';

const config = require('../config');
const cookies = require('../../../lib/cookies');

function getUserRecipes() {
  return $.ajax({
    url: config.apiOrigin + '/user_recipes',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + cookies.getCookie('token'),
    },
  });
}

function getRecipe(recipeId) {
  return $.ajax({
    url: config.apiOrigin + '/recipes/' + recipeId,
    method: 'GET',
  });
}

function createRecipe(formData) {
  return $.ajax({
    url: config.apiOrigin + '/recipes',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + cookies.getCookie('token'),
    },
    data: formData,
  });
}

function updateRecipe(formData, recipeId) {
  return $.ajax({
    url: config.apiOrigin + '/recipes/' + recipeId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + cookies.getCookie('token'),
    },
    data: formData,
  });
}

function destroyRecipe(recipeId) {
  return $.ajax({
    url: config.apiOrigin + '/recipes/' + recipeId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + cookies.getCookie('token'),
    },
  });
}

module.exports = {
  createRecipe,
  destroyRecipe,
  getRecipe,
  getUserRecipes,
  updateRecipe,
};

'use strict';

const config = require('../config');

function getRecipes() {
  return $.ajax({
    url: config.apiOrigin + '/recipes',
    method: 'GET',
  });
}

function showRecipe(recipeId) {
  return $.ajax({
    url: config.apiOrigin + '/recipes/' + recipeId,
    method: 'GET',
  });
}

module.exports = {
  getRecipes,
  showRecipe,
};

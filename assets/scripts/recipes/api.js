'use strict';

const config = require('../config');

function getRecipes() {
  return $.ajax({
    url: config.apiOrigin + '/recipes',
    method: 'GET',
  });
}

function showRecipe(recipe_id) {
  return $.ajax({
    url: config.apiOrigin + '/recipes/' + recipe_id,
    method: 'GET',
  });
}

module.exports = {
  getRecipes,
  showRecipe,
};

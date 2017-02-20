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

function showRecipe(recipeId) {
  return $.ajax({
    url: config.apiOrigin + '/recipes/' + recipeId,
    method: 'GET',
  });
}

module.exports = {
  getUserRecipes,
  showRecipe,
};

'use strict';

const ui = require('./ui');
const api = require('./api');

function getUserRecipes () {
  api.getRecipes()
     .then((response) => {
       const recipes = {recipes: response.recipes};
       ui.renderRecipeContent(recipes);
     });
}

module.exports = {
  getUserRecipes,
};

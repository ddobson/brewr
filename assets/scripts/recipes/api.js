'use strict';

const config = require('../config');

function getRecipes () {
  return $.ajax({
    url: config.apiOrigin + '/recipes',
    method: 'GET',
  });
}

module.exports = {
  getRecipes,
};

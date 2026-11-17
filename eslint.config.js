const js = require("@eslint/js");
const prettierRecommended = require("eslint-plugin-prettier/recommended");

module.exports = [js.configs.recommended, prettierRecommended];

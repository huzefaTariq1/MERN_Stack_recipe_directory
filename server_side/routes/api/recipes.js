const express = require('express');
const getRecipes=require('../../controllers/recipecontrollers/getRecipes');
const router=express.Router();

// @route     /api/recipes
// @desc      testing route
// access     public
router.get('/', getRecipes)

module.exports = router
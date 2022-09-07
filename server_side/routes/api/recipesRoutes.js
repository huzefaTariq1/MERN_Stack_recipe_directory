const express = require('express');
const getRecipes = require('../../controllers/recipecontrollers/getRecipes');
//const postRecipies = require('../../controllers/recipecontrollers/postRecipes');
const router = express.Router();
const { body } = require('express-validator')
const auth=require('../../middleware/authMiddleware');
const {postRecipes, getUserRecipe} = require('../../controllers/recipecontrollers/postRecipes');

// @route     /api/recipes
// @desc      getting all recipes 
// access     public
router.get('/', getRecipes)


// @route     /api/recipes
// @desc      getting current user recipes 
// access     private
router.get('/me',auth,getUserRecipe)


// @route     /api/recipes
// @desc      creating recipies
// access     private
router.post('/',[
    auth,
    [body('title').not().isEmpty(),
    body('recipie_ingrediants').not().isEmpty(),
    body('cooking_time').not().isEmpty(),
    body('imageurl').not().isEmpty(),
    body('method').not().isEmpty(),
    ]
],
postRecipes)

module.exports = router
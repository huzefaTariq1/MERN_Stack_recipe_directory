const express = require('express');
//const getRecipes = require('../../controllers/recipecontrollers/getRecipes');
//const postRecipies = require('../../controllers/recipecontrollers/postRecipes');
const router = express.Router();
const { body } = require('express-validator')
const auth=require('../../middleware/authMiddleware');
const {postRecipes, getUserRecipe ,updateRecipie,deleteRecipie,getAllRecipe,getSingleRecipe} = require('../../controllers/recipecontrollers/recipeController');

// @route     /api/recipes
// @desc      getting all recipes 
// access     public
router.get('/', getAllRecipe)


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


// @route     /api/recipes/id
// @desc      getting single recipes 
// access     public
router.get('/:id',getSingleRecipe)

// @route     /api/recipes
// @desc      updating recipes
// access     private
router.put('/:id',[
    auth,
    [body('title').not().isEmpty(),
    body('recipie_ingrediants').not().isEmpty(),
    body('cooking_time').not().isEmpty(),
    body('imageurl').not().isEmpty(),
    body('method').not().isEmpty(),
    ]
],
updateRecipie)

router.delete('/:id',auth,deleteRecipie)

module.exports = router
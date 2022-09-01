const express = require('express');
const getRecipes = require('../../controllers/recipecontrollers/getRecipes');
const postRecipies = require('../../controllers/recipecontrollers/postRecipes');
const router = express.Router();
const { body, validationResult } = require('express-validator')

// @route     /api/recipes
// @desc      testing route
// access     public
router.get('/', getRecipes)

router.post('/',
    [body('title').not().isEmpty(),
    body('recipie_ingrediants').not().isEmpty(),
    body('cooking_time').not().isEmpty(),
    body('imageurl').not().isEmpty(),
    body('method').not().isEmpty(),
    ],
    postRecipies)

module.exports = router
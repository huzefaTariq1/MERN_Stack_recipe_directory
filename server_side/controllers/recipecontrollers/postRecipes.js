const { body, validationResult } = require('express-validator')
const Recipe = require('../../models/recipe')

const postRecipes = async (req, res) => {
    // validating errors by express-validator
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() });
    }

    const { title, recipie_ingrediants, cooking_time, imageurl, method } = req.body

    try {

        let recipe = new Recipe({
            user: req.user.id,
            title,
            recipie_ingrediants,
            cooking_time,
            imageurl,
            method
        })

        recipe = await recipe.save()

        res.status(201).json(recipe)

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error')
    }
}

const getUserRecipe = async (req, res) => {
    const recipes = await Recipe.find({ user: req.user.id })

    res.status(200).json(recipes)
}


    // controller function for updating recipe

const updateRecipie = async (req, res) => {
    // // validating errors by express-validator
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() });
    }

    const { title, recipie_ingrediants, cooking_time, imageurl, method } = req.body
    try {
      // geting recipe by id
      let recipe = await Recipe.findById(req.params.id)
      console.log(recipe)
      

    // checking loged in user matched with recipe user
    if  (recipe && recipe.user.toString() !== req.user.id) {
        return res.status(401)
        .json({ errors: [{ msg: "User not Authorized" }] })
    }
    

    //  // updateing 
  
        recipe = await Recipe.findByIdAndUpdate(req.params.id, {
            user: req.user.id,
            title,
            recipie_ingrediants,
            cooking_time,
            imageurl,
            method
        }, { new: true });
        recipe = await recipe.save();

    res.status(200).json({ recipe });

    } catch (error) {
        if (error.kind === "ObjectId") {
            return res.status(404).json({ errors: [{ msg: "No recipie found for this Id" }] })
        }
        res.status(500).send("server error")
        console.log(error.message)
    }


}

module.exports = { postRecipes, getUserRecipe, updateRecipie }

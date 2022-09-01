const { body, validationResult } = require('express-validator')
const Recipe=require('../../models/recipe')

const postRecipes=async(req,res)=>{
        // validating errors by express-validator
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({ errors: error.array() });
        }

        const { title,recipie_ingrediants,cooking_time,imageurl,method } = req.body

        try {

            let recipe=new Recipe({
                title,
                recipie_ingrediants,
                cooking_time,
                imageurl,
                method   
            })

            recipe=await recipe.save()
            
            res.status(201).json(recipe)
            
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Server error')
        }
  }
  
  module.exports=postRecipes
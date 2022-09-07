const express=require('express');
const router=express.Router();
const { body } = require('express-validator')

const {registerUser,loginUser,getMe}=require('../../controllers/userControllers/userController')

// @route     /api/user
// @desc      testing route
// access     public
router.post('/',
[
    body('name').not().isEmpty(),
    body('email').isEmail(),
    body('password').isLength({min:6})
]
,registerUser)


// @route     /api/user
// @desc      testing route
// access     public
router.post('/login',loginUser)


// @route     /api/user
// @desc      testing route
// access     public
router.get('/me',getMe)


module.exports=router
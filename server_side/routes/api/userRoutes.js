const express=require('express');
const router=express.Router();
const { body } = require('express-validator')
const auth=require('../../middleware/authMiddleware')

const {registerUser,loginUser,getMe}=require('../../controllers/userControllers/userController')

// @route     /api/user
// @desc       creating user
// access     public
router.post('/',
[
    body('name').not().isEmpty(),
    body('email').isEmail(),
    body('password').isLength({min:6})
]
,registerUser)


// @route     /api/user/login
// @desc      getting login user token for auth 
// access     public
router.post('/login',
[
    body('email').isEmail(),
    body('password').exists()
]
,loginUser)


// @route     /api/user/me
// @desc      getting user detail
// access     private
router.get('/me',auth,getMe)


module.exports=router
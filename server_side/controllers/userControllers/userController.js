const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const JWT = require("jsonwebtoken")
const User=require('../../models/user')





const registerUser= async(req,res)=>{
    const error = validationResult(req)
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() });
    }

    const { name,email,password } = req.body

    try {

         // check user already exist
         let user = await User.findOne({ email });
         if (user) {
             res.status(400).json({ errors: [{ msg: "user alrady exists" }] });
         }
        
         user = new User({
            name,
            email,
            password,
        });

        // encrypt password
        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt)
         
        // saving to db
        await user.save()

        const payload={
            user:{
                id:user.id
            }
        }

        JWT.sign(
            payload,
            process.env.SECRECT_TOKEN,
            {expiresIn:"1hr"},
            (err,token)=>{
                if (err) throw err;
                res.json({token})
            }
        )
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send('server error')
    }
    
}




const loginUser=async(req,res)=>{
    const error = validationResult(req)
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() });
    }

    const { email,password } = req.body
    

  // Check for user email
  const user = await User.findOne({ email })

   
  try {
    // check wheather user exist or not
    let user = await User.findOne({ email });
    if (!user) {
        res.status(400).json({ errors: [{ msg: "Invalid Credentials email" }] });
    }


    // comaparing password
    const isMatch = await bcrypt.compare(password, user.password);



    if (!isMatch) {
        return res
            .status(400)
            .json({ errors: [{ msg: 'Invalid Credentials password' }] });
    }


    const payload = {
        user: {
            id: user.id
        }
    }

    JWT.sign(
        payload,
        process.env.SECRECT_TOKEN,
        { expiresIn: "1hr" },
        (err, token) => {
            if (err) throw err;
            res.json({ token })
        }
    )

} catch (error) {
    console.error(error.message);
    res.status(500).send('Server error')
}

}

const getMe=async(req,res)=>{
    try {
        const user=await User.findById(req.user.id).select('-password')
        res.send(user)   
     } catch (error) {
         res.status(500).send("server error")
         console.log(error.message)
     }
}


module.exports={
    registerUser,
    loginUser,
    getMe
}
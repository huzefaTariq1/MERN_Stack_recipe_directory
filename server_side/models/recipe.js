const mongoose = require('mongoose')

const recipieSchema=new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user',
      },
    title:{
        type:String,
        required:true
    },
    recipie_ingrediants:{
        type:[String],
        required:true,
    },
    cooking_time:{
        type:String,
        required:true
    },
    imageurl:{
       type:String,
       required:true
    },
    method:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now()
    }
})


module.exports=mongoose.model('recipie',recipieSchema)
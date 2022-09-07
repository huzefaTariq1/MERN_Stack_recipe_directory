const express=require('express')
const dotenv=require('dotenv').config()
const connectDB=require('./dbConnection/db')
const recipeRoutes=require('./routes/api/recipes')
const userRoutes=require('./routes/api/userRoutes')


const app=express()

connectDB()

// inii middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))


// defining routes
app.use('/api/recipes',recipeRoutes)
app.use('/api/user',userRoutes)

const PORT=process.env.PORT || 5000

app.listen(PORT,()=>console.log(`app is running on ${PORT}`))
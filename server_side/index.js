const express=require('express')
const path=require('path')
const dotenv=require('dotenv').config()
const connectDB=require('./dbConnection/db')
const cors = require("cors");
const recipeRoutes=require('./routes/api/recipesRoutes')
const userRoutes=require('./routes/api/userRoutes')


const app=express()

connectDB()

// inii middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())


// defining routes
app.use('/api/recipes',recipeRoutes)
app.use('/api/user',userRoutes)

app.use(express.static(path.join(__dirname, "./client_side/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client_side/build', 'index.html'));
});

const PORT=process.env.PORT || 5000

app.listen(PORT,()=>console.log(`app is running on ${PORT}`))
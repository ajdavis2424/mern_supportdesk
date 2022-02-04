// Express is middleware-based : It basically funnels incoming requests through a chain of middlewares (of steps) where we can do something with the request, 
// read some data from it, manipulate it, check if the user is authenticated or basically send back a response immediately

const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 8000
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')


// Connect to Database (calling conectDB function)
connectDB()

const app = express()

// This allows us to send raw json or url encoded json from Postman
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

// ROUTES BEGIN HERE!
app.get('/', (req,res) => {
    res.status(200).json({ message:'Welcome to the Support desk API'})
})

// to use routes from my userRoutes.js...-- 'users' connects to routes file
app.use('/api/users', require('./routes/userRoutes'))

// Error Route
app.use(errorHandler)

app.listen(PORT,() =>console.log(`server started on port ${PORT}`))
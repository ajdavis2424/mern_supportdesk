// Express is middleware-based : It basically funnels incoming requests through a chain of middlewares (of steps) where we can do something with the request, 
// read some data from it, manipulate it, check if the user is authenticated or basically send back a response immediately

const express = require('express')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 8000

const app = express()

// ROUTES BEGIN HERE!
app.get('/', (req,res) => {
    res.status(200).json({ message:'Welcome to the Support desk API'})
})

// to use routes from my userRoutes.js...-- 'users' connects to routes file
app.use('/api/users', require('./routes/userRoutes'))

app.listen(PORT,() =>console.log(`server started on port ${PORT}`))
// express async middleware brought in here:
const asyncHandler = require('express-async-handler')


// @desc Register a new user
// @route /api/users
// @access Public

const registerUser = asyncHandler (async (req,res) => {
// store name,email,password in varaible
    const {name,email,password}= req.body
    
    // Validation
    if(!name || !email ||!password) {
        res.status(400)
        throw new Error('MUST INCLUDE ALL FIELDS!')
    }
    res.send('Register Route')
})

// @desc Login a new user
// @route /api/users/login
// @access Public
const loginUser = asyncHandler(async(req,res) => {
res.send('Login Route')
})

module.exports ={
    registerUser,
    loginUser,
}
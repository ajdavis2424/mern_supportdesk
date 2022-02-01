const express = require('express')
const router = express.Router()
// bring in login & register routes from userController.js
const { registerUser, loginUser}= require('../controllers/userController')

// OLD POST ROUTE BEFORE CONTROLLER FILE CREATED
// router.post('/', (req,res) => {
//     res.send('Register Route')
// })

router.post('/', registerUser)


// api/users/login  in Postman
router.post('/', loginUser)

module.exports = router
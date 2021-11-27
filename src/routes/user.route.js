const express=  require('express')
const router = express.Router()

const userController = require('../controllers/user.controller');

// get all user lst
router.get('/',userController.getallusers);

// get id user lst
//  router.get('/:id',userController.getUserByID);

// get id user lst
 router.post('/login',userController.loginUser);

//create new user
router.post('/signup',userController.createNewUser);

//updatee old user
router.put('/:id',userController.updateUser)


module.exports = router
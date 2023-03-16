const router = require('express').Router()
const userController = require('../controller/userController')


router.post('/signup',userController.userSignup)

router.post('/login',userController.userLogin)


router.post('/contact',userController.addContact)

router.get('/contact/:id',userController.getContact)

router.get('/viewcontact/:userId/:id',userController.viewContact)

router.post('/updatecontact/:userId/:id',userController.udateContact)

router.delete('/contact/:userId/:id',userController.deletContact)

module.exports = router    
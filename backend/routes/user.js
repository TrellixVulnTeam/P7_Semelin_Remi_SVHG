const express = require('express')
const router = express.Router()
const userCtrl = require ('../controllers/user')
const auth = require ('../middleware/auth/auth')
const authUserAcces = require('../middleware/auth/user')

const app = express()


router.post('/signup', userCtrl.signup);
router.get('/login',  userCtrl.login);
router.get('/user/:id', authUserAcces, userCtrl.findOne)
router.put('/user/:id', authUserAcces, userCtrl.modify)

module.exports = router


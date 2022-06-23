
const {isLoggedIn, isAdmin} =require('../middlewares/auth.js');
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController.js');
const Controller = require('../controllers/controller.js');
// const jobs = require('./jobs.js');
// const hiring = require('./hiring.js');



router.get('/',  Controller.ShowMovies)
router.get('/login', UserController.loginForm)
router.get('/register', UserController.registerForm)
router.post('/register', UserController.postRegister)
router.use(isLoggedIn) //jadi gabisa lewat kalo belom login kalo karena diletakkan sebelum router lain INGAT POSISI MENUNJUKKAN PRESTASI
router.get('/watch/:id', Controller.Watch)


 //router.get('/edit', isAdmin, Controller.edit)

 router.get('/logout', UserController.logOut)







module.exports = router
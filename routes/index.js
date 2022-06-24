
const { isLoggedIn, isAdmin } = require('../middlewares/auth.js');
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController.js');
const Controller = require('../controllers/controller.js');
// const jobs = require('./jobs.js');
// const hiring = require('./hiring.js');


router.get('/', Controller.showLandingPage)
router.get('/login', UserController.loginForm)
router.post('/login', UserController.postLogin)
router.get('/register', UserController.registerForm)
router.post('/register', UserController.postRegister)
router.get('/home', Controller.ShowMovies)

router.use(isLoggedIn)


router.get('/home/account', UserController.getAccount)
router.get('/home/account/edit', UserController.editAccount)
router.post('/home/account/edit', UserController.updateAccount)
router.get('/home/favorite/:movieId', Controller.Favorite)
router.get('/home/watch/:movieId', Controller.Watch)
router.get('/logout', UserController.logOut)

// router.use(isAdmin) //jadi gabisa lewat kalo belom login kalo karena diletakkan sebelum router lain INGAT POSISI MENUNJUKKAN PRESTASI


//router.get('/edit', isAdmin, Controller.edit)








module.exports = router
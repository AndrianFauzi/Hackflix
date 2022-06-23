const { User } = require('../models');
var bcrypt = require('bcryptjs')

class UserController {

    static loginForm(req, res) {
        const { error } = req.query
        res.render('loginForm', { error })
    }

    static registerForm(req, res) {
        res.render('registerForm')
    }

    static postRegister(req, res) {
        //create user baru yang isinya username password dan role

        const { username, password, email, role, firstName, lastName, birthDate } = req.body

        User.create({ username, password, email, role, firstName, lastName, birthDate })
            .then(newUser => {
                res.redirect('/')
            })
            .catch(err => { res.send(err) })
    }

    static postLogin(req, res) {
        //mau ngecek apakah username dan password yang dimasukin sama 
        //1. findOne User dari username
        //2. kalo ketemu usernya, compare plain password sama hash password (berlangsung di database)
        //3. kalo gasama di reject loginnya (munculin eror)
        //4. kalo password sama redirect ke home

        const { username, password } = req.body

        User.findOne({ where: { username } })
            .then(user => {
                if (user) {
                        // console.log(user.password);
                    const validPassword = bcrypt.compareSync(password, user.password)//hasilnya bakal jadi true or false (buat ngecek passwordnya bener ato ngga)

                    if (validPassword) {
                        //disini berhasil login

                        req.session.userId = user.id
                        req.session.username = user.username //set session di controller
                        return res.redirect('/')
                    } else {
                        const error = 'Invalid username/password' // kalo mau tampilin call req.query di login form
                        return res.redirect(`/login?error=${error}`)
                        // res.send(err)
                    }
                } else {
                    const error = 'Invalid username/password' // kalo mau tampilin call req.query di login form
                    return res.redirect(`/login?error=${error}`)
                    // res.send(err)
                }


            })
            .catch(err => { res.send(err) })
    }


    static logOut(req, res) {
        req.session.destroy((err) => {
            if (err) res.send(err)
            else {
                res.redirect('/login')
            }
        })

    }
}


//contoh Hooks taro di model:

// hooks: {
//     beforeCreate(instance, options){
//         const salt =bcrypt.genSaltSync(8);
//         const hash =bcrypt.hashSync(instance.password, salt);

//         instance.password = hash

//     }
// }

module.exports = UserController

const express = require('express')
const app = express()
const port = 3002
const ejs = require('ejs')
const Controller = require('./controllers/controller')
const session = require('express-session');
const UserController = require('./controllers/userController')
const routeHome = require('./routes/index.js');

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(express.static("views"));

app.use(session({
    secret: 'rahasia',
    resave: false, 
    saveUninitialized: false,
    cookie:{
        secure:false,//karena masih development false aja dl
        sameSite:true
    }
}))


app.use('/', routeHome)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
const session = require('express-session');

const isLoggedIn = (function(req,res, next){
    console.log(session);
    if(!req.session.userId){ // artinya kalo udah login bisa diakses
        const error = 'Please login first'
        res.redirect(`/login?error=${error}`)
    }else{
        // res.redirect('/bebasaturdahsendiri')
        next()
    }
})


const isAdmin = (function(req,res, next){
    console.log(session);
    if(req.session.userId && req.session.role !== 'admin'){ //artinya kalo udah login tapi rolenya salah gabisa diakses
        const error = 'You have no access'
        res.redirect(`/login?error=${error}`)
    }else{
        res.redirect('/bebasaturdahsendiri')
    }
})

module.exports = {isLoggedIn, isAdmin}
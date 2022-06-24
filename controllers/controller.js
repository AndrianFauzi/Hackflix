const { MovieDetail, Movie, Favorite, User } = require('../models/index')
const { Op } = require('sequelize')
class Controller {

    static showLandingPage(req,res){
        res.render('landingPage')
    }

    static ShowMovies(req, res) {
        
        const { search } = req.query
        let people
        const options = {
        }
        if (search) {
            options.where = {
                title: {
                    [Op.iLike]: `%${search}%`
                }
            }
            // }
        }
        //
        MovieDetail.findAll(options)
            .then((data) => {
                console.log(people)
                res.render('showMovies', { data })
            })
            .catch((err) => {
                // console.log(err);
                res.send(err)
            })

    }

    static Watch(req, res) {
        const id = req.params.id
        console.log(id);
        MovieDetail.findByPk(+id)
            .then((data) => {
                res.render('WatchMovie', { data })
            })
            .catch((err) => {
                res.send(err)
            })
    }

    static Favorite(req, res) {
        const userId = req.session.userId
        const MovieId = +req.params.movieId
        console.log(userId, MovieId);

        Favorite.create({ userId, MovieId })
            .then(() => {
                res.redirect(`/home`)
            })
            .catch((err) => {
                console.log(err, '<<<<');
                res.send(err)
            })
    }
}

module.exports = Controller
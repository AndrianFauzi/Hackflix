const { MovieDetail, Movie, Favorite } = require('../models/index')
const { Op } = require('sequelize')
class Controller {

    static showLandingPage(req,res){
        res.render('landingPage')
    }

    static ShowMovies(req, res) {
        // res.send('terhunubg')
        const id = req.params.id
        console.log(id);
        const { search } = req.query
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
        MovieDetail.findAll(options)
            .then((data) => {
                // console.log(data)
                res.render('showMovies', { data, id })
            })
            .catch((err) => {
                // console.log(err);
                res.send(err)
            })

    }

    static Watch(req, res) {
        const id = +req.params.id
        MovieDetail.findByPk(id)
            .then((data) => {
                res.render('WatchMovie', { data })
            })
            .catch((err) => {
                res.send(err)
            })
    }

    static Favorite(req, res) {
        const id = +req.params.id
        const MovieId = +req.params.movieId
        console.log(id, MovieId);

        Favorite.create({ id, MovieId })
            .then(() => {
                res.redirect(`/home/${id}`)
            })
            .catch((err) => {
                console.log(err, '<<<<');
                res.send(err)
            })
    }
}

module.exports = Controller
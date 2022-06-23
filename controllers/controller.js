const { Movie, Show } = require('../models/index')
class Controller {

    static ShowMovies(req, res) {
        Movie.findAll()
            .then((data) => {
                res.render('showMovies', { data })
            })
            .catch((err) => {

                res.send(err)
            })
    }

    static Watch(req, res) {
        const id = +req.params.id
        Movie.findByPk(id)
            .then((data) => {
                res.render('WatchMovie', { data })
            })
            .catch((err) => {
                res.send(err)
            })
    }
}

module.exports = Controller
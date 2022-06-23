const express = require('express')
const app = express()
const port = 3000
const ejs = require('ejs')
const Controller = require('./controllers/controller')

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(express.static("views"));

app.get('/', Controller.ShowMovies)
app.get('/watch/:id', Controller.Watch)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
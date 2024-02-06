const router = require('express').Router();
const places = require('../models/places.js')
const db = require('../models')
const Places = require('../models/places.js')

router.get('/new', (req, res) => {
    res.render('places/new')
})

router.post('/', (req, res) => {
    db.Place.create(req.body)
        .then(() => {
            res.redirect('/places')
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})

router.get('/', (req, res) => {
    db.Place.find()
        .then((places) => {
            res.render('places/index', { places })
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
    // res.render('places/index', {places})
})

router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
        .populate('comments')
        .then(place => {
            console.log('places/show', { place })
            res.render('places/show', { place })
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})

router.get('/:id/edit', (req, res) => {
    res.send('GET edit form stub')
 })

router.put('/:id', (req, res) => {
    res.send('PUT /places/:id stub')
})

router.delete('/:id/rant/:rantID', (req, res) => {
    res.send('DELETE /places/:id/:rantID stub')
})

router.delete('/:id', (req, res) => {
    restart.send('DELETE /places/:id stub')
 })

router.post('/:id/rant', (req, res) => {
    res.send('GET /places/:id/rant stub')
})

router.post('/:id/comment', (req, res) => {
    console.log(req.body)
    db.Place.findById(req.params.id)
    .then(place => {
        db.Comment.create(req.body)
        .then(comment => {
            place.comments.push(comment.id)
            place.save()
            .then(() => {
                res.redirect(`/places/${req.params.id}`)
            })
        })
        .catch(err => {
            res.render('error404')
        })
    })
    .catch(err => {
        res.render('error404')
    })
})


module.exports = router
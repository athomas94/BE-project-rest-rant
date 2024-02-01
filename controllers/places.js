const router = require('express').Router();
const places = require('../models/places.js')
const db = require('../models')

router.get('/new', (req, res) => {
    res.render('places/new')
})

router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
        .then(place => {
            res.render('places/show', { place })
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })

//    let id = Number(req.params.id)
//    if (isNaN(id)) {
//     res.render('error404')
//    }
//    else if  (!places[id]) {
//     res.render('error404')
//    }
//    else {
//     res.render('places/show', {place: places[id], id})
//    }
})

router.get('/:id/edit', (req, res) => {
    res.send('GET edit form stub')
    
    // let id = Number(req.params.id)
    // if (isNaN(id)) {
    //  res.render('error404')
    // }
    // else if  (!places[id]) {
    //  res.render('error404')
    // }
    // else {
    //  res.render('places/edit', {place: places[id], id})
    // }
 })

router.put('/:id', (req, res) => {
    res.send('PUT /places/:id stub')

    // let id = Number(req.params.id)
// if (isNaN(id)) {
//     res.render('error404')
// }
// else if  (!places[id]) {
//     res.render('error404')
// }
// else {
//     if (!req.body.city) {
//         req.body.city='Andyville'
//     }
//     if (!req.body.state) {
//         req.body.state='NC'
//     }
//     if (!req.body.pic) {
//         req.body.pic = 'http://placekitten.com/400/400'
//     }

//     places[id] = req.body
//     res.redirect(`/places/${id}`)
// }
})

router.delete('/:id/rant/:rantID', (req, res) => {
    res.send('DELETE /places/:id/:rantID stub')
})

router.delete('/:id', (req, res) => {
    restart.send('DELETE /places/:id stub')
    
    // let id = Number(req.params.id)
    // if (isNaN(id)) {
    //  res.render('error404')
    // }
    // else if  (!places[id]) {
    //  res.render('error404')
    // }
    // else {
    //     places.splice(id, 1)
    //     res.redirect('/places')
    // }
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

router.post('/:id/rant', (req, res) => {
    res.send('GET /places/:id/rant stub')
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
    
    // if (!req.body.pic) {
    //     // Default image if one is not provided
    //     req.body.pic = 'http://placekitten.com/400/400'
    // }
    // if (!req.body.city) {
    //     req.body.city = 'Anytown'
    // }
    // if (!req.body.state) {
    //     req.body.state = 'USA'
    // }  
    // places.push(req.body)    
    // res.redirect('/places')
})

module.exports = router
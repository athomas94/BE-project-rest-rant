const router = require('express').Router();

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/lily-banse--YHSwy6uqvk-unsplash.jpg'
    }, {
        name: 'Coding Cat Cafe',
        city: 'Pheonix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/victoria-shes-UC0HZdUitWY-unsplash.jpg'
    }
    ]
    res.render('places/index', {places})
})

module.exports = router
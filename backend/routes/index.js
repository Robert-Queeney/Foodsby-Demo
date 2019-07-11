const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

// the server is actually hitting this API and the front side fetch will hit this server
// router.post('/geosearch', (req, res) => {
//     const apiUrl = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${req.body.search}&types=geocode&key=`;

router.get('/geosearch', (req, res) => {
    const apiUrl = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=5136&types=geocode&key=`;

    console.log("Hello", req)

    fetch(apiUrl)
        .then(response => response.json())
        .then(json => res.send(JSON.stringify(json)))
})

module.exports = router;

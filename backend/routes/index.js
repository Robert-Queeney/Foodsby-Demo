require('dotenv').config()
const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const key = process.env.API_KEY



// the server is actually hitting this API and the front side fetch will hit this server
router.post('/geosearch', (req, res) => {
    const apiUrl = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${req.body.search}&types=geocode&key=${key}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(json => res.send(JSON.stringify(json)))
    })

module.exports = router;

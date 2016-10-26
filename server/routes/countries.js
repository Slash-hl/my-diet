'use strict';

const express = require('express');

const countries = require('../models/countries.json');

const router = express.Router();

router.route('/countries')
    .get((req, res) => res.json(countries));

module.exports = router;

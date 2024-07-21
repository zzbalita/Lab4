
const express = require('express');

const router = express.Router();

module.exports = router;

router.get('/', (req, res) => {
    res.send ('vao api mobile');
})

const mongoose = require('mongoose');

const carModel = require('../carModel');

const COMMON = require('../COMMON');

router.get('/1', async (req, res) => {
    await mongoose.connect(COMMON.uri);

    let cars = await carModel.find();

    console.log(cars);

    res.send(cars);
})
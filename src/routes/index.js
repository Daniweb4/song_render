const express = require('express');
const songRouter = require('./song');
const router = express.Router();

// colocar las rutas aquí
router.use('/songs', songRouter)

module.exports = router;
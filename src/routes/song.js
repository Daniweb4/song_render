const { getAll, create, gettOne, destroy, update } = require('../controllers/Song.controllers');
const express = require('express');

const songRouter = express.Router();

songRouter.route("/")
		.get(getAll)
        .post(create)
songRouter.route("/:id")
        .get(gettOne)
        .delete(destroy)
        .put(update)

module.exports = songRouter;
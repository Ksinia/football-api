const { Router } = require("express");
const Player = require("./model");
const Team = require("../team/model");
const router = new Router();
router.get("/player", (req, res, next) => {
  Player.findAll()
    .then(data => res.send(data))
    .catch(error => next(error));
});
router.post("/player", (req, res, next) => {
  Player.create(req.body)
    .then(player => res.send(player))
    .catch(error => next(error));
});
router.get("/player/:id", (req, res, next) => {
  Player.findByPk(req.params.id, { include: [Team] })
    .then(data => res.send(data))
    .catch(error => next(error));
});
module.exports = router;

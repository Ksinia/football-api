const { Router } = require("express");
const Team = require("./model");
const router = new Router();
router.get("/team", (req, res, next) => {
  Team.findAll()
    .then(data => res.send(data))
    .catch(error => next(error));
});
router.post("/team", (req, res, next) => {
  Team.create(req.body)
    .then(team => res.send(team))
    .catch(error => next(error));
});
router.get("/team/:id", (req, res, next) => {
  Team.findByPk(req.params.id)
    .then(data => res.send(data))
    .catch(error => next(error));
});

module.exports = router;

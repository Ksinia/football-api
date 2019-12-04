const { Router } = require("express");
const Team = require("./model");
const router = new Router();
router.get("/team", (req, res, next) => {
  Team.findAll()
    .then(data => res.send(data))
    .catch(errors => next(errors));
});

module.exports = router;

const City = require("./model");
const { Router } = require("express");
router = new Router();
router.get("/city", (req, res, next) => {
  City.findAll()
    .then(data => res.send(data))
    .catch(error => next(error));
});
router.post("/city", (req, res, next) => {
  City.create(req.body)
    .then(city => res.send(city))
    .catch(error => next(error));
});
router.get("/city/:id", (req, res, next) => {
  City.findByPk(req.params.id)
    .then(data => res.send(data))
    .catch(error => next(error));
});
module.exports = router;

module.exports = app => {
  const equipments = require("../controllers/equipment.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", equipments.create);

  // Retrieve all Tutorials
  router.get("/", equipments.findAll);

  // Retrieve all published Tutorials
  router.get("/published", equipments.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", equipments.findOne);

  // Update a Tutorial with id
  router.put("/:id", equipments.update);

  // Delete a Tutorial with id
  router.delete("/:id", equipments.delete);

  // Create a new Tutorial
  router.delete("/", equipments.deleteAll);

  app.use('/api/equipments', router);
};
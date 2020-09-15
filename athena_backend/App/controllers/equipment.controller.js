const db = require("../models");
const Equipment = db.equipment;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.type) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Equipment
  const equipment = new Equipment({
    type: req.body.type,
    description: req.body.description,
    borrowed: req.body.borrowed ? req.body.borrowed : false
  });

  // Save Equipment in the database
  equipment
    .save(equipment)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Equipment."
      });
    });
};

// Retrieve all Equipments from the database.
exports.findAll = (req, res) => {
  const type = req.query.type;
  var condition = type ? { type: { $regex: new RegExp(type), $options: "i" } } : {};

  Equipment.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving equipments."
      });
    });
};

// Find a single Equipment with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Equipment.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Equipment with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Equipment with id=" + id });
    });
};

// Update a Equipment by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Tutorial.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Equipment with id=${id}.`
        });
      } else res.send({ message: "Equipment was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Equipment with id=" + id
      });
    });
};
// Delete a Equipment with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Equipment.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Equipment with id=${id}.`
        });
      } else {
        res.send({
          message: "Equipment was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Equipment with id=" + id
      });
    });
};

// Delete all Equipments from the database.
exports.deleteAll = (req, res) => {
  Tutorial.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Equipments were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Equipments."
      });
    });
};

// Find all published Equipments
exports.findAllPublished = (req, res) => {
  Tutorial.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving equipments."
      });
    });
};
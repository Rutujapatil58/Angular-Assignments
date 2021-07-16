const db = require("./models"); 
const stationery_products = db.stationery_products;
const Op = db.Sequelize.Op;

// Create and Save a new Stationery Product
exports.create = (req, res) => {
    // Validate request
    if (!req.body.product_name) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Stationery Product
    const stationery_product = {
        product_name: req.body.product_name,
        product_price: req.body.product_price,
        product_quantity: req.body.product_quantity 
    };
  
    // Save Stationery Product in the database
    stationery_products.create(stationery_product)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Stationery Product."
        });
      });
  };

// Retrieve all Stationery Products from the database.
exports.findAll = (req, res) => {
    stationery_products.findAll()
    .then(data=>res.send(data))
    .catch(err=>res.status(500).send({message:"Error finding records"}));
};
// Find a single Stationery Product with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

  stationery_products.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Stationery Product with id=" + id
      });
    });
};
// Update a Stationery Product by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

  stationery_products.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Stationery Product was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Stationery Product with id=${id}. Maybe Stationery Product was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Stationery Product with id=" + id
      });
    });
};
// Delete a Stationery Products with the specified id in the request
exports.deleteAll = (req, res) => {
    stationery_products.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Stationery Product were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Stationery Product."
          });
        });
};

// Delete all Stationery Products from the database.
exports.delete = (req, res) => {
    const id = req.params.id;

    stationery_products.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Stationery Product was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Stationery Product with id=${id}. Maybe Stationery Product was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Stationery Product with id=" + id
        });
      });
};
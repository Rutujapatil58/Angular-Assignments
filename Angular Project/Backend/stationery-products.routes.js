module.exports = app => {
    const express = require('express');
    const router = express.Router();
    const stationeryproducts = require("./stationery-product.controller");
    // Create a new Stationery Product
    router.post("/add", stationeryproducts.create);
    // Retrieve all Stationery Products
    router.get("/", stationeryproducts.findAll);
    // Retrieve a single Stationery Product with id
    router.get("/:id", stationeryproducts.findOne);
    // Update a Stationery Product with id
    router.put("/:id", stationeryproducts.update);
    // Delete a Stationery Product with id
    router.delete("/:id", stationeryproducts.delete);
    // Delete all Stationery Products
    router.delete("/", stationeryproducts.deleteAll);
    app.use('/stationery-products', router);
};

constCar = require('../models/car').car;



exports.findAll = (req, resp) => {
    Bike.findAll().then(data => resp.send(data)).catch(err => resp.status(500).send({ message: "No records found" }));

}
exports.findByPK = (req, resp) => {
    const id = req.params.id;
    Bike.findByPK(id).then(data => resp.send(data)).catch(err => resp.status(500).send({ message: "No records found" }));
}
exports.insertBike = (req, resp) => {
    const bike = {
        name: req.body.name,
        brand: req.body.brand,
        createdAt: new Date(),
        updatedAt: new Date(),
    };

    Bike.create(bike).then(data => resp.send(data)).catch(err => resp.status(500).send({ message: "Failed to add record" }));

}
exports.updateBike = (req, resp) => {
    Bike.update({ brand: req.body.brand }, { where: { id: req.body.id } }).then(data => resp.send(data)).catch(err => resp.status(500).send({ message: "failed to update record" }));
}
exports.deleteBike = (req, resp) => {
    Bike.destroy({ where: { id: req.params.id } }).then(data => resp.send(data)).catch(err => resp.status(500).send({ message: "failed to delete record" }));
}
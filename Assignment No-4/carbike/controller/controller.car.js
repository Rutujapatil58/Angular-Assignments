
    constCar = require('../models/car').car;



exports.findAll = (req, resp) => {
    Car.findAll().then(data => resp.send(data)).catch(err => resp.status(500).send({ message: "No records found" }));

}
exports.findByPK = (req, resp) => {
    const id = req.params.id;
    Car.findByPK(id).then(data => resp.send(data)).catch(err => resp.status(500).send({ message: "No records found" }));
}
exports.insertCar = (req, resp) => {
    const car = {
        name: req.body.name,
        brand: req.body.brand,
        createdAt: new Date(),
        updatedAt: new Date(),
    };

    Car.create(car).then(data => resp.send(data)).catch(err => resp.status(500).send({ message: "Failed to add record" }));

}
exports.updateCar = (req, resp) => {
    Car.update({ brand: req.body.brand }, { where: { id: req.body.id } }).then(data => resp.send(data)).catch(err => resp.status(500).send({ message: "failed to update record" }));
}
exports.deleteCar = (req, resp) => {
    Car.destroy({ where: { id: req.params.id } }).then(data => resp.send(data)).catch(err => resp.status(500).send({ message: "failed to delete record" }));
}
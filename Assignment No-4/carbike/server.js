const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const onRequest = (req, resp) => {
    resp.send("we called <strong>http://localhost/3000/</strong>");
}
const CarController = require('./controller/controller.car');
const router = require('express').Router();
app.get('/', onRequest);
app.get('/api/car', CarController.findAll);
app.get('/api/car/:id', CarController.findByPK);
app.post('/api/car', CarController.insertCar);
app.put('/api/car', CarController.updateCar);
app.delete('/api/car/:id', CarController.deleteCar);
app.use('/api/car', router);
//bike//
const BikeController = require('./controller/controller.bike');
app.get('/', onRequest);
app.get('/api/bike', BikeController.findAll);
app.get('/api/bike/:id', BikeController.findByPK);
app.post('/api/bike', BikeController.insertBike);
app.put('/api/bike', BikeController.updateBike);
app.delete('/api/bike/:id', BikeController.deleteBike);
app.use('/api/bike', router);
//bike//
app.listen(port, () => { console.log("http://localhost:3000 started"); })
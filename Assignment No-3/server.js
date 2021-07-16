const express=require('express');
const app=express();
const port=3000;

app.get('/',(req,resp)=>{
    resp.send("Welcome !");
})

const BookController=require('./controller.book');

const router = require("express").Router();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/Book",BookController.findAllBook);
app.get("/api/Book/:id",BookController.findByPK);
app.get("/api/Book/:BookName",BookController.findByBookName);
app.post("/api/Book/addBook",BookController.addBook);
app.use('/api/Book', router);
app.listen(port,()=>{console.log("Server runnint http://localhost:3000 ");})
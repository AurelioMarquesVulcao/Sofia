const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Place = require("../models/places");
const validation = require('../../services/sofia_learn');
const Datas = require('../../data/data_db');
const Data_questions = require('../../data/question_db');
const answers = require('../../services/sofia');



const datas = Datas
const data_questions = Data_questions


// Pega todos os indices do banco de dados
router.get("/", (req, res, next) => {
  Place.find()
    .exec()
    .then(placeList => res.status(200).json(placeList))
    .catch(err => res.status(500).json({ error: err }));
});


// Grava apenas um dado no banco de dados
router.post("/", (req, res, next) => {
  const place = new Place({
    // _id: new mongoose.Types.ObjectId(),
    _id: req.body._id,
    product_name: req.body.product_name,
    color: req.body.color,
    product_qty: req.body.product_qty,
    description: req.body.description,
    seller_name: req.body.seller_name

  });
  place
    .save()
    .then(result => console.log(result))
  res.status(200).json({
    message: "New product created"
  });
});


// Exibe uma resposta do produto pelo indice pelo id.
router.get("/:Id/:question", (req, res, next) => {
  const question = req.params.question;
  const id = req.params.Id;
  Place.findById(id)
    .exec()
    .then(place => {
      if (place) {
        res.status(200).json({
          answer: answers(question, data_questions, datas, id)
        });
      } else {
        res.status(404).json({ message: "id de produto não encontrado" });
      }
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});


module.exports = router;

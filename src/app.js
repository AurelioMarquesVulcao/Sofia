const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config()

const app = express();
const placesRouter = require("./api/routes/places");

// banco de dados utilizado
mongoose.connect(
  process.env.ACCESS_DB_ANY,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// CORS - impede que os textes da api no navegador sejam bloqueados.
// Devo inserir as rotas corretas da minha aplicação, no momento está ALL
app.use(cors());


app.use("/places", placesRouter);

//para erros do tipo não encontrado
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;

  next(error);
});

//para outros tipos de erros
app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;

const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const Usuario = require('./models/Usuario');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://jesusvrdz:Dwight00@cluster0.ya6rgyl.mongodb.net/?retryWrites=true&w=majority');

app.post('/registro', async (req,res) => {
  const {usuario, contraseña} = req.body;
  try{
    const usuarioDoc = await Usuario.create({usuario,contraseña});
    res.json(usuarioDoc);
  } catch(e) {
    res.status(400).json(e);
  }
});

app.listen(4000);
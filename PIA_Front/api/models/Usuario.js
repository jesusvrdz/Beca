const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const UsuarioSchema = new mongoose.Schema({
    usuario: {type: String, required: true, min: 4, unique: true},
    contraseña: {type: String, required: true},
});

const UsuarioModel = model('Usuario', UsuarioSchema);

module.exports = UsuarioModel;
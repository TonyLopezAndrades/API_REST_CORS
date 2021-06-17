const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
  nombre: String,
  apellido: String,
  edad: Number,
  dni: String,
  fechaNacimiento: Date,
  colorFavorito: String,
  genero: String,
  status: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('users', UserSchema);

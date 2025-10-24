const mongoose = require("mongoose");
const validator = require("validator"); // Librería para validar URLs

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "Nombre usario",
    minlength: [2, "El nombre debe tener al menos 2 caracteres"],
    maxlength: [30, "El nombre no puede tener más de 30 caracteres"],
  },
  about: {
    type: String,
    default: "Shere a note",
    minlength: [2, "Debe tener al menos 2 caracteres"],
    maxlength: [30, "No puede tener más de 30 caracteres"],
  },
  avatar: {
    type: String,
    default:
      "https://avatars.mds.yandex.net/i?id=ffd046f1026fb659959ff072ad362e586b36b47d-4024741-images-thumbs&n=13",
    validate: {
      validator: function (url) {
        return /^(https?:\/\/)(www\.)?[\w-]+(\.[\w-]+)+([/?#].*)?$/.test(url);
      },
      message: "El enlace del avatar no es válido",
    },
  },

  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (email) => validator.isEmail(email),
      message: "Correo no válido",
    },
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
});

module.exports = mongoose.model("user", userSchema);

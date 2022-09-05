const mongoose = require("mongoose");
mongoose.connect(
  `mongodb+srv://Admin:admin@cluster0.esdny.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  /*Se ingresa el codigo de conexion del mongodb y se le remplaza el nombre de usuario y la contraseña*/ {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully"); //Al conectarse exitosamente enviara el anterior mensaje
});

const express = require("express");
const app = express();

app.get("/home", (req, res) => {
  res.send("Hello World Express Js");
});

app.listen(3000, console.log("¡Servidor encendido!"));

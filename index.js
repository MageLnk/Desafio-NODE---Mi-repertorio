const express = require("express");
const cors = require("cors");
// Basic starting points
const app = express();
const PORT = 5000;
// Middleware
app.use(cors());
app.use(express.json());
// Tools
const { readFile, createFile } = require("./tools/operations");
// App
// Load page
app.get("/", (req, res) => {
  res.status(200).sendFile(`${__dirname}/public/index.html`);
});

app.get("/canciones", (req, res) => {
  const getAllSongs = readFile();
  res.status(200).send(getAllSongs);
});

app.post("/canciones", (req, res) => {
  try {
    if (req.body.titulo === "" || req.body.arista === "") {
      res.status(203).send({ message: "Falta el título de la canción o el artista" });
      return;
    }
    createFile(req.body);
    res.status(200).send({ message: "Canción agregada con éxito" });
  } catch (error) {
    console.log(`Ha ocurrido un error ${error}`);
  }
});

// Listener
app.listen(PORT, () => {
  console.log(`Server runing on port: htttp://localhost:${PORT}. Everything is fine`);
});

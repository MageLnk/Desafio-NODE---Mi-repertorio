const express = require("express");
const cors = require("cors");
// Basic starting points
const app = express();
const PORT = 5000;
// Middleware
app.use(cors());
app.use(express.json());
// Tools
const { readFile } = require("./tools/operations");
// App
app.get("/", (req, res) => {
  res.status(200).sendFile(`${__dirname}/public/index.html`);
});

app.get("/canciones", (req, res) => {
  const getAllSongs = readFile();
  res.status(200).send(getAllSongs);
});

// Listener
app.listen(PORT, () => {
  console.log(`Server runing on port: htttp://localhost:${PORT}. Everything is fine`);
});

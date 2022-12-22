const express = require("express");
const cors = require("cors");
// Basic starting points
const app = express();
const PORT = 5000;
// Middleware
//app.use(bodyParser.json());
app.use(cors());
// App
app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

// Listener
app.listen(PORT, () => {
  console.log(`Server runing on port: htttp://localhost:${PORT}. Everything is fine`);
});

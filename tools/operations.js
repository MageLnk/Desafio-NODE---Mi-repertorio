const fs = require("fs");
//

const readFile = () => JSON.parse(fs.readFileSync(`./public/repertorio.json`, "utf8"));

module.exports = { readFile };

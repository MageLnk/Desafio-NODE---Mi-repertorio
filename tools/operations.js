const fs = require("fs");
//

const readFile = () => JSON.parse(fs.readFileSync(`./public/repertorio.json`, "utf8"));

const createFile = ({ id, titulo, artista, tono }) => {
  let actualDB = readFile();
  const newObject = {
    id,
    titulo,
    artista,
    tono,
  };
  actualDB.push(newObject);
  fs.writeFileSync(`./public/repertorio.json`, JSON.stringify(actualDB));
};

const deletingData = (paramsId) => {
  const filteringData = readFile().filter((filterSong) => filterSong.id != paramsId);
  fs.writeFileSync(`./public/repertorio.json`, JSON.stringify(filteringData));
};

module.exports = { createFile, readFile, deletingData };

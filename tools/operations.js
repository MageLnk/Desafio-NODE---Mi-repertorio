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

const updatingData = (paramsId, body) => {
  let newArray = readFile();
  let findData = newArray.findIndex((result) => result.id === +paramsId);
  newArray[findData].titulo = body.titulo;
  newArray[findData].artista = body.artista;
  newArray[findData].tono = body.tono;
  fs.writeFileSync(`./public/repertorio.json`, JSON.stringify(newArray));
};

module.exports = { createFile, readFile, deletingData, updatingData };

const axios = require("axios");
const { Type } = require("../db");

const getAllPokemonsTypes = async () => {
  let allTypes = [];

  const infoApi = await axios.get("https://pokeapi.co/api/v2/type");
  const resultApi = await infoApi.data.results;

  let allPokemonsTypes = resultApi.map((pokemon) =>
    allTypes.push(pokemon.name)
  );

  await Promise.all(
    allTypes.map((type) => {
      Type.findOrCreate({
        where: { name: type },
      });
    })
  );

  // Finalmente, obtenemos todos los types de la DB y los retornamos
  const allTypesDb = await Type.findAll();
  return allTypesDb;
};

module.exports = {
  getAllPokemonsTypes,
};

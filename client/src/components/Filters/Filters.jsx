import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByOrigin,
  filterByType,
  getTypes,
  sortByAlphabetic,
  sortByAttack,
} from "../../redux/actions";
import { useEffect } from "react";
import style from "./Filters.module.css";

// Botones/Opciones para filtrar por tipo, y por si su origen es de la API o de la base de datos (creados por nosotros desde el formulario).
// Botones/Opciones para ordenar tanto ascendentemente como descendentemente los pokemones por orden alfabético y por ataque.

function Filters() {
  const dispatch = useDispatch();
  const pokeTypes = useSelector((state) => state.types);

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  const handleFilterTypes = (e) => {
    if (e.target.value !== "Tipo") {
      dispatch(filterByType(e.target.value));
    }
  };

  const handleFilterOrigin = (e) => {
    if (e.target.value !== "Origen") {
      dispatch(filterByOrigin(e.target.value));
    }
  };

  const handleOrderAlphabetic = (e) => {
    if (e.target.value !== "Orden alfabetico") {
      dispatch(sortByAlphabetic(e.target.value));
    }
  };

  const handleOrderByAttack = (e) => {
    if (e.target.value !== "Orden por ataque") {
      dispatch(sortByAttack(e.target.value));
    }
  };

  return (
    <>
      <div className={style.container}>
        <select onChange={(e) => handleFilterTypes(e)}>
          <option>Tipo</option>
          <option value="all">Todos</option>
          {pokeTypes?.map((type) => {
            return (
              <option key={type.id} value={type.name}>
                {type.name}
              </option>
            );
          })}
        </select>

        <select onChange={(e) => handleFilterOrigin(e)}>
          <option>Origen</option>
          <option value="all">Todos</option>
          <option value="api">API</option>
          <option value="db">DB</option>
        </select>

        <select onChange={(e) => handleOrderByAttack(e)}>
          <option>Orden por ataque</option>
          <option value="min">↑ Min - Max</option>
          <option value="max">↓ Max - Min</option>
        </select>

        <select onChange={(e) => handleOrderAlphabetic(e)}>
          <option>Orden alfabetico</option>
          <option value="asc">A - Z</option>
          <option value="desc">Z - A</option>
        </select>
      </div>
    </>
  );
}

export default Filters;

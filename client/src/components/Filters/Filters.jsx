import React from 'react';
import { useDispatch } from 'react-redux';





// Botones/Opciones para filtrar por tipo, y por si su origen es de la API o de la base de datos (creados por nosotros desde el formulario).
// Botones/Opciones para ordenar tanto ascendentemente como descendentemente los pokemones por orden alfabético y por ataque.


function Filters() {
  const dispatch = useDispatch()
  




  return (

    <>
    <div>
      <select>
        <option>Tipo</option>
        <option value="all">Todos</option>
        {}
      </select>

      <select>
        <option>Origen</option>
        <option value="all">Todos</option>
        <option value="api">API</option>
        <option value="db">DB</option>
      </select>

      <select>
        <option>Orden por ataque</option>
        <option value="asc">↑ Min - Max</option>
        <option value="desc">↓ Max - Min</option>

      </select>
    </div>

    <div>
      <select>
        <option>Orden alfabetico</option>
        <option value="asc">A - Z</option>
        <option value="desc">Z - A</option>
      </select>

    </div>
    </>
  )
}

export default Filters
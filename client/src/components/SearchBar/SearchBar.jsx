import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonsByName } from "../../redux/actions";
import style from "./SearchBar.module.css";

const SearchBar = () => {
  const pokeName = useSelector((state) => state.pokemonsFilter);
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchName = pokeName.map((pokemon) => pokemon.name.toLowerCase());
    if (searchName.includes(name.toLowerCase())) {
      dispatch(getPokemonsByName(name));
    } else {
      alert("No se encontró ningún pokemon con ese nombre");
    }
    setName("");
  };

  return (
    <>
      <div className={style.container}>
        <input
          type="text"
          placeholder="Buscar..."
          name="search"
          value={name}
          onChange={(e) => handleInputChange(e)}
        />
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Buscar 🔎
        </button>
      </div>
    </>
  );
};

export default SearchBar;

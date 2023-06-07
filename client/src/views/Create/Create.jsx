import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPokemons, getTypes } from "../../redux/actions";
import ValidationCreate from "./ValidationCreate";
import { Link } from "react-router-dom";
import style from "./Create.module.css";

const Create = () => {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);

  const [input, setInput] = useState({
    name: "",
    image: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
  });

  const initialState = {
    name: "",
    image: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
  };

  const [errors, setErrors] = useState({
    name: "",
    image: "",
    hp: "",
    attack: "",
    defense: "",
    types: "",
  });

  const [selectedTypes, setSelectedTypes] = useState([]);

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      ValidationCreate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleTypesChange = (e) => {
    if ([...selectedTypes].length === 2) {
      return setErrors({
        ...errors,
        types: "Se pueden seleccionar 2 tipos como maximo",
      });
    }
    setErrors({ ...errors, types: "" });
    setSelectedTypes([...selectedTypes, e.target.value]);
  };

  const removeTypes = (types) => {
    let data = [...selectedTypes].filter((typ) => typ !== types);
    setSelectedTypes(data);
  };

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      setInput({
        ...input,
        types: input.types.push(...selectedTypes),
      });
      dispatch(createPokemons(input));
      setInput(initialState);
      setSelectedTypes([]);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  return (
    <div className={style.container}>
      <Link to="/home">
        <button className={style.button}>Home</button>
      </Link>

      <form onSubmit={handleSubmit} className={style.form}>
        <div>
          <label>Nombre: </label>
          <input
            type="text"
            name="name"
            required
            value={input.name}
            placeholder="Escribe un nombre..."
            onChange={handleInputChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>

        <div>
          <label>Imagen: </label>
          <input
            type="text"
            name="image"
            required
            value={input.image}
            placeholder="La URL debe ser ftp, http, https"
            onChange={(e) => handleInputChange(e)}
          />
          {errors.image && <p>{errors.image}</p>}
        </div>

        <div>
          <label>Vida: </label>
          <input
            type="number"
            name="hp"
            required
            value={input.hp}
            placeholder="Escribe un valor"
            onChange={(e) => handleInputChange(e)}
          />
          {errors.hp && <p>{errors.hp}</p>}
        </div>

        <div>
          <label>Ataque: </label>
          <input
            type="number"
            name="attack"
            required
            value={input.attack}
            placeholder="Escribe un valor"
            onChange={(e) => handleInputChange(e)}
          />
          {errors.attack && <p>{errors.attack}</p>}
        </div>

        <div>
          <label>Defensa: </label>
          <input
            type="number"
            name="defense"
            required
            value={input.defense}
            placeholder="Escribe un valor"
            onChange={(e) => handleInputChange(e)}
          />
          {errors.defense && <p>{errors.defense}</p>}
        </div>

        <div>
          <label>Velocidad: </label>
          <input
            type="number"
            name="speed"
            value={input.speed}
            placeholder="Escribe un valor"
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div>
          <label>Altura: </label>
          <input
            type="number"
            name="height"
            value={input.height}
            placeholder="Escribe un valor"
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div>
          <label>Peso: </label>
          <input
            type="number"
            name="weight"
            value={input.weight}
            placeholder="Escribe un valor"
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div>
          {selectedTypes?.map((types) => {
            return (
              <span key={types}>
                {types}
                <button onClick={() => removeTypes(types)}>X</button>
              </span>
            );
          })}
        </div>

        <div>
          <select name="types" onChange={handleTypesChange}>
            <option>Types</option>
            {types?.map((type) => {
              return (
                <option key={type.id} value={type.name}>
                  {type.name}
                </option>
              );
            })}
          </select>
        </div>
        {errors.types && <p>{errors.types}</p>}
        {input.name !== "" &&
        input.image !== "" &&
        input.hp !== "" &&
        input.attack !== "" &&
        input.defense !== "" &&
        selectedTypes.length > 0 ? (
          <button
            className={style.button}
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            ENVIAR
          </button>
        ) : (
          <button disabled className={style.button}>
            Enviar!
          </button>
        )}
      </form>
    </div>
  );
};

export default Create;

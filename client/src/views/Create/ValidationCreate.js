const ValidationCreate = (input) => {
  let errors = {};

  // Validacion para el name **
  if (!input.name) errors.name = "El nombre del pokemon no puede estar vacio";

  // Validacion para image **
  let regexImage = /^(http|https):\/\/[^\s]+(\.jpg|\.jpeg|\.png|\.gif)$/;
  if (!regexImage.test(input.image)) errors.image = "Ingresa una url valida";
  if (!input.image) errors.image = "La imagen no puede estar vacia";

  // Validacion para Hp **
  if (!input.hp) errors.hp = "Ingresa un valor de vida";

  // Validacion para Attack **
  if (!input.attack) errors.attack = "Ingresa un valor de fuerza";

  // Validacion para Defense **
  if (!input.defense)
    errors.defense = "El valor de defensa no puede estar vacio";

  // Validacion para Types **
  if (!input.types) errors.types = "Debes elegir al menos un tipo";
  if (input.types.length > 2) errors.types = "No puede elegir mas de dos tipos";
  return errors;
};

export default ValidationCreate;

import { getRegister } from "./get-register";

/**
 * Devuelve una dirección establecida previamente por el usuario.
 *
 * @returns { string }
 */
function getLocation() {
    const locations = getRegister("locations");
    if (!Array.isArray(locations)) return "";

    const register = locations[locations.length - 1];
    return register?.location || "";
}

/**
 * Registra nuevas ubicaciones.
 *
 * @param { HTMLFormElement } form Formulario.
 * @returns { void }
 */
function setLocation(form) {
    const location = getLocation();
    const locations = [];

    if (location)
        locations.push(...location);
    localStorage.setItem("location", JSON.stringify(location));
}

export { getLocation, setLocation };

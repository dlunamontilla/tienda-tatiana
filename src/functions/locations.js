
/**
 * Devuelve un array de ubicaciones disponibles. Si no
 * tiene ubicaciones devolverá null.
 *
 * @returns { Array<string> }
 */
async function getLocation() {
    const location = localStorage.getItem("location");
    const locations = [];

    if (!location) {
        const response = await fetch("./products");
        const data = await response.json();
        locations.push(...data);
        localStorage.setItem("location", JSON.stringify(locations));
    }

    if (location)
        locations.push(...JSON.parse(location));

    return locations.length > 0 ? locations : null;
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

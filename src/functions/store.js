import { writable } from "svelte/store";
import { getRegister } from "./get-register";
import { getLocation } from "./locations";

const getTitle = writable(0);

// Establece una ubicación geográficao de envío
// si existe:
getTitle.set(getLocation());

const options = {
    modalEnable: !!getRegister("locations")
}



export { options, getTitle }
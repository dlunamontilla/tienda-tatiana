import { writable } from "svelte/store";
import { getRegister } from "./get-register";
import { getLocation } from "./locations";

const getTitle = writable(0);
const openWindow = writable(0);

// Valores por defecto:
getTitle.set(getLocation());
openWindow.set(!!getRegister("locations"));


export { getTitle, openWindow };
import { writable } from "svelte/store";
import { getRegister } from "./get-register";
import { getLocation } from "./locations";

const getTitle = writable(0);
getTitle.set(getLocation());

const options = {
    modalEnable: !!getRegister("locations")
}



export {
    options,
    getTitle
}
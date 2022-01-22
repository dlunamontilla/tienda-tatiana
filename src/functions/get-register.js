// @ts-check

import { dataset_dev } from "svelte/internal";

/**
 *
 * Ayuda a evaluar si el elemento pasado como parámetro es un campo
 * de formulario.
 *
 * @param {any} input Evalur si es o no un campo de formulario.
 *
 * @returns { boolean }
 */
function isInput(input) {
    return (
        Object.prototype.toString.call(input) === "[object HTMLInputElement]"
    );
}

/**
 *
 * Ayuda a sanear texto con el que se va a trabajar.
 *
 * @param {string|number} text Ingrese un texto para sanearlo.
 *
 * @returns { string } Devuelve un texto saneado y codificado.
 */
function sanitizeText(text) {
    const pattern = /[<>]/gi;
    const replace = {
        "<": "&lt;",
        ">": "&gt;",
    };

    text = String(text).replace(pattern, (string) => {
        return replace[string];
    });

    return text;
}

/**
 *
 * Obtiene los datos del formulario de forma dinámica, sin la necesidad
 * de conocer el nombre de los campos del formulario. El proceso es
 * automatizado.
 *
 * @param {HTMLFormElement} form Al formulario que pase como parámetro
 * se le capturarán los datos de sus campos para guardarlos en un objeto.
 *
 * @return { Object<string, string|number>} Devuelve un
 * objeto con los datos capturados del formulario. Esto lo
 * hace de forma automática sin necesidad de saberse los
 * campos del formulario. El único requisito es que dichos
 * campos del formulario deban tener el atributo «name» para
 * que sus datos sean capturados.
 *
 */
function getFormData(form) {
    /** @type { Object<string, string|number> } */
    const data = {};

    const names = form.querySelectorAll("[name]");

    for (const field of names) {
        // @ts-ignore
        const type = field.type;

        // @ts-ignore
        if ((type == "radio" || type == "checkbox") && !field.checked) {
            continue;
        }

        // @ts-ignore
        if (!(field.name.length > 0)) continue;

        // @ts-ignore
        const { name, value = "" } = field;

        if (!(name.trim().length > 0 || value.trim().length > 0)) {
            continue;
        }

        data[name] = sanitizeText(value.trim());
    }

    // Limpiar los datos del formulario
    form.reset();

    return data;
}

/**
 *
 * Guarda los datos del formulario en localStorge.
 *
 * @param { string } nameRegister Nombre del registro a
 * guardar en el navegador.
 *
 * @param {Object<string, string|number> } dataForm
 * Debe pasar como parámetro el objeto devuelto por el formulario
 * para guardar los datos en localStorage. Se guardarán como un
 * Array de objetos.
 *
 * @returns { void }
 */
function saveFormData(nameRegister, dataForm) {
    const register = localStorage.getItem(nameRegister);
    const data = [];

    // Si los datos en localStorage existen se recuperarán
    // y se enviarán a _data[]:
    if (register) {
        data.push(...JSON.parse(register));
    }

    data.push({ id: data.length + 1, ...dataForm });

    localStorage.setItem(nameRegister, JSON.stringify(data));
}

/**
 * Permite guardatos los datos del formulario en el servidor.
 * 
 * @param { HTMLFormElement } form Ingrese un formulario como parámetro
 * @param { string } nameRegister Si va a almacenar datos del formulario 
 * en localStorage solo debe especificar una clave o item.
 * 
 * @returns { Promise<any> }
*/
async function saveFormDataToServer(form, nameRegister = "") {
    /** @type { boolean } */
    const localData = nameRegister.trim().length > 0;

    if (!form) return;

    const formData = getFormData(form);
    const { action, method } = form;

    const response = await fetch(action, {
        method,
        body: JSON.stringify(formData),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    });

    if (localData) saveFormData("locations", formData);

    return response;
}

/**
 *
 * Obtiene los datos de localStorage y los parsea automáticamente.
 *
 * @param {string} nameRegister Ingrese el nombre de registro
 * previamente almacenado.
 *
 * @returns { Array<Object<string, string|number>> }
 * Devuelve un Array vacío en el caso de no existir el
 * registro solicitado.
 */
function getRegister(nameRegister) {
    const data = localStorage.getItem(nameRegister);
    return data ? JSON.parse(data) : null;
}

/**
 * 
 * @param { string } path Ruta de la api json a consumir.
 */
async function getRegisterFromServer(path) {
    const response = await fetch(path);
    const data = await response.json();
    return data;
}

/**
 *
 * Permite buscar los datos dentro de un array de objetos.
 *
 * @param { string } inputText Ingrese un criterio de búsqueda
 * para filtrar los datos.
 *
 * @param {Array<Object<string, string|number>>} data Se
 * pasar como parámetro un Array de objetos para filtrarlos.
 *
 * @return { Array<Object<string, string|number>> }
 */
function searchData(inputText, data) {
    const pattern = /[\+\*\?\^\$\.\[\]\{\}\(\)\|\/]/g;

    inputText = inputText.replace(pattern, (string) => {
        return `\\${string}`;
    });

    const findName = new RegExp(`${inputText || "()"}+`, "gi");

    return data.filter((object) => {
        for (let property in object) {
            const value = object[property];
            if (findName.test(String(value))) return true;
        }
    }, []);
}

/**
 *
 * Permite eliminar un registro específico en función de su id. El id
 * del objeto almacenado en localStorage es generado automáticamente.
 *
 * @param {number} id Debe ingresar el ID del registro para seleccionarlo
 * y eliminarlo.
 *
 * @param {string} nameRegister Seleccione el nombre de registro almacenado
 * en localStorage.
 *
 * @return { void }
 */
function deleteRegister(id, nameRegister) {
    const data = getRegister(nameRegister);
    const dataFiltered = data.filter((object) => Number(object.id) !== id);
    localStorage.setItem(nameRegister, JSON.stringify(dataFiltered));
}

export {
    sanitizeText,
    getFormData,
    saveFormData,
    saveFormDataToServer,
    getRegister,
    getRegisterFromServer,
    searchData,
    deleteRegister,
};

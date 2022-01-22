<script>
    // JavaScript Nativo:
    import { getTitle, openWindow } from "../functions/store";
    import { overflowBody } from "../functions/options";

    import {
        saveFormDataToServer,
        searchData,
        getRegisterFromServer,
    } from "../functions/get-register";
    import { getLocation } from "../functions/locations";

    // Componentes:
    import Ubicacion from "../components/icons/Ubicacion.svelte";
    import SearchResults from "../components/SearchResults.svelte";

    export let title = "¿Dónde quieres recibir tu pedido?";
    export let description =
        "Para poder ofrecerte productos dentro de tu área, necesitamos tu dirección";

    /** @type { string[] } */
    export let classList = [];

    let savingButton = false;

    /** @type { boolean } */
    let disable = $openWindow;

    const submitHandle = async function (e) {
        e.preventDefault();
        savingButton = true;

        // Cerrar el menú mientras se envía el formulario;
        closeMenu();

        const response = saveFormDataToServer(this, "locations");

        response.then(() => {
            savingButton = false;
            getTitle.set(getLocation());
            openWindow.set(!disable);
        });
    };

    // Cerrar el menú de búsqueda si el usuario presionó ENTER
    const closeMenu = (e) => {
        if (!e || e.target.tagName == "BUTTON") {
            directions.length = 0;
            return;
        }

        if (e.target.tagName !== "A" && (e.key == "Enter" || e.key == "Escape")) {
            directions.length = 0;
        }
    };

    const closeWindow = () => {
        openWindow.set(!disable);
        getTitle.set(getLocation());
    };

    /** @type { Array<Object<string, string | number>> } */
    let directions = [];

    async function getData(e) {
        const control = e.target;
        if (!control.value.trim().length > 0) {
            directions.length = 0;
            return;
        }

        const locations = {};

        getRegisterFromServer("locations/").then((data) => {
            if (!data) return;

            searchData(control.value, data).forEach((register) => {
                const { location, id } = register;
                locations[register.location] ??= {
                    id,
                    location,
                };
            });

            const tempData = [];

            for (const key in locations) {
                tempData.push({
                    location: locations[key].location,
                    id: locations[key].id
                });
            }

            // directions = searchData(control.value, data);
            if (control.value.trim().length > 2) directions = [...tempData];
            tempData.length = 0;
        });
    }

    $: {
        disable = $openWindow;
        overflowBody(disable);
        directions.length = 0;

        if (!disable) innerText = "";
    }

    let innerText;
    $: innerText = $getTitle;


    onkeydown = (e) => {
        closeMenu(e);
    }
</script>

{#if !disable}
    <div class="main-modal main-modal--show">
        <div class={classList.join(" ")}>
            <header class="modal__header">
                <button class="button button--exit" on:click={closeWindow}
                    >&times;</button
                >
            </header>

            <section class="modal__content">
                <h2>{title}</h2>
                <p>{description}</p>

                <form
                    class="form"
                    action="./locations"
                    method="post"
                    on:submit={submitHandle}
                >
                    <label for="location" class="modal__content__text">
                        <Ubicacion />
                        <input
                            type="text"
                            name="location"
                            id="location"
                            placeholder="Introduzca una ubicación"
                            required="required"
                            autocomplete="off"
                            on:input={getData}
                            on:keydown={closeMenu}
                            bind:value={innerText}
                        />

                        <SearchResults
                            className="locations modal__content__text__search"
                            {directions}
                        />
                    </label>

                    <div class="buttons">
                        <button
                            type="submit"
                            class="button button--success"
                            on:focus={closeMenu}
                        >
                            {#if savingButton}<Ubicacion />&nbsp;Guardando ubicación...{/if}
                            {#if !savingButton}Guardar{/if}
                        </button>
                    </div>
                </form>
            </section>
        </div>
    </div>
{/if}

<style>
    .button--success {
        width: 100%;

        --icon-color: white;
        --icon-size: 20px;
    }

    label {
        z-index: 100;
    }
</style>
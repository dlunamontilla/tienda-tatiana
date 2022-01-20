<script>
    import { getTitle } from "../functions/store";
    import { saveFormDataToServer } from "../functions/get-register";
    import Ubicacion from "../components/icons/Ubicacion.svelte";
    import { getLocation } from "../functions/locations";

    export let title = "¿Dónde quieres recibir tu pedido?";
    export let description =
        "Para poder ofrecerte productos dentro de tu área, necesitamos tu dirección";

    /** @type { string[] } */
    export let classList = [];

    let savingButton = false;

    export let disable;

    const submitHandle = async function (e) {
        e.preventDefault();
        savingButton = true;

        const response = saveFormDataToServer(this, "locations");
        
        response.then(() => {
            savingButton = false
            getTitle.set(getLocation());
        });

        disable = !disable;
    };

    const closeWindow = () => {
        disable = !disable;
    };

    // let setTitle = getLocation();
    // $: getTitle.set(setTitle);
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
                        />
                    </label>

                    <div class="buttons">
                        <button
                            type="submit"
                            class="button button--success button--block"
                        >
                            {#if savingButton}<Ubicacion /> Guardando{/if}
                            {#if !savingButton}Guardar{/if}
                        </button>
                    </div>
                </form>
            </section>
        </div>
    </div>
{/if}

<script>
    import Ubicacion from "../components/icons/Ubicacion.svelte";

    export let title = "¿Dónde quieres recibir tu pedido?";
    export let description =
        "Para poder ofrecerte productos dentro de tu área, necesitamos tu dirección";

    export let classList = [];

    const submitHandle = (e) => {
        e.preventDefault();
    };

</script>

<div class="main-modal">
    <div class="{classList.join(' ')}">
        <header class="modal__header">
            <button class="button button--exit">&times;</button>
        </header>

        <section class="modal__content">
            <h2>{title}</h2>
            <p>{description}</p>

            <form class="form" action="" method="post" on:submit={submitHandle}>
                <label for="location" class="modal__content__text">
                    <Ubicacion />
                    <input type="text" name="location" id="location" placeholder="Introduzca una ubicación" />
                </label>

                <div class="buttons">
                    <button type="submit" class="button button--success button--block">Guardar</button>
                </div>
            </form>
        </section>
    </div>
</div>
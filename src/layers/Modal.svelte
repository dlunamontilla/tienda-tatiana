<script>
    export let title = "¿Dónde quieres recibir tu pedido?";
    export let description =
        "Para poder ofrecerte productos dentro de tu área, necesitamos tu dirección";
</script>

<div class="main-modal">
    <div class="modal">
        <header class="modal__header">
            <button>&times;</button>
        </header>

        <section class="modal__content">
            <h2>{title}</h2>
            <p>{description}</p>

            <form class="form" action="" method="post">
                <label for="direction">
                    <input type="text" name="direction" id="direction" />
                </label>

                <div class="buttons">
                    <button type="submit">Buscar</button>
                </div>
            </form>
        </section>
    </div>
</div>

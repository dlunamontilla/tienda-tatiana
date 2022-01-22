<script>
    import { getTitle, openWindow } from "../functions/store";
    import Ubicacion from "../components/icons/Ubicacion.svelte";
    import CartButton from "../components/CartButton.svelte";
    import { getLocation } from "../functions/locations";

    $: title = $getTitle;
    let title = getLocation();
</script>

<nav class="navigation">
    <!-- Logotipo -->
    <div class="navigation__item">
        <a class="logo" href="./">
            <img src="" alt="Tiendita" />
        </a>
    </div>

    <!-- Información en la parte superior derecha -->
    <div class="navigation__item navigation__item--right">
        <h3>
            <button class="button button--location" on:click={openWindow.set(!$openWindow)}>
                <Ubicacion />
            </button>

            {title}
        </h3>

        <CartButton />
    </div>
</nav>

<style>
    h3 {
        --gap: 15px;

        display: flex;
        align-items: center;
        border-right: 1px solid rgba(black, 0.3);
        margin: 0;
        margin-right: var(--gap);
        padding-right: var(--gap);
    }

    button {
        margin-right: 5px;
    }
</style>

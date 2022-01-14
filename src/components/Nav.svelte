<script>
    import Ubicacion from "./icons/Ubicacion.svelte";
    import CartButton from "./CartButton.svelte";
    export let title = "México City Marriot Reforma Hotel...";
</script>

<nav class="navigation">
    <!-- Logotipo -->
    <div class="navigation__item">
        <div class="logo">
            <img src="" alt="Tiendita">
        </div>
    </div>

    <!-- Información en la parte superior derecha -->
    <div class="navigation__item navigation__item--right">
        <h3><Ubicacion /> {title}</h3>
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
</style>
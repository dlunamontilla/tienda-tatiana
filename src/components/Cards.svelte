<script>
    import Card from "./Card.svelte";
    export let popular = false;
</script>

{#if !popular}
    <div class="cards">
        <Card prices={10} offer={20} product="Manzana con Pera" />
        <Card prices={25} offer={12} />
        <Card prices={12} offer={8} />
        <Card prices={29.9} offer={13} />
        <Card prices={50} offer={15} />
    </div>
{/if}

{#if popular}
    <div class="cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
{/if}

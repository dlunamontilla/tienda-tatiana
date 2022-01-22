<script>
    import Ubicacion from "./icons/Ubicacion.svelte";
    import { getTitle } from "../functions/store";

    // Props (propiedades):
    export let className = "";

    /** @type { Array<Object<string, string|number>> } */
    export let directions = [];

    function handle() {
        getTitle.set(this.textContent);
        directions.length = 0;
    }
</script>

{#if directions.length > 0}
    <div class={className} tabindex="-1" on:blur={handle}>
        {#each directions as { id, location }, index }
            <a href="#/{id}" class="locations__inner" on:click={handle}>
                <Ubicacion />
                <h4>{location}</h4>
            </a>
        {/each}
    </div>
{/if}

<style>
    h4 {
        margin: 0;
        font-size: 1rem;
        font-weight: normal;
        padding-left: 10px;
    }

    a {
        color: inherit;
    }
</style>

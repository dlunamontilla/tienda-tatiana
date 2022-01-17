<script>
    import Header from "./components/Header.svelte";
    import Footer from "./components/Footer.svelte";
    import Cards from "./components/Cards.svelte";
    import Modal from "./layers/Modal.svelte";

    // import { get } from "svelte/store";

    import { getLocation } from "./functions/locations";
</script>

<Header />

<main class="main">
    <h2>Ofertas</h2>
    <Cards popular={false} />

    <hr />

    <h2>Los más populares</h2>
    <Cards popular={true} />
</main>

{#await getLocation()}
    <!-- getLocation() is pending -->
{:then value}
    {#if !value}
        <Modal classList={["modal", "modal--location"]} />
        {document.body.setAttribute("style", "overflow: hidden")}
    {/if}
{/await}

<Footer className="footer" />

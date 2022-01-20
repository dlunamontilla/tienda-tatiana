<script>
    import Header from "./layers/Header.svelte";
    import Footer from "./layers/Footer.svelte";
    import Cards from "./components/Cards.svelte";
    import Modal from "./layers/Modal.svelte";

    import { options } from "./functions/store";
</script>

<Header />

<main class="main">
    <h2>Ofertas</h2>    
    <Cards popular={false} />

    <hr />

    <h2>Los más populares</h2>
    <Cards popular={true} />
</main>

<Footer className="footer" />

<Modal classList={["modal", "modal--location"]} disable={options.modalEnable} />

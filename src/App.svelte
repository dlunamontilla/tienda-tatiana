<script>
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	import Cards from "./components/Cards.svelte";
</script>

<Header />

<main class="main">
	<h2>Ofertas</h2>
	<Cards popular={false} />

	<hr>
	
	<h2>Los más populares</h2>
	<Cards popular={true} />
</main>

<Footer className="footer" />
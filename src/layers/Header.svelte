<script>
    import Nav from "./Nav.svelte";
    import Banner from "./Banner.svelte";

    export let title = "";
</script>

<header>
    <Nav {title} />
    <Banner />
</header>

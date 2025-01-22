<script>
    import "../app.css";
    import Nav from "../components/Nav.svelte";
    import Footer from "../components/Footer.svelte";

    export let segment;
    let openMenu = false;

    const handleChange = ({ currentTarget }) => {
        const { value } = currentTarget;

        document.cookie = `lang=${value} ;`;
    };
</script>

<!-- <nav>
	<a href="/">Home</a>
	<a href="/about">About</a>
	<a href="/settings">Settings</a>
</nav> -->
<Nav {segment} class='' />

<div>
<slot />
</div>

<Footer {segment} class='' />

<style>
</style>



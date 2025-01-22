<script>
    // import "../../app.css";
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

<div class='main-content'>
<slot />
</div>

<Footer {segment} class='' />

<style>

    /* Main content should expand to fill available space */
    .main-content {
        flex: 1; /* Grow to fill available space */
        /* flex-direction: column; */
        min-height: 100vh; /* Full height of the viewport */
        max-width: 960px;
        margin: auto;
        font-weight: 300;
    }
    


</style>



<div class="cover-image">
    <!-- <div class="overlay-cover">
        <img class="overlay" src="/illustrations/collage-cover.png" />
    </div> -->
    <div class="cover-text">
        <h1 class="cover text-primary">Liberatory AI Ecosystem</h1>

        <h2 class="yellow text-secondary">
            Official webpage
        </h2>

        <p class="byline text-tertiary">1234</p>
        <!-- <div class="image-container pt-4">
            <img
                src="logos/logo-df-teal.png"
                alt="Centered Image"
                class="centered-image"
            />
        </div> -->
    </div>
</div>

<div class='content text-alert'>
    <h1>Welcome to SvelteKit</h1>
    <p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
</div>

<style>
    .cover-image {
        width: 100%;
        height: 1064px; /* Set the desired fixed height */
        background-image: url("/base-images/canva-image.jpg");

        background: linear-gradient(
                to bottom,
                rgba(222, 48, 35, 0),
                rgba(222, 48, 35, 0.5),
                rgba(132, 29, 107, 0.75),
                rgba(57, 14, 83, 1)
            ),
            url("/base-images/canva-image.jpg");
        background-size: cover; /* Ensure the image covers the entire container */
        background-position: center; /* Center the image */
        background-repeat: no-repeat; /* Prevent the image from repeating */
	}

    .content {
        max-width: 960px;
        margin: auto;
    }
</style>

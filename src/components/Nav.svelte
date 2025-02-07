<script>
  let scribble = "#FF6B0E";
  $: outerWidth = 0;
  let window;
  // <a href="/">Home</a>
  // <a href="/about">About</a>
  // <a href="/settings">Settings</a>
  let w = 0;
  let h = 0;

  let pages =[
    {name: 'About', url: 'about'},
    {name: 'Workshops', url: 'workshops'},
    {name: 'Template', url: 'template'},
    {name: 'Author', url: 'author'},
    {name: 'Case study', url: 'casestudy'}
]

  // const handleChange = ({ currentTarget }) => {
  //   console.log(currentTarget);
  //   // const { value } = currentTarget;

  //   document.cookie = `lang=${value} ;`;
  // };
  // console.log(t);
</script>

<svelte:window bind:innerWidth={window} />

<nav class="flex items-center">
  <div class="flex">
    Liberatory AI Ecosystem
    <a href={"/."}>
      <img
        src="/illustrations/logo.png"
        class="me-3 h-6 sm:h-9 logo"
        alt="Project Logo"
      />
    </a>
    <!-- <a href={"./"} class="name py-2">
      {$t("menu.shorttitle")}
    </a> -->
  </div>

    <div >
      <ul class='nav-links'>
        {#each pages as link}
          <li><a href={'/' + link.url}>{link.name}</a></li>
        {/each}
      </ul>
  </div>
</nav>

<style>
  nav {
    justify-content: space-between;
    padding: 0.5em 1em 0.5em;
    max-width: 1024px;
    margin: auto;
    color: #de45aa;

    display: flex;
    align-items: center;
  }

  .nav-links {
    list-style: none;
    display: flex;
    gap: 1.5rem;
    margin: 0;
    padding: 0;
  }

  .nav-links a {
    text-decoration: none;
    font-size: 1rem;
    color: #007acc;
    transition: pink 0.8s;
  }

  .nav-links a:hover {
    color: pink;
  }
</style>

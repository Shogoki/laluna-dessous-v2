<script>
  export let titles = [];
</script>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
  <div class="container">
    <a class="navbar-brand js-scroll-trigger" href="/">Laluna Dessous</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarResponsive"
      aria-controls="navbarResponsive"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" href="/#aboutus">Über uns</a>
        </li>

        {#each titles as page}
          {#if !page.acf.menu_hide}
            <li class="nav-item">
              <a
                class="nav-link"
                href={page.acf.scrollablepage
                  ? `/#${page.slug}`
                  : `/${page.slug}`}>{page.title.rendered}</a
              >
            </li>
          {/if}
        {/each}
      </ul>
    </div>
  </div>
</nav>

<!-- Navigation -->
<style>
  .nav-item {
    white-space: nowrap;
  }
</style>

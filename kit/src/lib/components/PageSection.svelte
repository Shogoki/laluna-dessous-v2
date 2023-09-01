<script>
  export let page;
  export let light = false;
  export let showDate = false;
  $: formattedDate = (
    page?.date ? new Date(page.date) : new Date()
  ).toLocaleDateString();
</script>

{#if page}
  <section id={page?.slug} class:bg-light={light}>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <h2>{@html page?.title.rendered}</h2>
          {#if showDate}
            <h6>{formattedDate}</h6>
          {/if}
          <p class="lead">
            {@html page?.content.rendered}
          </p>
        </div>
      </div>
    </div>
    <slot />
  </section>
{/if}

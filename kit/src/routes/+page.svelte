<script>
  import PageSection from "$lib/components/PageSection.svelte";
  import AboutUs from "$lib/components/AboutUs.svelte";
  import Aktuelles from "$lib/components/Aktuelles.svelte";
  import Carousel from "$lib/components/Carousel.svelte";
  export let data;
</script>

<main>
  <Carousel items={data.carouselItems} />
  <PageSection page={data.welcome} light={true} />
  <AboutUs items={data.aboutUs} />
  <Aktuelles page={data.newsPage} post={data.latestPost} />
  {#each data.pages as page, idx}
    <PageSection {page} light={idx % 2 === 1} />
  {/each}
</main>

<style>
</style>

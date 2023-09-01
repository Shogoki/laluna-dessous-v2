<script lang="ts">
  import PageSection from "$lib/components/PageSection.svelte";
  export let page, posts;
</script>

<main>
  <PageSection {page} />
  {#each posts as post, idx}
    <PageSection page={post} showDate light={idx % 2 === 0} />
  {/each}
</main>

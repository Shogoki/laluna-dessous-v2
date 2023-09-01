<script>
  import Footer from "$lib/components/Footer.svelte";
  import Nav from "$lib/components/Nav.svelte";
  import Header from "$lib/components/Header.svelte";
  export let data;
</script>

<Nav titles={data.titles} />
<Header />
<slot />
<Footer />

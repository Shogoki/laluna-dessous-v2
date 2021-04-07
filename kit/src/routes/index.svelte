<script context="module">
	import { WordpressAPI } from '$lib/api/wordpress';

	export async function load({ page, fetch, session, context }) {
		console.log('get api');
		const api = new WordpressAPI(fetch);
		const welcome = await api.getPageBySlug('willkommen');
		console.log('fetched welcome');
		const pages = await api.getPages();
		return {
			props: {
				welcome: welcome,
				pages: pages.filter((page) => page.acf.scrollablepage)
			}
		};
	}
</script>

<script>
	import PageSection from '$lib/components/PageSection.svelte';
	import AboutUs from '$lib/components/AboutUs.svelte';
	// import Aktuelles from '$lib/components/Aktuelles.svelte';
	// import Carousel from '$lib/components/Carousel.svelte';
	export let welcome;
	export let pages;
</script>

<main>
	<!-- <Carousel /> -->
	<PageSection page={welcome} light={true} />
	<AboutUs />
	<!-- <Aktuelles /> -->
	{#each pages as page, idx}
		<PageSection {page} light={idx % 2 === 1} />
	{/each}
</main>

<style>
</style>

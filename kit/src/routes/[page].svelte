<script>
	import PageSection from '$lib/components/PageSection.svelte';
	export let page;
	import { getPageBySlug } from '$lib/api/wordpress';
	import Loading from '$lib/components/Loading.svelte';
	// TODO: Redirect on welcome
	$: contentP = getPageBySlug(page);
</script>

<main>
	{#await contentP}
		<Loading />
	{:then page}
		<PageSection {page} />
	{:catch}
		There was an error loading the page
	{/await}
</main>

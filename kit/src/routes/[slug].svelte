<script context="module" lang="ts">
	import { WordpressAPI } from '$lib/api/wordpress';

	export async function load({ page, fetch, session, context }) {
		const api = new WordpressAPI(fetch);
		const requestedPage = await api.getPageBySlug(page.params.slug, fetch)
		return {
			props: {
				page: requestedPage
			}
		};
	}
</script>

<script>
	import PageSection from '$lib/components/PageSection.svelte';
	export let page;
</script>

<main>
		<PageSection {page} />
</main>

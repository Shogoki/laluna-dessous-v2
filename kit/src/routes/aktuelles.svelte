<script context="module" lang="ts">
	import { WordpressAPI } from '$lib/api/wordpress';

	export async function load({ page, fetch, session, context }) {
		const api = new WordpressAPI(fetch);
		const postPage = await api.getPageBySlug('aktuelles');
		const posts = await api.getPosts(10);
		return {
			props: {
				page: postPage,
				posts: posts
			}
		};
	}
</script>

<script lang="ts">
	import PageSection from '$lib/components/PageSection.svelte';
	export let page, posts;
</script>

<main>
	<PageSection {page} />
	{#each posts as post, idx}
		<PageSection page={post} showDate light={idx % 2 === 0} />
	{/each}
</main>

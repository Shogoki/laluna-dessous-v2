<script lang="ts">
	import { getPosts, getPageBySlug } from '$lib/api/wordpress';
	import PageSection from '$lib/components/PageSection.svelte';
	async function getPostPage() {
		const page = await getPageBySlug('aktuelles');
		console.log('Page', page);
		return page;
	}
	const postsP = getPosts(10);
	const pageP = getPostPage();
</script>

<main>
	{#await pageP}
		Loading...
	{:then page}
		<PageSection {page} />
	{/await}
	{#await postsP}
		Loading...
	{:then posts}
		{#each posts as post, idx}
			<PageSection page={post} showDate light={idx % 2 === 0} />
		{/each}
	{/await}
</main>

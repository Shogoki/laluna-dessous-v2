<script context="module">
	import { WordpressAPI } from '$lib/api/wordpress';

	// async function getLatestPost() {
	// 	const posts = await getPosts(1);
	// 	return posts[0];
	// }
	// async function getPostPage() {
	// 	const page = await getPageBySlug('aktuelles');
	// 	console.log('Page', page);
	// 	return page;
	// }
	// async function getImageUrls() {
	// 	const items = await getCarouselImages();
	// 	return items.map((item) => item.image);
	// }
	export async function load({ page, fetch, session, context }) {
		console.log('get api');
		const api = new WordpressAPI(fetch);
		const welcome = await api.getPageBySlug('willkommen');
		console.log('fetched welcome');
		const pages = await api.getPages();
		//AboutUs
		const aboutUs = await api.getAboutUs();
		//Aktuelles
		const newsPage = await api.getPageBySlug('aktuelles');
		const latestPost = (await api.getPosts(1))[0];
		//Carousel
		const carouselItems = (await api.getCarouselImages()).map((item) => item.image);

		return {
			props: {
				welcome: welcome,
				pages: pages.filter((page) => page.acf.scrollablepage),
				aboutUs: aboutUs,
				newsPage: newsPage,
				latestPost: latestPost,
				carouselItems: carouselItems
			}
		};
	}
</script>

<script>
	import PageSection from '$lib/components/PageSection.svelte';
	import AboutUs from '$lib/components/AboutUs.svelte';
	import Aktuelles from '$lib/components/Aktuelles.svelte';
	import Carousel from '$lib/components/Carousel.svelte';
	export let welcome;
	export let pages;
	export let aboutUs;
	export let newsPage;
	export let latestPost;
	export let carouselItems;
</script>

<main>
	<Carousel items={carouselItems} />
	<PageSection page={welcome} light={true} />
	<AboutUs items={aboutUs} />
	<Aktuelles page={newsPage} post={latestPost} />
	{#each pages as page, idx}
		<PageSection {page} light={idx % 2 === 1} />
	{/each}
</main>

<style>
</style>

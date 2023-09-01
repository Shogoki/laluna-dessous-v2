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
	export async function load({ params }) {
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
			welcome: welcome,
			pages: pages.filter((page) => page.acf.scrollablepage),
			aboutUs: aboutUs,
			newsPage: newsPage,
			latestPost: latestPost,
			carouselItems: carouselItems
		};
	}
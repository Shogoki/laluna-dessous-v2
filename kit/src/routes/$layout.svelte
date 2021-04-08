<script context="module" lang="ts">
	import { WordpressAPI } from '$lib/api/wordpress';

	export async function load({ page, fetch, session, context }) {
		const api = new WordpressAPI(fetch);
		console.log('got pages');
		const pages = await api.getPages(0);
		return {
			props: {
				titles: pages ? pages : []
			}
		};
	}
</script>

<script>
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Header from '$lib/components/Header.svelte';
	export let titles;
</script>

<Nav {titles} />
<Header />
<slot />
<Footer />

<script context="module">
	import { WordpressAPI } from '$lib/api/wordpress';

	export async function load({ page, fetch, session, context }) {
		console.log('Loading AboutUs');
		const api = new WordpressAPI(fetch);
		const items = await api.getAboutUs();
		return {
			props: {
				items: items
			}
		};
	}
</script>

<script>
	import Container from 'sveltestrap/src/Container.svelte';
	import Row from 'sveltestrap/src/Row.svelte';
	import Col from 'sveltestrap/src/Col.svelte';
	import InfoIconBox from './InfoIconBox.svelte';

	// export let _items = [
	//     { title: "Individuell",  iconName: "fa-ruler", content: "loreim Ipsum"},
	//     { title: "Kompetent",  iconName: "fa-medal", content: "loreim Ipsum"},
	//     { title: "Vor Ort",  iconName: "fa-house-user", content: "loreim Ipsum"},
	// ]
	export let items = []; // TODO: WP CUstom Post Types for iconName
</script>

<section id="aboutus">
	<Container>
		<Row>
			<Col />
			<Col>
				<h2>Über uns</h2>
			</Col>
			<Col />
		</Row>
		<Row>
			{#each items as item}
				<Col>
					<InfoIconBox {...item} />
				</Col>
			{/each}
		</Row>
	</Container>
</section>

<style>
	h2 {
		text-align: center;
	}
</style>

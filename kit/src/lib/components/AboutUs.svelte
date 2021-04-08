<script>
	import { Container, Row, Col } from '../sveltestrap';
	// import { getAboutUs} from "../api/wordpress.js"
	import InfoIconBox from './InfoIconBox.svelte';

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

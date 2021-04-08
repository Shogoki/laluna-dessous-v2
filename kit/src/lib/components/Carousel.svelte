<script lang="ts">
	import {
		Carousel,
		CarouselControl,
		CarouselItem,
		Container,
		CarouselIndicators
	} from '../sveltestrap';

	let activeIndex = 0;
	export let items = [];
</script>

<section id="carousel">
	<Container fluid>
		<Carousel {items} bind:activeIndex>
			<CarouselIndicators bind:activeIndex {items} />
			<div class="carousel-inner">
				{#each items as item, index}
					<CarouselItem bind:activeIndex itemIndex={index}>
						<img src={item} class="d-block w-100" alt={`${item} ${index + 1}`} />
					</CarouselItem>
				{/each}
			</div>

			<CarouselControl direction="prev" bind:activeIndex {items} />
			<CarouselControl direction="next" bind:activeIndex {items} />
		</Carousel>
	</Container>
</section>

<style>
	:global(.carousel-item) {
		max-height: 60vh;
	}
	:global(.carousel-item img) {
		max-height: 60vh;
	}
</style>

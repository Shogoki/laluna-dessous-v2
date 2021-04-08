<script lang="ts">
    import { Carousel, CarouselControl, CarouselItem , Container, Row, Col} from '../sveltestrap';
    import {getCarouselImages} from "../api/wordpress"
    async function getImageUrls() {
      const items = await getCarouselImages()
      return   items.map(item => item.image) 
    }
    const itemsP = getImageUrls()
    let activeIndex = 0;
  </script>
  <style>
   :global(.carousel-item) {
    max-height: 60vh;
}
 :global(.carousel-item img) {
    max-height: 60vh;
}
  </style>
  <section id="carousel">
<Container fluid>
  {#await itemsP}
  Loading..
   {:then items}
  <Carousel {items} bind:activeIndex>
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
  {/await}
</Container>
</section>
  
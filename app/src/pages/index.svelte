<script >
    
    import PageSection from "../components/PageSection.svelte"
    import AboutUs from "../components/AboutUs.svelte"
    import Aktuelles from "../components/Aktuelles.svelte"
    import { getPages} from "../api/wordpress"
    import { getPageBySlug} from "../api/wordpress"
import Carousel from "../components/Carousel.svelte";
    
    async function getMainPages() {
        const pages = await getPages()
        return pages.filter(page => page.acf.scrollablepage)
    }
    async function getWelcomePage() {
      const page = await getPageBySlug("willkommen")
      return page;
    }
    const welcomeP = getWelcomePage()
    const pagesP = getMainPages()
    
    </script>
    
    
    <style>
    
    </style>
    
    <main>
    <Carousel></Carousel>
     {#await welcomeP}
    Loading
    {:then welcome}
      <PageSection page={welcome} light={true} />
    {/await}
    <AboutUs />
    <Aktuelles />
    {#await pagesP}
    Loading
    {:then pages}
        {#each pages as page, idx}
             <PageSection {page} light={idx % 2 === 1} />
        {/each}
    {/await}
    
    </main>

    
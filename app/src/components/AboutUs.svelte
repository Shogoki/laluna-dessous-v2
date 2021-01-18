<script>
    import {Container, Row, Col} from "sveltestrap"
    import { getAboutUs} from "../api/wordpress.js"
    import InfoIconBox from "./InfoIconBox.svelte"
    import Loading from "./Loading.svelte"

    // export let _items = [
    //     { title: "Individuell",  iconName: "fa-ruler", content: "loreim Ipsum"},
    //     { title: "Kompetent",  iconName: "fa-medal", content: "loreim Ipsum"},
    //     { title: "Vor Ort",  iconName: "fa-house-user", content: "loreim Ipsum"},
    // ]
    let items = getAboutUs() // TODO: WP CUstom Post Types for iconName
</script>
<style>
    h2 { text-align: center}
</style>
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
            {#await items}
                <Loading />
            {:then _items } 
                {#each _items as item}
                <Col>
                    <InfoIconBox {...item} ></InfoIconBox>
                </Col>
                {/each}
            {:catch}
            Oops, Da ist was schief gelaufen.
            {/await}
        </Row>
    </Container>
               
            
</section>
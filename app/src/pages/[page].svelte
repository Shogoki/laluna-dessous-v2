<script>
     import {Container, Row, Col} from "sveltestrap"
export let page;
import {getPageBySlug} from "../api/wordpress"
import Loading from "../components/Loading.svelte"

$: contentP = getPageBySlug(page)
</script>

<main>
{#await contentP}
<Loading />
{:then content}

<Container>
    <Row>
        <Col />
        <Col>
        <h2>{@html content.title.rendered}</h2>
        </Col>
        <Col />
    </Row>
    <Row>
        <Col />
<Col>
        {@html content.content.rendered}
</Col>
<Col />
    </Row>
</Container>
{:catch}
There was an error loading the page
{/await}
</main>
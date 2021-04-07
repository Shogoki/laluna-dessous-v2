<script lang="ts">
    import { getPosts, getPageBySlug} from "../api/wordpress"
    import PageSection from "./PageSection.svelte"
    async function getLatestPost () {
        const posts = await getPosts(1)
        return posts[0]
    }
    async function getPostPage() {
        const page = await getPageBySlug("aktuelles")
        console.log("Page", page)
        return page
    }
    const postsP = getLatestPost()
    const pageP = getPostPage()
</script>
{#await postsP}
Loading...
{:then post}
{#await pageP}
Loading...
{:then page}

<PageSection {page} light={true} >
     <div class="row">
        <div class="col-lg-8 mx-auto">
        <h2>{post.title.rendered}</h2>
        <p class="lead">
            {@html post.content.rendered}
        </p>
        </div>
    </div>
    <a href="/aktuelles" >weitere Beiträge</a>
</PageSection>
{:catch e} 
{e}
{/await}
{/await}
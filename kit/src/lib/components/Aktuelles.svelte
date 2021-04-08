<script lang="ts">
	import PageSection from './PageSection.svelte';

	export let page;
	export let post;
</script>

<PageSection {page} light={true}>
	<div class="row">
		<div class="col-lg-8 mx-auto">
			<h2>{@html post.title.rendered}</h2>
			<p class="lead">
				{@html post.content.rendered}
			</p>
		</div>
	</div>
	<a href="/aktuelles">weitere Beiträge</a>
</PageSection>

<script>
	export let page;
	export let slug = page.slug;
	export let light = false;
	export let title = page.title.rendered;
	export let showDate = false;
	$: formattedDate = new Date(page.date).toLocaleDateString();
</script>

<section id={slug} class:bg-light={light}>
	<div class="container">
		<div class="row">
			<div class="col-lg-8 mx-auto">
				<h2>{@html title}</h2>
				{#if showDate}
					<h6>{formattedDate}</h6>
				{/if}
				<p class="lead">
					{@html page.content.rendered}
				</p>
			</div>
		</div>
	</div>
	<slot />
</section>

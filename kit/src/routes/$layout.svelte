<script>
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Header from '$lib/components/Header.svelte';
</script>

<Nav />
<Header />
<slot />
<Footer />

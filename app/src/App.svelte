<script >
import { Router } from "@roxi/routify";
import { routes } from "../.routify/routes";
import Footer from "./components/Footer.svelte"
import Nav from "./components/Nav.svelte"
import Header from "./components/Header.svelte"

</script>


<style>

</style>
<Nav />
<Header />	
<Router {routes} />
<Footer />
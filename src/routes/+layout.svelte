<script>
	import '$styles/app.scss';

	import Nav from '$components/Nav.svelte';
	import Footer from '$src/lib/components/Footer.svelte';
</script>

<header class="page-container">
	<Nav />
</header>

<main class="py-12">
	<slot />
</main>

<div class="page-container">
	<Footer />
</div>

<script>
	import '$styles/app.scss';
	import Nav from '$components/Nav.svelte';
	import Search from '$components/Search.svelte';
	import Head from '$src/lib/components/board/Head.svelte';
	import Stat from '$src/lib/components/board/Stat.svelte';
	import RowEncabezado from '$src/lib/components/board/RowEncabezado.svelte';
	import Arbol from '$src/lib/components/board/Arbol.svelte';

	import { storePage } from '$stores/StorePage.svelte';
</script>

<header class="page-container">
	<Nav />
</header>

<main class="page-container py-32">
	<h1>Hola!</h1>
	<p>Empieza a buscar tu pagina.</p>

	<Search />

	<hr />

	<section>
		<Head />

		<div class="grid grid-cols-4">
			<Stat tipo="Titulos" valor={storePage.encabezados.length || 0} />
			<Stat />
			<Stat />
			<Stat />
		</div>


		{#each storePage.tree as item}
			<Arbol encabezado={item.encabezado} children={item.children} />
		{/each}

		<div class="grid grid-cols-6 gap-x-7 mt-7 mb-2">
			<span class="font-semibold col-span-2">Titulo</span>
			<span class="font-semibold">Calificacion</span>
			<span class="font-semibold">Etiqueta</span>
			<span class="font-semibold">Errores</span>
			<span class="font-semibold">Mejorar</span>
		</div>

		<div class="grid flex-col">
			{#each storePage.encabezados as encabezado}
				<RowEncabezado {encabezado} />
			{/each}
		</div>
	</section>
</main>

<style lang="scss">
	.page-container {
		@apply mx-auto w-full md:max-w-screen-sm lg:max-w-screen-2xl;
	}
</style>

<script>
	import '$styles/app.scss';

	import { fade } from 'svelte/transition';
	import { storePage } from '$stores/StorePage.svelte';

	import Nav from '$components/Nav.svelte';
	import Search from '$components/Search.svelte';
	import Head from '$src/lib/components/board/Head.svelte';
	import Stat from '$src/lib/components/board/Stat.svelte';
	import RowEncabezado from '$src/lib/components/board/RowEncabezado.svelte';
	import Arbol from '$src/lib/components/board/Arbol.svelte';
	import Markdown from '$src/lib/components/board/Markdown.svelte';
	import Hero from '$src/lib/components/Hero.svelte';
	import Placeholder from '$src/lib/components/Placeholder.svelte';
	import ListadoHeaders from '$src/lib/components/board/ListadoHeaders.svelte';
</script>

<header class="page-container">
	<Nav />
</header>

<div class="page-container">
	<Hero />

	<Search />
</div>

<main class="page-container py-32">
	<Head />

	<div class="grid grid-cols-3 gap-4 pt-4">
		<Stat tipo="Titulos" valor={storePage.data ? storePage.data.encabezados.length : null} />
		<Stat tipo="Calificacion" valor={storePage.rate ? storePage.rate.total : null} />
		<Stat tipo="Redaccion" valor={storePage.rate ? storePage.rate.errores.length : null} />
	</div>

	<hr class="my-12 opacity-10" />

	<section class="">
		<div class="grid grid-cols-2">
			<div>
				<h5 class="mb-3">Fortalezas</h5>
				{#if storePage.rate !== null}
					<ul transition:fade class="list-disc flex flex-col gap-1 pl-4">
						{#each storePage.rate.recomendaciones.fortalezas as fortaleza}
							<li class="text-zinc-400">{fortaleza}</li>
						{/each}
					</ul>
				{:else}
					<Placeholder h="6" />
				{/if}
			</div>

			<div>
				<h5 class="mb-3">Debilidades</h5>
				{#if storePage.rate !== null}
					<ul transition:fade class="list-disc pl-4 flex flex-col gap-1">
						{#each storePage.rate.recomendaciones.debilidades as debilidad}
							<li class="text-zinc-400">{debilidad}</li>
						{/each}
					</ul>
				{:else}
					<Placeholder h="6" />
				{/if}
			</div>
		</div>
	</section>

	<section class="py-12">
		<div class="flex justify-between">
			<h5>Encabezados</h5>

			<ListadoHeaders />
		</div>

		<div class="grid grid-cols-12 gap-x-7 mt-12 mb-2">
			<span class="text-sm font-semibold col-span-5">Titulo</span>
			<span class="text-sm font-semibold col-span-2">Calificacion</span>
			<span class="text-sm font-semibold col-span-2">Etiqueta</span>
			<span class="text-sm font-semibold col-span-1">Errores</span>
			<span class="text-sm font-semibold col-span-2"></span>
		</div>

		<div class="encabezados grid flex-col">
			{#if storePage.data !== null}
				{#each storePage.data.encabezados as encabezado, i}
					<RowEncabezado
						{encabezado}
						calificacion={storePage.rate ? storePage.rate.calificaciones[i] : null}
					/>
				{/each}
			{/if}
		</div>
	</section>

	<hr />

	<div class="grid grid-cols-4 py-12">
		<div class="col-span-1">
			{#if storePage.data !== null}
				{#each storePage.data.tree as item}
					<Arbol encabezado={item.encabezado} hijos={item.hijos} />
				{/each}
			{/if}
		</div>

		<div class="col-span-3">
			{#if storePage.data !== null}
				<Markdown html={storePage.data.renderedMarkdown} />
			{/if}
		</div>
	</div>
</main>

<style lang="scss">
	.page-container {
		@apply mx-auto w-full md:max-w-screen-sm lg:max-w-screen-xl px-5;
	}
</style>

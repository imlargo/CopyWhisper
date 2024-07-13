<script lang="ts">
	import '$styles/app.scss';

	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';

	import { fade } from 'svelte/transition';

	import { pageState } from '$utils/enums';
	import { getPage } from '$lib/utils/scrapper';
	import { storePage } from '$stores/StorePage.svelte';

	import Placeholder from '$src/lib/components/Placeholder.svelte';
	import Board from '$src/lib/components/Board.svelte';
	import Arbol from '$src/lib/components/board/Arbol.svelte';
	import Markdown from '$src/lib/components/board/Markdown.svelte';

	import type { RateRequest, Rate } from '$lib/types';

	const link = $page.url.searchParams.get('link');

	if (browser) {
		handle(link);
	}

	async function handle(link: string | null) {
		// Verificar si se ha ingresado un link
		if (link === null) {
			await goto('/');
			return;
		}

		// Obtener la información de la página
		const pageData = await getPage(link);

		// En caso de error al obtener la información de la página se notifica al usuario
		if (pageData === null) {
			storePage.estado = pageState.NOTOK;
			return;
		}

		// Inicializar el store con la información base de la página
		storePage.init(pageData);

		const rateRequest: RateRequest = {
			link: pageData.link,
			titulo: pageData.titulo,
			descripcion: pageData.descripcion,
			markdown: pageData.markdown,
			encabezados: pageData.encabezados.map((encabezado, i) => ({ id: i + 1, ...encabezado }))
		};

		// Enviar la información de la página al servidor para obtener la calificación
		const response = await fetch('/api/rate', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(rateRequest)
		});

		const rate: Rate = await response.json();

		// Guardar la calificación en el store
		storePage.setRate(rate);
	}

	/*
	

	 
	 */
</script>

<section class="page-container">
	<h2 class="text-2xl font-medium mb-4">
		{#if storePage.estado === pageState.WAITING}
			<span>Cargando pagina...</span>
		{:else if storePage.estado === pageState.OK}
			<span>Analizando contenido...</span>
		{:else if storePage.estado === pageState.ANALIZADO}
			<span>Resultado</span>
		{:else if storePage.estado === pageState.NOTOK}
			<span> No se ha podido obtener la información de la página </span>
		{/if}
	</h2>

	<Board />
</section>

<section class="page-container py-12">
	<div class="py-4 my-8 border-y border-zinc-800">
		<h2 class="text-xl font-medium">Contenido</h2>
	</div>

	<section class="grid grid-cols-12">
		<aside class="col-span-4 pe-3">
			{#if storePage.data !== null}
				{#each storePage.data.tree as item}
					<Arbol encabezado={item.encabezado} hijos={item.hijos} />
				{/each}
			{/if}
		</aside>

		<div class="col-span-8">
			<div>
				<h2 class="text-xl font-medium">Resumen</h2>

				<h5>Titulo:</h5>
				{#if storePage.data === null}
					<Placeholder />
				{:else}
					<p class="text-zinc-400" transition:fade>{storePage.data?.titulo}</p>
				{/if}

				<h5>Descripcion:</h5>

				{#if storePage.rate === null}
					<Placeholder h="4" />
				{:else}
					<p transition:fade class="text-pretty text-zinc-400">
						{storePage.rate.resumen}
					</p>
				{/if}
			</div>

			<hr class="my-5" />

			{#if storePage.data !== null}
				<Markdown html={storePage.data.renderedMarkdown} />
			{/if}
		</div>
	</section>
</section>

<style lang="scss">
	.page-container {
		@apply mx-auto w-full md:max-w-screen-sm lg:max-w-screen-xl px-5;
	}
</style>

<script>
	import { fade } from 'svelte/transition';
	import { storePage } from '$stores/StorePage.svelte';
	import { pageState } from '$utils/enums';

	import Head from '$src/lib/components/board/Head.svelte';
	import Stat from '$src/lib/components/board/Stat.svelte';
	import RowEncabezado from '$src/lib/components/board/RowEncabezado.svelte';
	import Placeholder from '$src/lib/components/Placeholder.svelte';
	import ListadoHeaders from '$src/lib/components/board/ListadoHeaders.svelte';
	/*
	<Stat
				tooltip="Calificacion final acerca de que tan buena es tu pagina con respecto a SEO"
				tipo="Seo"
				valor={1}
			/>
	*/
</script>

<section>
	<Head />

	{#if storePage.estado === pageState.OK || storePage.estado === pageState.ANALIZADO}
		<section class="grid grid-cols-3 gap-4 py-8">
			<Stat
				tooltip="Cantidad de encabezados que contiene el contenido de la pagina"
				tipo="Encabezados"
				valor={storePage.data ? storePage.data.encabezados.length : null}
			/>
			<Stat
				tooltip="Calificacion final asignada despues de analizar la pagina"
				tipo="Calificacion"
				valor={storePage.rate ? storePage.rate.total : null}
			/>
			<Stat
				tooltip="Errores de ortografia o gramatica identificados en la pagina"
				tipo="Errores"
				valor={storePage.rate ? storePage.rate.errores.length : null}
			/>
		</section>

		<hr class="opacity-10" />

		<section class="py-8">
			<div class="grid grid-cols-2 gap-x-8">
				<div>
					<h5 class="mb-3">Fortalezas</h5>
					{#if storePage.rate !== null}
						<ul transition:fade class="list-disc flex flex-col gap-1 pl-4">
							{#each storePage.rate.recomendaciones.fortalezas as fortaleza}
								<li class="text-zinc-400 text-pretty">{fortaleza}</li>
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

		<section>
			<div class="flex justify-between py-5 border-y pb-4 mb-5 border-zinc-800">
				<h5>Encabezados</h5>

				<ListadoHeaders />
			</div>

			<div class="grid grid-cols-12 gap-x-7 mb-2">
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
	{/if}
</section>

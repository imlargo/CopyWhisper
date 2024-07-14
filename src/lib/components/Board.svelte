<script>
	import { fade } from 'svelte/transition';
	import { storePage } from '$stores/StorePage.svelte';
	import { pageState } from '$utils/enums';

	import { tooltipAction } from '$src/lib/utils/tooltip';

	import Head from '$src/lib/components/board/Head.svelte';
	import Stat from '$src/lib/components/board/Stat.svelte';
	import Placeholder from '$src/lib/components/Placeholder.svelte';
</script>

<section>
	<Head />

	<div class="pt-4">
		{#if storePage.rate === null}
			<Placeholder h="4" />
		{:else}
			<p transition:fade class="text-pretty text-zinc-400 w-12/12">
				<i use:tooltipAction={'Resumen generado con IA'} class="bi bi-stars text-violet-400"></i>
				{storePage.rate.resumen}
			</p>
		{/if}
	</div>

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
	{/if}
</section>

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
		{#if storePage.data !== null && storePage.data.descripcion === ''}
			<p
				class="text-zinc-600 mb-3 w-fit"
				use:tooltipAction={'La meta description es un breve resumen del contenido de tu página web. Es crucial para mejorar tu visibilidad en los motores de búsqueda y atraer a más visitantes. Deberias añadirla!'}
			>
				<i class="bi bi-exclamation-triangle"></i>
				La página no tiene una meta description!
			</p>
		{/if}

		{#if storePage.data === null || storePage.resumen === ''}
			<Placeholder h="4" />
		{:else}
			<p transition:fade class="text-pretty text-zinc-400 w-12/12">
				<i use:tooltipAction={'Resumen generado con IA'} class="bi bi-stars text-violet-400"></i>
				{storePage.resumen}
			</p>
		{/if}
	</div>

	{#if storePage.estado === pageState.OK || storePage.estado === pageState.ANALIZADO}
		<section class="grid grid-cols-4 gap-4 py-8">
			<Stat
				tooltip="Contenido y redaccion"
				tipo="Contenido y redaccion"
				rate={storePage.rate ? storePage.rate.contenido : null}
			/>
			<Stat
				tooltip="Tono y estilo"
				tipo="Tono y estilo"
				rate={storePage.rate ? storePage.rate.tono : null}
			/>
			<Stat
				tooltip="Persuasión y Conversión"
				tipo="Persuasión y Conversión"
				rate={storePage.rate ? storePage.rate.persuacion : null}
			/>
			<Stat
				tooltip="Gramatica y Ortografia"
				tipo="Gramatica y Ortografia"
				rate={storePage.rate ? storePage.rate.errores : null}
			/>
		</section>
	{/if}
</section>

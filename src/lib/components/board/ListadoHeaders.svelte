<script lang="ts">
	import { storePage } from '$stores/StorePage.svelte';
	import { tooltipAction } from '$src/lib/utils/tooltip';
	import { verificarEncabezados } from '$src/lib/utils/util';

	import type { Encabezado } from '$src/lib/types';

	const headers = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'];
</script>

<div class="flex gap-4 font-mono">
	{#if storePage.data !== null && !verificarEncabezados(storePage.data.encabezados)}
		<i
			class="bi bi-exclamation-triangle text-amber-400"
			use:tooltipAction={'La página web no sigue una estructura jerárquica logica y ordenada en los encabezados'}
		></i>
	{/if}

	{#each headers as header}
		<span
			class:text-zinc-500={storePage.data
				? !storePage.data.encabezados.some((encabezado: Encabezado) => encabezado.tag === header)
				: true}>{header}</span
		>
	{/each}
</div>

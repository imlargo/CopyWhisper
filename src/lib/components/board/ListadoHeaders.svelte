<script lang="ts">
	import { storePage } from '$stores/StorePage.svelte';
	import type { Encabezado } from '$src/lib/types';

	const headers = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'];
</script>

<div class="flex gap-4">
	{#each headers as header}
		<span
			class:text-zinc-500={storePage.data
				? !storePage.data.encabezados.some((encabezado: Encabezado) => encabezado.tag === header)
				: true}>{header}</span
		>
	{/each}
</div>

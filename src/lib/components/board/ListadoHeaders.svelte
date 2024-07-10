<script>
	import { storePage } from '$stores/StorePage.svelte';

	const headers = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'];
</script>

<div class="flex gap-4">
	{#each headers as header}
		<span
			class:text-zinc-500={!storePage.encabezados.some((encabezado) => encabezado.tag === header)}
			>{header}</span
		>
	{/each}
</div>

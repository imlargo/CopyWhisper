<script lang="ts">
	import { storePage } from '$src/lib/stores/StorePage.svelte';
	import RowEncabezado from './RowEncabezado.svelte';
</script>

{#if storePage.data !== null}
	{#each storePage.data.encabezados as encabezado, i}
		<RowEncabezado {encabezado} />
	{/each}
{/if}

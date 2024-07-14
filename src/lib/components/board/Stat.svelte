<script lang="ts">
	import { fade } from 'svelte/transition';
	import Placeholder from '$src/lib/components/Placeholder.svelte';
	import { tooltipAction } from '$src/lib/utils/tooltip';

	type Props = {
		tipo: string;
		valor: number | null;
		tooltip: string;
	};
	const { tipo, valor, tooltip }: Props = $props();
</script>

<div class="border border-zinc-600 rounded-xl px-7 py-7">
	<div class="flex justify-between items-start text-zinc-500 font-mono">
		<h5>{tipo}</h5>
		<i use:tooltipAction={tooltip} class="bi bi-info-circle"></i>
	</div>

	<span class="inline-flex text-4xl font-medium font-mono mt-3">
		{#if valor === null}
			<Placeholder class="flex h-9" />
		{:else}
			<span transition:fade={{ duration: 500 }}>{valor}</span>
		{/if}
	</span>
</div>

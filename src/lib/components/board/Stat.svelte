<script lang="ts">
	import { fade } from 'svelte/transition';
	import Placeholder from '$src/lib/components/Placeholder.svelte';

	type Props = {
		tipo: string;
		valor: number | null;
	};
	const { tipo, valor }: Props = $props();
</script>

<div class="border border-zinc-600 rounded-xl px-8 py-8">
	<h5 class="text-zinc-500">{tipo}</h5>

	<span class="inline-flex text-4xl font-medium font-mono mt-3">
		{#if valor === null}
			<Placeholder class="flex h-9" />
		{:else}
			<span transition:fade={{ duration: 500 }}>{valor}</span>
		{/if}
	</span>
</div>

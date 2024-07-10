<script>
	import { storePage } from '$stores/StorePage.svelte';
</script>

<div class="border-t border-zinc-800 py-5">
	<div class="flex justify-between items-center">
		<div class="flex items-center gap-5">
			<span class="ring-4 h-2 w-2 rounded-full {storePage.ok ? 'ok' : 'notok'}"></span>

			<div class="flex gap-4">
				<span>{storePage.link}</span>
				<span class="text-zinc-700">/</span>
				<span>{storePage.titulo}</span>
			</div>
		</div>

		<span
			class="inline-flex h-min items-center rounded-md bg-purple-700/10 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/60"
			>Badge</span
		>
	</div>

	<span class="inline-flex w-6/12 text-pretty mt-6 text-zinc-400">
		{#if storePage.descripcion === ''}
			Ups! No hay descripción disponible
		{:else}
			{storePage.descripcion}
		{/if}
	</span>
</div>

<style lang="scss">
	.ok {
		@apply bg-lime-500 ring-lime-200/10;
	}

	.notok {
		@apply bg-red-500 ring-red-200/10;
	}
</style>

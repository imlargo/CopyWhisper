<script>
	import { storePage } from '$stores/StorePage.svelte';
</script>

<div class="bg-white/10 p-5">
	<div class="flex justify-between items-center">
		<div class="flex items-center gap-5">
			<span class=" ring-4 h-2 w-2 rounded-full {storePage.ok ? 'ok' : 'notok'}"></span>
			<h5>
				<span>{storePage.titulo}</span>
				<span>/</span>
				<span>{storePage.link}</span>
			</h5>
		</div>

		<span
			class="inline-flex h-min items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10"
			>Badge</span
		>
	</div>

	<span class="inline-flex w-4/5 mt-3 text-sm text-slate-400">
		{#if storePage.descripcion === ""}
			Ups! No hay descripción disponible
		{:else}
			{storePage.descripcion}
		{/if}
	</span>
</div>

<style lang="scss">
	.ok {
		@apply bg-lime-500 ring-lime-200;
	}

	.notok {
		@apply bg-red-500 ring-red-200;
	}
</style>

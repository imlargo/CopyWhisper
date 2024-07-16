<script>
	import { storePage } from '$stores/StorePage.svelte';
	import { pageState } from '$utils/enums';

	import Badge from './Badge.svelte';
	import Placeholder from '../Placeholder.svelte';
</script>

<section class="flex justify-between items-center border-y border-zinc-800 py-5">
	<div class="flex items-center gap-5">
		<span
			class="ring-4 h-2 w-2 rounded-full {storePage.estado === pageState.OK ||
			storePage.estado === pageState.ANALIZADO
				? 'ok'
				: 'notok'}"
		></span>

		<div class="flex gap-4 font-mono">
			{#if storePage.estado === pageState.OK || storePage.estado === pageState.ANALIZADO}
				<span>{storePage.data ? storePage.data.link : ''}</span>
				<span class="text-zinc-700 select-none">/</span>
				<span>{storePage.data ? storePage.data.titulo : ''}</span>
			{:else}
				<Placeholder />
			{/if}
		</div>
	</div>

	{#if storePage.rate === null}
		<Placeholder />
	{:else}
		<Badge color="green">
			10
			<!--	{storePage.rate.total}
				-->
		</Badge>
	{/if}
</section>

<style lang="scss">
	.ok {
		@apply bg-lime-500 ring-lime-200/10;
	}

	.notok {
		@apply bg-red-500 ring-red-200/10;
	}
</style>

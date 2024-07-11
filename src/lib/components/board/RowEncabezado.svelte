<script lang="ts">
	import type { Encabezado } from '$lib/types';
	import Placeholder from '$src/lib/components/Placeholder.svelte';

	import Badge from './Badge.svelte';

	type Props = {
		encabezado: Encabezado;
		rate?: { calificacion: number };
	};
	const {
		encabezado,
		rate = {
			calificacion: -1
		}
	}: Props = $props();

	// Calcular profundidad del nodo en el árbol para aplicar padding
	const depth = parseInt(encabezado.tag.slice(1)) === 1 ? 0 : parseInt(encabezado.tag.slice(1)) - 1;
</script>

<div
	style:--depth={depth}
	class="grid grid-cols-12 items-center gap-x-7 border-b border-zinc-800 py-3 text-zinc-400"
>
	<span class="heading col-span-5 truncate">{encabezado.texto}</span>
	<span class="col-span-2">
		{#if rate.calificacion === -1}
			<Placeholder />
		{:else}
			<Badge
				color={rate.calificacion < 3
					? 'red'
					: rate.calificacion < 7
						? 'yellow'
						: rate.calificacion === 10
							? 'purple'
							: 'green'}
			>
				{rate.calificacion}
			</Badge>
		{/if}
	</span>
	<span class="col-span-2">{encabezado.tag}</span>
	<span class="col-span-1">0</span>
	<div class="flex justify-end col-span-2">
		<button class="rounded-md w-1/2 bg-white text-black font-medium py-0.5 px-2">Mejorar</button>
	</div>
</div>

<style lang="scss">
	.heading {
		display: block;
		padding-inline: calc(1.5rem * var(--depth));
	}
</style>

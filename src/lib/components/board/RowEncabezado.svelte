<script lang="ts">
	import type { Encabezado, Calificacion, ImproveRequest, ImproveElement } from '$lib/types';
	import Placeholder from '$src/lib/components/Placeholder.svelte';
	import { decodeStreamData } from '$utils/readable-stream.svelte';
	import { storePage } from '$src/lib/stores/StorePage.svelte';

	import Badge from './Badge.svelte';

	type Props = {
		encabezado: Encabezado;
		calificacion: Calificacion | null;
	};
	const { encabezado, calificacion: rate }: Props = $props();

	// Calcular profundidad del nodo en el árbol para aplicar padding
	const depth = parseInt(encabezado.tag.slice(1)) === 1 ? 0 : parseInt(encabezado.tag.slice(1)) - 1;

	// Estado para almacenar el encabezado mejorado por la IA
	let mejorado = $state('');

	async function handleMejora() {
		if (storePage.data === null) {
			return;
		}

		const improveRequest: ImproveRequest = {
			link: storePage.data.link,
			titulo: storePage.data.titulo,
			descripcion: storePage.data.descripcion,
			markdown: storePage.data.markdown,
			elemento: encabezado as ImproveElement
		};

		// Enviar la información de la página al servidor para obtener la calificación
		const streamResponse = await fetch('/api/improve', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(improveRequest)
		});

		if (streamResponse.body === null) {
			return;
		}

		mejorado = '';
		await decodeStreamData(streamResponse.body, (data: string) => {
			mejorado += data;
		});

		console.log(mejorado);
	}
</script>

<div
	style:--depth={depth}
	class="grid grid-cols-12 items-center gap-x-7 border-b border-zinc-800 py-3 text-zinc-400"
>
	<span class="heading col-span-5 truncate">{encabezado.content}</span>
	<span class="col-span-2">
		{#if rate === null}
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
	<span class="col-span-1">{mejorado}</span>
	<div class="flex justify-end col-span-2">
		<button
			onclick={handleMejora}
			class="rounded-full w-1/2 bg-white/5 text-white border border-zinc-600 font-medium text-sm py-0.5 px-2"
			>Mejorar</button
		>
	</div>
</div>

<style lang="scss">
	.heading {
		display: block;
		padding-inline: calc(1.5rem * var(--depth));
	}

	button {
		transition: all 300ms;

		&:active {
			transform: scale(0.95);
		}
	}
</style>

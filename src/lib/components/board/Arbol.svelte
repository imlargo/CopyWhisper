<script lang="ts">
	import type { Encabezado } from '$lib/types';

	type Props = {
		encabezado: Encabezado;
		hijos: Props[];
	};

	const { encabezado, hijos }: Props = $props();

	// Calcular profundidad del nodo en el árbol para aplicar padding
	const depth = parseInt(encabezado.tag.slice(1)) === 1 ? 0 : parseInt(encabezado.tag.slice(1)) - 1;
</script>

<ul>
	<li>
		<a href="/" class="py-1.5" style:--depth={depth}>{encabezado.texto}</a>

		{#if hijos.length > 0}
			{#each hijos as hijo}
				<svelte:self encabezado={hijo.encabezado} hijos={hijo.hijos} />
			{/each}
		{/if}
	</li>
</ul>

<style>
	a {
		--pad-inline: 0rem;
		display: block;
		padding-inline: calc(1rem * var(--depth) + var(--pad-inline)) var(--pad-inline);
		line-height: 1.25;
	}
</style>

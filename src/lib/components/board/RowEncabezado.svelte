<script lang="ts">
	import type { Encabezado } from '$lib/types';

	type Props = {
		encabezado: Encabezado;
	};
	const { encabezado }: Props = $props();

	const nivel = parseInt(encabezado.tag.slice(1));
	// Calcular profundidad del nodo en el árbol para aplicar padding
	const depth = nivel === 1 ? 0 : nivel - 1;
</script>

<span class="header flex items-center gap-2 py-1.5 text-zinc-" style:--depth={depth}>
	<i class="bi bi-type-h{nivel} text-zinc-600"></i>
	<span class="truncate">{encabezado.content}</span>
</span>

<style lang="scss">
	.header {
		padding-left: calc(1.25rem * var(--depth));
		line-height: 1.25;
	}
</style>

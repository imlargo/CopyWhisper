<script lang="ts">
	import { fade } from 'svelte/transition';
	import { tooltipAction } from '$src/lib/utils/tooltip';

	type Props = {
		tipo: string;
		rate: any;
		descripcion?: string;
	};
	const { tipo, rate, descripcion }: Props = $props();

	let tooltip = $derived.by(() => {
		if (rate === null) {
			return 'Cargando';
		}

		const calificacion =
			rate.cualitativo === 'bajo'
				? 'Baja'
				: rate.cualitativo === 'medio'
					? 'Media'
					: rate.cualitativo === 'alto'
						? 'Alta'
						: 'Excelente';

		if (rate.hasOwnProperty('errores')) {
			const errores = rate.errores.map((err) => `${err.error} -> ${err.correccion}`).join('\n');
			console.log(`${rate.cualitativo}, ${rate.comentarios}\n${errores}`);
			return `Calificacion: ${calificacion}\n\n${rate.comentarios}\n\nErrores:\n${errores}`;
		}

		return `Calificacion: ${calificacion}\n\n${rate.comentarios}`;
	});
</script>

<div
	use:tooltipAction={tooltip}
	class="border border-zinc-600 rounded-xl px-7 py-7 bg-zinc-800/10 hover:bg-zinc-800/30 cursor-pointer"
>
	<div class="flex justify-between items-center text-zinc-500 text-sm font-mono">
		<h5>
			{tipo}
		</h5>
		<span
			class="ring-4 p-1 size-1.5 rounded-full rate-{rate === null
				? 'gris'
				: rate.cualitativo.toLowerCase()}"
		></span>
	</div>

	<span class="inline-flex items-end gap-1 text-4xl font-medium font-mono mt-3">
		<span class:animate-pulse={rate === null} transition:fade={{ duration: 500 }}
			>{rate === null ? '...' : rate.cuantitativo}</span
		>
		<span class="text-sm text-zinc-600">/</span>
		<span class="text-sm text-zinc-600">10</span>
	</span>
</div>

<style lang="scss">
	.rate-bajo {
		@apply bg-rose-500 ring-rose-200/10;
	}

	.rate-medio {
		@apply bg-amber-500 ring-amber-200/10;
	}

	.rate-alto {
		@apply bg-lime-500 ring-lime-200/10;
	}

	.rate-excelente {
		@apply bg-violet-500 ring-violet-200/10;
	}

	.rate-gris {
		@apply bg-zinc-700 ring-zinc-100/10;
	}
</style>

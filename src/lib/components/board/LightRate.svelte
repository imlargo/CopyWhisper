<script lang="ts">
	import { fade } from 'svelte/transition';

	import { tooltipAction } from '$src/lib/utils/tooltip';

	type Props = {
		color: string;
	};

	const { color }: Props = $props();
	const mensaje =
		color === 'red'
			? 'El encabezado necesita mejoras'
			: color === 'yellow'
				? 'El encabezado está regular y necesita mejoras'
				: color === 'green'
					? 'El encabezado está bien'
					: 'El encabezado está excelente';
</script>

<span
	use:tooltipAction={mensaje}
	class="ring-4 p-1 size-1.5 rounded-full rate-{color}"
	transition:fade
>
</span>

<style lang="scss">
	.rate-red {
		@apply bg-rose-500 ring-rose-200/10;
	}

	.rate-yellow {
		@apply bg-amber-500 ring-amber-200/10;
	}

	.rate-green {
		@apply bg-lime-500 ring-lime-200/10;
	}

	.rate-purple {
		@apply bg-violet-500 ring-violet-200/10;
	}
</style>

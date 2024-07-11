<script lang="ts">
	import { fade } from 'svelte/transition';

	type Props = {
		color: string;
	};

	const { color }: Props = $props();
</script>

<span
	class="inline-flex h-min items-center rounded-full px-5 py-1 text-xs font-medium ring-1 ring-inset badge-{color}"
	transition:fade
>
	<slot />
</span>

<style lang="scss">
	.badge-red {
		@apply bg-rose-950 ring-rose-400/50 text-rose-300;
	}

	.badge-yellow {
		@apply bg-amber-950 ring-amber-400/50 text-amber-300;
	}

	.badge-green {
		@apply bg-lime-950 ring-lime-400/50 text-lime-300;
	}

	.badge-purple {
		@apply bg-violet-950 ring-violet-400/50 text-violet-300;
	}
</style>

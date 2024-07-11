<script lang="ts">
	import { fade } from "svelte/transition";
	
	type Props = {
		rate: number;
	};

	const { rate }: Props = $props();
	const rateColor = rate < 3 ? 'red' : rate < 7 ? 'yellow' : rate === 10 ? 'purple' : 'green';
</script>

<span
	class="inline-flex h-min items-center rounded-full px-5 py-1 text-xs font-medium ring-1 ring-inset rate-{rateColor}"
	transition:fade
>
	{rate}
</span>

<style lang="scss">
	.rate-red {
		@apply bg-rose-950 ring-rose-400/50 text-rose-300;
	}

	.rate-yellow {
		@apply bg-amber-950 ring-amber-400/50 text-amber-300;
	}

	.rate-green {
		@apply bg-lime-950 ring-lime-400/50 text-lime-300;
	}

	.rate-purple {
		@apply bg-violet-950 ring-violet-400/50 text-violet-300;
	}
</style>

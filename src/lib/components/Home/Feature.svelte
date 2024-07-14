<script lang="ts">
	const { titulo, descripcion } = $props();
</script>

<div class="feature border border-white/20 p-9 rounded-lg hover:bg-zinc-800/20">
	<h5 class="flex-none mt-2 font-mono">
		<i class="bi bi-stars text-violet-300"></i> <span>{titulo}</span>
	</h5>

	<p class="text-zinc-400 mt-2">
		{descripcion}
	</p>
</div>

<style lang="scss">
	.feature {
		position: relative;
		transition: all 0.3s ease;
		overflow: hidden;

		&::after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			height: 100%;
			width: 100%;

			background-image: url('$lib/assets/noise.webp');
			background-size: 10rem;

			mix-blend-mode: overlay;

			opacity: 0.3;
			z-index: -1;
		}

		transition: all 0.3s ease;

		&:hover::before {
			background: rgba(179, 86, 255, 0.3);
		}

		&::before {
			content: '';
			position: absolute;
			top: -20%;
			left: -10%;
			aspect-ratio: 1/1;
			height: 100%;
			width: auto;
			z-index: -7;
			border-radius: 999%;
			filter: blur(45px);

			background: rgba(171, 97, 255, 0.2);
			transition: all 0.3s ease;
		}
	}
</style>

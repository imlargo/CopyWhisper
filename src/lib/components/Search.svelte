<script lang="ts">
	import { goto } from '$app/navigation';
	import { storePage } from '$stores/StorePage.svelte';

	function searchAction(parent: HTMLElement) {
		// Obtener el link ingresado por el usuario
		parent.querySelector('button')?.addEventListener('click', async () => {
			const link = parent.querySelector('input')?.value;

			if (!link) {
				return;
			}

			const queryParams = new URLSearchParams({
				link: link
			});

			storePage.reset();

			await goto(`/app?${queryParams.toString()}`);
		});
	}
</script>

<div use:searchAction class="flex gap-3 w-full">
	<input
		type="text"
		class="rounded-full py-3 px-8 text-black w-full shadow-lg shadow-violet-500/20 focus:shadow-violet-500/50 border border-violet-500/40 font-mono"
		placeholder="Ingresa el link de tu sitio"
	/>

	<button
		class="rounded-full font-medium aspect-square h-full w-auto border border-violet-500/40 text-white bg-white/5 hover:bg-white/10"
	>
		<i class="bi bi-arrow-right"></i>
	</button>
</div>

<style lang="scss">
	input {
		outline: none;
		transition: all 200ms;
	}

	button {
		position: relative;
		transition: all 200ms;

		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			height: 100%;
			width: 100%;
			z-index: -1;
			border-radius: 999px;
			transition: all 200ms;
		}

		&:active {
			transform: scale(0.95);
			color: #000000;
			&::before {
				width: 100%;
				background-color: #ffffff;
			}
		}
	}
</style>

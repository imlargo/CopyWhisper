<script lang="ts">
	import { goto } from '$app/navigation';

	async function handleSubmit() {
		// Obtener el link ingresado por el usuario
		const link = document.querySelector('input')?.value;

		if (!link) {
			return;
		}

		const queryParams = new URLSearchParams({
			link: link
		});

		await goto(`/app?${queryParams.toString()}`);
	}
</script>

<div class="flex justify-center mx-auto">
	<div class="flex gap-3 w-4/12">
		<input
			type="text"
			class="rounded-full py-3 px-8 text-black w-full shadow-lg shadow-violet-500/20 focus:shadow-violet-500/50"
			placeholder="Ingresa el link de tu sitio"
		/>

		<button
			onclick={handleSubmit}
			class="rounded-full font-medium aspect-square h-full w-auto border border-white/20 text-white bg-white/5 hover:bg-white/10"
		>
			<i class="bi bi-arrow-right"></i>
		</button>
	</div>
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

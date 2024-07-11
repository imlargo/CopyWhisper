<script lang="ts">
	import { getPage } from '$lib/utils/scrapper';
	import { storePage } from '$stores/StorePage.svelte';
	import type { RateRequest, Rate } from '../types';

	async function handleSubmit() {
		// Obtener el link ingresado por el usuario
		const link = document.querySelector('input')?.value;

		if (!link) {
			return;
		}

		// Obtener la información de la página
		const pageData = await getPage(link as string);

		// En caso de error al obtener la información de la página se notifica al usuario
		if (pageData === null) {
			console.log('error');
			storePage.ok = false;
			return;
		}

		// Inicializar el store con la información base de la página
		storePage.init(pageData);

		const rateRequest: RateRequest = {
			link: pageData.link,
			titulo: pageData.titulo,
			descripcion: pageData.descripcion,
			markdown: pageData.markdown,
			encabezados: pageData.encabezados.map((encabezado, i) => ({ id: i + 1, ...encabezado }))
		};

		// Enviar la información de la página al servidor para obtener la calificación
		const response = await fetch('/api/rate', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(rateRequest)
		});

		const rate: Rate = await response.json();

		// Guardar la calificación en el store
		storePage.setRate(rate);
	}
</script>

<div class="flex justify-center py-8 mx-auto">
	<div class="flex gap-3">
		<input
			type="text"
			class="rounded-full py-2 px-6 text-black"
			placeholder="Ingresa el link de tu sitio"
		/>
		<button onclick={handleSubmit} class="rounded-full font-medium text-black px-6 py-2 bg-white"
			>Buscar</button
		>
	</div>
</div>

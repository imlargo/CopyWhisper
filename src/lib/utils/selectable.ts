import { decodeStreamData } from '$utils/readable-stream.svelte';
import type { ImproveRequest } from '../types';
import { storePage } from '../stores/StorePage.svelte';

export function createImproveHandler(element: HTMLElement) {
	return async () => {
		if (storePage.data === null) {
			return;
		}

		const improveContentRequest: ImproveRequest = {
			link: storePage.data.link,
			titulo: storePage.data.titulo,
			descripcion: storePage.data.descripcion,
			markdown: storePage.data.markdown,
			elemento: {
				content: element.textContent as string,
				tag: element.tagName
			}
		};

		element.textContent = 'Mejorando...';

		// Enviar la información de la página al servidor para obtener la calificación
		const streamResponse = await fetch('/api/improve', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(improveContentRequest)
		});

		if (streamResponse.body === null) {
			return;
		}

		element.textContent = '';
		await decodeStreamData(streamResponse.body, (data: string) => {
			element.textContent += data;
		});

		console.log(element.textContent);
	};
}

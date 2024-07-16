import type { Encabezado } from '$lib/types';

export function verificarEncabezados(encabezados: Encabezado[]): boolean {
	let inicial = parseInt(encabezados[0].tag.slice(1));
	let anterior = inicial;
	for (const encabezado of encabezados) {
		const currNivel = parseInt(encabezado.tag.slice(1));

		if (currNivel > inicial) {
			return false;
		}

		if (anterior - currNivel > 1) {
			return false;
		}
	}

	return true;
}

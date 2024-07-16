import type { Encabezado } from '$lib/types';

export function verificarEncabezados(encabezados: Encabezado[]): boolean {
	const inicial = parseInt(encabezados[0].tag.slice(1));
	let anterior = inicial;
	for (const encabezado of encabezados) {
		const currNivel = parseInt(encabezado.tag.slice(1));

		if (currNivel > inicial) {
			return false;
		}

		if (anterior - currNivel > 1) {
			return false;
		}

		anterior = currNivel;
	}

	return true;
}

export function getCodeAsMarkdown(tipo: string, contenido: string): string {
	return `\`\`\`${tipo}
${contenido}
\`\`\``;
}

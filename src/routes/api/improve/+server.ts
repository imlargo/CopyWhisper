import { prompts } from '$src/lib/utils/prompts';
import { generateStreamResponse } from '$server/IA';
import type { ImproveRequest } from '$src/lib/types';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	// Obtener los datos de la pagina
	const requestData: ImproveRequest = await request.json();

	const isTitulo = requestData.elemento.tag.toLowerCase().includes('h');

	// Generar prompt con respecto a los datos de la pagina
	const prompt = isTitulo
		? prompts.MEJORAR_TITULO(requestData)
		: prompts.MEJORAR_CONTENIDO(requestData);

	const result = await generateStreamResponse(prompt);

	return result;
};

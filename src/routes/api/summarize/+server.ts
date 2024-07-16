import { prompts } from '$src/lib/utils/prompts';
import { generateStreamResponse } from '$server/IA';
import type { RequestHandler } from './$types';
import type { summarizeRequest } from '$src/lib/types';

export const POST: RequestHandler = async ({ request }) => {
	// Obtener los datos de la pagina
	const requestData: summarizeRequest = await request.json();

	// Generar prompt con respecto a los datos de la pagina
	const { sys, prompt } = prompts.RESUMIR(requestData);

	const result = await generateStreamResponse(sys, prompt);

	return result;
};

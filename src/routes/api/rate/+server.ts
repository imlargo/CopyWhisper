import { json } from '@sveltejs/kit';
import type { RateRequest, Rate } from '$src/lib/types';
import { prompts } from '$src/lib/utils/prompts';
import { generateObjectResponse } from '$server/IA';
import type { RequestHandler } from './$types';
import { z } from 'zod';

export const POST: RequestHandler = async ({ request }) => {
	// Obtener los datos de la pagina
	const requestData: RateRequest = await request.json();

	// Generar prompt con respecto a los datos de la pagina
	const { sys, prompt } = prompts.CALIFICAR_CONTENIDO(requestData);

	const rateSchema = z.object({
		cuantitativo: z.number(),
		cualitativo: z.union([
			z.literal('bajo'),
			z.literal('medio'),
			z.literal('alto'),
			z.literal('excelente')
		]),
		comentarios: z.string(),
		recomendaciones: z.string()
	});

	const schema = z.object({
		contenido: rateSchema,
		tono: rateSchema,
		persuacion: rateSchema,
		errores: rateSchema
	});

	const result = await generateObjectResponse(sys, prompt, schema);

	return json(result);
};

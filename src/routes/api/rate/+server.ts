import { json } from '@sveltejs/kit';
import type { RateRequest } from '$src/lib/types';
import { prompts } from '$src/lib/utils/prompts';
import { generateTextResponse } from '$server/IA';

export async function POST({ request }) {
	const requestData: RateRequest = await request.json();

	const prompt = prompts.CALIFICAR_TITULOS(requestData);

	const result = await generateTextResponse(prompt);

	const response = JSON.parse(result.slice(result.indexOf('{'), result.lastIndexOf('}') + 1));

	return json(response);
}

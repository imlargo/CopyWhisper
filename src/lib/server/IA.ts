import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { generateText, streamText } from 'ai';
import { env } from '$env/dynamic/private';

const provider = createGoogleGenerativeAI({
	apiKey: env.GOOGLE_GENERATIVE_AI_API_KEY ?? ''
});

const model = provider('models/gemini-pro');

/*
 * Generar respuesta en base a un prompt y devolverla como un string
 */
export async function generateTextResponse(system: string, prompt: string): Promise<string> {
	const { text } = await generateText({
		model: model,
		system: system,
		prompt: prompt
	});

	return text;
}
/*
 * Generar respuesta en base a un prompt y devolverla como un ReadableStream
 */
export async function generateStreamResponse(system: string, prompt: string) {
	const result = await streamText({
		model: model,
		system: system,
		prompt: prompt
	});

	return result.toTextStreamResponse();
}

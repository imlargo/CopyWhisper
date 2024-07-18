import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { generateText, streamText, generateObject, streamObject } from 'ai';
import { env } from '$env/dynamic/private';

const TEMPERATURA = 0.75;

const provider = createGoogleGenerativeAI({
	apiKey: env.GOOGLE_GENERATIVE_AI_API_KEY ?? ''
});

const model = provider('models/gemini-1.5-pro-latest');

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
		temperature: TEMPERATURA,
		system: system,
		prompt: prompt
	});

	return result.toTextStreamResponse();
}

export async function generateObjectResponse(system: string, prompt: string, schema: any) {
	const { object } = await generateObject({
		model: model,
		system: system,
		prompt: prompt,
		schema: schema
	});

	return object;
}

export async function generateObjectStream(system: string, prompt: string, schema: any) {
	const { partialObjectStream } = await streamObject({
		model: model,
		system: system,
		prompt: prompt,
		schema: schema
	});

	return partialObjectStream;
}

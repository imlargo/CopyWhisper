import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { generateText, StreamData, StreamingTextResponse, streamText } from 'ai';
import { env } from '$env/dynamic/private';

const provider = createGoogleGenerativeAI({
	apiKey: env.GOOGLE_GENERATIVE_AI_API_KEY ?? ''
});

const model = provider('models/gemini-pro');

export async function generateTextResponse(prompt: string) {
	const { text } = await generateText({
		model: model,
		prompt: prompt
	});

	return text;
}

export async function generateStreamResponse(prompt: string) {
	const result = await streamText({
		model: model,
		prompt: prompt
	});

	return result.toTextStreamResponse();
}

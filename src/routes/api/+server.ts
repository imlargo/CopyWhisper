import { json } from '@sveltejs/kit';
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { generateText, StreamData, StreamingTextResponse, streamText } from 'ai';
import type { RequestHandler } from './chat/$types';
import { env } from '$env/dynamic/private';

const google = createGoogleGenerativeAI({
    apiKey: env.GOOGLE_GENERATIVE_AI_API_KEY ?? ''
});

export const POST = (async ({ request }) => {
    const { prompt } = await request.json();

    const result = await streamText({
        model: google('models/gemini-pro'),
        prompt: prompt,
    });

    const data = new StreamData();
    const stream = result.toAIStream({
        onFinal(_) {
            data.close();
        },
    });

    return new StreamingTextResponse(stream, {}, data);

    // Regresar el texto generado
    // return json({ response }, { status: 200 });

}) satisfies RequestHandler;





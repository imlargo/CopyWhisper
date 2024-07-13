import { text } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	const { link } = await request.json();

	const rawHtml = await fetch(link).then((res) => res.text());

	return text(rawHtml);
};

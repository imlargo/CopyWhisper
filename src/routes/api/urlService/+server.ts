import { text } from '@sveltejs/kit';

export async function POST({ request }) {
	const { link } = await request.json();

	const rawHtml = await fetch(link).then((res) => res.text());

	return text(rawHtml);
}

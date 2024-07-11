import { json } from '@sveltejs/kit';

export async function POST() {
	return json({ message: 'Hi imlargo!' });
}

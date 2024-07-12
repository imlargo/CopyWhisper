import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load = (async ({ url }) => {
	const link = url.searchParams.get('link');

	if (!link) {
		redirect(307, '/');
	}

	return {};
}) satisfies PageServerLoad;

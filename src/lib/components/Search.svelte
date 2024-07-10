<script lang="ts">
	import { getPage } from '$lib/utils/scrapper';
	import { storePage } from '$stores/StorePage.svelte';
	import { error } from '@sveltejs/kit';

	async function handleSubmit() {
		const link = document.querySelector('input')?.value;

		const pageData = await getPage(link as string);

		if (pageData === null) {
			console.log('error');
			storePage.ok = false;
			return;
		}

		console.log(pageData);

		storePage.init(pageData);
	}
</script>

<div class="py-3">
	<input type="text" class="rounded-md text-black" />
	<button onclick={handleSubmit} class="rounded-md px-2 py-1 bg-white/30">Buscar</button>
</div>

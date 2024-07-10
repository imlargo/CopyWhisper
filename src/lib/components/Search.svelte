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

<div class="flex justify-center py-8 mx-auto">
	<div class="flex gap-3">
		<input type="text" class="rounded-full py-2 px-6 text-black" placeholder="Ingresa el link de tu sitio" />
		<button onclick={handleSubmit} class="rounded-full font-medium text-black px-6 py-2 bg-white">Buscar</button>
	</div>
</div>

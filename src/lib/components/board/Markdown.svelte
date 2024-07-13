<script lang="ts">
	type Props = {
		html: string;
	};

	import { decodeStreamData } from '$utils/readable-stream.svelte';
	import type { ImproveRequest } from '$lib/types';
	import { storePage } from '$stores/StorePage.svelte';

	const { html }: Props = $props();

	function listenSelectableElements(parent: HTMLElement) {
		const generatingIcon = '<i class="bi bi-pen"></i> ';
		const doneIcon = '<i class="bi bi-stars"></i> ';
		const selectableElements = parent.querySelectorAll('h1,h2,h3,h4,h5,p,a');

		selectableElements.forEach((element) => {
			element.addEventListener('click', async () => {
				if (storePage.data === null) {
					return;
				}

				const improveContentRequest: ImproveRequest = {
					link: storePage.data.link,
					titulo: storePage.data.titulo,
					descripcion: storePage.data.descripcion,
					markdown: storePage.data.markdown,
					elemento: {
						content: element.textContent as string,
						tag: element.tagName
					}
				};

				element.classList.add('animate-pulse', 'bg-white/10');

				element.innerHTML = `${generatingIcon} Mejorando...`;

				// Enviar la información de la página al servidor para obtener la calificación
				const streamResponse = await fetch('/api/improve', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(improveContentRequest)
				});

				if (streamResponse.body === null) {
					return;
				}

				element.innerHTML = `${doneIcon} `;
				await decodeStreamData(streamResponse.body, (data: string) => {
					element.innerHTML += data;
				});

				element.classList.remove('animate-pulse', 'bg-white/10');

				console.log(element.textContent);
			});
		});
	}
</script>

<div use:listenSelectableElements class="md" spellcheck="true">
	{@html html}
</div>

<style lang="scss">
	.selectable {
		@apply px-4 py-2 rounded-md;
		&:hover {
			@apply cursor-pointer bg-white/5;
		}
	}

	.md :global(h1) {
		@apply text-3xl font-bold text-zinc-100;
		@apply selectable;
	}

	.md :global(h2) {
		@apply text-2xl font-bold  text-zinc-200;
		@apply selectable;
	}

	.md :global(h3) {
		@apply text-xl font-bold  text-zinc-200;
		@apply selectable;
	}

	.md :global(h4) {
		@apply text-lg font-bold;
		@apply selectable;
	}

	.md :global(h5) {
		@apply text-base font-bold;
		@apply selectable;
	}

	.md :global(ul) {
		@apply list-disc flex flex-col gap-2 pl-5 text-zinc-400;
	}
	.md :global(p) {
		@apply font-light text-base text-zinc-400;
		@apply selectable;
	}

	.md :global(a) {
		@apply underline;
		@apply selectable;
	}
</style>

<script lang="ts">
	type Props = {
		html: string;
	};

	const { html }: Props = $props();

	import { createImproveHandler } from '$src/lib/utils/selectable';

	function listenSelectableElements(parent: HTMLElement) {
		const selectableElements = parent.querySelectorAll('h1,h2,h3,h4,h5,p,a');

		selectableElements.forEach((element) => {
			element.addEventListener('click', createImproveHandler(element as HTMLElement));
		});
	}
</script>

<div use:listenSelectableElements class="md" spellcheck="true">
	{@html html}
</div>

<style lang="scss">
	.selectable {
		@apply px-3 py-1.5 rounded-md;
		&:hover {
			@apply cursor-pointer bg-white/5;
		}
	}

	.md :global(h1) {
		@apply text-3xl font-bold mt-3 text-zinc-100;
		@apply selectable;
	}

	.md :global(h2) {
		@apply text-2xl font-bold mt-3 text-zinc-200;
		@apply selectable;
	}

	.md :global(h3) {
		@apply text-xl font-bold mt-3 text-zinc-200;
		@apply selectable;
	}

	.md :global(h4) {
		@apply text-lg font-bold mt-3;
		@apply selectable;
	}

	.md :global(h5) {
		@apply text-base font-bold mt-3;
		@apply selectable;
	}

	.md :global(ul) {
		@apply list-disc flex flex-col gap-2 pl-5 text-zinc-400;
	}
	.md :global(p) {
		@apply font-light text-base my-3 text-zinc-400;
		@apply selectable;
	}

	.md :global(a) {
		@apply underline;
		@apply selectable;
	}
</style>

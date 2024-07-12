<script lang="ts">
	type Props = {
		html: string;
	};

	const { html }: Props = $props();
</script>

<div class="md" spellcheck="true">
	{@html html}
</div>

<style lang="scss">
	.md :global(h1) {
		@apply text-3xl font-bold mt-3 text-zinc-100;
	}

	.md :global(h2) {
		@apply text-2xl font-bold mt-3 text-zinc-200;
	}

	.md :global(h3) {
		@apply text-xl font-bold mt-3 text-zinc-200;
	}

	.md :global(h4) {
		@apply text-lg font-bold mt-3;
	}

	.md :global(h5) {
		@apply text-base font-bold mt-3;
	}

	.md :global(ul) {
		@apply list-disc flex flex-col gap-2 pl-5 text-zinc-400;
	}

	.md :global(p) {
		@apply font-light text-base my-3 text-zinc-400;
	}

	.md :global(a) {
		@apply underline;
	}
</style>

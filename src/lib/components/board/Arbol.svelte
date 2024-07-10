<script>
	const { encabezado, children } = $props();
	const depth = parseInt(encabezado.tag.slice(1)) === 1 ? 0 : parseInt(encabezado.tag.slice(1)) - 1;
</script>

<ul>
	<li>
		<a href="/" class="py-1.5" style:--depth={depth}>{encabezado.texto}</a>

		{#if children.length > 0}
			{#each children as hijo}
				<svelte:self encabezado={hijo.encabezado} children={hijo.children} />
			{/each}
		{/if}
	</li>
</ul>

<style>
	a {
		--pad-inline: 0rem;
		display: block;
		padding-inline: calc(1rem * var(--depth) + var(--pad-inline)) var(--pad-inline);
		line-height: 1.25;
	}
</style>

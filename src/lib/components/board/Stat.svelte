<script lang="ts">
	type Props = {
		tipo: string;
		valor: number;
	};
	const { tipo = 'Estadistica', valor = 13 }: Props = $props();
</script>

<div class="border border-zinc-600 rounded-xl p-7">
	<h5 class="text-zinc-500">{tipo}</h5>
	<span class="inline-flex text-4xl font-medium font-mono mt-3">{valor}</span>
</div>

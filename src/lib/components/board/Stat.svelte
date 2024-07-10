<script>
	const { tipo = 'Estadistica', valor = 13 } = $props();
</script>

<div class="border border-slate-500 p-5">
	<h5 class="text-slate-400">{tipo}</h5>
	<span class="inline-flex text-4xl font-mono mt-3">{valor}</span>
</div>

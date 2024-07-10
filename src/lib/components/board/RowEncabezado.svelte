<script>
	const { encabezado } = $props();
</script>

<div class="grid grid-cols-6 gap-x-7 border-b border-slate-800 py-3 text-slate-400">
	<span class="col-span-2 text-wrap">{encabezado.texto}</span>
	<span>Calificacion</span>
	<span>{encabezado.tag}</span>
	<span>0</span>
	<button class="rounded bg-white/10">Mejorar</button>
</div>

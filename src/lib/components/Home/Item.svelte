<script lang="ts">
	const { titulo, descripcion, icon } = $props();
</script>

<div>
	<div class="flex gap-3 items-center justify-between">
		<h5 class="flex-none font-mono"><i class="text-violet-400 {icon}"></i> {titulo}</h5>
		<span class="h-0.5 bg-violet-500/30 w-full"></span>
	</div>

	<p class="text-zinc-400 mt-2">
		{descripcion}
	</p>
</div>

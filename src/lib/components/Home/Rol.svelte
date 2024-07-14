<script>
	const { rol, descripcion, icon } = $props();
</script>

<div class="flex flex-col items-center rounded-lg border border-zinc-700 p-8 overflow-hidden">
	<div class="flex items-center justify-center relative">
		<div class="flex border border-violet-300/10 bg-violet-800/5 p-3 rounded-full">
			<div class="border p-3 rounded-full border-violet-300/20 bg-violet-800/30">
				<div class="border px-3 py-2 rounded-full border-violet-300/50 bg-violet-800/50 glow">
					<i class="{icon} text-2xl bg-transparent"></i>
				</div>
			</div>
		</div>
	</div>

	<h3 class="text-xl mt-7 font-mono">{rol}</h3>

	<p class="text-zinc-400 text-center text-pretty mt-2">
		{descripcion}
	</p>
</div>

<style>
	.glow {
		box-shadow: 0 0 6rem 3rem rgb(127, 90, 240, 0.3);
	}
</style>

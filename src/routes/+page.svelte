<script>
	import Search from '$components/Search.svelte';
	import Hero from '$src/lib/components/Hero.svelte';
	import Item from '$src/lib/components/Home/Item.svelte';
	import Feature from '$src/lib/components/Home/Feature.svelte';
	import Rol from '$src/lib/components/Home/Rol.svelte';
</script>

<section class="page-container space-y-12 py-24">
	<Hero />

	<div class="flex justify-center mx-auto w-4/12">
		<Search />
	</div>
</section>

<section class="page-container py-24 grid grid-cols-4 gap-x-8">
	<Item
		titulo="Ingresa tu sitio"
		descripcion="Ingresa la URL de tu sitio. ¡Fácil y rápido!"
		icon="bi bi-search-heart"
	/>

	<Item
		titulo="Análisis Detallado"
		descripcion="Nuestra IA escanea y evalúa tu contenido en tiempo real."
		icon="bi bi-stars"
	/>

	<Item
		titulo="Calificación y Feedback"
		descripcion="Recibe una calificación detallada y feedback sobre áreas de mejora."
		icon="bi bi-activity"
	/>

	<Item
		titulo="Recomendaciones Personalizadas"
		descripcion="Autocompletado y recomendaciones para optimizar tu copywriting."
		icon="bi bi-award"
	/>
</section>

<section class="page-container py-24">
	<h2 class="text-6xl text-center">La Magia de CopyWhisper</h2>
	<p class="text-center text-pretty w-8/12 text-zinc-400 mx-auto mt-3">
		Descubre las potentes funcionalidades que hacen de CopyWhisper la herramienta definitiva para
		mejorar tu copywriting.
	</p>

	<div class="mt-24 grid grid-cols-3 gap-x-7 gap-y-12">
		<Feature
			titulo="Análisis Detallado"
			descripcion="Nuestra IA examina cada aspecto de tu contenido, desde la gramática hasta el tono y la estructura."
		/>

		<Feature
			titulo="Calificación de Contenido"
			descripcion="Obtén una puntuación clara y precisa que te indica la efectividad de tu copywriting."
		/>

		<Feature
			titulo="Recomendaciones Personalizadas"
			descripcion="Recibe sugerencias específicas basadas en el análisis de tu contenido, adaptadas a tus necesidades."
		/>
	</div>
</section>

<hr class="page-container hr-divider" />

<section class="page-container py-24">
	<h2 class="text-6xl text-center">Una herramienta creada para desarrolladores.</h2>
	<p class="text-center text-pretty w-8/12 text-zinc-400 mx-auto mt-3">
		Perfecta para desarrolladores, redactores y profesionales del marketing, nuestra herramienta
		hace que mejorar tu copywriting sea más fácil y efectivo que nunca.
	</p>

	<div class="mt-24 grid grid-cols-3 gap-x-7 gap-y-12">
		<div class="mt-16">
			<Rol
				rol="Diseñadores"
				descripcion="Reduce el tiempo y esfuerzo dedicados a la revisión de contenido, permitiendo a tu equipo enfocarse en el diseño."
				icon="bi bi-brush"
			/>
		</div>
		<div>
			<Rol
				rol="Desarrolladores"
				descripcion="CopyWhisper hace que sea sencillo para los desarrolladores revisar y mejorar el copywriting sin necesidad de ser expertos en el área."
				icon="bi bi-code-slash"
			/>
		</div>
		<div class="mt-16">
			<Rol
				rol="Copywritters"
				descripcion="Ahorra tiempo con nuestras recomendaciones automáticas detalladas y autocompletado."
				icon="bi bi-feather"
			/>
		</div>
	</div>
</section>

<section class="page-container py-24">
	<div class="grid grid-cols-12 bg-white/5 py-24 rounded-2xl px-24 border border-violet-400/70">
		<div class="col-span-6">
			<h1 class="text-5xl font-medium mb-3">Empieza Hoy Mismo</h1>
			<p class="text-zinc-400 text-pretty">
				No esperes más para transformar tu contenido web. Regístrate ahora en CopyWhisper y descubre
				el poder de la inteligencia artificial para mejorar tu copywriting.
			</p>
		</div>

		<div class="col-span-6 flex flex-col justify-center items-end">
			<div class="flex justify-end w-8/12">
				<Search />
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.hr-divider {
		@apply border-t border-violet-400/50 shadow-xl shadow-violet-400;

		mask-image: linear-gradient(
			90deg,
			rgba(0, 0, 0, 0) 0%,
			rgba(0, 0, 0, 1) 50%,
			rgba(0, 0, 0, 0) 100%
		);
	}
</style>

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

<section class="page-container py-24 grid grid-cols-4 gap-x-6">
	<Item
		titulo="Ingresa tu sitio"
		descripcion="Proporciona la URL de tu sitio web. ¡Así de fácil y rápido!"
		icon="bi bi-search-heart"
	/>

	<Item
		titulo="Análisis Detallado"
		descripcion="CopyWhisper escanea y analiza tu contenido en tiempo real."
		icon="bi bi-stars"
	/>

	<Item
		titulo="Calificación y Feedback"
		descripcion="Obtén una calificación detallada y sugerencias sobre áreas de mejora."
		icon="bi bi-activity"
	/>

	<Item
		titulo="Recomendaciones Personalizadas"
		descripcion="Recibe autocompletado personalizado para mejorar el contenido."
		icon="bi bi-award"
	/>
</section>

<section class="page-container py-24">
	<h2 class="text-6xl text-center">La Magia de CopyWhisper</h2>
	<hr class="hr-header" />
	<p class="text-center text-lg text-pretty w-7/12 text-zinc-400 mx-auto">
		Descubre las potentes funcionalidades que hacen de CopyWhisper la herramienta definitiva para
		analizar y mejorar el copywriting de tu pagina.
	</p>

	<div class="mt-24 grid grid-cols-3 gap-x-7 gap-y-12">
		<Feature
			titulo="Análisis Detallado"
			descripcion="CopyWhisper examina cada aspecto de tu contenido, desde la gramática hasta el tono y la estructura."
		/>

		<Feature
			titulo="Calificación de Contenido"
			descripcion="Obtén una puntuación detallada que mide la efectividad de tu copywriting."
		/>

		<Feature
			titulo="Recomendaciones Personalizadas"
			descripcion="Recibe sugerencias específicas basadas en el análisis de tu contenido, personalizadas a tus necesidades."
		/>
	</div>
</section>

<hr class="page-container hr-divider" />

<section class="page-container py-24">
	<h2 class="text-6xl text-center">Una Herramienta para Todos.</h2>
	<hr class="hr-header" />
	<p class="text-center text-lg text-pretty w-7/12 text-zinc-400 mx-auto">
		CopyWhisper es perfecta para desarrolladores, redactores y profesionales del marketing,
		facilitando el análisis y mejora de tu copywriting.
	</p>

	<div class="mt-24 grid grid-cols-3 gap-x-7 gap-y-12">
		<div class="mt-16">
			<Rol
				rol="Diseñadores"
				descripcion="Reduce el tiempo y esfuerzo dedicados a la revisión de contenido para poder enfocarte en el diseño."
				icon="bi bi-brush"
			/>
		</div>
		<div>
			<Rol
				rol="Desarrolladores"
				descripcion="
				CopyWhisper hace que sea sencillo revisar y mejorar el copywriting de tus páginas web sin tener que ser experto."
				icon="bi bi-code-slash"
			/>
		</div>
		<div class="mt-16">
			<Rol
				rol="Copywriters"
				descripcion="Ahorra tiempo con el análisis detallado y las sugerencias de autocompletado de CopyWhisper."
				icon="bi bi-feather"
			/>
		</div>
	</div>
</section>

<section class="page-container py-24">
	<div class="cta grid grid-cols-12 bg-white/5 py-24 rounded-2xl px-24 border border-violet-400/70">
		<div class="col-span-6">
			<h1 class="text-5xl font-medium mb-3">
				Experimenta la magia de <span class="resaltado"
					>CopyWhisper <i class="bi bi-stars text-4xl"></i></span
				>
			</h1>
			<p class="text-zinc-400 text-pretty">
				Ingresa el URL de tu sitio web y experimenta la magia de CopyWhisper. No esperes para hacer
				el copywriting de tu pagina web impactante y de alta calidad.
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
	.cta {
		position: relative;
		overflow: hidden;

		&::before {
			content: '';
			position: absolute;
			top: -30%;
			left: -6%;
			height: auto;
			width: 25%;
			aspect-ratio: 1/1;
			z-index: -1;
			border-radius: 999px;
			background-color: rgba(114, 20, 255, 0.2);
			filter: blur(128px);
		}

		&::after {
			content: '';
			position: absolute;
			bottom: -30%;
			right: -6%;
			height: auto;
			width: 25%;
			aspect-ratio: 1/1;
			z-index: -1;
			border-radius: 999px;
			background-color: rgba(114, 20, 255, 0.2);
			filter: blur(128px);
		}
	}

	.hr-header {
		@apply border-none bg-violet-500/80 h-1.5 w-4/12 mx-auto mt-4 mb-3 rounded-full;
	}

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

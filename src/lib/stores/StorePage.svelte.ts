import type { PageData, HeaderTree } from '$lib/types';

class StorePage {
	link = $state('');
	titulo = $state('');
	descripcion = $state('');
	encabezados = $state([]);
	data = $state('');
	ok = $state(false);
	tree = $state<HeaderTree[]>([]);
	markdown = $state('');
	renderedMarkdown = $state('');
	analizis = $state({
		fortalezas: [],
		debilidades: []
	});
	calificaciones = $state([]);

	resumen = $state('');
	total = $state(-1);
	errores = $state([]);

	/*
	 inicializar la store con los datos base de la pagina
	 */
	init(pageData: PageData) {
		this.ok = true;
		this.link = pageData.link;
		this.titulo = pageData.titulo;
		this.descripcion = pageData.descripcion;
		this.encabezados = pageData.encabezados;
		this.data = pageData.data;
		this.tree = pageData.tree;
		this.markdown = pageData.markdown;
		this.renderedMarkdown = pageData.renderedMarkdown;
	}

	/*
	 guardar la calificación de la página
	 */

	saveRate(rateData: any) {
		console.log(rateData);

		this.resumen = rateData.resumen;
		this.total = rateData.total;
		this.errores = rateData.errores;

		this.analizis = rateData.recomendaciones;
		this.calificaciones = rateData.calificaciones;
	}
}

export const storePage = new StorePage();

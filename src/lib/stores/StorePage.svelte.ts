import type { PageData, HeaderTree } from '$lib/types';

class StorePage implements PageData {
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
		this.analizis = rateData.recomendaciones;
		this.calificaciones = rateData.calificaciones;
	}
}

export const storePage = new StorePage();

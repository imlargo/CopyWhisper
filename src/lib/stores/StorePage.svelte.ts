import type { PageData } from '$lib/types';

class StorePage implements PageData {
	link = $state('');
	titulo = $state('');
	descripcion = $state('');
	encabezados = $state([]);
	data = $state('');
	ok = $state(false);
	tree = $state([]);
	markdown = $state('');
	renderedMarkdown = $state('');

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
}

export const storePage = new StorePage();

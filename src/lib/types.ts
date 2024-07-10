export interface Encabezado {
	tag: string;
	texto: string;
}

export interface PageData {
	link: string;
	titulo: string | null;
	descripcion: string | null;
	encabezados: Encabezado[];
	data: string;
	tree: any[];
	markdown: string;
	renderedMarkdown: string;
}

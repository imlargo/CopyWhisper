export interface Encabezado {
	tag: string;
	content: string;
}

export interface HeaderTree {
	encabezado: Encabezado;
	hijos: HeaderTree[];
}

export interface PageData {
	link: string;
	titulo: string;
	descripcion: string;
	encabezados: Encabezado[];
	data: string;
	tree: HeaderTree[];
	markdown: string;
	renderedMarkdown: string;
}

export interface Prompt {
	sys: string;
	prompt: string;
}

export interface RateRequest {
	link: string;
	titulo: string;
	descripcion: string;
	markdown: string;
}

export interface RateResponse {
	contenido: Rate;
	tono: Rate;
	persuacion: Rate;
	errores: Rate;
}

export interface Rate {
	cuantitativo: string;
	cualitativo: 'bajo' | 'medio' | 'alto' | 'excelente';
	comentarios: string;
	sugerencias: string;
}

export interface ImproveElement {
	content: string;
	tag: string;
}

export interface ImproveRequest {
	link: string;
	titulo: string;
	descripcion: string;
	markdown: string;
	elemento: ImproveElement;
}

export interface summarizeRequest {
	titulo: string;
	descripcion: string;
	markdown: string;
}

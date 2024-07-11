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

export interface RateRequest {
	link: string;
	titulo: string;
	descripcion: string;
	markdown: string;
	encabezados: any[];
}

interface Calificacion {
	encabezado: string;
	calificacion: number;
}

export interface RateResponse {
	resumen: string;
	total: number;
	errores: string[];
	recomendaciones: string;
	calificaciones: Calificacion[];
}

export interface HeaderTree {
	encabezado: Encabezado;
	hijos: HeaderTree[];
}

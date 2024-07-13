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

export interface EncabezadoReq extends Encabezado {
	tag: string;
	content: string;
	id: number;
}

export interface RateRequest {
	link: string;
	titulo: string;
	descripcion: string;
	markdown: string;
	encabezados: EncabezadoReq[];
}

export interface Calificacion {
	encabezado: string;
	calificacion: number;
}

interface Recomendacion {
	fortalezas: string[];
	debilidades: string[];
}

export interface Rate {
	resumen: string;
	total: number;
	errores: string[];
	recomendaciones: Recomendacion;
	calificaciones: Calificacion[];
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

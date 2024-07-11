export interface Encabezado {
	tag: string;
	texto: string;
}

export interface PageData {
	link: string;
	titulo: string;
	descripcion: string;
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

export interface HeaderTree {
	encabezado: Encabezado;
	hijos: HeaderTree[];
}

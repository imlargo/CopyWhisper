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

export interface Prompt {
	sys: string;
	prompt: string;
}

export interface Calificacion {
	encabezado: string;
	calificacion: number;
}

export interface RateRequest {
	link: string;
	titulo: string;
	descripcion: string;
	markdown: string;
	encabezados: EncabezadoReq[];
}

interface Recomendacion {
	fortalezas: string[];
	debilidades: string[];
}

export interface Rate {
	errores: {
		cuantitativo: string;
		cualitativo: string;
		comentarios: string;
		errores: string[];
	};
	tono: {
		cuantitativo: string;
		cualitativo: string;
		comentarios: string;
	};
	persuacion: {
		cuantitativo: string;
		cualitativo: string;
		comentarios: string;
	};
	contenido: {
		cuantitativo: string;
		cualitativo: string;
		comentarios: string;
	};
}
export interface OldRate {
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

export interface summarizeRequest {
	titulo: string;
	descripcion: string;
	markdown: string;
}

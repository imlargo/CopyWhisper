import type { RateRequest } from '$src/lib/types';

export const prompts = {
	CALIFICAR_TITULOS(rateRequest: RateRequest) {
		// "comentarios": "Comentarios específicos sobre el encabezado, indicando las razones de la calificación y sugerencias para mejorarlo. No es necesario que repitas el encabezado."
		return `
Eres un copywriter experto con muchos conocimientos en el área de la redacción y optimización de contenido web. A continuación, se te proporciona la información de una página web para que analices su contenido y proporciones recomendaciones basadas en tus conocimientos profesionales de copywriting. Necesitamos que analices la calidad de los encabezados (titulos) de la página y generes recomendaciones generales sobre el contenido de la misma.

**Indicaciones:**
- Evalúa cada encabezado proporcionado en el array de encabezados y asigna una calificación del 0 al 10, donde 0 es la peor calificación y 10 es la mejor.

- Debes proporcionar una respuesta en el siguiente formato JSON, recuerda incluir los curly braces:
\`\`\`json
	{
		"descripcion": "Descripción general de lo que entendiste de el contexto de la pagina web.",
		"calificacion": "Calificación general de la página web teniendo en el contenido desde un punto de vista de copywritting. La calificación debe ser un número entre 0 y 10.",
		"recomendaciones": {
			"fortalezas": [
				"Fortalezas generales del contenido de la página."
			],
			"debilidades": [
				"Debilidades generales del contenido de la página."],
			},
		"calificaciones": [
		  {
		    "id": "id_del_encabezado",
		    "calificacion": "Calificación del encabezado teniendo en cuenta las indicaciones dadas, teniendo en cuenta el contexto de la pagina y desde una perspectiva de copywritting. La calificacion debe ser un numero entre 0 y 10.",
		  },
		]
	}
\`\`\`

**La información de la página es la siguiente:**

- **Link de la página:** ${rateRequest.link}
- **Título de la página:** ${rateRequest.titulo}
- **Meta descripción de la página:** ${rateRequest.descripcion}
- **Encabezados:**
\`\`\`json 
${JSON.stringify(rateRequest.encabezados)}
\`\`\`

- **Contenido de la página:** 

\`\`\`md
${rateRequest.markdown}
\`\`\`
`;
	},

	CALIFICAR_CONTENIDO(rateRequest: RateRequest) {
		return `Calificar contenido de ${1}`;
	},
	MEJORAR_TITULO(rateRequest: RateRequest) {
		return `Calificar contenido de ${1}`;
	},
	MEJORAR_CONTENIDO(rateRequest: RateRequest) {
		return `Calificar contenido de ${1}`;
	},
	CONTEXTUALIZAR(rateRequest: RateRequest) {
		return `Calificar contenido de ${1}`;
	}
};

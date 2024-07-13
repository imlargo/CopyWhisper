import type { RateRequest, ImproveRequest } from '$src/lib/types';

const ROL =
	'Eres un copywriter experto con muchos conocimientos en el área de la redacción y optimización de contenido web.';

/*
 * Plantilas de prompts para generar respuestas de la IA
 */
export const prompts = {
	CALIFICAR_TITULOS(requestData: RateRequest) {
		// "comentarios": "Comentarios específicos sobre el encabezado, indicando las razones de la calificación y sugerencias para mejorarlo. No es necesario que repitas el encabezado."
		return `
${ROL}

A continuación, se te proporciona la información de una página web para que analices su contenido y proporciones recomendaciones basadas en tus conocimientos profesionales de copywriting. Necesitamos que analices la calidad de los encabezados (titulos) de la página y generes recomendaciones generales sobre el contenido de la misma.

**Indicaciones:**
- Evalúa cada encabezado proporcionado en el array de encabezados y asigna una calificación del 0 al 10, donde 0 es la peor calificación y 10 es la mejor.

- Debes proporcionar una respuesta en el siguiente formato JSON, recuerda incluir los curly braces:
\`\`\`json
	{
		"resumen": "Descripción general de lo que entendiste de el contexto de la pagina web.",
		"total": "Calificación general de la página web teniendo en el contenido desde un punto de vista de copywritting. La calificación debe ser un número entre 0 y 10.",
		"errores": [
			"Errores ortograficos, de gramatica o de redaccion en el contenido de la página."
		],
		"recomendaciones": {
			"fortalezas": [
				"Fortalezas generales del contenido de la página."
			],
			"debilidades": [
				"Debilidades o errores generales del contenido de la página."],
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

- **Link de la página:** ${requestData.link}
- **Título de la página:** ${requestData.titulo}
- **Meta descripción de la página:** ${requestData.descripcion}
- **Encabezados:**
\`\`\`json 
${JSON.stringify(requestData.encabezados)}
\`\`\`

- **Contenido de la página:** 

\`\`\`md
${requestData.markdown}
\`\`\`
`;
	},

	CALIFICAR_CONTENIDO(requestData: RateRequest) {
		return `${requestData}`;
	},
	MEJORAR_TITULO(requestData: ImproveRequest) {
		return `
${ROL}
		
Tu tarea es revisar y mejorar el contenido de la página proporcionada. A continuación, se te proporciona la información necesaria:

Con respecto al contexto de la pagina y tus amplios conocimientos, necesito que mejores el encabezado que te proporcionare y su contenido correspondiente. Proporciona solo el texto plano del encabezado mejorado, hazlo creativo e interesante, no incluyas decoraciones ni markdown. 

- **Link de la página:** ${requestData.link}
- **Título de la página:** ${requestData.titulo}
- **Meta descripción de la página:** ${requestData.descripcion}
- **Encabezado a mejorar:**
\`\`\`json 
${JSON.stringify(requestData.elemento)}
\`\`\`

- **Contenido de la página:** 

\`\`\`md
${requestData.markdown}
\`\`\`
`;
	},
	MEJORAR_CONTENIDO(requestData: ImproveRequest) {
		return `
${ROL}
		
Tu tarea es revisar y mejorar el contenido de la página proporcionada. A continuación, se te proporciona la información necesaria:

Con respecto al contexto de la pagina y tus amplios conocimientos, necesito que mejores el contenido que te proporcionare. Proporciona solo el texto plano del contenido mejorado, hazlo creativo e interesante y ten en cuenta su etiqueta. Manten la idea y recuerda que solo debes mejorar el contenido del parrafo en especifico q te estoy solicitando, no incluyas decoraciones ni markdown. 

- **Link de la página:** ${requestData.link}
- **Título de la página:** ${requestData.titulo}
- **Meta descripción de la página:** ${requestData.descripcion}
- **Elemento a mejorar:**
\`\`\`json 
${JSON.stringify(requestData.elemento)}
\`\`\`

- **Contenido de la página:** 

\`\`\`md
${requestData.markdown}
\`\`\`
`;
	},
	CONTEXTUALIZAR(requestData: RateRequest) {
		return `${requestData}`;
	}
};

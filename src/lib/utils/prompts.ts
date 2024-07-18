import type { RateRequest, ImproveRequest, Prompt, summarizeRequest } from '$src/lib/types';
import { getCodeAsMarkdown } from '$utils/util';

const ROL =
	'Asume el rol de un copywriter profesional con muchos conocimientos en el área de la redacción de contenido web.';

const CRITERIOS = `
- Analisis de la estructura del contenido y redaccion
    - Descripcion del criterio:  Evaluar la redaccion, estructura, organización y calidad del contenido para asegurar claridad, coherencia y efectividad.
    - Criterios:
        - Asegurar que el contenido tenga un propósito claro y que la información proporcionada sea relevante, que refleje la idea que se quiere transmitir, capte el interes, incentive a la interaccion, y que comunique efectivamente la propuesta de valor.
        - Claridad y Precisión: Escritura clara, sin redundancias ni ambigüedades. Lenguaje claro y directo y asegurarse de que  las ideas se expresen con precisión y exactitud.
        - Organización y jerarquía del contenido, uso adecuado de encabezados para dividir el contenido en secciones claras y coherencia en la jerarquía de los encabezados.
        - Facilidad de lectura, legibilidad y comprensión del contenido.
        - Potencial del contenido para mantener la atención del lector e incentivar la interacción.

- **Tono y estilo**
    - Descripcion del criterio: Evaluar el tono, uniformidad y cohesión del estilo de escritura a lo largo del contenido, asegurando que se mantenga un tono y estilo constante y adecuado para la audiencia específica dependiendo de el contexto de la pagina web.
    - Criterios:
        - Contexto del Contenido: Ajuste del tono y estilo según el tipo de página
        - Tono Adecuado: Adaptación del tono al público objetivo.
        - Uniformidad y consistencia del Tono: Mantener el mismo tono en todo el contenido.
        - Consistencia del estilo de escritura
        - Consistencia léxica.

- **Persuasión y Conversión**
    - Descripcion del criterio:  Evaluar la efectividad de los elementos persuasivos y llamados a la acción presentes en el contenido.
    - Criterios:
        - Uso efectivo de palabras clave relevantes
        - Persuacion y la capacidad del contenido para convencer al lector.
        - Call to action si existe
        - Evaluar efectividad de los encabezados y CTAs en términos de claridad, captar la atención y motivar a la acción.
  

- **Errores de escritura**
  - Descripcion del criterio: Identificar y enumerar errores gramaticales, ortográficos, semánticos y sintácticos presentes en el contenido, proporcionando una evaluación profunda y detallada a nivel lingüístico.
  - Criterios:
      - Gramatica.
      - Ortografia.
      - Puntuacion.
`;

/*
 * Plantilas de prompts para generar respuestas de la IA
 */
export const prompts = {
	RESUMIR(requestData: summarizeRequest): Prompt {
		// , no es necesario que desgloces cada item en tu respuesta, solo tenlos en cuenta para generar tu analisis.
		return {
			sys: `
${ROL}
Tu tarea es redactar un parrafo que condense tus comentarios y análisis del contenido de la página proporcionada. Este analisis debe proporcionar una visión general clara y concisa de las fortalezas y tambien de las áreas de mejora. Ten en cuenta que se busca un análisis profundo y preciso que refleje los estándares de un copywriter profesional experimentado pero siendo breve. A continuacion te dare algunos items que puedes usar internamente para tu analisis:

${CRITERIOS}
`,
			prompt: `
**La información de la página es la siguiente, responde solamente con un parrafo legible y bien redactado con lenguaje natural que pueda ser entendido por una persona**

- **Título de la página:** ${requestData.titulo}
- **Meta descripción de la página:** ${requestData.descripcion || 'No hay descripción'}
- **Contenido:**

${getCodeAsMarkdown('md', requestData.markdown)}
`
		};
	},

	CALIFICAR_CONTENIDO(requestData: RateRequest): Prompt {
		const indicacionCuantitativa = 'Calificacion cuantitativa del 1 al 10, siendo 10 excelente';
		const indicacionCualitativa =
			"Calificacion cualitativa que puede ser 'bajo', 'medio', 'alto', 'excelente'.";
		return {
			sys: `
${ROL}

Tu tarea es revisar y calificar el contenido de la página proporcionada. A continuación, se te proporcionan los items que se van a calificar y los criterios de calificación.

Items a calificar y criterios de calificacion:

${CRITERIOS}

Para cada uno de los ítems debes generar una calificacion cualitativa y cuantitativa (calificacion cuantitativa del 1 al 10, siendo 10 excelente) teniendo en cuenta los criterios y tambien el contexto de la pagina. Además, incluye un parrafo breve pero detallado para cada ítem con tus comentarios y otro con tus recomendaciones. Ten en cuenta que se busca un análisis profundo y preciso que refleje los estándares de un copywriter profesional experimentado, sin embargo debes entender la creatividad y ser mas flexible y menos estricto.
`,
			prompt: `
A continuación, se te proporciona el contenido de la página web:

${getCodeAsMarkdown('md', requestData.markdown)}
`
		};
	},

	CALIFICAR_ENCABEZADOS(requestData: RateRequest): Prompt {
		const indicacionCuantitativa = 'Calificacion cuantitativa del 1 al 10, siendo 10 excelente';
		const indicacionCualitativa =
			"Calificacion cualitativa que puede ser 'bajo', 'medio', 'alto', 'excelente'.";
		return {
			sys: `
${ROL}

Tu tarea es calificar cada encabezado de una pagina web.

A continuación, se te proporcionan los los criterios de calificación.

${CRITERIOS}

Para cada uno de los ítems debes generar una calificacion cualitativa y cuantitativa teniendo en cuenta los criterios. Además, incluye un parrafo breve pero detallado para cada ítem con tus comentarios. Ten en cuenta que se busca un análisis profundo y preciso que refleje los estándares de un copywriter profesional experimentado. Devuelve la respuesta en formato JSON con la siguiente estructura:

${getCodeAsMarkdown(
	'json',
	`{
  "errores": {
    "cuantitativo": "${indicacionCuantitativa}",
	"cualitativo": "${indicacionCualitativa}",
    "comentarios": "...",
	"errores": [
		"Errores identificados y su explicacion/solucion.",
	]
  },
  "tono": {
    "cuantitativo": "${indicacionCuantitativa}",
	"cualitativo": "${indicacionCualitativa}",
    "comentarios": "..."
  },
  "persuacion": {
    "cuantitativo": "${indicacionCuantitativa}",
	"cualitativo": "${indicacionCualitativa}",
    "comentarios": "..."
  },
  "contenido": {
    "cuantitativo": "${indicacionCuantitativa}",
	"cualitativo": "${indicacionCualitativa}",
    "comentarios": "..."
	
  }
}`
)}
`,
			prompt: `
A continuación, se te proporciona el contenido de la página web:

${getCodeAsMarkdown('md', requestData.markdown)}
`
		};
	},

	MEJORAR_TITULO(requestData: ImproveRequest): Prompt {
		// Proporciona solo el texto plano del encabezado mejorado, hazlo creativo e interesante, no incluyas decoraciones ni markdown.
		return {
			sys: `
${ROL}

Tu tarea es mejorar copywriting de el contenido de la página proporcionada. En este caso especifico estas especializado en mejorar encabezados.

Se te proporcionara el contenido de toda la pagina para darte contexto de la pagina. Necesito que mejores el encabezado que te proporcionare, ten en cuenta la etiqueta del encabezado para que sepas cual es su importancia y el contexto de la pagina, ademas recuerda mantener la idea del encabezado, haz que se sienta organico, creativo e interesante, pero evita que se sienta artificial y demasiado forzado.

Solo debes mejorar el encabezado, no incluyas decoraciones ni markdown. Responde solamente con un texto plano que tenga el texto del encabezado mejorado.

Para dar tu respuesta al encabezado mejorado, usa tus amplios conocimientos y ten en cuenta los siguientes criterios y el contexto de la pagina web:

${CRITERIOS}
`,
			prompt: `
A continuacion el encabezado a mejorar y el contenido de la pagina para que lo analices y tengas contexto. Responde unicamente con el texto del encabezado mejorado. No uses decoraciones como negrita:

- **Título de la página:** ${requestData.titulo}
- **Encabezado a mejorar:**

${getCodeAsMarkdown('json', JSON.stringify(requestData.elemento))}

- **Contenido de la página:** 

${getCodeAsMarkdown('md', requestData.markdown)}
`
		};
	},
	MEJORAR_CONTENIDO(requestData: ImproveRequest): Prompt {
		return {
			sys: `
${ROL}

Tu tarea es mejorar copywriting de el contenido de la página proporcionada. En este caso especifico estas especializado en mejorar el contenido.

Se te proporcionara el contenido de toda la pagina para darte contexto de la pagina. Necesito que mejores el texto en especifico que te proporcionare. Solo debes mejorar el texto, no incluyas decoraciones ni markdown. Responde solamente con un texto plano que tenga el texto mejorado, recuerda mantener la idea del texto, haz que se sienta organico, creativo e interesante, pero evita que se sienta artificial y demasiado forzado.

Para dar tu respuesta al momento de mejorar la redaccion del contenido, usa tus amplios conocimientos y ten en cuenta el contexto de la pagina web. Ademas ten en cuenta los siguientes criterios importantes

${CRITERIOS}
A continuacion se te proporcionara la informacion necesaria para que puedas realizar tu tarea, responde:
      `,
			prompt: `
A continuacion el contenido de la pagina para que tengas contexto y el elemento a mejorar. Responde unicamente con texto plano.

- **Título de la página:** ${requestData.titulo}
- **Elemento a mejorar:**

${getCodeAsMarkdown('json', JSON.stringify(requestData.elemento))}

- **Contenido de la página:** 

${getCodeAsMarkdown('md', requestData.markdown)}
`
		};
	}
};

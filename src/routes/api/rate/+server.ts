import { json } from '@sveltejs/kit';
import type { RateRequest } from '$src/lib/types';
import { prompts } from '$src/lib/utils/prompts';
import { generateTextResponse } from '$server/IA';

export async function POST({ request }) {
	return json({
		resumen:
			'La página web de imlargo es un portafolio personal que muestra su experiencia, proyectos y habilidades como desarrollador web. El contenido se centra en destacar sus logros y habilidades en el desarrollo frontend, backend, web scraping y automatización.',
		total: 8,
		errores: [],
		recomendaciones: {
			fortalezas: [
				'El contenido es claro y conciso, destacando los logros y habilidades del desarrollador.',
				'Los proyectos personales están bien descritos y muestran el impacto positivo que han tenido en la comunidad universitaria.',
				'La sección de habilidades y tecnologías proporciona una lista completa de las habilidades del desarrollador.'
			],
			debilidades: [
				'El título de la página es demasiado genérico y no proporciona una descripción clara del contenido de la página.',
				'La meta descripción es demasiado larga y no se enfoca en las palabras clave relevantes.',
				'Algunos encabezados no están bien estructurados y no siguen una jerarquía lógica.',
				'El contenido podría beneficiarse de más ejemplos específicos y estudios de casos para demostrar las habilidades del desarrollador.'
			]
		},
		calificaciones: [
			{
				id: 1,
				calificacion: 7
			},
			{
				id: 2,
				calificacion: 8
			},
			{
				id: 3,
				calificacion: 6
			},
			{
				id: 4,
				calificacion: 6
			},
			{
				id: 5,
				calificacion: 8
			},
			{
				id: 6,
				calificacion: 7
			},
			{
				id: 7,
				calificacion: 7
			},
			{
				id: 8,
				calificacion: 7
			},
			{
				id: 9,
				calificacion: 7
			},
			{
				id: 10,
				calificacion: 8
			},
			{
				id: 11,
				calificacion: 9
			}
		]
	});
	// Obtener los datos de la pagina
	const requestData: RateRequest = await request.json();

	// Generar prompt con respecto a los datos de la pagina
	const prompt = prompts.CALIFICAR_TITULOS(requestData);

	const result = await generateTextResponse(prompt);

	console.log(result);

	const response = JSON.parse(result.slice(result.indexOf('{'), result.lastIndexOf('}') + 1));

	return json(response);
}

import { json } from '@sveltejs/kit';
import type { RateRequest } from '$src/lib/types';
import { prompts } from '$src/lib/utils/prompts';
import { generateTextResponse } from '$server/IA';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	return json({
		resumen:
			'La página web de imlargo es un portafolio personal que muestra su experiencia, proyectos y habilidades como desarrollador de software. El contenido se centra en destacar sus logros y habilidades técnicas, con un enfoque en el desarrollo web y la automatización.',
		total: 8,
		errores: [
			'El encabezado "Hi, i\'m largo." contiene un error ortográfico: "i\'m" debería ser "I\'m".'
		],
		recomendaciones: {
			fortalezas: [
				'El contenido es claro y conciso, destacando los logros y habilidades del desarrollador.',
				'Los proyectos personales están bien descritos y muestran el interés del desarrollador en resolver problemas y generar valor.',
				'La sección de habilidades y tecnologías proporciona una lista completa de las habilidades técnicas del desarrollador.'
			],
			debilidades: [
				'El título de la página y la meta descripción son demasiado genéricos y no destacan lo suficiente al desarrollador.',
				'El contenido podría beneficiarse de más ejemplos específicos y estudios de casos para demostrar las habilidades del desarrollador.',
				'La sección de experiencia podría organizarse mejor utilizando viñetas o una estructura más clara.'
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
				calificacion: 8
			},
			{
				id: 4,
				calificacion: 8
			},
			{
				id: 5,
				calificacion: 8
			},
			{
				id: 6,
				calificacion: 8
			},
			{
				id: 7,
				calificacion: 8
			},
			{
				id: 8,
				calificacion: 8
			},
			{
				id: 9,
				calificacion: 8
			},
			{
				id: 10,
				calificacion: 8
			},
			{
				id: 11,
				calificacion: 8
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
};

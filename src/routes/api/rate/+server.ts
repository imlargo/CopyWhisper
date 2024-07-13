import { json } from '@sveltejs/kit';
import type { RateRequest } from '$src/lib/types';
import { prompts } from '$src/lib/utils/prompts';
import { generateTextResponse } from '$server/IA';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {


	return json({
		"resumen": "La página web de imlargo es un portafolio personal que muestra su experiencia, proyectos y habilidades como desarrollador de software. El contenido se centra en destacar sus logros y habilidades técnicas, con un enfoque en el desarrollo web y la automatización.",
		"total": 8,
		"errores": [],
		"recomendaciones": {
			"fortalezas": [
				"El contenido es claro y conciso, destacando las habilidades y experiencia del desarrollador.",
				"Los proyectos personales están bien descritos y muestran el impacto positivo que han tenido en la comunidad universitaria.",
				"La sección de habilidades y tecnologías proporciona una lista completa de las competencias del desarrollador."
			],
			"debilidades": [
				"El título de la página es demasiado genérico y no proporciona una descripción clara del contenido.",
				"La meta descripción podría ser más atractiva y proporcionar una mejor idea del valor que ofrece la página.",
				"Algunos encabezados podrían ser más descriptivos y utilizar palabras clave relevantes."
			]
		},
		"calificaciones": [
			{
				"id": 1,
				"calificacion": 7
			},
			{
				"id": 2,
				"calificacion": 8
			},
			{
				"id": 3,
				"calificacion": 7
			},
			{
				"id": 4,
				"calificacion": 7
			},
			{
				"id": 5,
				"calificacion": 8
			},
			{
				"id": 6,
				"calificacion": 8
			},
			{
				"id": 7,
				"calificacion": 8
			},
			{
				"id": 8,
				"calificacion": 8
			},
			{
				"id": 9,
				"calificacion": 8
			},
			{
				"id": 10,
				"calificacion": 8
			},
			{
				"id": 11,
				"calificacion": 9
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

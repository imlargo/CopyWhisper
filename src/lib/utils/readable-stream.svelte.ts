/*
 Decodifica los datos de un stream y los agrega progresivamente a un estado para que se muestre reactivamente
 */
export async function decodeStreamData(stream: ReadableStream, callback: (data: string) => void) {
	const reader = stream.getReader();
	const decoder = new TextDecoder();

	while (true) {
		const { done, value } = await reader.read();
		if (done) {
			break;
		}

		callback(decoder.decode(value, { stream: true }));
	}

	callback(decoder.decode());

	reader.releaseLock();
}

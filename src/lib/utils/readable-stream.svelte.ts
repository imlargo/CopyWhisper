/*
 Decodifica los datos de un stream y los agrega progresivamente a un estado para que se muestre reactivamente
 */
export async function decodeStreamData(stream: ReadableStream, state) {
	const reader = stream.getReader();
	const decoder = new TextDecoder();

	state.data = '';

	while (true) {
		const { done, value } = await reader.read();
		if (done) {
			break;
		}

		state.data += decoder.decode(value, { stream: true });
	}

	state.data += decoder.decode();

	reader.releaseLock();
}

const dataState = $state({
	data: ''
});

async function decodeStreamData(stream: ReadableStream, store) {
	const reader = stream.getReader();
	const decoder = new TextDecoder();

	store.data = '';

	while (true) {
		const { done, value } = await reader.read();
		if (done) {
			break;
		}

		store.data += decoder.decode(value, { stream: true });
	}

	store.data += decoder.decode();

	reader.releaseLock();
}

async function handleClick() {
	const prompt = 'Dame una receta de pizza para 4 personas';

	const response = await fetch('/api', {
		method: 'POST',
		body: JSON.stringify({ prompt }),
		headers: {
			'Content-Type': 'application/json'
		}
	});

	await decodeStreamData(response.body, dataState);
}

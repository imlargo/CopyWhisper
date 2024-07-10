<script lang="ts">
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
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<button onclick={handleClick}>Enviar</button>
<p id="response">{dataState.data}</p>

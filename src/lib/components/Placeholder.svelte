<script lang="ts">
	type Props = {
		h?: string;
		class?: string;
	};

	const { h = '1', class: className = '' }: Props = $props();
</script>

<div role="status" class="space-y-2.5 animate-pulse max-w-lg {className}">
	{#if h === '1'}
		<div class="flex items-center w-full">
			<div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
		</div>
	{:else if h === '4'}
		<div class="flex items-center w-full">
			<div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
			<div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
			<div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
		</div>
		<div class="flex items-center w-full max-w-[480px]">
			<div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
			<div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
			<div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
		</div>
		<div class="flex items-center w-full max-w-[400px]">
			<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
			<div class="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
			<div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
		</div>
		<div class="flex items-center w-full max-w-[480px]">
			<div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
			<div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
			<div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
		</div>
	{:else if h === '6'}
		<div class="flex items-center w-full">
			<div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
			<div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
			<div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
		</div>
		<div class="flex items-center w-full max-w-[480px]">
			<div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
			<div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
			<div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
		</div>
		<div class="flex items-center w-full max-w-[400px]">
			<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
			<div class="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
			<div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
		</div>
		<div class="flex items-center w-full max-w-[480px]">
			<div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
			<div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
			<div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
		</div>
		<div class="flex items-center w-full max-w-[440px]">
			<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
			<div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
			<div class="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
		</div>
		<div class="flex items-center w-full max-w-[360px]">
			<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
			<div class="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
			<div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
		</div>
	{/if}
</div>

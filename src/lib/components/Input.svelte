<script lang="ts">
	export let label: string;
	export let type = 'text';
	export let placeholder = '';
	export let errorMessage = '';
	export let value: string;

	function handleInput(event: Event) {
		value = (event.target as HTMLInputElement).value;
	}
</script>

<div class={$$props.containerClass}>
	{#if label}
		<p class={`mb-2 text-sm text-primaryText ${errorMessage && 'text-red-500'}`}>{label}</p>
	{/if}
	<input
		class={`border p-2 px-4 rounded ${$$props.class} ${errorMessage && 'border-red-500'}`}
		{type}
		{placeholder}
		{value}
		on:input={handleInput}
	/>
	{#if errorMessage}
		<p class="mt-2 text-xs text-red-500">{errorMessage}</p>
	{/if}
</div>

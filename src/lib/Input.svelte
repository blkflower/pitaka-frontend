<script lang="ts">
	export let label: string;
	export let type = 'text';
	export let placeholder = '';
	export let containerStyle = '';
	export let inputStyle = '';
</script>

<div class={containerStyle}>
	{#if label}
		<p class="pl-4 mb-2 text-sm text-primaryText">{label}</p>
	{/if}
	<input class={`border p-2 px-4 rounded ${inputStyle}`} {type} {placeholder} />
</div>

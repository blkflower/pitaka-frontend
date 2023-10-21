<script lang="ts">
	export let label: string;
	export let type = 'text';
	export let placeholder = '';
</script>

<div class={$$props.containerClass}>
	{#if label}
		<p class="pl-4 mb-2 text-sm text-primaryText">{label}</p>
	{/if}
	<input class={`border p-2 px-4 rounded ${$$props.class}`} {type} {placeholder} />
</div>

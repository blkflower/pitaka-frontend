<script lang="ts">
	export let label: string;
	export let disabled = false;
</script>

<button
	class={`bg-blue-500 text-sm text-white p-3 rounded disabled:bg-blue-300 disabled:cursor-not-allowed ${$$props.class}`}
	{disabled}>{label}</button
>

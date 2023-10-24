<script lang="ts">
	export let label: string;
</script>

<button
	class={`bg-primary text-sm text-white p-3 rounded disabled:bg-primaryDisabled disabled:cursor-not-allowed ${$$props.class}`}
	disabled={$$props.disabled}>{label}</button
>

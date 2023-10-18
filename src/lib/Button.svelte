<script lang="ts">
	export let label: string;
	export let buttonStyle = '';
</script>

<button class={`bg-primary text-sm text-white p-3 rounded ${buttonStyle}`}>{label}</button>

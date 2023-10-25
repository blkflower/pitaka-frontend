<script lang="ts">
	import type { AlertType } from "$lib/types";

  export let type: AlertType = 'info';
  export let label: string;

  $: borderStyle = () => {
    switch (type) {
      case 'info':
        return 'border-blue-500 bg-blue-50';
      case 'success':
        return 'border-green-500 bg-green-50';
      case 'warning':
        return 'border-yellow-500 bg-yellow-50';
      case 'error':
        return 'border-red-500 bg-red-50';
    }
  };

  $: labelStyle = () => {
    switch (type) {
      case 'info':
        return 'text-blue-500';
      case 'success':
        return 'text-green-500';
      case 'warning':
        return 'text-yellow-500';
      case 'error':
        return 'text-red-500';
    }
  };
</script>

<div class={`p-2 px-4 rounded border ${$$props.class} ${borderStyle()}`}>
  <p class={`text-sm ${labelStyle()}`}>{label}</p>
</div>
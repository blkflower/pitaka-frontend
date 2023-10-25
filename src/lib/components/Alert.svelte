<script lang="ts">
	import type { AlertType } from "$lib/types";

  export let type: AlertType = 'info';

  $: borderStyle = () => {
    switch (type) {
      case 'info':
        return 'border-blue-700 bg-blue-50';
      case 'success':
        return 'border-green-700 bg-green-50';
      case 'warning':
        return 'border-yellow-700 bg-yellow-50';
      case 'error':
        return 'border-red-700 bg-red-50';
    }
  };

  $: labelStyle = () => {
    switch (type) {
      case 'info':
        return 'text-blue-700';
      case 'success':
        return 'text-green-700';
      case 'warning':
        return 'text-yellow-700';
      case 'error':
        return 'text-red-700';
    }
  };
</script>

<div class={`p-2 px-4 rounded border border-2 ${$$props.class} ${borderStyle()}`}>
  <p class={`text-sm ${labelStyle()}`}>
    <slot />
  </p>
</div>
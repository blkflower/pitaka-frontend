<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button, Input } from '$lib';

	function handleSubmit(event: Event) {
		event.preventDefault();
		goto('/dashboard');
	}
</script>

<div class="flex flex-col items-center justify-center h-[100vh]">
	<div class="flex flex-col items-center justify-center" on:submit={handleSubmit}>
		<h1 class="text-5xl font-extrabold text-primaryText">pitaka</h1>
		<p class="mt-2 text-primaryText mb-8">Transactions Tracking. Simplified.</p>
		<form class="w-80 flex flex-col items-center justify-center" on:submit={handleSubmit}>
			<Input class="w-full" containerClass="w-full mb-4" label="Email address" type="email" />
			<Button class="w-full" label="Email login link" />
		</form>
	</div>
	<p class="absolute bottom-7 text-xs text-gray-400">
		Developed by <a href="/" class="underline">Black Flower</a>
	</p>
</div>

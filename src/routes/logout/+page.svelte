<script>
	import { Alert } from '$lib/components';

  // TODO: handle logout
</script>

<div class="flex flex-col items-center justify-center h-[100vh]">
	<div class="w-96 flex flex-col items-center justify-center">
		<h1 class="text-5xl font-extrabold text-slate-800">pitaka</h1>
		<p class="mt-2 text-slate-800 mb-8">Transactions Tracking. Simplified.</p>
		<Alert type="success">
			<p>
				You have successfully logged out from your account. <a href="/" class="underline">Click here</a> to login to your account
				again.
			</p>
		</Alert>
	</div>
	<p class="absolute bottom-7 text-xs text-gray-400">
		Developed by <a href="/" class="underline">Black Flower</a>
	</p>
</div>

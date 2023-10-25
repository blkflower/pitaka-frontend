<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button, Input, Alert } from '$lib/components';
	import { isValidEmail } from '$lib/utils/validations';

	let email = '';
	let emailErrorMessage = '';
	let formErrorMessage = '';
	let isLoggedIn = false;

	function clearErrorMessages() {
		emailErrorMessage = '';
		formErrorMessage = '';
	}

	function handleSubmit(event: Event) {
		event.preventDefault();
		clearErrorMessages();

		if (!isValidEmail(email)) {
			emailErrorMessage = 'Please enter a valid email address';
			return;
		}

		try {
			// TODO: handle login
			isLoggedIn = true;
		} catch (error) {
			formErrorMessage =
				'Something went wrong while trying to email the login link. Please try again.';
			return;
		}
	}
</script>

<div class="flex flex-col items-center justify-center h-[100vh]">
	<div class="w-80 flex flex-col items-center justify-center">
		<h1 class="text-5xl font-extrabold text-slate-800">pitaka</h1>
		<p class="mt-2 text-slate-800 mb-8">Transactions Tracking. Simplified.</p>
		{#if !isLoggedIn}
			<form class="flex flex-col items-center justify-center" on:submit={handleSubmit}>
				<Input
					class="w-full"
					containerClass="w-full mb-4"
					label="Email address"
					bind:value={email}
					errorMessage={emailErrorMessage}
				/>
				{#if formErrorMessage}
					<Alert class="w-full mb-4" type="error">
						{formErrorMessage}
					</Alert>
				{/if}
				<Button class="w-full" label="Email login link" disabled={!email} />
			</form>
		{:else}
			<Alert type="success">
				<p>
					Login link was successfully sent to your email address <b>{email}</b>. Open the email and
					click on the link to login.
				</p>
			</Alert>
		{/if}
	</div>
	<p class="absolute bottom-7 text-xs text-gray-400">
		Developed by <a href="/" class="underline">Black Flower</a>
	</p>
</div>

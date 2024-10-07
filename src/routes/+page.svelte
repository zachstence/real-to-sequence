<script lang="ts">
	import { realToSequence } from '$lib';

	let real = 0.41468250985111166;
	$: sequence = realToSequence(real);
</script>

<main class="flex h-screen w-screen flex-col items-center justify-center gap-8 p-8">
	<div class="flex w-full items-center justify-center rounded-lg bg-neutral-700 p-4">
		<label for="real" class="sr-only">Real</label>
		<input
			id="real"
			type="number"
			placeholder="Enter a real number"
			class="w-full rounded-md bg-neutral-600 p-3 text-xl"
			bind:value={real}
		/>
	</div>

	<code class="w-full flex-1 overflow-auto rounded-lg bg-neutral-700 p-4 text-xl">
		{sequence.join(', ')}
	</code>
</main>

<script lang="ts">
	import { decimalToBinary, binaryToSequence } from '$lib';

	let real =
		'414682509851111660248109622154307708365774238137916977868245414488640960619357334196290048428475777939616';
	$: binary = decimalToBinary(real);
	$: sequence = binaryToSequence(binary);
</script>

<main class="flex h-screen w-screen flex-col items-center justify-center gap-8 p-8">
	<div class="flex w-full flex-col justify-center gap-4 rounded-lg bg-neutral-700 p-4">
		<label for="real" class="text-2xl font-bold text-white">Real</label>
		<div class="flex items-center">
			<code class="text-xl">0.</code>
			<input
				id="real"
				placeholder="Enter digits"
				class="w-full rounded-md bg-neutral-600 p-3 font-mono text-xl"
				bind:value={real}
			/>
		</div>
	</div>

	<div class="flex w-full flex-col justify-center gap-4 rounded-lg bg-neutral-700 p-4">
		<div class="text-2xl font-bold text-white">Binary</div>
		<code class="w-full rounded-lg bg-neutral-700 text-xl">0.{binary}</code>
	</div>

	<div class="flex w-full flex-1 flex-col justify-center gap-4 rounded-lg bg-neutral-700 p-4">
		<div class="text-2xl font-bold text-white">Sequence</div>
		<code class="w-full flex-1 overflow-auto rounded-lg bg-neutral-700 text-xl">
			{sequence.join(', ')}
		</code>
	</div>
</main>

<script lang="ts">
	import { decimalToBinary, binaryToSequence } from '$lib';

	let real =
		'414682509851111660248109622154307708365774238137916977868245414488640960619357334196290048428475777939616';
	let precision = 200;
	$: binary = decimalToBinary(real, precision);
	$: sequence = binaryToSequence(binary);
</script>

<main class="flex h-screen w-screen flex-col items-center justify-center gap-8 p-8">
	<div class="flex w-full flex-row items-center gap-4">
		<div class="flex flex-1 flex-col justify-center gap-4 rounded-lg bg-neutral-700 p-4">
			<label for="real" class="text-2xl font-bold text-white">Real</label>
			<div class="flex">
				<code class="pt-3 text-xl">0.</code>
				<textarea
					id="real"
					placeholder="Enter digits"
					class="w-full rounded-md bg-neutral-600 p-3 font-mono text-xl"
					bind:value={real}
				/>
			</div>
		</div>
		<div class="flex h-full w-40 flex-col gap-4 rounded-lg bg-neutral-700 p-4">
			<label for="precision" class="text-2xl font-bold text-white">Precision</label>
			<input
				id="precision"
				type="number"
				class="w-full rounded-md bg-neutral-600 p-3 font-mono text-xl"
				bind:value={precision}
			/>
		</div>
	</div>

	<div class="flex w-full flex-col justify-center gap-4 rounded-lg bg-neutral-700 p-4">
		<div class="text-2xl font-bold text-white">Binary</div>
		<div class="flex w-full">
			<code class="text-xl">0.</code>
			<code class="w-full text-wrap break-all rounded-lg bg-neutral-700 text-xl">{binary}</code>
		</div>
	</div>

	<div
		class="flex min-h-0 w-full flex-1 flex-col justify-center gap-4 rounded-lg bg-neutral-700 p-4"
	>
		<div class="text-2xl font-bold text-white">Sequence</div>
		<code class="w-full flex-1 overflow-auto rounded-lg bg-neutral-700 text-xl">
			{sequence.join(', ')}
		</code>
	</div>
</main>

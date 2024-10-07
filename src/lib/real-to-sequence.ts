export const realToSequence = (n: number): number[] => {
	if (n > 1) throw new Error('Enter a number between 0 and 1');

	const binary = n.toString(2).split('.')[1].split('');
	const sequence = binary.reduce<number[]>((sequence, value, index) => {
		if (value === '1') {
			sequence.push(index + 1);
		}
		return sequence;
	}, []);

	return sequence;
};

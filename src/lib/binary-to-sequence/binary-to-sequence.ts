export const binaryToSequence = (x: string): number[] => {
	const sequence = x.split('').reduce<number[]>((sequence, value, index) => {
		if (value === '1') {
			sequence.push(index + 1);
		}
		return sequence;
	}, []);

	return sequence;
};

export const decimalToBinary = (x: string, precision = 100): string => {
	let digits = x.split('').map((y) => parseInt(y));
	let out = '';

	while (digits.length > 0) {
		if (out.length >= precision) break;
		if (digits.length === 1 && digits[0] === 0) break;

		const doubled = double(digits);
		if (doubled[0] >= 10) {
			out += '1';
			doubled[0] -= 10;
		} else {
			out += '0';
		}
		digits = trimZerosAtEnd(doubled);
	}

	return out;
};

const double = (n: number[]): number[] => {
	const multiplied = n.map((d) => d * 2);
	for (let i = multiplied.length; i > 0; i--) {
		if (multiplied[i] >= 10) {
			multiplied[i] -= 10;
			multiplied[i - 1] += 1;
		}
	}
	return multiplied;
};

const trimZerosAtEnd = (n: number[]): number[] => {
	while (n[n.length - 1] === 0) {
		n.pop();
	}
	return n;
};

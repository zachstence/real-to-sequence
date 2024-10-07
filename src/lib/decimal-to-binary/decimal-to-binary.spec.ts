import { describe, expect, test } from 'vitest';
import { decimalToBinary } from './decimal-to-binary';

describe('decimalToBinary', () => {
	test.each<[string, number | undefined, string]>([
		['5', 20, '1'],
		['1', 20, '00011001100110011001'],
		['75', undefined, '11'],
		[
			'414682509851111660248109622154307708365774238137916977868245414488640960619357334196290048428475777939616',
			104,
			'01101010001010001010001000001010000010001010001000001000001010000010001010000010001000001000000010001010'
		]
	])('decimalToBinary(%s, %s) === %s', (n, precision, expected) => {
		const actual = decimalToBinary(n, precision);
		expect(actual).toBe(expected);
	});
});

import { describe, it } from 'node:test';

import assert from 'node:assert';
import { Goodie } from '../../utils/interface';
import { calculateMinPriceDiff } from '..';
import { goodiesStub } from './stubs';

describe('calculateMinPriceDiff', () => {
	it('Should return correct difference and goodies when employees are 2', () => {
		

		const result = calculateMinPriceDiff(goodiesStub, 2);
		assert.deepStrictEqual(result, {
			goodies: [goodiesStub[0], goodiesStub[1]],
			difference: 20,
		});
	});

	it('Should return a difference of 50 with valid input', () => {

		const result = calculateMinPriceDiff(goodiesStub, 3);

		assert.deepStrictEqual(result, {
			goodies: goodiesStub,
			difference: 50,
		});
	});

	it('Should return null when employees number is less than 1', () => {
		const result = calculateMinPriceDiff(goodiesStub, 0);

		assert.strictEqual(result, null);
	});

	it('Should return null when employee number is greater than goodies length', () => {
		const result = calculateMinPriceDiff(goodiesStub, 4);

		assert.strictEqual(result, null);
	});
});

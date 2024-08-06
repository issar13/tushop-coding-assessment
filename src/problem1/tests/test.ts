import assert from 'node:assert';
import { describe, it } from 'node:test';

import { sample1, sample2, sample3 } from './stub';
import { calculateJohnEarnings } from '..';
import { ValidationResponse } from '../../utils/interface';
import { validateJobCount, validateProfit, validateTime } from '../../utils/validator';

describe('calculateJohnEarnings', () => {
	it('Should return 2 tasks and 400 remaining earnings given overlaps', () => {
		const result = calculateJohnEarnings(sample1);
		assert.strictEqual(result[0], 2);
		assert.strictEqual(result[1], 400);
	});

	it('Should return 2 tasks and 400 remaining earnings given overlaps', () => {
		const result = calculateJohnEarnings(sample2);
		assert.strictEqual(result[0], 2);
		assert.strictEqual(result[1], 400);
	});

	it('Should return 0 remaining tasks and 0 earnings given no overlaps', () => {
		const result = calculateJohnEarnings(sample3);
		assert.strictEqual(result[0], 1);
		assert.strictEqual(result[1], 100);
	});
});

describe('validateTimeInput', () => {
	it('Should return isValid as true for a correct time formate', () => {
		const result: ValidationResponse = validateTime('1200');
		assert.strictEqual(result.isValid, true);
	});

	it('Should return invalid time format error for incorrect entries', () => {
		const result: ValidationResponse = validateTime('12345');
		assert.strictEqual(result.isValid, false);
		assert.strictEqual(result.message, '⛔️ Invalid Time Format');
	});

	it('Should return invalid time range error for errors outside of working time range', () => {
		const result: ValidationResponse = validateTime('0800');
		assert.strictEqual(result.isValid, false);
		assert.strictEqual(
			result.message,
			'⚠️ Please enter time between 0900 and 2359...'
		);
	});

	it('Should return "please enter numbers only" for non integer entries', () => {
		const result: ValidationResponse = validateTime('abcd');
		assert.strictEqual(result.isValid, false);
		assert.strictEqual(result.message, '🚫 Please enter numbers only...');
	});
});

describe('validateProfitInput', () => {
	it('Should return isValid profit for correct entry', () => {
		const result: ValidationResponse = validateProfit('100');
		assert.strictEqual(result.isValid, true);
	});

	it('Should return "Please enter a number..." for non integer inputs', () => {
		const result: ValidationResponse = validateProfit('abc');
		assert.strictEqual(result.isValid, false);
		assert.strictEqual(result.message, '🚫 Please enter numbers only...');
	});
});

describe('validateJobCountInput', () => {
	it('valid job count', () => {
		const result: ValidationResponse = validateJobCount('50');
		assert.strictEqual(result.isValid, true);
	});

	it('invalid job count - not a number', () => {
		const result: ValidationResponse = validateJobCount('abc');
		assert.strictEqual(result.isValid, false);
		assert.strictEqual(result.message, '🚫 Please enter numbers only...');
	});

	it('invalid job count - less than 1', () => {
		const result: ValidationResponse = validateJobCount('0');
		assert.strictEqual(result.isValid, false);
		assert.strictEqual(
			result.message,
			'⚠️ Please enter a number greater than 0...'
		);
	});

	it('invalid job count - greater than 100', () => {
		const result: ValidationResponse = validateJobCount('150');
		assert.strictEqual(result.isValid, false);
		assert.strictEqual(
			result.message,
			'⚠️ Please enter a number less than 100...'
		);
	});
});

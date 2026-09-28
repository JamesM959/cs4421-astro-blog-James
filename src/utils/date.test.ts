import { describe, expect, it } from 'vitest';
import { formatDate } from './date';

describe('formatDate', () => {
	it('formats a date with a short month, day, and year', () => {
		const date = new Date(2024, 0, 2, 12);

		expect(formatDate(date)).toBe('Jan 2, 2024');
	});
});

import { DayOfWeek, getDaysInMonth, getFirstInMonth, isWeek } from '../../src/index';
/**
 * Tests for the `isWeek` function.
 */
describe('DayOfWeek', () => {
	/**
	 * Test case to check if the first day of a month is a Tuesday.
	 */
	test('should return true if the first day of a month is a Tuesday', () => {
	    // Get the first day of April 2024
	    const firstDayOfMonth = getFirstInMonth(2024, 4); // MON 2024-04-01T00:00:00.000Z
    
	    // Check if the first day of April 2024 is a monday
	    expect(isWeek(firstDayOfMonth, DayOfWeek.MON)).toEqual(true);
	});
    });
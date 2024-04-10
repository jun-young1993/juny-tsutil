import { DayOfWeek, getPreviousMonthLastDay, getPreviousMonthLastSunday } from '../../src/index';
describe('getPreviousMonthLastSunday', () => {
    test('should return an array of days for the given month and year', () => {
	expect(
		getPreviousMonthLastSunday(2024,4)
	).toEqual([
		new Date('2024-03-31T00:00:00.000Z')
	])

	expect(
		getPreviousMonthLastSunday(2024,5)
	).toEqual([
		new Date('2024-04-28T00:00:00.000Z'),
		new Date('2024-04-29T00:00:00.000Z'),
		new Date('2024-04-30T00:00:00.000Z'),
	])
        


    });


});
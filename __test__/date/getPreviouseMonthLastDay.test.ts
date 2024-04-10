import { DayOfWeek, getPreviousMonthLastDay } from '../../src/index';
describe('getPreviousMonthLastDay', () => {
    test('should return an array of days for the given month and year', () => {

        expect(
		getPreviousMonthLastDay(
			new Date('2024-04-01 13:00:00')
		)
        ).toEqual(
		new Date('Sun Mar 31 2024 13:00:00 GMT+0900 (한국 표준시)')
	);

	expect(
		getPreviousMonthLastDay(
			new Date('2024-04-15 13:00:00')
		)
        ).toEqual(
		new Date('Sun Mar 31 2024 13:00:00 GMT+0900 (한국 표준시)')
	);

	expect(
		getPreviousMonthLastDay(
			new Date('2024-04-30 13:00:00')
		)
        ).toEqual(
		new Date('Sun Mar 31 2024 13:00:00 GMT+0900 (한국 표준시)')
	);


    });


});
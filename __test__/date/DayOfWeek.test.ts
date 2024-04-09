import { DayOfWeek } from '../../src/index';
describe('DayOfWeek', () => {
    test('should return an array of days for the given month and year', () => {

        expect(
            DayOfWeek.SUN
        ).toEqual(0);

        expect(
		DayOfWeek.MON
	).toEqual(1);

	expect(
		DayOfWeek.TUES
	).toEqual(2);

	expect(
		DayOfWeek.WEDNES
	).toEqual(3);

	expect(
		DayOfWeek.THURS
	).toEqual(4);

	expect(
		DayOfWeek.FRI
	).toEqual(5);

	expect(
		DayOfWeek.SATUR
	).toEqual(6);
    });


});
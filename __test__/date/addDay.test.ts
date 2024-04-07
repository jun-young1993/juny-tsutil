import {addDay} from "../../src/date/addDay";

describe('addDay', () => {
    test('should return an array of days for the given month and year', () => {

        expect(
            addDay(new Date('2024-04-01'), 1)
        ).toEqual(
            new Date("2024-04-02")
        );

        expect(
            addDay(new Date('2024-04-01'), -1)
        ).toEqual(
            new Date("2024-03-31")
        );

    });

});
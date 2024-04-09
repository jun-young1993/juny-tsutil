import { subtractDay } from "../../src";
import {addDay} from "../../src/date/addDay";

describe('subtractDay', () => {
    test('should return an array of days for the given month and year', () => {

        expect(
            subtractDay(new Date('2024-03-31'), 1)
        ).toEqual(
            new Date("2024-03-30")
        );

        expect(
            subtractDay(new Date('2024-03-31'), 2)
        ).toEqual(
            new Date("2024-03-29")
        );

    });

});
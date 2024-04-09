import { getDaysInMonth } from '../../src/index';
import {compareDate} from "../../src/date/compareDate";
describe('compareDate', () => {
    test('should return an array of days for the given month and year', () => {

        expect(
            compareDate(new Date('2024-04-01'), new Date('2024-04-01'))
        ).toEqual(true);

        expect(
            compareDate(new Date('2024-04-01'), new Date('2024-04-02')
        )).toEqual(false);

        expect(
            compareDate(new Date('2024-04-01'), new Date('2024-04-02'),(date, diff) => {
                return date < diff
            })
        ).toEqual(true)
    });


});
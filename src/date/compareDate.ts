/**
 * Date 객체를 밀리초 까지의 비교로 같은 시간대인지 판단
 *
 * @param {Date} date
 * @param {Date} diff
 * @param {Function} (dateTimestamp, diffTimestamp)
 *
 * @returns {boolean}
 * 
 * @example
 * ```
 *         expect(
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
 * ```
 */
export function compareDate(date: Date, diff: Date, callback?: (dateTimestamp: number, diffTimestamp: number) => boolean): boolean {
    if(callback){
        return callback(date.getTime(), diff.getTime());
    }
    return date.getTime() === diff.getTime();
}

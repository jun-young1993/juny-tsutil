/**
 * Date 객체를 밀리초 까지의 비교로 같은 시간대인지 판단
 *
 * @param {Date} date
 * @param {Date} diff
 * @param {Function} (dateTimestamp, diffTimestamp)
 *
 * @returns {boolean}
 */
export function compareDate(date: Date, diff: Date, callback?: (dateTimestamp: number, diffTimestamp: number) => boolean): boolean {
    if(callback){
        callback(date.getTime(), diff.getTime());
    }
    return date.getTime() > diff.getTime();
}

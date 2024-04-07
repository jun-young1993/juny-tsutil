/**
 * Date 객체에 대한 날짜 더하기
 *
 * @param {Date} date 계산하고자 하는 Date객체
 * @param {number} day 추가하고자 하는 일수
 *
 * @returns {Date} 계산된 Date 객체
 */
export function addDay(date: Date, day: number){
    date.setDate(date.getDate() + day);
    return date;
}
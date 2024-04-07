/**
 * 특정 년도와 월의 시작일을 반환합니다.
 *
 * @param {number} year - 년도를 나타내는 숫자
 * @param {number} month - 월을 나타내는 숫자 (1부터 12까지의 숫자)
 * @returns {Date} Date
 */
import {fillWord} from "../str/fillWord";

export function getFirstInMonth(year: number, month: number): Date {
    const firstDate = new Date(`${year}-${fillWord(month.toString(), 2, "0")}-01`);
    return firstDate;
}
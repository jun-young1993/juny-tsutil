import { fillWord } from "../str/fillWord";

/**
 * 특정 년도와 월의 마지막일을 반환합니다.
 * @param {number} year - 년도를 나타내는 숫자
 * @param {number} month - 월을 나타내는 숫자 (1부터 12까지의 숫자)
 * @returns {Date} Date
 */
export function getLastInMonth(year: number, month: number): Date
{
    const lastDay = new Date(year,month,0).getDate();
    
    const lastDate = new Date(`${year}-${fillWord(month.toString(),2,'0')}-${fillWord(lastDay.toString(), 2, '0')}`);
    return lastDate;
}
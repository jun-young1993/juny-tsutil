import {getFirstInMonth} from "./getFirstDayInMotth";
import {getLastInMonth} from "./getLastDayInMotth";
import {addDay} from "./addDay";
import {compareDate} from "./compareDate";

/**
 * 특정 년도와 월의 시작일부터 종료일까지의 날짜 배열을 반환합니다.
 * @param {number} year - 년도를 나타내는 숫자
 * @param {number} month - 월을 나타내는 숫자 (1부터 12까지의 숫자)
 * @returns {string[]} 해당 년도와 월의 날짜 배열. 예: ['YYYY-MM-DD', 'YYYY-MM-DD', ...]
 */
export function getDaysInMonth(year: number, month: number): Date[] {
    let startDate = getFirstInMonth(year, month);
    const endDate = getLastInMonth(year, month);

    const days: Date[] = [];

    while(
        !compareDate(startDate, endDate, (date, diff) => date > diff)
    ) {
        days.push(new Date(startDate));
        startDate = addDay(startDate, 1);
    }


    if (days.length === 0) {
        throw new Error(`invalid year: ${year} or month: ${month}`);
    }

    return days;
}
  

  
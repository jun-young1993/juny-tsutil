import { DayOfWeek } from "./DayOfWeek";
import { getFirstInMonth } from "./getFirstDayInMotth";
import { getPreviousMonthLastDay } from "./getPreviousMonthLastDay";
import { isWeek } from "./isWeek";
import { subtractDay } from "./subtractDay";

/**
 * the last Sunday of the previous month
 * 특정년도의 월 시작일(1)이 일요일이 아닌 경우 이전 달의 마지막 주 일요일까지 
 * 
 * @param {number} year - 년도를 나타내는 숫자
 * @param {number} month - 월을 나타내는 숫자 (1부터 12까지의 숫자)
 * 
 * @returns {Date[] | []} Date[] | []
 * 
 * @example
 * ```
	expect(
		getPreviousMonthLastSunday(2024,4)
	).toEqual([
		new Date('2024-03-31T00:00:00.000Z')
	])

	expect(
		getPreviousMonthLastSunday(2024,5)
	).toEqual([
		new Date('2024-04-28T00:00:00.000Z'),
 		new Date('2024-04-29T00:00:00.000Z'),
 		new Date('2024-04-30T00:00:00.000Z'),
	])
 * ```
 */
export function getPreviousMonthLastSunday(year: number, month: number): Date[] | []
{
	const result: Date[] = [];
	const startDate = getFirstInMonth(year,month);
	if(isWeek(startDate,DayOfWeek.SUN)){
		return [];
	}

	getPreviousMonthLastDay(startDate);
	result.push(new Date(startDate));
	while(!isWeek(startDate,DayOfWeek.SUN)){
		subtractDay(startDate,1);
		result.unshift(new Date(startDate));
	}
	
	return result;
}
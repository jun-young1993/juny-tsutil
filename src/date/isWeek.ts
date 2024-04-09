import { DayOfWeek } from "./DayOfWeek";

/**
 * 요일 체크
 * checked is day of week
 * 
 * @param {Date} date 
 * @param {DayOfWeek} dayOfWeek 
 * 
 * @returns {boolean} boolean
 * 
 * @example
 * ```typescript
 * 	const date = getFirstInMonth(2024, 4) // MON 2024-04-01T00:00:00.000Z
 * 	isWeek(date,DayOfWeek.TUES); // true
 * ```
 */
export function isWeek(date: Date, dayOfWeek: DayOfWeek): boolean
{
	return date.getDay() === dayOfWeek;
}
/**
 * get previouse month
 * 
 * @param {Date} date 
 * 
 * @return {Date} previous date
 * 
 * @example
 * ```
 *  getPreviouseMonth(
 * 		new Date('2024-04-15') 
 *  )
 *  // 2024-03-31
 * ```
 */
export function getPreviousMonthLastDay(date: Date){
	date.setDate(0);
	return date;
}
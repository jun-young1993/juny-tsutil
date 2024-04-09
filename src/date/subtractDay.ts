/**
 * 주어진 날짜에서 일 수를 빼는 함수
 * 
 * @param {Date} date - 일 수를 뺄 날짜
 * @param {number} days - 뺄 일 수
 * @returns {Date} 일 수를 뺀 날짜
 */
export function subtractDay(date: Date, days: number): Date
{
	const result = date;
	result.setDate(result.getDate() - days);
	return result;
}
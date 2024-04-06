/**
 * 특정 년도와 월의 시작일부터 종료일까지의 날짜 배열을 반환합니다.
 * @param {number} year - 년도를 나타내는 숫자
 * @param {number} month - 월을 나타내는 숫자 (1부터 12까지의 숫자)
 * @returns {string[]} 해당 년도와 월의 날짜 배열. 예: ['YYYY-MM-DD', 'YYYY-MM-DD', ...]
 */
export function getDaysInMonth(year: number, month: number): string[] {
    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 0); // 0일은 이전 달의 마지막 날짜를 의미함
  
    const days = [];
    let currentDate = startDate;
  
    // startDate부터 endDate까지 각 날짜를 배열에 추가합니다.
    while (currentDate <= endDate) {
      const formattedDate = currentDate.toISOString().split('T')[0]; // ISO 형식의 문자열을 YYYY-MM-DD 형식으로 변환
      days.push(formattedDate);
      currentDate.setDate(currentDate.getDate() + 1); // 다음 날짜로 이동
    }
  
    return days;
  }
  

  
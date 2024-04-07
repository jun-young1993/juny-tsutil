"use strict";
exports.__esModule = true;
exports.getDaysInMonth = void 0;
var getFirstDayInMotth_1 = require("./getFirstDayInMotth");
var getLastDayInMotth_1 = require("./getLastDayInMotth");
/**
 * 특정 년도와 월의 시작일부터 종료일까지의 날짜 배열을 반환합니다.
 * @param {number} year - 년도를 나타내는 숫자
 * @param {number} month - 월을 나타내는 숫자 (1부터 12까지의 숫자)
 * @returns {string[]} 해당 년도와 월의 날짜 배열. 예: ['YYYY-MM-DD', 'YYYY-MM-DD', ...]
 */
function getDaysInMonth(year, month) {
    var startDate = (0, getFirstDayInMotth_1.getFirstInMonth)(year, month);
    var endDate = (0, getLastDayInMotth_1.getLastInMonth)(year, month);
    console.log("=>(getDaysInMonth.ts:14) startDate", startDate);
    console.log("=>(getDaysInMonth.ts:15) endDate", endDate);
    var days = [];
    var currentDate = startDate;
    while (currentDate <= endDate) {
        var formattedDate = currentDate.toISOString().split('T')[0]; // ISO 형식의 문자열을 YYYY-MM-DD 형식으로 변환
        days.push(formattedDate);
        currentDate.setDate(currentDate.getDate() + 1); // 다음 날짜로 이동
    }
    return days;
}
exports.getDaysInMonth = getDaysInMonth;

"use strict";
exports.__esModule = true;
exports.getFirstInMonth = void 0;
/**
 * 특정 년도와 월의 시작일을 반환합니다.
 *
 * @param {number} year - 년도를 나타내는 숫자
 * @param {number} month - 월을 나타내는 숫자 (1부터 12까지의 숫자)
 * @returns {Date} Date
 */
var fillWord_1 = require("../str/fillWord");
function getFirstInMonth(year, month) {
    var firstDate = new Date("".concat(year, "-").concat((0, fillWord_1.fillWord)(month.toString(), 2, "0"), "-01"));
    return firstDate;
}
exports.getFirstInMonth = getFirstInMonth;

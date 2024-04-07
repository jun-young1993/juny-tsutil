"use strict";
exports.__esModule = true;
exports.getLastInMonth = void 0;
var fillWord_1 = require("../str/fillWord");
/**
 * 특정 년도와 월의 마지막일을 반환합니다.
 * @param {number} year - 년도를 나타내는 숫자
 * @param {number} month - 월을 나타내는 숫자 (1부터 12까지의 숫자)
 * @returns {Date} Date
 */
function getLastInMonth(year, month) {
    var lastDay = new Date(year, month, 0).getDate();
    var lastDate = new Date("".concat(year, "-").concat((0, fillWord_1.fillWord)(month.toString(), 2, '0'), "-").concat((0, fillWord_1.fillWord)(lastDay.toString(), 2, '0')));
    return lastDate;
}
exports.getLastInMonth = getLastInMonth;

"use strict";
exports.__esModule = true;
exports.fillWord = void 0;
/**
 * 글자수에서 부족한 앞자리를 특정 문자열로 채웁니다.
 *
 * @param {number} str - 소스 문자열
 * @param {number} length - 타겟 문자열 갯수
 * @param {string} fillStr - 채울 문자
 * @Param {number} type - 0: 앞자리 채우기, -1: 뒷자리 채우기
 *
 * @returns {String} string
 */
function fillWord(str, length, word, type) {
    if (type === void 0) { type = 0; }
    if (word.length > 1) {
        throw new Error('only fill word length 1');
    }
    if (str.length > length) {
        return str;
    }
    var fillLength = length - str.length;
    var fillString = Array(fillLength).fill(word).join('');
    return (type === 0) ? "".concat(fillString).concat(str) : "".concat(str).concat(fillString);
}
exports.fillWord = fillWord;

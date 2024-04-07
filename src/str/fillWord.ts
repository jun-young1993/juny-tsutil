/**
 * 글자수에서 부족한 앞자리를 특정 문자열로 채웁니다.
 *
 * @param {number} str - 소스 문자열
 * @param {number} length - 타겟 문자열 갯수
 * @param {string} fillStr - 채울 문자
 * @Param {number} type - 0: 앞자리 채우기, -1: 뒷자리 채우기
 *
 * @returns {String} string
 *
 * @example
 * ```ts
 * const result = fillWord('4',2,'0');
 * // result = "04"
 *
 * const result = fillWord('4',2,'0',-1);
 * // result = "40"
 * ```
 */
export function fillWord(str: string, length: number, word: string = '', type: 0 | -1 = 0): string {

    if (word.length > 1) {
        throw new Error('only fill word length 1')
    }

    if (str.length > length) {
        return str;
    }

    const fillLength = length - str.length;

    const fillString = Array(fillLength).fill(word).join('');
    return (type === 0) ? `${fillString}${str}` : `${str}${fillString}`;
}
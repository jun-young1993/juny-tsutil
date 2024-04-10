/**
 * Removes the first segment from a string delimited by the specified delimiter.
 *
 * @param {string} str - The input string.
 * @param {string} delimiter - The delimiter used to split the string into segments.
 * @returns {string} The modified string with the first segment removed.
 *
 * @example
 * ```ts
 *  const str1 = 'foo/bar';
 *  const str2 = '/foo/bar';
 *
 *  removeFirstSegment(str1,'/'); // /bar
 *  removeFirstSegment(str1,'/'); // /bar
 * ```
 */
export function removeFirstSegment(str: string, delimiter: string): string
{
    const segments = str.split(delimiter);
    segments.shift(); // 첫 번째 세그먼트 삭제
    return segments.join(delimiter);
}


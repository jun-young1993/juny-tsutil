/**
 * Removes the Last segment from a string delimited by the specified delimiter.
 *
 * @param {string} str - The input string.
 * @param {string} delimiter - The delimiter used to split the string into segments.
 * @returns {string} The modified string with the first segment removed.
 *
 * @example
 * ```ts
 * describe('removeLastSegment', ()=>{
 *     test('should return an remove Last segment',() => {
 *         expect(
 *             removeLastSegment('/foo/bar','/')
 *         ).toEqual('/foo');
 *
 *         expect(
 *             removeLastSegment('foo/bar','/')
 *         ).toEqual('foo');
 *
 *         expect(
 *             removeLastSegment('foo/bar/','/')
 *         ).toEqual('foo/bar');
 *
 *     })
 * })
 * ```
 */
export function removeLastSegment(str: string, delimiter: string): string
{
    const segments = str.split(delimiter);
    segments.pop(); // 첫 번째 세그먼트 삭제
    return segments.join(delimiter);
}


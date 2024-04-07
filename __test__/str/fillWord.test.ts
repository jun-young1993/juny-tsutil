import {fillWord} from "../../src";

describe('fillWord', () => {
    test('should return an array of days for the given month and year', () => {

        // 앞에 0을 채운다
        expect(
            fillWord('4', 2, '0')
        ).toEqual("04");

        // 타겟 글자 수가 1개 이므로 그대로 리턴
        expect(
            fillWord('4', 1, '0')
        ).toEqual("4");

        // 뒤에서 0을 채운다
        expect(
            fillWord('4', 2, '0', -1)
        ).toEqual("40");


    });

    // Add more test cases here for different scenarios if needed
});
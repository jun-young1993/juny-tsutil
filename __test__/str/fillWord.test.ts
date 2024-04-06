import { fillWord } from "../../src";
describe('fillWord', () => {
    test('should return an array of days for the given month and year', () => {
      
      
      const result = fillWord('4',2,'0');
      
      expect(result).toEqual("04");
    });
  
    // Add more test cases here for different scenarios if needed
  });
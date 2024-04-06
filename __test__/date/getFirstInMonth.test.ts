import { getFirstInMonth } from '../../src/date/getFirstDayInMotth';
describe('getFirstInMonth', () => {
    test('should return an array of days for the given month and year', () => {
      
      
      const result = getFirstInMonth(2024, 4);
  
      expect(result).toEqual("2024-04-01T00:00:00.000Z");
    });
  
    // Add more test cases here for different scenarios if needed
  });
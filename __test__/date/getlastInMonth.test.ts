import { getLastInMonth } from '../../src/date/getLastDayInMotth';
describe('getLastInMonth', () => {
    test('should return an array of days for the given month and year', () => {
      
      
      const result = getLastInMonth(2024, 4);
      expect(result).toEqual(new Date("2024-04-30T00:00:00.000Z"));
    });
  
    // Add more test cases here for different scenarios if needed
  });
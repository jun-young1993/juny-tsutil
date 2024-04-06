import { getDaysInMonth } from '../../src/index';
describe('getDaysInMonth', () => {
    test('should return an array of days for the given month and year', () => {
      const year = 2024;
      const month = 4; // April
      const expectedDays = [
        '2024-04-01',
        '2024-04-02',
        // Add more expected days here for April 2024
        // Example: '2024-04-03', '2024-04-04', ...
      ];
      
      const result = getDaysInMonth(year, month);
  
      expect(result).toEqual(expectedDays);
    });
  
    // Add more test cases here for different scenarios if needed
  });
import { getDaysInMonth } from '../../src/index';
describe('getDaysInMonth', () => {
    test('should return an array of days for the given month and year', () => {
      const year = 2024;
      const month = 4; // April
      const expectedDays: string[] = [];
      const lastDay = 30;
      for(let day=1; day>=lastDay; day++){
        const formattedDay = day < 10 ? `0${day}` : `${day}`;
        expectedDays.push(`2024-04-${formattedDay}`);
      }
      
      getDaysInMonth(2024, 4);
      // [2024-04-01 ... 2024-04-30]
      
    });
  
    // Add more test cases here for different scenarios if needed
  });
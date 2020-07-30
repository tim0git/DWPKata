const { formatLocationInput } = require('./formatLocation');

describe('TEST formatLoaction Func', () => {
  describe('should return string with first letter capitalised and following letters lowercase', () => {
    test('When passed a correctly formatted string', () => {
      expect(formatLocationInput('Correct')).toBe('Correct');
    });
    test('When passed a string in lower case', () => {
      expect(formatLocationInput('lowercase')).toBe('Lowercase');
    });
    test('When passed a string in uppercase', () => {
      expect(formatLocationInput('UPPERCASE')).toBe('Uppercase');
    });
    test('When passed a string in mixed case', () => {
      expect(formatLocationInput('MiXeDcAsE')).toBe('Mixedcase');
    });
  });
});

const stringLength = require('./stringLength');
const reverseString = require('./reverseString');
const { add, subtract, divide, multiply } = require('./calculator');
const capitalizeString = require('./capitalizeString');

// Task 1 =======================================================
describe('Length of the String', () => {
  test('count 8 letters in fernando', () => {
    // Arrange
    const stringToCheck = 'fernando';

    // Act
    const letterCount = stringLength(stringToCheck);
    
    // Assert
    expect(letterCount).toBe(8);
  });
});

// Task 2 =======================================================
describe('Reverse the String', () => {
  test('reverse the string fernando to odnanref', () => {
    // Arrange
    const stringToReverse = 'fernando';

    // Act
    const reversedString = reverseString(stringToReverse);
    
    // Assert
    expect(reversedString).toBe('odnanref');
  });
});

// Task 3 =======================================================
// Add
describe('Calculator - Add', () => {
  test('2 + 3 = 5', () => {
    // Arrange
    const n1 = 2, n2 = 3;

    // Act
    const valueAdd = add(n1, n2);
    
    // Assert
    expect(valueAdd).toBe(5);
  });

  test('32 + -52 = -20', () => {
    // Arrange
    const n1 = 32, n2 = -52;

    // Act
    const valueAdd = add(n1, n2);
    
    // Assert
    expect(valueAdd).toBe(-20);
  });

  test('123123 + 456456 = 579579', () => {
    // Arrange
    const n1 = 123123, n2 = 456456;

    // Act
    const valueAdd = add(n1, n2);
    
    // Assert
    expect(valueAdd).toBe(579579);
  });
});

// Subtract
describe('Calculator - Subtract', () => {
  test('2 - 3 = -1', () => {
    // Arrange
    const n1 = 2, n2 = 3;

    // Act
    const valueSubtract = subtract(n1, n2);
    
    // Assert
    expect(valueSubtract).toBe(-1);
  });

  test('32 - 52 = -20', () => {
    // Arrange
    const n1 = 32, n2 = 52;

    // Act
    const valueSubtract = subtract(n1, n2);
    
    // Assert
    expect(valueSubtract).toBe(-20);
  });

  test('123123 - 456456 = 579579', () => {
    // Arrange
    const n1 = 123123, n2 = 456456;

    // Act
    const valueSubtract = subtract(n1, n2);
    
    // Assert
    expect(valueSubtract).toBe(-333333);
  });
});

// Divide
describe('Calculator - Divide', () => {
  test('4 / 2 = 2', () => {
    // Arrange
    const n1 = 4, n2 = 2;

    // Act
    const valueDivide = divide(n1, n2);
    
    // Assert
    expect(valueDivide).toBe(2);
  });

  test('5 / 10 = 0.5', () => {
    // Arrange
    const n1 = 5, n2 = 10;

    // Act
    const valueDivide = divide(n1, n2);
    
    // Assert
    expect(valueDivide).toBe(0.5);
  });

  test('1 / 1 = 1', () => {
    // Arrange
    const n1 = 1, n2 = 1;

    // Act
    const valueDivide = divide(n1, n2);
    
    // Assert
    expect(valueDivide).toBe(1);
  });
});

// Multiply
describe('Calculator - Multiply', () => {
  test('2 * 3 = 6', () => {
    // Arrange
    const n1 = 2, n2 = 3;

    // Act
    const valueMultiply = multiply(n1, n2);
    
    // Assert
    expect(valueMultiply).toBe(6);
  });

  test('32 * -52 = -1664', () => {
    // Arrange
    const n1 = 32, n2 = -52;

    // Act
    const valueMultiply = multiply(n1, n2);
    
    // Assert
    expect(valueMultiply).toBe(-1664);
  });

  test('1 * 1 = 1', () => {
    // Arrange
    const n1 = 1, n2 = 1;

    // Act
    const valueMultiply = multiply(n1, n2);
    
    // Assert
    expect(valueMultiply).toBe(1);
  });
});

// Task 4 =======================================================
describe('Capitalize the string', () => {
  test('capitalize the string "i love cute bunnies!"', () => {
    // Arrange
    const stringToCapitalize = 'i love cute bunnies!';

    // Act
    const capitalizedString = capitalizeString(stringToCapitalize);
    
    // Assert
    expect(capitalizedString).toBe('I Love Cute Bunnies!');
  });
});
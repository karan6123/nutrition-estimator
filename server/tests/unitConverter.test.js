const { convertUnits } = require('../utils/unitConverter');
const measurements = {
    tbsp: {
        oil: 13,
        sugar: 12.5,
        flour: 8,
        default: 10
    }
};

const testCases = [
    { quantity: 1, unit: 'tbsp', ingredient: 'oil', expected: 13 },
    { quantity: 2, unit: 'tbsp', ingredient: 'sugar', expected: 25 },
    { quantity: 3, unit: 'tbsp', ingredient: 'flour', expected: 24 },
    { quantity: 1, unit: 'tbsp', ingredient: 'unknown', expected: 10 }
];

console.log("Running unit tests for convertUnits...");

testCases.forEach(({ quantity, unit, ingredient, expected }, index) => {
    const result = convertUnits(quantity, unit, ingredient, measurements);
    const passed = result === expected;
    console.log(`Test ${index + 1}: ${passed ? '✅ Passed' : '❌ Failed'} | Expected: ${expected}, Got: ${result}`);
});
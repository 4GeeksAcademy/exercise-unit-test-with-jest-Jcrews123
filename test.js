// Import the function sum from the app.js file
const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');
    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);
    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(expected); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})
test("One Dollar should be 146.2616822429907 Yen", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');
    // Use the function like its supposed to be used
    const dollars = fromDollarToYen(3.5);
    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5  * 146.2616822429907; 
    // This is the comparison for the unit test
     expect(fromDollarToYen(3.5)).toBe(expected); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})
test("One yen should be 0.0055591054313099 GBP", function() {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js');
    // Use the function like its supposed to be used
    const dollars = fromYenToPound(3.5);
    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 1 * 0.0055591054313099; 
    // This is the comparison for the unit test
     expect(fromYenToPound(1)).toBe(expected); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})
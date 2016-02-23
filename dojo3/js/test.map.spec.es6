const inputToExpected = new Map();

inputToExpected.set(1, "1"),
inputToExpected.set(2, "2"),
inputToExpected.set(3, "Fizz"),
inputToExpected.set(5, "Buzz"),
inputToExpected.set(6, "Fizz"),
inputToExpected.set(15, "FizzBuzz"),
inputToExpected.set(10, "Buzz"),
inputToExpected.set(30, "FizzBuzz"),

describe('test', () => {
    for (let [ input, expected ] of inputToExpected) { 
        it(`should display ${expected}`, () => {
            expect(fizzBuzz(input)).toEqual(expected);
        });
    }
});

function each(obj, iterator) {
    Object.keys(obj).forEach(key => {
        iterator(key, obj[key]);
    });
}

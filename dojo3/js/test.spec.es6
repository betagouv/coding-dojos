const INPUT_TO_EXPECTED = {
    1: "1",
    2: "2",
    3: "Fizz",
    5: "Buzz",
    6: "Fizz",
    15: "FizzBuzz",
    10: "Buzz",
    30: "FizzBuzz",
}

describe('test', () => {
    each(INPUT_TO_EXPECTED, (input, expected) => {    
        it(`should display ${expected}`, () => {
            expect(fizzBuzz(input)).toEqual(expected);
        });
    });
});

function each(obj, iterator) {
    Object.keys(obj).forEach(key => {
        iterator(key, obj[key]);
    });
}

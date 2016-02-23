function fizzBuzz(n) {
    if (n % 15 == 0) return 'FizzBuzz';
    if (n % 3 == 0) return 'Fizz';
    if (n % 5 == 0) return 'Buzz';

    return `${n}`;
}

function fizzBuzzAsPromised(n) {
    const result = new Promise(fizzBuzz(n));
    setTimeout(result.resolve.bind(result), Math.random() * 1000);
    return result;
}
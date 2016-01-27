'use strict';

describe('Jacky', function () {

    beforeEach(function () {
    });

    it('shoud return false for 35', function () {
        expect(Jacky.isInteresting(35)).toBe(false);
    });

    it('shoud return true for 10', function () {
        expect(Jacky.isInteresting(10)).toBe(true);
    });
    
    it('shoud return true for 100', function () {
        expect(Jacky.isInteresting(100)).toBe(true);
    });
    
    it('shoud return true for 1000', function () {
        expect(Jacky.isInteresting(1000)).toBe(true);
    });
    
    it('shoud return true for 2000', function () {
        expect(Jacky.isInteresting(2000)).toBe(true);
    });
    
    it('shoud return true for 110', function () {
        expect(Jacky.isInteresting(110)).toBe(false);
    });
    
    it('shoud return true for 1', function () {
        expect(Jacky.isInteresting(1)).toBe(true);
    });
    
    it('shoud return true for 2', function () {
        expect(Jacky.isInteresting(2)).toBe(true);
    });

    it('shoud return true for palindromes', function () {
        expect(Jacky.isInteresting(121)).toBe(true);
    });
    
    it('shoud return true for palindromes', function () {
        expect(Jacky.isInteresting(12321)).toBe(true);
    });

    it('shoud return true for 1234 (suite)', function () {
        expect(Jacky.isInteresting(1234)).toBe(true);
    });

    it('shoud return true for 4321 (reverse suite)', function () {
        expect(Jacky.isInteresting(4321)).toBe(true);
    });

});


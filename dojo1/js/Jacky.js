'use strict';

var Jacky = {
    isInteresting: function(number) {
        if (number < 10) {
            return true;
        }
        if (isPalindrome(number.toString())) {
            return true;
        }
        
        if (isSingleNumberFllowedBy0s(number)) {
            return true;
        }
        
        if (isASuite(number) || isAReversedSuite(number)) {
            return true;
        }
    
        return false;
    }
};

function isAReversedSuite(number) {
    return isASuite(number, true)
}
        
function isASuite(number, reverse) {
    var asArray = number.toString().split('');
    if (reverse) {
        asArray = asArray.reverse()
    }
    for(var i = 0; i < asArray.length -1; i++) {
        if( parseInt(asArray[i]) !=  parseInt(asArray[i +1]) - 1) {
            return false
        }
    }
   
    return true
}

function isSingleNumberFllowedBy0s(number) {
    return number.toExponential().split('e')[0].length == 1;
}

function isPalindrome(s) {
    return s == reverse(s)   
}

function reverse(s){
    return s.split('').reverse().join('')
}
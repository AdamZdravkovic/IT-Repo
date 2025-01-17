// Task 1


function biggerNum (a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
};

var biggerNumResult = biggerNum(5, 7);
console.log("Bigger number is:", biggerNumResult);


// Task 2


function oddNum (a) {
    if (a % 2 === 0) {
        return true;
    } else {
        return false;
    }
};

var oddNumResult = oddNum(5);
console.log("Is this number odd?", oddNumResult);


// Task 3


function threeDig (a) {
    if (a > 99 && a < 1000) {
        return true;
    } else {
        return false;
    }
};

var threeDigResult = threeDig(555);
console.log("Is this number three digit?", threeDigResult);


// Task 4


function arithmeticMean (a, b, c, d) {
    if (typeof a === "number" && typeof b === "number" && typeof c === "number" && typeof d === "number" ) {
        return (a + b + c + d) / 4;
    }
};

var arithmeticMeanResult = arithmeticMean(5, 10, 5, 10);
console.log("Arithmetic mean is?", arithmeticMeanResult);


// Task 5


function drawSquare(a) {
    if (a < 2) {
        return "Number too low";
    };

    var result = "";

    var upperSide = "";
    for (var i = 0; i < a; i++) {
        upperSide += "*";
    };
    result += upperSide + "\n";

    var middleSide = "*";
    for (var i = 0; i < a - 2; i++) {
        middleSide += " ";
    };
    middleSide += "*";
    
    for (var i = 0; i < a - 2; i++) {
        result += middleSide + "\n";
    };

    var lowerSide = "";
    for (var i = 0; i < a; i++) {
        lowerSide += "*";
    };
    result += lowerSide;
    return result;
};

var drawSquareResult = drawSquare(4);
console.log("Draw a square" + "\n" + drawSquareResult);


// Task 6


function horChart (a, b, c) {
    if (a < 1 || b < 1 || c < 1) {
        return "Numbers too low";
    };

    var result = "";

    var firstNum = "";
    for (var i = 0; i < a; i++) {
        firstNum += "*";
    };
    result += firstNum + "\n";

    var secondNum = "";
    for (var i = 0; i < b; i++) {
        secondNum += "*";
    };
    result += secondNum + "\n";

    var thirdNum = "";
    for (var i = 0; i < c; i++) {
        thirdNum += "*";
    };
    result += thirdNum;

    return result;
};

var horChartResult = horChart(4, 5, 2);
console.log("Horizontal Chart" + "\n" + horChartResult);


// Task 7


function countDigits(a) {
    var count = 0;

    if (a < 0) {
        a = -a;
    };

    while (a >= 1) {
        count++;
        a = a / 10;

        a = a - (a % 1);
    };

    return count;
};

var countDigitsResult = countDigits(100);
console.log("Number of digits:", countDigitsResult);


// Task 8


function countOccurrences (a, e) {
    var count = 0;

    for (var i = 0; i < a.length; i++) {
        if (a[i] === e) {
            count++;
        };
    };

    return count;
};

var countOccurrencesResult = countOccurrences([2, 4, 7, 8, 4, 2, 4, 3, 9, 4], 4);
console.log("Number of occurrences:", countOccurrencesResult);


// Task 9


function sumOfOdd (a) {
    var result = 0;

    for (var i = 0; i < a.length; i++) {
        if (a[i] % 2 !== 0) {
            result += a[i];
        };
    };

    return result;
};

var sumOfOddResult = sumOfOdd([7, 5, 3, 2, 1, 8, 9, 5, 5]);
console.log("Sum of odd:", sumOfOddResult);


// Task 10


function countLetter (a) {
    var result = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] === "A") {
            result++;
        } else if (a[i] === "a") {
            result++;
        };
    };

    return result;
};

var countLetterResult = countLetter("Adam");
console.log("Count letter:", countLetterResult);


// Task 11


function stringCon (a, b) {
    var result = "";
    for (var i = 0; i < b; i++) {
        result += a;
    };

    return result;
};

var stringConResult = stringCon("bus", 5);
console.log("String concatenation:", stringConResult);


// Task 12


function stringInput (a) {
    return typeof a === "string";
};

var stringInputResult = stringInput(909);
console.log("Is input string?", stringInputResult);


// Task 13


function blankString (a) {
    if (typeof a !== "string") {
        return false;
    };

    for (var i = 0; i < a.length; i++) {
        if (a[i] !== " ") {
            return false;
        };
    };

    return true;
};

var blankStringResult = blankString("    ");
console.log("Is string blank?", blankStringResult);


// Task 14


function multiplyString (a, b) {
    if (b < 1) {
        b = 1;
    };

    var result = "";
    for (var i = 0; i < b; i++) {
        result += a;
    };

    return result;
};

var multiplyStringResult = multiplyString("Rome", 5);
console.log("Multiply string result:", multiplyStringResult);


// Task 15


function countLetterOccurrences (a, b) {
    var result = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] === b) {
            result++;
        };
    };

    return result;
};

var countLetterOccurrencesResult = countLetterOccurrences("desert", "e");
console.log("Count letter occurrences:", countLetterOccurrencesResult);


// Task 16


function firstLetterOccurrence (a, b) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === b) {
            return i;
        };
    };

    return -1;
};

var firstLetterOccurrenceResult = firstLetterOccurrence("mountain", "s");
console.log("First letter occurrence:", firstLetterOccurrenceResult);


// Task 17


function lastLetterOccurrence (a, b) {
    for (var i = a.length; i > 0; i--) {
        if (a[i] === b) {
            return i;
        };
    };

    return -1;
};

var lastLetterOccurrenceResult = lastLetterOccurrence("river", "i");
console.log("Last letter occurrence:", lastLetterOccurrenceResult);


// Task 18


function stringToArray (a) {
    var result = [];
    for (var i = 0; i < a.length; i++) {
        if (a[i] !== " ") {
            result[i] = a[i];
        } else {
            result[i] = null;
        };
    };

    return result;
};

var stringToArrayResult = stringToArray("How's going?");
console.log("My new array:", stringToArrayResult);


// Task 19


function primeNumber (a) {
    if (a <= 1) {
        return false;
    };

    for (var i = 2; i < a; i++) {
        if (a % i === 0) {
            return false;
        };
    };

    return true;
};

var primeNumberResult = primeNumber(6);
console.log("Is this prime number?", primeNumberResult);


// Task 20


function replaceSpace (a, b) {
    var result = "";

    for (var i = 0; i < a.length; i++) {
        if (a[i] === " ") {
            result += b;
        } else {
            result += a[i];
        };
    };

    return result;
};

var replaceSpaceResult = replaceSpace("Where's my hat?", "~");
console.log(replaceSpaceResult);


// Task 21


function shortString (a, b) {
    var result = "";

    for (var i = 0; i < b; i++) {
        result += a[i];
    };

    result += "...";

    return result;
};

var shortStringResult = shortString("How do get there?", 6);
console.log(shortStringResult);


// Task 22


function convertArray (a) {
    var result = [];

    for (var i = 0; i < a.length; i++) {
        if (typeof a[i] === "number") {
            result[i] += a[i];
        };
    };

    return result;
};

var convertArrayResult = convertArray(["56", "undefined", "Yes", "3e+5", Infinity]);
console.log(convertArrayResult);


// Task 23


function retirement(a, b) {
    if (a === "female") {
        if (b > 0 && b < 60) {
            var result = 60 - b;
            return "You have " + result + " more years to retire.";
        } else if (b >= 60) {
            return "You're already retired!";
        } else {
            return "Invalid age input.";
        }
    } else if (a === "male") {
        if (b > 0 && b < 65) {
            var result = 65 - b;
            return "You have " + result + " more years to retire.";
        } else if (b >= 65) {
            return "You're already retired!";
        } else {
            return "Invalid age input.";
        }
    } else {
        return "Wrong input";
    };
};


var retirementResult = retirement("male", 55);
console.log(retirementResult); // "You have 10 more years to retired."


// Task 24


function humanizedNumber(a) {
    if (a === 0) {
        return a;
    } else if (a % 100 >= 11 && a % 100 <= 13) {
        return a + "th";
    } else if (a % 10 === 1) {
        return a + "st";
    } else if (a % 10 === 2) {
        return a + "nd";
    } else if (a % 10 === 3) {
        return a + "rd";
    } else {
        return a + "th";
    }
}

var humanizedNumberResult = humanizedNumber(111);
console.log("Humanized number is:", humanizedNumberResult);


// Task 25


function insertString(a, b, c) {
    if (c === undefined || c === null) {
        c = 0;
    };

    var result = "";

    for (var i = 0; i < c; i++) {
        result += a[i];
    };

    result += b;

    for (var i = c; i < a.length; i++) {
        result += a[i];
    };

    return result;
}

var insertStringResult = insertString("Today is a nice day.", "really ", 11);
console.log(insertStringResult);


// Task 26


function arrayToString (a) {
    var result = "";

    for (var i = 0; i < a.length; i++) {
        if (a[i] !== undefined && a[i] !== null && !Number.isNaN(a[i]) && a[i] !== Infinity && a[i] !== "") {
            result += a[i] + " ";
        };
    };

    return result;
};

var arrayToStringResult = arrayToString([3, false, -22, undefined, 33, null, "", NaN]);
console.log("The new string is:", arrayToStringResult);


// Task 27


function falsyValues(a) {
    var result = [];

    for (var i = 0; i < a.length; i++) {
        if (a[i]) {
            result[result.length] = a[i];
        };
    };

    return result;
};

var falsyValuesResult = falsyValues([1, 'hello', '', 42, false, undefined, null, true, NaN]);
console.log("Array with no falsy values:", falsyValuesResult);


// Task 28


function 









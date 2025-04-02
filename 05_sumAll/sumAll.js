const sumAll = function(num1,num2) {
    let sum = 0
    if (num1 > num2) {
        let holdNum = num1;
        num1 = num2;
        num2 = holdNum;
    }
    else if (num1 < 0 || num2 < 0) {
        return 'ERROR';
    }
    else if (typeof num1 !== "number" || typeof num2 !== "number") {
        return 'ERROR';
    }
    else if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return 'ERROR';
    }
    for (num1; num1 < num2; num1++)
        sum += num1;
        return sum + num2;
};

// Do not edit below this line
module.exports = sumAll;

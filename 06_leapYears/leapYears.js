const leapYears = function(input) {
    if (input % 400 === 0) {
        return true;
    }
    if (input % 100 === 0) {
        return false;
    }
    if (input % 4 === 0) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;

module.exports = function getZerosCount(number, base) {
    // your implementation
    let maxSimpleMultiplier = 2;
    let simpleMultipliers = [];
    let i = 0;
    let copyBase = base;
    let zerosCount = 0;
    let minZerosCount ;
    let extraDivide = 0;
    let arrDivide = [];
    let num = number;
    while (copyBase != 1) {
        if (copyBase % maxSimpleMultiplier == 0) {
            copyBase /= maxSimpleMultiplier;
            extraDivide++;
            arrDivide[i] = extraDivide;
            simpleMultipliers[i] = maxSimpleMultiplier;
        } else {
            if (extraDivide != 0) i++;
            maxSimpleMultiplier++;
            extraDivide = 0;
        }
    }
    for (i = 0; i < simpleMultipliers.length; i++) {
        num = number;
        zerosCount = 0;
        while (num > 0) {
            num /= simpleMultipliers[i];
            num = Math.floor(num);
            zerosCount += num;
        }
        zerosCount = Math.floor(zerosCount / arrDivide[i])
        if (minZerosCount > zerosCount || !minZerosCount) minZerosCount = zerosCount;
    }
    return minZerosCount;
}

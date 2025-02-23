const palindromes = function (string) {
    let cleanString = string.match(/[a-zA-Z0-9]/g).join('').toLowerCase()

    let j = 0;
    for (let i = cleanString.length; i > cleanString.length/2; i--) {
        if (cleanString.at(i-1) !== cleanString.at(j))
            return false
        j++  
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;

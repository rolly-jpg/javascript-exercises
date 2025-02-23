const findTheOldest = function(arr) {
    let greatestAge = 0
    
    return arr.reduce((acc,value) => {
        age = (value.yearOfDeath ?? new Date().getFullYear()) - value.yearOfBirth
        if (age > greatestAge) {
            greatestAge = age
            acc = value
        }
        return acc
    },{})
};

// Do not edit below this line
module.exports = findTheOldest;

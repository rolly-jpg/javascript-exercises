const getTheTitles = function(arr) {
    return arr.reduce((acc,value)=>{
        acc.push(value.title)
        return acc
    },[])
};

// Do not edit below this line
module.exports = getTheTitles;

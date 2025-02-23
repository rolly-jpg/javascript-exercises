const add = function(first, second) {
	return first+second
};

const subtract = function(first, second) {
	return first-second
};

const sum = function(array) {
	return array.reduce((acc,value) => {return acc+=value;},0)
};

const multiply = function(array) {
  return array.reduce((acc,value) => {return acc*=value;},1)
};

const power = function(first,second) {
	return Math.pow(first, second)
};

const factorial = function(first) {
  if (first === 0) return 1;
  let acc = first
  first--
  while (first>0) {
    acc *= first
    first--
  }
  return acc;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

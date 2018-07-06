// var math = require('./lib/sum');
// console.log(math.add(1,2));
// console.log(math.minus(1,2));
// console.log(math.multiply(1,2));
// console.log(math.divide(1,2));
var sum = require('./lib/sum');
console.log(sum(1,2));

var cal = require('./lib/calculator');
console.log(cal.avg([1,2,3,4,5,6,7,8,9,10]));
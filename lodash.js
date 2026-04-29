const lodash = require('lodash');

//first later Capital
console.log(lodash.capitalize('abcd'));

//syntax---- .defaults(object, source)
//things which are missing in ojects find the in source
console.log(lodash.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 }));


//partition
console.log(lodash.partition([1, 2, 3, 4], n => n % 2));
// → [[1, 3], [2, 4]]


//divids in part specified
console.log(lodash.chunk(['a', 'b', 'c', 'd'], 3));
// => [['a', 'b'], ['c', 'd']]
 
console.log(lodash.compact([0, 1, false, 2, '', 3]));
// => [1, 2, 3]
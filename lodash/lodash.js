const _ = require('lodash');

// ------------------------------
// 1. capitalize
console.log('capitalize:', _.capitalize('abcd')); 
// Abcd

// ------------------------------
// 2. defaults
console.log('defaults:', _.defaults({ a: 1 }, { a: 3, b: 2 }));
// { a: 1, b: 2 }

// ------------------------------
// 3. partition
console.log('partition:', _.partition([1, 2, 3, 4], n => n % 2));
// [[1,3], [2,4]]

// ------------------------------
// 4. chunk
console.log('chunk:', _.chunk(['a', 'b', 'c', 'd'], 2));
// [['a','b'], ['c','d']]

// ------------------------------
// 5. compact
console.log('compact:', _.compact([0, 1, false, 2, '', 3]));
// [1,2,3]

// ------------------------------
// 6. uniq (remove duplicates)
console.log('uniq:', _.uniq([1, 2, 2, 3, 4, 4]));
// [1,2,3,4]

// ------------------------------
// 7. flatten (1 level)
console.log('flatten:', _.flatten([1, [2, [3]]])); 
// [1,2,[3]]

// ------------------------------
// 8. flattenDeep
console.log('flattenDeep:', _.flattenDeep([1, [2, [3]]])); 
// [1,2,3]

// ------------------------------
// 9. find
console.log('find:', _.find([1, 2, 3, 4], n => n > 2));
// 3

// ------------------------------
// 10. filter
console.log('filter:', _.filter([1, 2, 3, 4], n => n % 2 === 0));
// [2,4]

// ------------------------------
// 11. map
console.log('map:', _.map([1, 2, 3], n => n * 2));
// [2,4,6]

// ------------------------------
// 12. reduce
console.log('reduce:', _.reduce([1, 2, 3], (sum, n) => sum + n, 0));
// 6

// ------------------------------
// 13. sortBy
console.log('sortBy:', _.sortBy([3, 1, 4, 2]));
// [1,2,3,4]

// ------------------------------
// 14. groupBy
console.log('groupBy:', _.groupBy([6.1, 4.2, 6.3], Math.floor));
// { '4': [4.2], '6': [6.1, 6.3] }

// ------------------------------
// 15. keyBy
console.log('keyBy:', _.keyBy([{ id: 1 }, { id: 2 }], 'id'));
// { '1': {id:1}, '2': {id:2} }

// ------------------------------
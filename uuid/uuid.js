const { v1, v3, v4, v5 } = require('uuid');

// v1 - Time based
console.log("v1:", v1());

// v3 - Name based (MD5 hashing) - namespace chahiye
console.log("v3:", v3('hello', v3.URL));

// v4 - Random (sabse popular)
console.log("v4:", v4());

// v5 - Name based (SHA-1 hashing) - v3 se better
console.log("v5:", v5('hello', v5.URL));


/*

Database me unique ID dena
Users / orders / products ke IDs
Tokens generate karna
File names unique banana

v4  Random ID — sabse zyada use hota hai 
v1  Time based ID   
v3  Name based
v5  Name based (v3 se better)

*/
/* 

CRYPTO 
------
1. hash password
2. data encrypt/dcrypt
3. secure token generate

*/

const crypto = require('crypto')

//password hash
const password = "Mas#7777"
 const hash = crypto
 .createHash('sha256')
 .update(password)
 .digest('hex')

console.log("hashed password = ", hash);

//Random token generate
const token = crypto.randomBytes(16).toString('hex')
console.log("token =", token);


 
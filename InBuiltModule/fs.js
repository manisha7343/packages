/*

fs module = create, read, write, delete file

*/
const fs = require('fs')

//create and write file

const data = fs.writeFileSync('hello.txt', 'hello i amm writeing the file');
console.log(data);

//read file
const data1 = fs.readFileSync('hello.txt', 'utf-8')
console.log(data1);

//append file
const data3 = fs.appendFileSync('hello.txt', '\n Adding second text(aappend operation)')
console.log(data3);

//read again
fs.appendFileSync('hello.txt', '\n Adding second text(appned operation)') 


//file delete
// fs.deleteFileSync('hello.txt');





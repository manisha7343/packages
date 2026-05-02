/*

steam: loading data into chunks 

Types: 
1.Readable Stream: reads data
2.writable stream: writable stream
3.Duplex: read_write both
4.transform: modifiying data

*/


const fs = require('fs');
const { Duplex,Transform } = require('stream');


//1. Read stream---------------

// const readStream = fs.createReadStream('hello.txt', 'utf-8');

// readStream.on('data', (chunk) => {
//   console.log("Chunk:", chunk);
// });




// //2. Write stream----------------------

// const stream = fs.createWriteStream('new.txt');

// stream.write("Hello bhai ");
// stream.write(" i am learning stream");

// stream.end();




// //3.copy file(pip concept)----------------

// const read = fs.createReadStream('hello.txt');
// const write = fs.createWriteStream('copy.txt');

// read.pipe(write);

// //Duplex-------------------

// const duplex = new Duplex({
//   read(size) {
//     this.push("Hello from read\n");
//     this.push(null);
//   },
//   write(chunk, encoding, callback) {
//     console.log("Writing:", chunk.toString());
//     callback();
//   }
// });

// duplex.on('data', (chunk) => {
//   console.log("Reading:", chunk.toString());
// });

// duplex.write("duplex is running");






// //5. transform (eg making text uppercase)----


// const transform = new Transform({
//   transform(chunk, encoding, callback) {
//     const upper = chunk.toString().toUpperCase();
//     this.push(upper);
//     callback();
//   }
// });

// transform.on('data', (chunk) => {
//   console.log("Output:", chunk.toString());
// });

// transform.write("hello");



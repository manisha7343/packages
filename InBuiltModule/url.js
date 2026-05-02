//URL module :parsing(breaking) URL and creating

const url = require('url')

const myUrl = "http://localhost:3000/about?name=manish&age=20";

const parsed = url.parse(myUrl, true)

console.log(parsed);


//extacting --------------
console.log(parsed.pathname);
console.log(parsed.query.name); 


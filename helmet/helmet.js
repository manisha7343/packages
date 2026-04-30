const express = require('express');
const helmet = require('helmet');

const app = express();

app.use(helmet()); // enable all security headers

app.get('/', (req, res) => {
  console.log("ip--------",req.ip)
  console.log(res.getHeaders());
  res.send('Hello secure world');

});

app.listen(3000, () => console.log('Server running'));


/*

Helmet automatically ye headers set karta hai:

X-Content-Type-Options
X-Frame-Options
X-XSS-Protection
Content-Security-Policy

👉 Ye sab attacks se bachate hain:

XSS (cross-site scripting)
Clickjacking
MIME sniffing

*/
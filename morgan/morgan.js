const express = require('express');
const morgan = require('morgan');

const app = express();


//minimal info----------
// app.use(morgan('tiny'));

//combined Api browser-------
// app.use(morgan('combined'));

//short and colored logs
// app.use(morgan('dev'));

//common logs---------
// app.use(morgan('common'));

//short logs-------
// app.use(morgan('short'));


//user middleware (dummy for now)----------
// app.use((req, res, next) => {
//   req.user = { id: 'user_123' }; // real me JWT se aata hai
//   next();
// });


// custom logger---------
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));


// //token---------
// morgan.token('userId', (req) => req.user?.id || 'guest');
// app.use(morgan(':method :url :status :userId'));


// app.use(morgan('dev', {
//   skip: (req, res) => res.statusCode < 400
// }));


app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(3000, () => {
  console.log('server is running');
});
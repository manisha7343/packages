const { log } = require('console');
const express = require('express')
const morgan = require('morgan')

const app = express();
//------------------------------------------

//use morgan
// app.use(morgan('dev'))

//minimal info
// app.use(morgan('tiny'));

//combined Api browser
app.use(morgan('combined'));

//cutomer los
// app.use(morgan(':method :url :status :response-time ms'));

//------------------------------------------

app.get('/', (req,res)=>{
    res.send('Hello');
});

app.listen(3000, ()=>{
    console.log('server is runing');
});


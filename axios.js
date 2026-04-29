const axios = require("axios")

axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res =>{
        console.log(res.data);
    })
    .catch(err =>{
        console.log(err.message);
        
    })
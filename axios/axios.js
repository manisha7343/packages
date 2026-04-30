const axios = require("axios");

async function getUsers() {
  try {
    const res = await axios.post('https://jsonplaceholder.typicode.com/users');
    console.log(res.data);
  } catch (err) {
    console.log(err.message);s
  }
}



getUsers();
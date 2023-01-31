//Q2
// Write an async function to call an external API.

// The function should return a mapped response with just id, name & email. (Use fetch API to call the External resource)

// Add error handling using try-catch as well.


// External API to use:  https://reqres.in/api/users


const fetch = require("node-fetch");
const API_URL = 'https://reqres.in/api/users';

let getInfo = async () => {
    try {
        const check = await fetch(API_URL);
        const info = await check.json();
        return info;
    }
    catch (err) {
        throw new Error(err);
    }
}
getInfo()
    .then(res => console.log(res))
    .catch(err => console.log(err));
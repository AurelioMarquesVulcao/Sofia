const axios = require('axios');
const save = require('./sofia');


// Make a request for a user with a given ID
axios.get('http://localhost:3000/users')
    .then(function (response) {
        // handle success
        // console.log(response);
        // console.log(response.data.results[0]);
        var data1 = response.data
        
        console.log(data1);
        

    })
    .catch(function (error) {
        // handle error
        console.log(error);
    });


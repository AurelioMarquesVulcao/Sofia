const axios = require('axios');
const answers = require('./sofia')

const data_questions = [
    {
        uuid: '3a7308ee-0980-469b-9753-81da3ea21ee8',
        product_name: ["O nome do produto é", "qual o nome do produto"],
        color: ['qual a cor do produto', 'O produto possui qual cores'],
        product_qty: ['qual a quantidade do estoque', 'você ainda possui estoque?'],
        description: 'Cadeira confortavel e elegante',
        seller_name: ['qual é o seu nome']
    }

]
var perg_r = "prezado qual cor"


// Make a request for a user with a given ID
axios.get('http://localhost:3000/users')
    .then(function (response) {
        // handle success
        // console.log(response);
        // console.log(response.data.results[0]);
        var data1 = response.data

        console.log(answer(perg_r, data_questions[0]));

        console.log(data1);


    })
    .catch(function (error) {
        // handle error
        console.log(error);
    });


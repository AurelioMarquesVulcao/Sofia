const question = require('./question_test');
const points = require('./sofia_learn');
const validation = require('./sofia_learn');

// define a constante de confiabilidade na resposta.
// 0.5 coresponde a 50% de certeza na resposta,
match = 0.1

// pergunta do comprador
var perg_r = "prezado qual cor"


const datas = [
    {
        uuid: '3a7308ee-0980-469b-9753-81da3ea21ee8',
        product_name: 'Cadeira Gamer',
        color: 'Preto e Vermelho',
        product_qty: '5',
        description: 'Cadeira confortavel e elegante',
        seller_name: 'Yago das cadeiras'
    }
]

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


// função que responde a pergunta
function answers(question, question_data, data) {
    sofia_replies = 'Eu ainda não sei a resposta'
    answers_i = 0
    answer = ''
    var product_name_rank = 0
    var color_rank = 0
    var product_qty_rank = 0
    var description_rank = 0
    var seller_name_rank = 0

    // avalia um campo da descrição
    for (i in question_data.product_name) {
        let number = 0
        number = validation(question, question_data.product_name[i])
        if (product_name_rank < number) {
            product_name_rank = number
        }
        if (answers_i < number) {
            answers_i = number
            answer = data[0].product_name
        }
    }
    for (i in question_data.color) {
        let number = 0
        number = validation(question, question_data.color[i])
        if (color_rank < number) {
            color_rank = number
        }
        if (answers_i < number) {
            answers_i = number
            answer = data[0].color
        }
    }
    for (i in question_data.product_qty) {
        let number = 0
        number = validation(question, question_data.product_qty[i])
        if (product_qty_rank < number) {
            product_qty_rank = number
        }
        if (answers_i < number) {
            answers_i = number
            answer = data[0].product_qty
        }
    }
    for (i in question_data.description) {
        let number = 0
        number = validation(question, question_data.description[i])
        if (description_rank < number) {
            description_rank = number
        }
        if (answers_i < number) {
            answers_i = number
            answer = data[0].description
        }
    }
    for (i in question_data.seller_name) {
        let number = 0
        number = validation(question, question_data.seller_name[i])
        if (seller_name_rank < number) {
            seller_name_rank = number
        }
        if (answers_i < number) {
            answers_i = number
            answer = data[0].seller_name
        }
    }
    if (answer != '') {
        sofia_replies = answer
    }
    return sofia_replies
}
console.log(answers(perg_r, data_questions[0], datas));

module.exports = answers
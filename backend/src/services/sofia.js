const question = require('./question_test');
const points = require('./sofia_learn');
const validation = require('./sofia_learn');

// define a constante de confiabilidade na resposta.
// 0.5 coresponde a 50% de certeza na resposta,
match = 0.1



const data = [
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

var resp = "cor é branca"
// perguntas indexadas por pontos?
var perg = ["qual é a cor do produto", "o produto é de cor de aço"]
// pergunta do comprador
var perg_r = "prezado qual cor"


// função que responde a pergunta
function answers(question, question_data) {
    sofia_replies = 'Eu ainda não sei a resposta'
    // par de dados:  % acertividade e resposta
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
        // console.log(question_data.color[i])
        number = validation(question, question_data.product_name[i])
        // console.log(number);
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
        // console.log(question_data.color[i])
        number = validation(question, question_data.color[i])
        // console.log(number);
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
        // console.log(question_data.color[i])
        number = validation(question, question_data.product_qty[i])
        // console.log(number);
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
        // console.log(question_data.color[i])
        number = validation(question, question_data.description[i])
        // console.log(number);
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
        // console.log(question_data.color[i])
        number = validation(question, question_data.seller_name[i])
        // console.log(number);
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

    // console.log(product_name_rank)
    // console.log(color_rank);
    // console.log(product_qty_rank)
    // console.log(description_rank)
    // console.log(seller_name_rank)
    // console.log(answer);
    // console.log(answers_i);

    return sofia_replies
}



// console.log(points(perg_r, perg[0]));
// tenho que entrar no 1 nivel do objeto
// console.log((data[0].color));
console.log(answers(perg_r, data_questions[0]));
// console.log(data_answers[0].color[0]);

module.exports = answers



const points = require('./sofia_learn');
const validation = require('./sofia_learn');
const Datas = require('../data/data_db')
const Data_questions = require('../data/question_db')

// define a constante de confiabilidade na resposta.
// 0.5 coresponde a 50% de certeza na resposta,
match = 0.1

// pergunta do comprador
var perg_r = "qual o nome do produto"


const datas = Datas


const data_questions = Data_questions


// função que responde a pergunta
function answers(question, question_data, data, id) {
    id = id-1
    sofia_replies = 'Eu ainda não sei a resposta'
    answers_i = 0
    answer = ''
    var product_name_rank = 0
    var color_rank = 0
    var product_qty_rank = 0
    var description_rank = 0
    var seller_name_rank = 0

    // avalia um campo da descrição
    for (i in question_data[id].product_name) {
        let number = 0
        number = validation(question, question_data[id].product_name[i])
        if (product_name_rank < number) {
            product_name_rank = number
        }
        if (answers_i < number) {
            answers_i = number
            answer = data[id].product_name
        }
    }
    for (i in question_data[id].color) {
        let number = 0
        number = validation(question, question_data[id].color[i])
        if (color_rank < number) {
            color_rank = number
        }
        if (answers_i < number) {
            answers_i = number
            answer = data[id].color
        }
    }
    for (i in question_data[id].product_qty) {
        let number = 0
        number = validation(question, question_data[id].product_qty[i])
        if (product_qty_rank < number) {
            product_qty_rank = number
        }
        if (answers_i < number) {
            answers_i = number
            answer = data[id].product_qty
        }
    }
    for (i in question_data[id].description) {
        let number = 0
        number = validation(question, question_data[id].description[i])
        if (description_rank < number) {
            description_rank = number
        }
        if (answers_i < number) {
            answers_i = number
            answer = data[id].description
        }
    }
    for (i in question_data[id].seller_name) {
        let number = 0
        number = validation(question, question_data[id].seller_name[i])
        if (seller_name_rank < number) {
            seller_name_rank = number
        }
        if (answers_i < number) {
            answers_i = number
            answer = data[id].seller_name
        }
    }
    if (answer != '') {
        sofia_replies = answer
    }
    return sofia_replies
}
// console.log(answers(perg_r, data_questions, datas, 1));

// console.log(data_questions);


module.exports = answers
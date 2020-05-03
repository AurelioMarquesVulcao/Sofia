const question = require('./question_test');
const points = require('./sofia_learn');
const validation = require('./sofia_learn');

// define a constante de confiabilidade na resposta.
// 0.5 coresponde a 50% de certeza na resposta,
match = 0.6



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

const data_answers = [
    {
        uuid: '3a7308ee-0980-469b-9753-81da3ea21ee8',
        product_name: ["O nome do produto é", "qual o nome do produto"],
        color: ['qual a cor do produto', 'O produto possui quais cores'],
        product_qty: ['qual a quantidade do estoque', 'você ainda possui estoque?'],
        description: 'Cadeira confortavel e elegante',
        seller_name: ['qual é o seu nome']
    }
]

var resp = "cor é branca"
// perguntas indexadas por pontos?
var perg = ["qual é a cor do produto", "o produto é de aço"]
// pergunta do comprador
var perg_r = "prezado qual cor"


// função que responde a pergunta
function answers(answer) {
    sofia_replies = 'Eu ainda não sei a resposta'
    answers_points = 0

    
    console.log(validation(answer, perg[0]));


    return sofia_replies
}



console.log(points(perg_r, perg[0]));
// tenho que entrar no 1 nivel do objeto
// console.log((data[0].color));
console.log(answers(perg_r));


function save(datas){
    var product_data = datas
}

console.log(save());


const question = require('./question_test');

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


var resp = "cor é branca"

// perguntas indexadas por pontos?
var perg = ["qual é a cor do produto", "o produto é de aço"]

var perg_r = "prezado qual cor"
match = 0.5


if (points(perg_r, perg[0]) > match) {
    console.log(resp);

}


// var resp = "cor é branca"

// // perguntas indexadas por pontos?
// var perg = ["qual é a cor do produto", "o produto é de aço"]

// var perg_r = "prezado qual cor"
// match = 0.5


// if (points(perg_r, perg[0]) > match) {
//     console.log(resp);

// }


// var perg_fat = perg_r.split(" ")
// console.log(perg_fat);
// var re_fat = perg.split(" ")
// console.log(re_fat);

// criar esquema de pontos corridos
function points(question, answers) {
    // Não apague isso IMPORTANTE!!!!
    question = question.split(" ")
    answers = answers.split(" ")
    // Não apague isso IMPORTANTE!!!!

    answers_points = 0
    correctness = 0
    for (i in question) {
        // console.log(question[i]);
        // console.log(answers);
        if (answers.findIndex(element => element == question[i]) > -1) {
            answers_points++
        }
        // console.log(
        //     answers.findIndex(element => element == question[i] )
        //     );
        // console.log(answers_points);
    }
    correctness = answers_points / question.length
    return correctness
}
console.log(points(perg_r, perg[0]))



module.exports = points
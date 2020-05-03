// cria esquema de pontos corridos
function points(question, answers) {
    // Não apague isso IMPORTANTE!!!!
    question = question.split(" ")
    answers = answers.split(" ")
    // Não apague isso IMPORTANTE!!!!

    answers_points = 0
    correctness = 0
    for (i in question) {
        if (answers.findIndex(element => element == question[i]) > -1) {
            answers_points++
        }
    }
    correctness = answers_points / question.length
    return correctness
}

module.exports = points

// função de validação de pergunta
function validation(question1, question2) {
    if (points(question1, question2) > match) {
        return points(question1, question2)
    }
    else {
        return 0
    }
}
module.exports = validation
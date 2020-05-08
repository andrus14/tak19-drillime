const shortcuts = {
    "data": [
        {
            "question": "kopeeri",
            "answer": 67,
            "hasCtrl": true,
            "answerText": "ctrl + c"
        },
        {
            "question": "dubleeri",
            "answer": 40,
            "hasAlt": true,
            "hasShift": true
        },
        {
            "question": "kleebi",
            "answer": 86,
            "hasCtrl": true
        }

    ],
    "meta": {
        "question": "Mis klahvikombinatsiooni on vaja vajutada, et *",
        "answers": 5,
        "title": "Kiirklahvid",
        "type": "shortcuts"
    }

}

const inputField = document.querySelector("#input-field")
const questionDiv = document.querySelector("#question")
const titleDiv = document.querySelector("#title")
const correctAnswerDiv = document.querySelector("#correct-answer")
const correctCountDiv = document.querySelector("#correct-count")
const incorrectCountDiv = document.querySelector("#incorrect-count")

let correctCount = 0
let incorrectCount = 0

questionDiv.innerText = shortcuts.data[0].question
titleDiv.innerText = shortcuts.meta.question
correctCountDiv.innerText = correctCount

inputField.addEventListener("keydown", event => {
    console.log(event)
    event.preventDefault()
    if ( event.ctrlKey == shortcuts.data[0].hasCtrl && event.keyCode == shortcuts.data[0].answer ){
        console.log('success')
        correctAnswerDiv.innerText = "õige vastus: " + shortcuts.data[0].answerText
        correctCount++
        correctCountDiv.innerText = correctCount
        
    }
})
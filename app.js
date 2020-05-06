const shortcuts = {
    "data": [
        {
            "question": "kopeeri",
            "answer": [17, 67]
        },
        {
            "question": "comment",
            "answer": [17, 75, 67]
        },
        {
            "question": "kleebi",
            "answer": [17, 86]
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

questionDiv.innerText = shortcuts.data[0].question
titleDiv.innerText = shortcuts.meta.question

inputField.addEventListener("keydown", event => {
    console.log(event)
    event.preventDefault()
    if (event.keyCode == shortcuts.data[0].answer[0] && event.keyCode == shortcuts.data[0].answer[1]){
        console.log('success')
    }
})
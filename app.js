const shortcuts = {
    "data": [
        {
            "question": "kopeeri",
            "answer": 67,
            "hasCtrl": true
        },
        {
            "question": "dubleeri",
            "answer": 67,
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

questionDiv.innerText = shortcuts.data[0].question
titleDiv.innerText = shortcuts.meta.question

inputField.addEventListener("keydown", event => {
    console.log(event)
    event.preventDefault()
    if ( event.hasCtrl == shortcuts.data[0].hasCtrl && event.keyCode == shortcuts.data[0].answer ){
        console.log('success')
    }
})
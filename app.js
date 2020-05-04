const shortcuts = {
    "data": [
        {
        "question":"kopeeri",
        "answer":[17,67]
        },
        {
        "question":"comment",
        "answer":[17,75,67]
        },
        {
        "question":"kleebi",
        "answer":[17,86]
    }
        
    ],
    "meta": {
        "question": "Mis klahvikombinatsiooni on vaja vajutada, et *",
        "answers": 5,
        "title": "Kiirklahvid",
        "type":"shortcuts"
        }   

    }

const inputField = document.querySelector("#input-field")

inputField.addEventListener("keydown", event => {
    console.log(event)
    event.preventDefault()
    if (event.keyCode == 80 && event.ctrlKey == true){
        console.log('success')
    }
})
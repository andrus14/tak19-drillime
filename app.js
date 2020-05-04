const inputField = document.querySelector("#input-field")

inputField.addEventListener("keydown", event => {
    console.log(event)
    event.preventDefault()
    if (event.keyCode == 80 && event.ctrlKey == true){
        console.log('success')
    }
})
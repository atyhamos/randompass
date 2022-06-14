let passwordsEl = document.getElementsByClassName("passwords")
let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()"

function generatePasswords() {
    for (let i = 0; i < 4; i++) {
        passwordsEl[i].value = randomSequence()
    }
}

function randomSequence() {
    let string = ""
    for (let i = 0; i < 15; i++) {
        string += characters[Math.floor(Math.random() * 71)]
    }
    return string
}

function copy(index){    
    var copyText = document.getElementsByClassName("passwords")[index];
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
}



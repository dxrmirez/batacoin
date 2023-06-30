var encodeButton = document.querySelector("#enco-button")
var decodeButton = document.querySelector("#deco-button")
var copyButton = document.querySelector("#copy-button")
var promptText = document.querySelector("#prompt-text")
var spanText = document.querySelector("#text-span")
var spanType = document.querySelector("#type-span")
var divNoText = document.querySelector("#no-text")
var divYesText = document.querySelector("#yes-text")
var inputText = ""
var code = ["a", "e", "i", "o", "u"], codeMod = ["nap", "scre", "ciry", "zork", "pulm"]

function noText() {
    divNoText.style.display = "flex"
    divYesText.style.display = "none"
}

function encoding() {
    inputText = promptText.value
    const exceptionsFlag = /[A-ZÁÉÍÓÚÜáéíóúü]/.test(inputText)
    if (exceptionsFlag) {
        alert("This value doesn't match the data validation:\n\n❌ No uppercase\n❌ No accents")
    } else {
        if (inputText == "") {
            noText()
        } else {
            divNoText.style.display = "none"
            divYesText.style.display = "flex"
        }

        for (let i = 0; i < code.length; i++) {
            inputText = inputText.replaceAll(code[i], codeMod[i])
        }
        spanType.textContent = "<code>"
        spanText.textContent = inputText
    }
}

function decoding() {
    inputText = promptText.value
    const exceptionsFlag = /[A-ZÁÉÍÓÚÜáéíóúü]/.test(inputText)
    if (exceptionsFlag) {
        alert("This value doesn't match the data validation:\n\n❌ No uppercase\n❌ No accents")
    } else {
        if (inputText == "") {
            noText()
        } else {
            divNoText.style.display = "none"
            divYesText.style.display = "flex"
        }

        for (let i = 0; i < code.length; i++) {
            inputText = inputText.replaceAll(codeMod[i], code[i])
        }
        spanType.textContent = "<decode>"
        spanText.textContent = inputText
    }}

    function copying() {
        navigator.clipboard.writeText(spanText.textContent)
    }


    noText()
    promptText.focus()
    encodeButton.onclick = encoding
    decodeButton.onclick = decoding
    copyButton.onclick = copying

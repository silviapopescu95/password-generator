const characterRange = document.getElementById('characterRange')
const characterAmount = document.getElementById('characterAmount')
//const hasLowerElement = document.getElementById('hasLower')
const hasUpperElement = document.getElementById('hasUpper')
const hasNumbersElement = document.getElementById('hasNumbers')
const hasSpecialCharElement = document.getElementById('hasSpecialChar')
const form = document.getElementById('generatorForm')
const displayPassword = document.getElementById('displayPassword')

//entering character codes for what we want in our passwords
const lowerCharacterCodes = arrayRange(97, 122)
const upperCharacterCodes = arrayRange(65, 90)
const numberCharacterCodes = arrayRange(48, 57)
const specialCharacterCodes = arrayRange(33, 47)

characterRange.addEventListener('valueChange', syncCharacterAmount)
characterAmount.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e => {
    e.preventDefault()
    const characterAmount = characterAmount.value
    //const hasLower = hasLowerElement.checked
    const hasUpper = hasUpperElement.checked
    const hasNumbers = hasNumbersElement.checked
    const hasSpecialChar = hasSpecialCharElement.checked
    const password = generatePassword(characterAmount, hasLower, hasUpper, hasNumbers, hasSpecialChar)
    displayPassword.innerText = password
})
function generatePassword(characterAmount, hasUpper, hasNumbers, hasSpecialChar) {
    let characterCodes = lowerCharacterCodes
    if (hasUpper) characterCodes = characterCodes.concat(upperCharacterCodes)
    if (hasNumbers) characterCodes = characterCodes.concat(numberCharacterCodes)
    if (hasSpecialChar) characterCodes = characterCodes.concat(specialCharacterCodes)
    const passwordGenerated = []
    for (let i = 0; i < characterAmount; i++) {
        const characterCode = characterCodes[Math.floor(Math.random() * characterCodes.length)]
        passwordGenerated.push(String.fromCharCode(characterCodes))
    }
    return passwordGenerated.join('')
}

function arrayRange(low, high) {
    const array = []
    for (let i = low; i<= high; i++) {
        array.push = (i)
    }
    return array
}

function syncCharacterAmount(e) {
const value = e.target.value
characterRange.value = value
characterAmount.value = value 
}
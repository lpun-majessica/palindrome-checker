const checkButton = document.getElementById('check-btn')
const resultDiv = document.getElementById('result')
const textInput = document.getElementById('text-input')

const checkPalindrome = (input) => {
    if (input === '') {
        alert('Please input a value')
        return
    }

    resultDiv.replaceChildren()
    const finalStr = removeNonAlphanumeric(input).toLowerCase()
    let resultMsg = `${input} ${isPalindrome(finalStr) ? 'is' : 'is not'} a palindrome.`

    const pTag = document.createElement('p')
    pTag.className = 'result-msg'
    pTag.innerText = resultMsg
    resultDiv.appendChild(pTag)
    resultDiv.classList.remove('hidden')
}

const isPalindrome = (input) => {
    n = input.length
    for (let i = 0; i < Math.floor(n / 2); i += 1) {
        if (input[i] !== input[n - i - 1]) {
            return false
        }
    }
    return true
}

const removeNonAlphanumeric = (input) => {
    const regex = /[^A-Za-z0-9]+/gi
    return input.replace(regex, '')
}

checkButton.addEventListener('click', () => {
    checkPalindrome(textInput.value)
    textInput.value = ''
}
)
textInput.addEventListener('keydown', (user) => {
    if (user.key === 'Enter') {
        checkPalindrome(textInput.value)
        textInput.value = ''
    }
}
)
const calcButton = document.querySelector('.calculator')
const resultElement = document.querySelector('.result')


calcButton.addEventListener('click', (event) => {
    let value = event.target.textContent

    switch (value) {
        case 'AC':
            resultElement.textContent = ''
            break

        case '*':
            resultElement.textContent += value
            break


        case '/':
            resultElement.textContent += value
            break

        case '%':
            resultElement.textContent += value
            break

        case '=':
            if (resultElement.textContent.search(/[^0-9*/+-]/mi) != -1) return
            resultElement.textContent = eval(resultElement.textContent).toFixed(2)
            break

        default:
            resultElement.textContent += value
    }

})








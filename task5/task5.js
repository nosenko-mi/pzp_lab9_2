const form = document.getElementById('form');
const output = form.elements['simpleOutput']

form.addEventListener('submit', (event) => {
    // prevent page reload
    event.preventDefault()

    const number = parseFloat(form.elements['simpleTextInput'].value)
    console.log(number)
    if (number < 0) {
        output.value = 'некоректні дані'
        return
    }
    output.value = Math.pow(number, 0.5)
});

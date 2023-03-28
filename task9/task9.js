const button = document.querySelector('#btn')

button.addEventListener('click', (event) => {

    // firstChild may return a text node representing the whitespace between elements.
    const element = document.body.firstElementChild
    console.log(element)
    if (element && element !== button) {
        element.remove();
    }
})


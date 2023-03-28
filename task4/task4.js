const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    // prevent page reload
    event.preventDefault()
    const text = form.elements['simpleTextInput'].value
    alert(`You entered: "${text}"`)
});

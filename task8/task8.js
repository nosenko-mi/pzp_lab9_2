const button = document.querySelector('#btn')

button.addEventListener('click', (event) => {

    let red = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)

    const style = `rgb(${red}, ${green}, ${blue})`
    console.log(style)

    document.body.style.background = style
})


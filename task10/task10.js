const button = document.querySelector('#btn')
const img = document.querySelector('#img')
const images = ['img_1.jpg', 'img_2.jpg', 'img_3.jpg', 'img_4.jpg', 'img_5.jpg']

button.addEventListener('click', (event) => {

    let index = Math.floor(Math.random() * images.length)
    const path = `./assets/${images[index]}`

    img.src = path
})


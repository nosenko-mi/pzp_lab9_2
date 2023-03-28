const buttonLeft = document.querySelector('#btnLeft')
const buttonRight = document.querySelector('#btnRight')
const box = document.querySelector('#box')
let postion = 0

buttonLeft.addEventListener('click', (event) => {
    postion -= 10
    box.style.left = `${postion}px`
    console.log('left')
})

buttonRight.addEventListener('click', (event) => {
    postion += 10
    box.style.left = `${postion}px`
    console.log('right')
})

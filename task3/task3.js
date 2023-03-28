


function buttonClick() {
    if (localStorage.getItem('isClicked') !== 'clicked')
        alert('Дякую, що натиснули на мене')

    localStorage.setItem('isClicked', 'clicked');
}


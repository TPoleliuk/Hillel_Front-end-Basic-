/*---------------------------------блок скролінгу при відкритті форми------------------------------------*/
const freeConsultation = document.querySelector('button#free-consultation');
const closeDagger = document.querySelector('button#close-dagger');
const popupWindow = document.querySelector('#popup-window');

freeConsultation.addEventListener('click', function(event) {
    const body = document.querySelector('.body');
    body.classList.add('lock') 

    popupWindow.classList.add('open')  
    setTimeout(function() {
        document.querySelector('#popup-window.open .wrap-form').classList.remove('overflow-y-hidden')
        document.querySelector('#popup-window.open .wrap-form').classList.add('overflow-y-auto')
    }, 200)
    marginTopForm()
})

window.onload = function () {
    marginTopForm()
}

window.onresize = function () {
    marginTopForm()
}

function marginTopForm () {
    let heightForm = document.querySelector('#popup-window .form').clientHeight;
    let marginTop = ((window.innerHeight - heightForm - 16) / 2);

    if (marginTop < 0) {
        document.querySelector('#popup-window .form').style.marginTop = '0px';
    } else {
        document.querySelector('#popup-window .form').style.marginTop = `${marginTop}px`;
    }
}

closeDagger.addEventListener('click', function(event) {
    const body = document.querySelector('.body');
    body.classList.remove('lock') 
    popupWindow.classList.remove('open') 
})


  
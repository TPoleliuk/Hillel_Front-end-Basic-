/*---------------------------------блок скролінгу при відкритті бургер-меню------------------------------------*/
const burgerMenu = document.querySelector('.burger-checkbox');

burgerMenu.addEventListener('change', function(event) {
    const body = document.querySelector('.body');
    if (event.target.checked) {
        body.classList.add('lock')
    }
    else {
        body.classList.remove('lock')
    }
})


/*---------------------------------переклад сторінки (в т.ч. placeholders)-------------------------------------*/
const langSwitcher = document.querySelectorAll('input[type="radio"][name="lang"]');

langSwitcher.forEach(input => {
    input.addEventListener('click', () => {
        let lang = input.value;
        Object.keys(langArr).forEach(key => {
            let translateItem = document.querySelector('#lng-' + key);
            if (translateItem) {
                translateItem.innerText = langArr[key][lang];    
            } 
            /*---------переклад placeholders---------*/
            let placeholderItem = document.querySelector('#form-' + key)
            if (placeholderItem) {
                placeholderItem.setAttribute("placeholder", langArr[key][lang])
            } 
            /*--переклад полів з однаковим контентом--*/
            document.querySelector('.footer .address').innerHTML = document.querySelector('.header .address').innerHTML;
            let activePage = document.querySelector('.menu .nav-link.active>a')
            if(activePage)
            document.querySelector('.logo>.active-page').innerHTML = activePage.innerHTML; 
        })
    })    
})

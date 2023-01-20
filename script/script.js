/*---------------------------------блок скролінгу при відкритті бургер-меню------------------------------------*/
const burgerMenu = document.querySelector('.burger-checkbox');
const body = document.querySelector('.body');

burgerMenu.addEventListener('change', function(event) {
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
            /*--переклад полів з однаковим контентом--*/
            document.querySelector('.logo>.active-page').innerHTML = document.querySelector('.menu .nav-link.active>a').innerHTML; 
            document.querySelector('.footer .address').innerHTML = document.querySelector('.header .address').innerHTML;
            /*---------переклад placeholders---------*/
            let placeholderItem = document.querySelector('#form-' + key)
            if (placeholderItem) {
                placeholderItem.setAttribute("placeholder", langArr[key][lang])
            } 
        })
    })    
})


/*--------------------------------------------------ФОРМА------------------------------------------------------*/
let form = document.querySelector('.form');
let requiredItem = Array.from(document.querySelectorAll('.form .input-textarea.required'));
let allValid = false;

if (form) {

    form.addEventListener("submit", formSend);                                                      
    function formSend (e) {                                                          /*--відміна submit при натисканні кнопки--*/
    e.preventDefault();
    
    let itemFill = requiredItem.every(element => element.value.trim().length !== 0); /*--одна з можливих зміних в валідації--*/
    requiredItem.forEach(element => {
        if (element.value.trim().length === 0) {
            element.classList.add('invalid');                                        /*--додавання класу пустим полям--*/
        }
    });

    let errorItem = Array.from(document.querySelectorAll('.form .input-textarea.required.invalid'));
    errorItem.forEach(element => {
        element.addEventListener('change', notError)                                 /*--відміна класу виправленим полям--*/
    })

    function notError() {
        if(this.value.trim().length !== 0) {
            this.classList.remove('invalid'); 
        }
    }
      
    allValid = itemFill;                                                              /*--перевірка всіх можливих змінних в валідації--*/
    if (allValid) {
        animationAndSubmit()                                                          /*--запуск анімації і відправки форми, якщо "ок"--*/
    }
}}

/*---------------------------------------------анімація кнопки-------------------------------------------------*/
let btnSubmit = document.querySelector('form .submit-btn');                         /*--кнопка--*/
let textSend = document.querySelector('form .submit-btn #lng-send-message');        /*--надпис "відправити"--*/
let textSent = document.querySelector('form .submit-btn #lng-sent');                /*--надпис "відправлено"--*/
let progressBar = document.querySelector('form .submit-btn .progress-bar');         /*--прогрес-бар--*/

function animationAndSubmit () {
    btnSubmit.classList.add('progress-status');                        /*--зміна кольору кнопки--*/
    textSend.classList.add('delete');                                  /*--видалення первинного тексту кнопки--*/
    progressBar.classList.add('active');                               /*--запуск анімації прогрес-бару--*/
}

if (progressBar) {

    progressBar.addEventListener("animationend", AnimationHandler, false); /*--дії після анімації--*/
    function AnimationHandler () {
        progressBar.classList.remove('active');                            /*--видалення прогрес-бару--*/
        textSent.classList.add('block');                                   /*--відображення нового тексту кнопки--*/

        setTimeout(function() {form.submit(); }, 1000);                        /*--відправка форми і оновлення сторінки--*/
}
}
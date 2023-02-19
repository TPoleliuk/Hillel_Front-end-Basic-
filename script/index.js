const linkToMain = document.querySelector('a.link-to-main')

linkToMain.addEventListener('click', (e) => {
    e.preventDefault();
    let anchor = document.querySelector(linkToMain.getAttribute("href")) 
    window.scrollBy({
        top: anchor.getBoundingClientRect().top,
        behavior : "smooth"
      });
})


/*--------------------------------------------------tabs-------------------------------------------------*/
let tabsButton = Array.from(document.querySelectorAll('#tabs-button .tab-btn'));
let tabsContent = Array.from(document.querySelectorAll('#tabs-content .content-item'));
let currentTab = "";

$(window).on('load resize', function() {

  if ($(window).width() < 1024) {
    $('#tabs-button:not(.slick-initialized)').slick({
      variableWidth: true,
      slidesToScroll: 1,
      arrows: false,
      focusOnSelect: true,
      touchThreshold: 10,
    });

    $(`#tabs-button [data-slick-index="-1"]`).addClass('opacity')    
    $('#tabs-button').mousedown(function() {
      $('#tabs-button .opacity').removeClass('opacity') 
    });                             
    
    $('#tabs-button').on('beforeChange', function(event, slick, currentSlide, nextSlide) { 
      currentTab = $(`#tabs-button [data-slick-index="${nextSlide}"]`).attr('data-tab-name')
                  
      $('#tabs-button .opacity').removeClass('opacity') 
      
      $('#tabs-button .active').removeClass('active') 
       $(`#tabs-button [data-tab-name="${currentTab}"]`).addClass('active')  

      tabsContent.forEach(element => {
        if(element.classList.contains(currentTab)) {
          element.classList.add('active')
        }
        else {element.classList.remove('active')}
      })
    });

    $('#tabs-button .active').removeClass('active') 
    $('#tabs-button .slick-current').addClass('active')
    currentTab = $(('#tabs-button .slick-current')).attr('data-tab-name')
    tabsContent.forEach(element => {
      if(element.classList.contains(currentTab)) {
        element.classList.add('active')
      }
      else {element.classList.remove('active')}
    })

  } else {
    $('#tabs-button .opacity').removeClass('opacity') 
    $("#tabs-button.slick-initialized").slick("unslick");

    tabsButton.forEach(element => {
      element.addEventListener('click', () => {
        tabsButton.forEach(item => {
          item.classList.remove('active')
        });
        element.classList.add('active')
        currentTab = element.getAttribute('data-tab-name')
        tabsContent.forEach(element => {
          if(element.classList.contains(currentTab)) {
            element.classList.add('active')
          }
          else {element.classList.remove('active')}
        })
      })
    })
  }
});


/*-------------------------------------------------slider------------------------------------------------*/
$('#slide-card').slick({
  dots: true,
  slidesToScroll: 1,
  arrows: false,
  focusOnSelect: true,
  touchThreshold: 10,
});
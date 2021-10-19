$('#slider1').slick({
    autoplay: false,
    infinite: true,
    dots: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    prevArrow: '<button type="button" class="slick_prev head_arrow"></button>',
    nextArrow: '<button type="button" class="slick_next head_arrow"></button>',
    responsive: [{
        breakpoint: 720,
        settings: {
            vertical: false,
            dots: false,
        }
    }]
});

//Scroll anchor
$("body").on('click', '[href*="#"]', function(e) {
    var fixed_offset = 88;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
});

//telephone mask
$(function() {
    //Получить элемент, к которому необходимо добавить маску
    $("input[type='tel']").mask("+7(999) 999-9999");
});

//fancybox gallery 
$(document).ready(function() {
    var $slidebox = $('a.fancybox');
    $('.zoom').click(function() {
        $.fancybox.open(($slidebox));
    });
});

window.addEventListener('load', () => {

    //Portfolio swiper
    let monitor = document.querySelector('.portfolio__monitor')
    let phone = document.querySelector('.portfolio__phone')
    let img_monitor = document.querySelector('.js-monitor')
    let img_phone = document.querySelector('.js-phone')
    let desktop_img = document.querySelector('.js-fancy-desktop')
    let phone_img = document.querySelector('.js-fancy-phone')
    monitor.addEventListener('click', swapPhone)
    phone.addEventListener('click', swapMonitor)

    function swapMonitor() {
        let url_one = desktop_img.getAttribute('href')
        let url_two = phone_img.getAttribute('href')
        monitor.classList.remove('rotate')
        phone.classList.remove('rotate')
        img_monitor.classList.remove('remove')
        img_phone.classList.add('remove')
        console.log(url_one)
        console.log(url_two)
        desktop_img.setAttribute("href", url_two)
        phone_img.setAttribute("href", url_one)
    }

    function swapPhone() {
        let url_one = desktop_img.getAttribute('href')
        let url_two = phone_img.getAttribute('href')
        monitor.classList.add('rotate')
        phone.classList.add('rotate')
        img_monitor.classList.add('remove')
        img_phone.classList.remove('remove')
        phone_img.setAttribute("href", url_one)
        desktop_img.setAttribute("href", url_two)
    }

    //Forms checkbox
    let morning = document.querySelector('.morning')
    let night = document.querySelector('.night')
    let bgorange = document.querySelector('.bgorange')
    morning.addEventListener('click', moveLeft)
    night.addEventListener('click', moveRight)

    function moveLeft() {
        bgorange.classList.remove('right')
    }

    function moveRight() {
        bgorange.classList.add('right')
    }


    //Burger menu
    let burger = document.querySelector('.burger.icon')
    burger.addEventListener('click', openMenu)

    function openMenu() {
        let menu = document.querySelector('.header__item.burger__menu')
        burger.classList.toggle('open')
        menu.classList.toggle('active')
    }

    //popup Forms
    let popup_btn = document.querySelectorAll('.js-popup')
    let popup_morning = document.querySelector('.popup-morning')
    let popup_night = document.querySelector('.popup-night')
    let popup_bg = document.querySelector('.popup-bg')

    popup_morning.addEventListener('click', moveLeftPopup)
    popup_night.addEventListener('click', moveRightPopup)

    function moveLeftPopup() {
        popup_bg.classList.remove('right')
    }

    function moveRightPopup() {
        popup_bg.classList.add('right')
    }

    popup_btn.forEach(btn => btn.addEventListener('click', showPopup))

    function showPopup() {
        let popup = document.querySelector('.popup')
        let popup_container = document.querySelector('.popup__container')
        let body = document.querySelector('body')
        popup.hidden = false
        setTimeout(() => { popup.classList.add('active') }, 100)
        body.style.overflow = "hidden"
        popup.addEventListener('click', (e) => {
            if (e.target == popup_container) {
                popup.classList.remove('active')
                setTimeout(() => { popup.hidden = true }, 300)
                body.style.overflow = "unset"
            }
        })
    }

});
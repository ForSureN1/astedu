$('#slider1').slick({
    autoplay: true,
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    prevArrow: '<button type="button" class="slick_prev head_arrow"></button>',
    nextArrow: '<button type="button" class="slick_next head_arrow"></button>',
    responsive: [{
            breakpoint: 720,
            settings: {
                vertical: false,
            }
        },
        {
            breakpoint: 550,
            settings: {
                dots: false,
            }
        }
    ]
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

window.addEventListener('load', () => {

    //Portfolio swiper
    let monitor = document.querySelector('.portfolio__monitor')
    let phone = document.querySelector('.portfolio__phone')
    let img_monitor = document.querySelector('.js-monitor')
    let img_phone = document.querySelector('.js-phone')
    monitor.addEventListener('click', swapPhone)
    phone.addEventListener('click', swapMonitor)

    function swapMonitor() {
        monitor.classList.remove('rotate')
        phone.classList.remove('rotate')
        img_monitor.classList.remove('remove')
        img_phone.classList.add('remove')
    }

    function swapPhone() {
        monitor.classList.add('rotate')
        phone.classList.add('rotate')
        img_monitor.classList.add('remove')
        img_phone.classList.remove('remove')
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
        popup.hidden = false
        setTimeout(() => { popup.classList.add('active') }, 100)
        popup.addEventListener('click', (e) => {
            if (e.target == popup_container) {
                popup.classList.remove('active')
                setTimeout(() => { popup.hidden = true }, 1000)
            }
        })
    }

});
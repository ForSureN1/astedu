$('#slider1').slick({
    autoplay: false,
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
    }]
});

window.addEventListener('load', () => {
    let monitor = document.querySelector('.portfolio__monitor')
    let phone = document.querySelector('.portfolio__phone')
    monitor.addEventListener('click', swapPhone)
    phone.addEventListener('click', swapMonitor)

    function swapPhone() {
        monitor.classList.add('rotate')
        phone.classList.add('rotate')
    }

    function swapMonitor() {
        monitor.classList.remove('rotate')
        phone.classList.remove('rotate')
    }

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

    let burger = document.querySelector('.burger.icon')
    burger.addEventListener('click', openMenu)

    function openMenu() {
        let menu = document.querySelector('.header__item.burger__menu')
        burger.classList.toggle('open')
        menu.classList.toggle('active')
    }
});
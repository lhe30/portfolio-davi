function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu')
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src="Imagens/menu-white.svg"
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').src="Imagens/close-menu.svg"
    }
}
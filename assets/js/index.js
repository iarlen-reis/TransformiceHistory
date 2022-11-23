(function () {
    const navegation = document.querySelector('.navegation');
    const mobileCloseButton = document.querySelector('.fechar');

    const elementoUl = document.querySelector('.ul__menu');

    addEventListener('click', (event) => {
        const elemento = event.target;
        if (elemento.classList.contains('fechar')) {
            removerMenuMobile();
        };
        if (elemento.classList.contains('menu__mobile')) {
            exibirMenuMobile();
        };
    })

    const exibirMenuMobile = () => {
        navegation.classList.add('extender__menu');
        mobileCloseButton.classList.add('menu__mobile__2');
        elementoUl.classList.add('navegation__mobile');
        

    };

    const removerMenuMobile = () => {
        navegation.classList.remove('extender__menu');
        mobileCloseButton.classList.remove('menu__mobile__2');
        elementoUl.classList.remove('navegation__mobile');
    };

})()
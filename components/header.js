function headerComponent(el) {
    const componentEl = document.createElement("div")
    componentEl.innerHTML = `
    <header class="header">
    <div class="header__cnt-img">
        <a href="./index.html">
        <img class="header__img" src="./image/518441a9036145b1b850ea66def5b6dd.png" alt="">
        </a>
    </div>
    <div class="header__menu-hamburger">
        <div class="header__menu-hamburger-btn">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div class="header__menu-hamburger-ventana">
            <button class="header__menu-hamburger-ventana-cerrar">X</button>
            <div class="header__menu-hamburger-cnt-link">
            <a class="header__menu-hamburger-link" href="./portfolio.html">Portfolio</a>
            <a class="header__menu-hamburger-link" href="./servicios.html">Servicios</a>
            <a class="header__menu-hamburger-link" href="./contacto.html">Contacto</a>
            </div>
        </div>
        

    </div>
    
    <nav class="header__menu">
        <a class="header__link-menu" href="./portfolio.html">Portfolio</a>
        <a class="header__link-menu" href="./servicios.html">Servicios</a>
        <a class="header__link-menu" href="./contacto.html">Contacto</a>
    </nav>
    </header>
    `
    const menuHamburger = componentEl.querySelector(".header__menu-hamburger-btn")
    const ventanaMenuHamburger = componentEl.querySelector(".header__menu-hamburger-ventana")
    const btnCerrarVentana = componentEl.querySelector(".header__menu-hamburger-ventana-cerrar")
    
    menuHamburger.addEventListener("click", ()=>{
        ventanaMenuHamburger.style.display = "inherit"
    })
    btnCerrarVentana.addEventListener("click", ()=>{
        ventanaMenuHamburger.style.display = ""
    })
    
    el.appendChild(componentEl)
}
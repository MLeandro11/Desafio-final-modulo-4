function footerComponent(el) {
    const componentEl = document.createElement("div")
    componentEl.innerHTML = `
    <footer class="footer">
        <div class="footer__cnt-logo">
            <img class="footer__logo" src="./image/518441a9036145b1b850ea66def5b6dd.png" alt="logo">
            
        </div>
        <div class="footer__cnt-link-redes">
            <a href="" class="footer__link-redes">Instagram <img src="./image/instagram.png"> </a>
            <a href="" class="footer__link-redes">Linkedin <img src="./image/linkedin.png"> </a>
            <a href="" class="footer__link-redes">Github <img src="./image/github.png"> </a>
        </div>
    </footer>
    `
    el.appendChild(componentEl)
}
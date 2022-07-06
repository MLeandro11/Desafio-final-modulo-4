function formComponent(el) {
    const componentEl = document.createElement("div")
    componentEl.innerHTML = `
    <form class="contacto__form">
            <div class="contacto__form-fieldset">
                <label class="contacto__form-label" for="nombre">NOMBRE</label>
                <input required name="name" id="nombre" class="contacto__form-input" type="text">
            </div>
            
            <div class="contacto__form-fieldset">
                <label class="contacto__form-label" for="email">EMAIL</label>
                <input 
                 name="email" id="email" class="contacto__form-input" type="Email">
            </div>
            
            <div class="contacto__form-fieldset">
                <label class="contacto__form-label" for="message">Mensaje</label>
                <textarea name="message" id="message" class="contacto__form-textarea"></textarea>
            </div>
            <button class="contacto__form-button">Enviar</button>
            <div class="form__cartel-enviado">
                <h4>Su mensaje ha sido enviado</h4>
            </div>
    </form>`

    const myFormContact = componentEl.querySelector(".contacto__form")
    const cartelEnviado = componentEl.querySelector(".form__cartel-enviado")
    myFormContact.addEventListener("submit", e => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const objetoForm = Object.fromEntries(formData.entries())
        //console.log(objetoForm);
        fetch("https://apx-api.vercel.app/api/utils/dwf", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                to: "leandrolm87@gmail.com",
                message: `Nuevo correo de ${objetoForm.name} su mail es ${objetoForm.email} y el mensaje es el sigueinte: ${objetoForm.message}`
            })
        })

        cartelEnviado.style.display = "inherit"
        myFormContact.reset()
        setTimeout(() => {
            cartelEnviado.style.display = "none"
        }, 2300);
    })
    el.appendChild(componentEl)     
}
            
        


const dataMyPage = () =>{
    const url = `https://cdn.contentful.com/spaces/z39nyyr7yy73/environments/master/entries?access_token=WCfkXlTSP1YxvanqCmMurhBb3PgOwf-i_gjP7svc5dU&order=-sys.id&content_type=web` 
    return fetch(url).then(res => res.json()).then(data => {
        //console.log(data);
        const getIdImage = (id) => data.includes.Asset.find(asset => {
            return asset.sys.id == id
        })
        return data.items.map(i => {

            const idImage = i.fields.image.sys.id
            const idPortada = i.fields.frontpage.sys.id
            return {
                frontpage: "https:" + getIdImage(idPortada).fields.file.url,
                title: i.fields.title,
                subtitle: i.fields.subtitle,
                image: getIdImage(idImage).fields.file.url,
                name: i.fields.name,
                presentacion: i.fields.presentation
            }
        })
    })
}
const addData = (params) => {

    const welcomePortada = document.querySelector(".welcome")
    const titlePage = document.querySelector(".welcome__title")
    const subTitlePage = document.querySelector(".welcome__subtitle")
    const presentacionImg = document.querySelector(".presentacion__img")
    const presentacionTitle = document.querySelector(".presentacion__title")
    const presentacionText = document.querySelector(".presentacion__text")

    welcomePortada.style.backgroundImage = `url(${params.frontpage})`
    titlePage.textContent = params.title
    subTitlePage.textContent = params.subtitle
    presentacionImg.src = params.image
    presentacionTitle.textContent = params.name
    presentacionText.textContent = params.presentacion

   console.log(presentacionImg.src);
}


function main() {
    headerComponent(document.querySelector(".welcome__header"))
    cardsComponent("skills",document.querySelector(".servicios__item-cnt"))
    formComponent(document.querySelector(".contacto__ctn-form"))
    footerComponent(document.querySelector(".footer__cnt"))
    dataMyPage().then(w => {
        for (const p of w) {
            addData(p)
        }
    })
    
}

main()

function cardsComponent(type, el) {
    const componentEl = document.createElement("div")
    componentEl.innerHTML = `
    <template class="cards__item-template">
    <div class="cards__item">
        <img class="cards__item-img" src="./image/image 4.png" alt="">
        <h4 class="cards__item-tittle">Hago Cosas</h4>
        <span class="cards__item-text">Algo interesante sobre mi Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dui quam, sollicitudin at enim id, sodales vehicula velit. Aenean lobortis posuere tristique.</span>
        <a class="cards__item-link" href="">
        
        </a>
    </div>
    </template>`
        
    const addItems = (params) => {
        //console.log(params);
        const template = componentEl.querySelector(".cards__item-template")
        if (params.url) {
            template.content.querySelector(".cards__item-link").href = params.url
            template.content.querySelector(".cards__item-link").textContent = "Ver más>>"
        }
        template.content.querySelector(".cards__item-img").src = params.image
        template.content.querySelector(".cards__item-tittle").textContent = params.title
        template.content.querySelector(".cards__item-text").textContent = params.description
        let clone = document.importNode(template.content, true)
        el.appendChild(clone) 
    }
            
    const getData = (type) => {
        return fetch(`https://cdn.contentful.com/spaces/z39nyyr7yy73/environments/master/entries?access_token=WCfkXlTSP1YxvanqCmMurhBb3PgOwf-i_gjP7svc5dU&order=-sys.id&content_type=${type}`)
        .then(res => res.json())
        .then(data =>{
            const getIdImage = (id) => data.includes.Asset.find(asset => {
                return asset.sys.id == id
            })
            const dataCollections = data.items.map((item) => {
                const idImage = item.fields.imagen.sys.id;
                const urlImage = getIdImage(idImage).fields.file.url
                if (type == "skills") {
                    return {
                        image: urlImage,
                        title: item.fields.titulo,
                        description: item.fields.descripcion,  
                    }
                }else if (type == "work"){
                    return {
                        image: urlImage,
                        title: item.fields.titulo,
                        description: item.fields.descripcion,
                        url: item.fields.url  
                    }

                }
                    
    
            })
    
            return dataCollections
        })
    }
    getData(type).then(type => {
        for (const t of type) {
            addItems(t)
        }
    })
 
}

const carousel = document.querySelector(".carrosel-box ")
const boxSneaker = document.querySelector(".teste")
const btnBefore = document.querySelector(".next1")
const btnNext = document.querySelector(".next2")
const btnCloseCarousel = document.querySelector(".btn-close-carousel")
const littleBoxImg = document.querySelectorAll(".littleBox")
const trackImg = document.querySelector(".imgCarousel")
const sneak = document.querySelectorAll(".sneak1")
const testeImg = document.querySelector(".testeImg")
let currentId = 1

boxSneaker.addEventListener("click", (e) =>{
    removeSelect()
    if( window.innerWidth >= 1200){
            openCarousel()
        }
})

sneak.forEach((item) =>{
    item.addEventListener("click", () =>{
        sneak.forEach(box =>{
            box.children[1].classList.remove("opaci")
        })
        let currentNumber = Number(item.dataset.number)
        testeImg.src = `./images/image-product-${currentNumber}.jpg`
        testeImg.dataset.number = currentNumber
        const opaci = item.children[1]
        opaci.classList.add("opaci")
    })
    
})
function openCarousel(){
    carousel.style.display = "flex"  
}
function removeSelect(){
    littleBoxImg.forEach(box =>{
            box.children[1].classList.remove("opaci")
    })
}
btnBefore.addEventListener("click", (e) =>{
    let currentId = Number(trackImg.dataset.id)

    if(currentId > 1){
        currentId--
    }
    else{
        currentId = 4
    }

    trackImg.src = `./images/image-product-${currentId}.jpg`
    trackImg.dataset.id = currentId
})

btnNext.addEventListener("click", () =>{
    let currentId = Number(trackImg.dataset.id)

    if(currentId < 4){
        currentId++
    }
    else{
        currentId = 1
    }

    trackImg.src = `./images/image-product-${currentId}.jpg`
    trackImg.dataset.id = currentId
})

btnCloseCarousel.addEventListener("click", (e) =>{
    carousel.style.display = "none" 
})

//Pega o evento de click na imagem do tenis e altera o carrossel com cada foto de baixo
littleBoxImg.forEach((item) =>{
    item.addEventListener("click",(e) =>{
        //remove a classe das miniaturas
        littleBoxImg.forEach(box =>{
            box.children[1].classList.remove("opaci")
        })
        const currentId =Number(item.dataset.id)
        trackImg.src = `./images/image-product-${currentId}.jpg`
        testeImg.src = `./images/image-product-1.jpg`
        trackImg.dataset.id = currentId
        const opaci = item.children[1]
        opaci.classList.add("opaci")
    })
})


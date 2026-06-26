const plus = document.querySelector(".btn-plus")
const minus = document.querySelector(".btn-minus")
const boxBack = document.querySelector(".box-back-sneacker")
const caixaCartTop = document.querySelector(".cart-top")
const listaCart = document.querySelector(".lista-cart-full")

let currentx = 1

function replaceImage(){
    boxBack.style.backgroundImage = `url(./images/image-product-${currentx}.jpg)` 
}
plus.addEventListener("click", (e) =>{
    if(currentx < 4){
        currentx++
    }
    else{
        currentx = 1
    }
     replaceImage(currentId)
})

minus.addEventListener("click", (e) =>{
    if(currentx > 1){
        currentx--
    }
    else{
        currentx = 4
    }
    replaceImage(currentx)
})

document.addEventListener("click", (e) =>{
    if(e.target.closest(".btn-cart")){
        caixaCartTop.style.display = "flex" 
    }else if(e.target.closest(".cart-top")){
        caixaCartTop.style.display = "flex" 
    }
    else{
        caixaCartTop.style.display = "none" 
    }
})
const btnaddCart = document.querySelector(".cart")
const addCart = document.querySelector(".add-cart")
const btnPlus = document.querySelector(".more")
const btnMinus = document.querySelector(".minus")
const countSneker = document.querySelector(".count")
const localStorageRegister = "Carrinho"
const empty = document.querySelector(".empty")
const lista = document.querySelector(".lista-cart-full")
const btnCheck = document.querySelector(".btn-check")
const qtd = document.querySelector(".qtd")
const total = document.querySelector(".valueTotal")
const btnDelete = document.querySelector(".btn-delete")
const btnCart = document.querySelector(".btn-cart")
let count = 0
let valueTotal = 0


const item = JSON.parse(localStorage.getItem(localStorageRegister))

if(item){
    empty.style.display = "none" 
    generateListCart()

    qtd.innerHTML = `X ${item.Quantidade}`
    total.innerHTML = `$${item.Total}`

    count = Number(item.Quantidade)
    valueTotal = Number(item.Total)
}
else{
    empty.style.display = "flex"
    lista.style.display = "none"
    btnCheck.style.display = "none"
}

function generateListCart(){
    const item = JSON.parse(localStorage.getItem(localStorageRegister))

    if(item){
        empty.style.display = "none" 
        lista.style.display = "flex"
        btnCheck.style.display = "flex"

        qtd.innerHTML = `X ${item.Quantidade}`
        total.innerHTML = `$ ${item.Total}`
    }
    
}

btnCart.addEventListener("click", (e) =>{
    caixaCartTop.style.display = "flex"
    generateListCart() 

})

function removelist(){
    empty.style.display = "flex" 
    lista.style.display = "none"
    btnCheck.style.display = "none"
}
addCart.addEventListener("click", (e) =>{
    addCarrinho()
})
function addCarrinho(){
    if(count <= 0){
        localStorage.removeItem(localStorageRegister)
        removelist()
        return
    }
   localStorage.setItem(localStorageRegister,JSON.stringify(
    {
        Nome:"tenis",
        Quantidade: count,
        Total: valueTotal
    }))
    generateListCart()

}
btnPlus.addEventListener("click", ()=>{
    count++
    valueTotal = count * 125

    countSneker.innerHTML = count
    qtd.innerHTML = `X ${count}`
    total.innerHTML = `$${valueTotal}`


})

btnMinus.addEventListener("click", ()=>{
    count--
    if(count <= 0){
        count = 0
    }
    valueTotal = count * 125

    countSneker.innerHTML = count;
    qtd.innerHTML = `X ${count}`;
    total.innerHTML = `$${valueTotal}`;

})

btnDelete.addEventListener("click", ()=>{
    localStorage.removeItem(localStorageRegister)
    removelist()
})
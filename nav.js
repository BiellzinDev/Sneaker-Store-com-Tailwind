const btnHamburger = document.querySelector(".hamburger-menu")
const nav = document.querySelector(".nav")
const btnClose = document.querySelector(".btn-close")

btnHamburger.addEventListener("click", (e) =>{
    openHamburger()
})

btnClose.addEventListener("click", () =>{
    nav.classList.remove("active")
})

document.addEventListener("click", (e) =>{
    if(e.target.closest(".hamburger-menu")){
        openHamburger()
    }
      else{
         nav.classList.remove("active")
     }
})
function openHamburger(){
    nav.classList.add("active")
}
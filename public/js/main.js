


const burgerMenu = document.querySelector(".fa-bars")
burgerMenu.addEventListener("click", openMenu)
const closeMenuBtn = document.querySelector(".fa-xmark")
const sideBar = document.querySelector(".sideBar")

closeMenuBtn.addEventListener("click", closeMenu)


function openMenu(){

    if(sideBar.style.display == 'none'){
        sideBar.style.display = 'block';
   }
   else {
        sideBar.style.display = 'none';
   }
}



function closeMenu(){

    if(sideBar.style.display == 'block'){
        sideBar.style.display = 'none';
   }
   else {
        sideBar.style.display = 'block';
   }

}








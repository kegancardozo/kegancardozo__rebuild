const hamburger = document.getElementById("hamburger")

const menuContainer = document.getElementById("menuContainer")

const menu = document.getElementById("menu")

const menuLinks = document.getElementById("menuLinks")

const subMenu = document.getElementById("subMenu") 

const pods = document.getElementById("pods");
let menuOpen = false;

hamburger.addEventListener("click", ()=> {
    if (menuOpen === false) {   
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    menuContainer.classList.add('menu__container--active'); 
    menu.classList.add('menu--active'); 
    menuLinks.classList.add('menu__links--active'); 
    subMenu.classList.add("submenu--active");
    hamburger.classList.add("hamburger--active");
    pods.classList.add("submenu__pods--active");
    menuOpen = true;

    } else {
        menuContainer.classList.remove('menu__container--active'); 
        menuLinks.classList.remove('menu__links--active'); 
        subMenu.classList.remove("submenu--active")
        hamburger.classList.remove("hamburger--active")
        menuOpen = false;
        document.documentElement.style.overflow = 'visible';
        document.body.style.overflow = 'visible';
    }
    
});

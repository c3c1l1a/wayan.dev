const menu = document.getElementById("menu")
const  closeIcon = document.getElementById("close-menu")
const nav = document.getElementById("nav")
const navLinks = document.getElementById("nav-links")
menu.addEventListener("click", function(){
    nav.style.cssText = `
        flex-direction: column;
        height: 100vh;
    `
    navLinks.style.cssText = `
        display:flex;
        flex-direction: column;
        z-index: -1;
        ;`
    
    menu.style.display = "none"
    closeIcon.style.display = "block";
})

closeIcon.addEventListener("click", function(){
    menu.style.display = "block";
    closeIcon.style.display = "none";
    navLinks.style.display = "none";
})

const navItems = document.getElementsByClassName("nav-item");
let animationDelay = 0;

for (let i = 0; i < navItems.length; i++){
    console.log(animationDelay + "s");
    console.log(navItems[i])
    navItems[i].style.animationDelay = animationDelay + "s";
    animationDelay += 0.1;
}
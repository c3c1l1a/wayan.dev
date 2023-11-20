const menu = document.getElementById("menu")
menu.addEventListener("click", function(){
    const nav = document.getElementById("nav")
    nav.style.cssText = `
        flex-direction: column;
        height: 100vh;
    `
    const navLinks = document.getElementById("nav-links")
    navLinks.style.cssText = `
        display:flex;
        flex-direction: column;
    `
})
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})

const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
faq.addEventListener('click', () => { 
    faq.classList.toggle('open')
})
})

//Toggling hamburger menu
document.getElementById("menu__alt").style.display = "none";
function hamburg() {
    if(!(document.getElementById("menu__alt").style.display == "flex")){
        document.getElementById("menu__alt").style.display = "flex";
    }
    else{
        document.getElementById("menu__alt").style.display = "none";
    }
}

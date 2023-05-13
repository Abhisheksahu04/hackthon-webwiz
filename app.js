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
function hamburg() {
    if(document.getElementById("menu__alt").style.display == "none"){
        document.getElementById("menu__alt").style.display = "flex";
    }
    else{
        document.getElementById("menu__alt").style.display = "none";
    }
}

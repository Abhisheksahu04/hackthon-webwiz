let button1 = document.querySelector('#next-1');
let button2 = document.querySelector('#next-2');
let button3 = document.querySelector('#next-3');

button1.addEventListener('click',function(){
    
    document.querySelector('#personalinfo').classList.remove("active");
    document.querySelector('#team').classList.add("active");

    document.querySelector('#div-steps1').classList.remove("active-step");
    document.querySelector('#div-steps2').classList.add("active-step");
})

button2.addEventListener('click',function(){
    document.getElementById("team").classList.remove("active");
    document.querySelector('#tech-container').classList.add("active");
    document.querySelector('#div-steps2').classList.remove("active-step");
    document.getElementById("div-steps3").classList.add("active-step");
    
})
button3.addEventListener('click',function(){
    document.querySelector('#tech-container').classList.remove("active");
    document.querySelector('#thankyou').classList.add("active");
    document.querySelector('#div-steps3').classList.remove("active-step");
})

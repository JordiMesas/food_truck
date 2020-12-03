
let modal = document.getElementsByClassName(" nav__content--modal")[0];
let hamburguer = document.getElementsByClassName('nav__hamburguerWhite')[0];
document.getElementsByClassName('nav__hamburguerWhite')[0].addEventListener('click', ()=>{
    console.log('hola');
    modal.style.display = 'block';
    hamburguer.style.display = 'none';
    modal.animate([
        // keyframes
        {transform: 'translateY(-500px)'},                 
        { transform: 'translateY(0px)' }
      ], { 
        // timing options
        duration: 1000,
        easing: 'linear'
      });    
});

document.getElementById('close').addEventListener('click', ()=>{
    hamburguer.style.display = 'block';
    modal.style.display = 'none';
    window.location.reload();
});
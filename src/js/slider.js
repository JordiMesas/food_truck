document.getElementById('buttons').addEventListener('click', (e) => {
	let buttons = document.getElementsByClassName('main__button');
	for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = '#bbb';                    
    }    
    e.target.style.backgroundColor = '#717171';
    let number = e.target.getAttribute('name');
    console.log(document.getElementsByClassName('main__img')[0].src);
    document.getElementsByClassName('main__img')[0].src = `./src/img/galery_${number}.png`
});



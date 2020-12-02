buttons = document.getElementsByClassName('main__button');

// for (let i = 0; i < buttons.length; i++) {
// 	buttons[i].addEventListener('click', (e) => {
// 		number = e.target.getAttribute('name');
// 		changeImg(number);
// 	});
// }

i=2;

document.getElementById('left').addEventListener('click', () => {
	i--;
	if (i < 0) {
		i = 0;
	}
	changeImg(i);
});

document.getElementById('right').addEventListener('click', () => {
	i++;
	if (i > 4) {
		i = 4;
	}
	changeImg(i);
});

const changeImg = (i) => {
	console.log(i);
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].style.backgroundColor = '#bbb';
	}
	buttons[i].style.backgroundColor = '#717171';

	document.getElementsByClassName(
		'main__img'
	)[0].src = `./src/img/galery_${i}.png`;
};

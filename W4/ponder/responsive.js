// 1. Get the button and the nav list
const xButton = document.querySelector('.menu-btn');
const navigation = document.querySelector('nav');

// 2. Add the event listener
xButton.addEventListener('click', () => {
	
    // 3. Toggle the classes
	navigation.classList.toggle('open');
	xButton.classList.toggle('change');
});
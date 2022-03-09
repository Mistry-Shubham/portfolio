const logo = document.querySelector('#logo');
const menuButton = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const navs = menu.querySelectorAll('li');
const main = document.querySelector('main');
const sections = main.querySelectorAll('section');
const navigator = document.querySelector('.navigator');
const navigators = navigator.querySelectorAll('li');

sections[0].classList.add('active-display');
navigators[0].classList.add('active');

// h1 Logo
logo.addEventListener('click', () => {
	menuButton.classList.remove('change');
	menu.classList.remove('show');
	main.classList.remove('blur');
	navigator.classList.remove('blur');
});

// h1 Hamburger Icon
menuButton.addEventListener('click', () => {
	menuButton.classList.toggle('change');
	menu.classList.toggle('show');
	main.classList.toggle('blur');
	navigator.classList.toggle('blur');
});

// h1 Menu Items
navs.forEach((nav) => {
	nav.addEventListener('click', () => {
		menuButton.classList.remove('change');
		menu.classList.remove('show');
		main.classList.remove('blur');
		navigator.classList.remove('blur');
	});
});

// h1 Active Display
main.addEventListener('scroll', () => {
	const index = Math.round(main.scrollTop / main.clientHeight);

	sections.forEach((section, idx) => {
		if (idx === index) {
			section.classList.add('active-display');
			navigators[idx].classList.add('active');
		} else {
			section.classList.remove('active-display');
			navigators[idx].classList.remove('active');
		}
	});
});

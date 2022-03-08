const menuButton = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const navs = menu.querySelectorAll('li');
const main = document.querySelector('main');
const sections = main.querySelectorAll('section');
const navigators = document.querySelectorAll('.navigator li');

sections[0].classList.add('active-display');
navigators[0].classList.add('active');

// h1 Hamburger Icon
menuButton.addEventListener('click', () => {
	menu.classList.toggle('show');
	main.classList.toggle('blur');
});

// h1 Menu Items
navs.forEach((nav) => {
	nav.addEventListener('click', () => {
		menu.classList.remove('show');
		main.classList.remove('blur');
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

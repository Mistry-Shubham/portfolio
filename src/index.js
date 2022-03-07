const menuButton = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const navs = menu.querySelectorAll('li');
const main = document.querySelector('main');
const sections = main.querySelectorAll('section');

sections[0].classList.add('active-display');

menuButton.addEventListener('click', () => {
	menu.classList.toggle('show');
	main.classList.toggle('blur');
});

navs.forEach((nav) => {
	nav.addEventListener('click', () => {
		menu.classList.remove('show');
		main.classList.remove('blur');
	});
});

main.addEventListener('scroll', () => {
	const index = Math.round(main.scrollTop / main.clientHeight);

	sections.forEach((section, idx) => {
		if (idx === index) {
			section.classList.add('active-display');
		} else {
			section.classList.remove('active-display');
		}
	});
});

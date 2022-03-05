const menuButton = document.getElementById('hamburger');
const menu = document.getElementById('menu');

menuButton.addEventListener('click', () => {
	menu.classList.toggle('show');
});

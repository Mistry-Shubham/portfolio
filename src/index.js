const logo = document.querySelector('#logo');
const menuButton = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const navs = menu.querySelectorAll('li');
const main = document.querySelector('main');
const sections = main.querySelectorAll('section');
const navigator = document.querySelector('.navigator');
const navigators = navigator.querySelectorAll('li');
const carouselSlide = document.querySelector('.carousel-slide');
const carouselCard = document.querySelectorAll('.carousel-card');
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
const projectPara = document.querySelector('#project-para');
const technologies = document.querySelector('.technologies');
const form = document.querySelector('form');
const projectbtn = document.querySelectorAll('#projects a');
const svgs = document.querySelectorAll('svg');

svgs.forEach((svg) => {
	if (window.innerWidth < 780) {
		svg.setAttribute('width', '380px');
		svg.setAttribute('height', '285px');
	} else if (window.innerWidth < 980) {
		svg.setAttribute('width', '500px');
		svg.setAttribute('height', '375px');
	} else {
		svg.setAttribute('width', '680px');
		svg.setAttribute('height', '510px');
	}
});

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

// h1 Carousel
let counter = 1;
let width = carouselCard[0].clientWidth;
let height = carouselCard[0].clientHeight;

carouselSlide.style.transform = `translateX(${-width * counter}px)`;
nextBtn.style.height = `${height}px`;
prevBtn.style.height = `${height}px`;

window.addEventListener('resize', () => {
	svgs.forEach((svg) => {
		if (window.innerWidth < 780) {
			svg.setAttribute('width', '380px');
			svg.setAttribute('height', '285px');
		} else if (window.innerWidth < 980) {
			svg.setAttribute('width', '500px');
			svg.setAttribute('height', '375px');
		} else {
			svg.setAttribute('width', '680px');
			svg.setAttribute('height', '510px');
		}
	});

	width = carouselCard[0].clientWidth;
	carouselSlide.style.transform = `translateX(${-width * counter}px)`;
	height = carouselCard[0].clientHeight;
	nextBtn.style.height = `${height}px`;
	prevBtn.style.height = `${height}px`;
});

nextBtn.addEventListener('click', () => {
	if (counter >= carouselCard.length - 1) {
		return;
	}
	carouselSlide.classList.add('carousel-animate');
	counter++;
	carouselSlide.style.transform = `translateX(${-width * counter}px)`;
});

prevBtn.addEventListener('click', () => {
	if (counter <= 0) {
		return;
	}
	carouselSlide.classList.add('carousel-animate');
	counter--;
	carouselSlide.style.transform = `translateX(${-width * counter}px)`;
});

const openHref = [
	'https://expensee-trackerr.cyclic.app/',
	'https://ragsntags.cyclic.app/',
	'https://pokemon898.cyclic.app/',
	'https://linkin-park-1.cyclic.app/',
	'https://shubham-mistry.cyclic.app/',
];

const sourceCodeHref = [
	'https://github.com/Mistry-Shubham/expense-tracker',
	'https://github.com/Mistry-Shubham/ragsntags',
	'https://github.com/Mistry-Shubham/pokemon',
	'https://github.com/Mistry-Shubham/linkin-park',
	'https://github.com/Mistry-Shubham/portfolio',
];

projectbtn[0].setAttribute('href', openHref[0]);
projectbtn[1].setAttribute('href', sourceCodeHref[0]);

carouselSlide.addEventListener('transitionend', () => {
	if (carouselCard[counter].id === 'first-clone') {
		carouselSlide.classList.remove('carousel-animate');
		counter = carouselCard.length - counter;
		carouselSlide.style.transform = `translateX(${-width * counter}px)`;
	}

	if (carouselCard[counter].id === 'last-clone') {
		carouselSlide.classList.remove('carousel-animate');
		counter = carouselCard.length - 2;
		carouselSlide.style.transform = `translateX(${-width * counter}px)`;
	}
	removeChild();
	projectInfo();

	projectbtn[0].setAttribute('href', openHref[counter - 1]);
	projectbtn[1].setAttribute('href', sourceCodeHref[counter - 1]);
});

// h1 Project page info

const projectInfo = () => {
	projectbtn[0].style.display = 'block';

	if (counter === 1) {
		projectPara.innerText = 'App to keep track of your expenses.';
		const techList = [
			'logo-react',
			'logo-javascript',
			'logo-css3',
			'logo-nodejs',
		];
		appendTech(techList);
	} else if (counter === 2) {
		projectPara.innerText = 'Functional E-commerce website.';
		const techList = [
			'logo-react',
			'logo-javascript',
			'logo-nodejs',
			'flash-sharp',
		];
		appendTech(techList);
	} else if (counter === 3) {
		projectPara.innerText = 'Pokemon Cards website with help of pokeapi.';
		const techList = [
			'logo-react',
			'logo-javascript',
			'logo-sass',
			'logo-nodejs',
		];
		appendTech(techList);
	} else if (counter === 4) {
		projectPara.innerText = 'Linkin park band fan-page.';
		const techList = ['logo-html5', 'logo-css3'];
		appendTech(techList);
	} else {
		projectPara.innerText = 'My portfolio';
		const techList = ['logo-javascript', 'logo-html5', 'logo-css3'];
		appendTech(techList);
		projectbtn[0].style.display = 'none';
	}
};

const removeChild = () => {
	while (technologies.hasChildNodes()) {
		technologies.removeChild(technologies.firstChild);
	}
};

const appendTech = (techList) => {
	techList.forEach((tech) => {
		const icon = document.createElement('ion-icon');
		icon.setAttribute('name', `${tech}`);
		technologies.appendChild(icon);
	});
};

projectInfo();

// h1 Form
form.addEventListener('submit', (e) => {
	e.preventDefault();
	const { firstname, lastname, email, subject, message } = e.target;
	const data = {
		name: `${firstname.value[0].toUpperCase()}${firstname.value.substring(
			1
		)} ${lastname.value[0].toUpperCase()}${lastname.value.substring(1)}`,
		email: email.value,
		subject: `${subject.value[0].toUpperCase()}${subject.value.substring(1)}`,
		message: `${message.value[0].toUpperCase()}${message.value.substring(1)}`,
	};
	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	};

	fetch('/api/send-mail', options);

	e.target.reset();
});

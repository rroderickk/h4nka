/****************************************************************
 *:::::::::::::::::::::::*::OBSERVER::*:::::::::::::::::::::::::*
 ***************************************************************/
const h2s = document.querySelectorAll('h2');

const observer = new IntersectionObserver(entries => {
	for (const entry of entries) {
		if (entry.isIntersecting) {
			entry.target.classList.add('visible')
		} else {
			entry.target.classList.remove('visible')
		}
	}
}, { threshold: 1.0, rootMargin: '20%' })

h2s.forEach(el => observer.observe(el))

/****************************************************************
 *:::::::::::::::::::::::::*::VANTA::*::::::::::::::::::::::::::*
 ***************************************************************/
window.addEventListener('DOMContentLoaded', () => {
	VANTA.BIRDS({
		el: '#vantaBirds',
		mouseControls: true,
		touchControls: true,
		gyroControls: true,
		minHeight: 200.0,
		minWidth: 200.0,
		scale: 1.0,
		scaleMobile: 4.0,
		backgroundAlpha: 0.0,
		color2: 0xff99f9,
		wingSpan: 40.0,
		separation: 400.0,
		alignment: 77.0,
		cohesion: 1.0,
		quantity: numeroAureo(),
	})
})

function numeroAureo () {
	return (1 + Math.sqrt(5)) / 2;
}

window.addEventListener('DOMContentLoaded', () => {
	VANTA.FOG({
		el: "#fog",
		mouseControls: true,
		touchControls: true,
		gyroControls: false,
		minHeight: 100.00,
		minWidth: 100.00,
		highlightColor: 0x7b00ff,
		midtoneColor: 0x29ff,
		lowlightColor: 0x21099e,
		baseColor: 0x7d0a0a,
		speed: 5.00
	})
})

/****************************************************************
 *::::::::::::::::::*::NUMBERS|ANIMATION::*:::::::::::::::::::::*
 ***************************************************************/
function animateValue (obj, start, end, duration) {
	let startTimestamp = null;
	const step = (timestamp) => {
		if (!startTimestamp) startTimestamp = timestamp;
		const progress = Math.min((timestamp - startTimestamp) / duration, 1);
		obj.innerHTML = Math.floor(progress * (end - start) + start);
		if (progress < 1) {
			window.requestAnimationFrame(step);
		}
	};
	window.requestAnimationFrame(step);
}

const cuatro = document.getElementById("cuatro");
animateValue(cuatro, 0, 400000, 5000);

const cien = document.getElementById("cien");
animateValue(cien, 0, 100000, 5000);

const ciento = document.getElementById("ciento");
animateValue(ciento, 0, 120000, 5000);

const dos = document.getElementById("dos");
animateValue(dos, 0, 220000, 5000);

const tres = document.getElementById("tres");
animateValue(tres, 0, 300000, 5000);

const data = document.getElementById("data");
animateValue(data, 0, 150000, 5000);

const maint = document.getElementById("maint");
animateValue(maint, 0, 350000, 5000);

const imp = document.getElementById("imp");
animateValue(imp, 0, 220000, 5000);

const tax = document.getElementById("tax");
animateValue(tax, 0, 321000, 5000);

const robo = document.getElementById("robo");
animateValue(robo, 0, 400000, 5000);